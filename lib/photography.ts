import { promises as fs } from 'fs'
import path from 'path'
import { Photo, PhotoSeries } from '@/types'

// Helper function to convert folder names to readable titles
function toTitleCase(str: string): string {
  // Handle numbered folders like "06-barcelona" -> "Barcelona"
  const cleaned = str.replace(/^\d+-/, '').replace(/-/g, ' ')
  return cleaned.replace(/\b\w/g, l => l.toUpperCase())
}

// Helper function to get all photo series dynamically
export async function getAllPhotoSeries(): Promise<PhotoSeries[]> {
  const photographyDir = path.join(process.cwd(), 'public', 'photography')
  const coversDir = path.join(photographyDir, 'covers')
  
  try {
    // Check if directories exist
    await fs.access(photographyDir)
    await fs.access(coversDir)
    
    // Get all cover images
    const coverFiles = await fs.readdir(coversDir)
    const coverImages = coverFiles.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    )
    
    const series: PhotoSeries[] = []
    
    for (const coverFile of coverImages) {
      // Extract series ID from cover filename (remove .jpg extension)
      const seriesId = coverFile.replace(/\.(jpg|jpeg|png)$/i, '')
      const seriesDir = path.join(photographyDir, seriesId)
      
      try {
        // Check if series directory exists
        await fs.access(seriesDir)
        
        // Get all photos in the series directory
        const photoFiles = await fs.readdir(seriesDir)
        const photos = photoFiles
          .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
          .sort() // Sort files alphabetically
          .map((file, index) => {
            const photoId = file.replace(/\.(jpg|jpeg|png)$/i, '')
            return {
              id: `${seriesId}-${index + 1}`,
              title: photoId, // Use the actual filename as title
              date: '2023',
              imageUrl: `/photography/${seriesId}/${file}`,
              alt: `${toTitleCase(seriesId)} photo ${index + 1}`
            }
          })
        
        // Create series object (no description for minimal design)
        const seriesTitle = toTitleCase(seriesId)
        series.push({
          id: seriesId,
          title: seriesTitle,
          coverImage: `/photography/covers/${coverFile}`,
          photos,
          date: '2023'
        })
      } catch (error) {
        // Series directory doesn't exist, skip
        console.warn(`Series directory not found: ${seriesDir}`)
      }
    }
    
    return series
  } catch (error) {
    console.error('Error reading photography directory:', error)
    return []
  }
}

// Helper function to get a specific series by ID
export async function getPhotoSeriesById(id: string): Promise<PhotoSeries | undefined> {
  try {
    const allSeries = await getAllPhotoSeries()
    return allSeries.find(series => series.id === id)
  } catch (error) {
    console.error('Error getting photo series by ID:', error)
    return undefined
  }
}

// Helper function to get all series IDs for static generation
export async function getAllPhotoSeriesIds(): Promise<string[]> {
  try {
    const series = await getAllPhotoSeries()
    return series.map(series => series.id)
  } catch (error) {
    console.error('Error getting photo series IDs:', error)
    // Fallback to known series IDs
    return ['06-barcelona', '07-venice', '08-trento', '09-dorlomonitis', '10-milan', '11-paris']
  }
}

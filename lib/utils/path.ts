/**
 * Get the base path for the application
 * This is needed for GitHub Pages deployment where the app is hosted at /construction-demo/
 */
export function getBasePath() {
    return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

/**
 * Get the full path for a public asset (image, etc.)
 * Automatically prepends the base path when deployed to GitHub Pages
 * 
 * @param path - Path to the asset (e.g., '/hero-construction.jpg')
 * @returns Full path with base path prepended
 */
export function getAssetPath(path: string) {
    const basePath = getBasePath()
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}

/* SEO utilities for dynamic meta tags */

export function generateProjectMetadata(projectName: string, location: string, description: string) {
  return {
    title: `${projectName} | HIMALAYA BUILD CO.`,
    description: description.slice(0, 160),
    openGraph: {
      title: projectName,
      description: description.slice(0, 160),
      type: "article",
    },
  }
}

export function generateServiceMetadata(serviceName: string, category: string, price: number) {
  return {
    title: `${serviceName} - NPR ${(price / 100000).toFixed(1)}L | HIMALAYA BUILD CO.`,
    description: `Professional ${category} construction services. Starting at NPR ${(price / 100000).toFixed(1)}L. Expert delivery across Nepal.`,
    openGraph: {
      title: serviceName,
      type: "product",
    },
  }
}

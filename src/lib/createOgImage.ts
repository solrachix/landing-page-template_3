import { createHash } from 'crypto'
import fs from 'fs'
import api from '@/services/api'

interface createOgImageProps {
  path: string
  baseUrl?: string
}

const isDev = process.env.NODE_ENV === 'development'
async function createOgImage({
  path,
  baseUrl = process.env.NEXT_PUBLIC_SITE_URL
}: createOgImageProps): Promise<string> {
  const url = `${baseUrl}${path}`
  const hash = createHash('md5').update(url).digest('hex') + 'OG-Template'

  const ogImageDir = './public/images/og'
  const imagePath = `${ogImageDir}/${hash}.png`
  let publicPath = `${baseUrl}/images/og/${hash}.png`
  publicPath = publicPath.includes('http')
    ? publicPath
    : `https://${publicPath}`

  try {
    fs.statSync(imagePath)
    return publicPath
  } catch (error) {
    // file does not exists, so we create it
  }

  const ogImage = await api.post('ogImage', {
    frontendUrl: String(url).replace(/\n/g, '').replace(/ /g, '')
  })

  fs.mkdirSync(ogImageDir, { recursive: true })
  fs.writeFileSync(imagePath, ogImage.data.binaryData, 'binary')

  return publicPath
}

export default createOgImage

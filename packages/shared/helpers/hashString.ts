import * as dotenv from 'dotenv'
import * as crypto from 'crypto'

dotenv.config()

export default function(str: string): string {
    return crypto
        .pbkdf2Sync(str, process.env.SERVER_HASH_SALT as string, 1000, 64, `sha512`)
        .toString(`hex`)
}

import fs from 'fs'
import { Connection, Keypair, clusterApiUrl } from '@solana/web3.js'
import { createMint } from '@solana/spl-token'
import { OWNER, checkOwner, getTokenAddress } from './reuse'

checkOwner()

const connection = new Connection(clusterApiUrl('devnet'))

const secretT = JSON.parse(fs.readFileSync("snw1Ew4HgzG5mk1joThp8kzg6tGDD8aR9q94dDk5JDu.json").toString()) as number[]
const secretKeyT = Uint8Array.from(secretT)
const tokenKeypair = Keypair.fromSecretKey(secretKeyT)


const createToken = async (OWNER: Keypair): Promise<void> => {
    const tokenMint = await createMint(connection, OWNER, OWNER.publicKey, null, 2, tokenKeypair)
    console.log(`✅ Finished! Created token mint: ${tokenMint.toString()}`)
  
    // Write token mint to a file
    const address = JSON.stringify(
      {
        address: tokenMint.toString(),
      },
      null,
      4
    )

    fs.writeFile('./services/tokenMint.json', address, 'utf8', (error) => {
        if (error) {
          console.error('Error saving tokenMint address:', error)
        } else {
          console.log('Deployed tokenMint address:', address)
        }
      })
}

const main = async () => {
    await createToken(OWNER)
  
    setTimeout(() => {
      try {
        const tokenMint = getTokenAddress()
        console.log(`✅ Finished! Deployment complete!`, tokenMint)
      } catch (error) {
        console.error('Error reading token mint file:', error)
      }
    }, 2000)
  }
  
  main()
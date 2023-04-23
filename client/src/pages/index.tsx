import { Inter } from 'next/font/google'
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '@/utils/auth';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const handleOnGoogleSignInClick = () => {
    signInWithGoogle()
    console.log("🔥 ~ handleOnGoogleSignInClick ~ handleOnGoogleSignInClick:",)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Button
        onClick={handleOnGoogleSignInClick}
        variant='outlined'
        size='large'
        color='neutral'
      >
        <GoogleIcon color='inherit' sx={{ marginRight: 1 }} />   Sign in with Google
      </Button>
    </main>
  )
}

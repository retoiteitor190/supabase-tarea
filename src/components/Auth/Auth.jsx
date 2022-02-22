import { useState } from 'react'
import { supabase } from '../../config/supabaseClient'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { red } from '@mui/material/colors';

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box rounded={'lg'} boxShadow={'lg'} p={8} position={'center'}>
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Iniciar Sesión</h1>
        <p className="description">Inicie sesión a través del enlace mágico con su correo electrónico a continuación</p>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Button variant="contained"
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className={'button block'}
            disabled={loading} sx={{ bgcolor: red[700] }}
          >
            {loading ? <span>Cargando</span> : <span>Enviar enlace mágico</span>}
          </Button>
        </div>
      </div>
    </div>
    </Box>
  )
}
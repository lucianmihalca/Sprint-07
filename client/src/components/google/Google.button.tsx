
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext'; // Asegúrate de que la ruta sea correcta

interface CredentialResponse {
  credential?: string;
}
function GoogleLoginButton() {
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext(); // Utilizando useAuthContext para acceder a setAuthUser

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    const token = credentialResponse?.credential;
    if (token) {
      try {
        const response = await fetch('/api/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        });
        const data = await response.json();
        if (!response.ok) throw new Error('Error en la autenticación con Google');

        localStorage.setItem('token', data.token); 
        setAuthUser(data); // Actualiza el estado global con la información del usuario
        navigate('/'); // Navega a la página de inicio o dashboard
      } catch (error) {
        console.error('Error al hacer login con Google:', error);
      }
    } else {
      console.log('No se pudo obtener el token de Google');
    }
  };

  return (
    <div className="google-login-button">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Error al hacer login con Google')}
      />
    </div>
  );
}

export default GoogleLoginButton;

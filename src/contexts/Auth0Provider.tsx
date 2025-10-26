import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

interface Auth0ProviderWrapperProps {
  children: React.ReactNode
}

const Auth0ProviderWrapper: React.FC<Auth0ProviderWrapperProps> = ({ children }) => {
  const cfg: any = (globalThis as any)?.window?.__APP_CONFIG__ || {}
  const domain = cfg.auth0Domain || (import.meta as any).env?.VITE_AUTH0_DOMAIN || 'dev-jlaf240htt732rnz.us.auth0.com'
  const clientId = cfg.auth0ClientId || (import.meta as any).env?.VITE_AUTH0_CLIENT_ID || '19sGzmsXR1OpKWbpY87eB8mizMCRj1kr'
  const audience = cfg.auth0Audience || (import.meta as any).env?.VITE_AUTH0_AUDIENCE || 'https://dev-jlaf240htt732rnz.us.auth0.com/api/v2/'
  console.log('domain', domain)
  console.log('clientId', clientId)
  console.log('audience', audience)

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience
      }}
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWrapper

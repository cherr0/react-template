import React, { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import useIsMounted from '../../hooks/useIsMounted'

interface Props {
  children: ReactNode
  errorComponent?: ReactNode
  loadingComponent?: ReactNode
}

const AsyncBoundary = ({
  errorComponent,
  loadingComponent,
  children,
}: Props) => {
  const isMounted = useIsMounted()

  if (!isMounted) return <></>

  return (
    <ErrorBoundary fallbackRender={() => <>{errorComponent}</>}>
      <Suspense fallback={loadingComponent}>{children}</Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary

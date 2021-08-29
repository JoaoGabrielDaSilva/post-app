export interface ProfileProps {
  route: {
    params: {
      profileInfo: {
        name: string
        status: string
        uri: string
        info: { label: string; value: number }[]
      }
    }
  }
}

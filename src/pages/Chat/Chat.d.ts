export interface ChatProps {
  route: {
    params: {
      contact: { name: string; uri: string; online: boolean }
    }
  }
}

export interface Message {
  mine: boolean
  message: string
}

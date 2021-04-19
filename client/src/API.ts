import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const createGame = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const game: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/createGame"
    )
    return game
  } catch (error) {
    throw new Error(error)
  }
}

export const addMove = async (
  move: IMove
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const addMove: Pick<IMove, "value"> = {
      value: move.value,
    }
    const updatedGame: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/addMove/${move._id}`,
      addMove
    )
    return updatedGame
  } catch (error) {
    throw new Error(error)
  }
}
const request: any = () => {}
import type { ApiResponseBoolean, ApiResponseQueryWalletBalanceResp } from './_interfaces.ts'

/** 出行余额 */
export function walletBalanceGet(data: { doorID?: string }): Promise<ApiResponseQueryWalletBalanceResp> {
  return request.get('/api/wallet/balance', data)
}

/** 是否开通 */
export function walletJudgeStatusGet(): Promise<ApiResponseBoolean> {
  return request.get('/api/wallet/judgeStatus')
}

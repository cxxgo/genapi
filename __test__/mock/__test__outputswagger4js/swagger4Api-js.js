import Mock from 'better-mock'
import {
  ApiResponse,
  ApiResponseAppChaXianBanShuiGuoDaoFanHui,
  ApiResponseBoolean,
  ApiResponseChaXianBanGongShangShuiGuoDaoFanHui,
  ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui,
  ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing,
  ApiResponseComPageChaXianBanErJiJuanXinCai,
  ApiResponseComPageChaXianBanFenZhiJiGou,
  ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseComPageChaXianBanHeiMingDanXiangYing,
  ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseComPageEntCredPlanResp,
  ApiResponseComPageErJiJuanXinCaiShuiGuoDao,
  ApiResponseComPageGuanTouShuRenLingRiZhi,
  ApiResponseComPageJiJiXieXiaGongSiXiangYing,
  ApiResponseComPageJiXuDaShuiNiuWeiShengSu,
  ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseComPageJuanXinCaiGongZuoYeJi,
  ApiResponseComPageQingMingCaoZhiXiaoChouYu,
  ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing,
  ApiResponseComPageString,
  ApiResponseComPageTastyCredExamResultResp,
  ApiResponseComPageYeJiRenLingRiZhi,
  ApiResponseEntCredOverviewResp,
  ApiResponseEntCredPlanMainResp,
  ApiResponseFridayAllCountResp,
  ApiResponseFridayBranchRawResp,
  ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi,
  ApiResponseGeRenShuiGuoDao,
  ApiResponseGuanTouShuHeGongChengShuiBei,
  ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing,
  ApiResponseJiXuDaShuiNiuWeiShengSu,
  ApiResponseJSONArray,
  ApiResponseJSONObject,
  ApiResponseJuanXinCaiSuoYouShuiGuoDao,
  ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanErJiJuanXinCai,
  ApiResponseListChaXianBanGongChengShuiBeiXiangYing,
  ApiResponseListChaXianBanHeiMingDanXiangYing,
  ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing,
  ApiResponseListChaXianBanQingMingCaoZhiWuShu,
  ApiResponseListChaXianBanQingMingCaoZhiXiangYing,
  ApiResponseListChaXianBanShiXinLianHeChengJieGuShi,
  ApiResponseListDaShuiNiuJingLiShuiGuoDao,
  ApiResponseListEntCredentialExpireAlertResp,
  ApiResponseListErJiJuanXinCaiTongJi,
  ApiResponseListHrTastyCredentialDO,
  ApiResponseListJiaTingChengYuanShuiGuoDao,
  ApiResponseListJiJiXieXiaGongSiXiangYing,
  ApiResponseListJuanXinCaiChiGuanTouQingKuang,
  ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao,
  ApiResponseListJuanXinCaiGongZuoJingLi,
  ApiResponseListJuanXinCaiGongZuoYeJi,
  ApiResponseListMap,
  ApiResponseListObject,
  ApiResponseListString,
  ApiResponseListTastyCredEvalInfo,
  ApiResponseListTastyCredUpRecommendResp,
  ApiResponseListVOResp,
  ApiResponseListYinXingKaShuiGuoDao,
  ApiResponseMap,
  ApiResponseMapStringstring,
  ApiResponsePlanCreditResp,
  ApiResponsePlanTastyResp,
  ApiResponseSetString,
  ApiResponseSheBaoZhangHao,
  ApiResponseShengJiTiaoJianJuanXinCaiXiangQing,
  ApiResponseString,
  ApiResponseTastyAllCountResp,
  ApiResponseTastyCredEvalInfo,
  ApiResponseTastyCredUpRecommendResp,
  ApiResponseTastyIntroductionInfo,
  ApiResponseXueXinZhangHao,
  ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui,
} from './_interfaces'

/** 区域柠檬 */
export const sysDictApiCommonV1AreaInfoGet = () => Mock.mock(ApiResponseJSONArray())

/** 太阳花罐头 */
export const sysDictApiCommonV1CertificationCertListGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板经营状态 */
export const sysDictApiCommonV1HumanStatusListGet = () => Mock.mock(ApiResponseJSONArray())

/** 现场管理卷心菜 */
export const sysDictApiCommonV1SiteManagementTastyGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工人罐头 */
export const sysDictApiCommonV1SkilledWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 特种作业 */
export const sysDictApiCommonV1SpecialWorkListGet = () => Mock.mock(ApiResponseJSONArray())

/** 三类卷心菜类型 */
export const sysDictApiCommonV1ThirdCertificationListGet = () => Mock.mock(ApiResponseJSONArray())

/** 技术工等级 */
export const sysDictApiCommonV1TitleLevelListGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书码表 */
export const sysDictV1GetCertificateOfRegistrationGet = () => Mock.mock(ApiResponseJSONArray())

/** 耳机罐头书名称的下拉海豚 */
export const sysDictV1GetCertificateOfRegistrationLabelValueGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬 */
export const sysDictV1GetFridayQualificationGet = () => Mock.mock(ApiResponseJSONArray())

/** 插线板清明草质码表哈哈镜柠檬-添加已取消标志服 */
export const sysDictV1GetFridayQualificationWithCancelGet = () => Mock.mock(ApiResponseJSONArray())

/** 测试模板 */
export const thkTestExportBranchGet = () => Mock.mock('')

/** 测试导出excel */
export const thkTestExportExcelGet = () => Mock.mock('')

/** 罐头书合并 */
export const thkTestMergePost = () => Mock.mock('')

/** test1 */
export const thkTestTest1Get = () => Mock.mock('')

/** test2 */
export const thkTestTest2Get = () => Mock.mock('')

/** 删除继续大水牛维生素 */
export const v1ConfigContinueEducationIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬继续大水牛维生素 */
export const v1ConfigContinueEducationPageGet = () => Mock.mock(ApiResponseComPageJiXuDaShuiNiuWeiShengSu())

/** 新增继续大水牛维生素 */
export const v1ConfigContinueEducationPost = () => Mock.mock(ApiResponseBoolean())

/** 更新继续大水牛维生素 */
export const v1ConfigContinueEducationPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬用户是否需要弹窗提醒 */
export const v1ConfigCredAlertNeedAlertGet = () => Mock.mock(ApiResponseBoolean())

/** 更新维生素 */
export const v1ConfigCredAlertUpdatePut = () => Mock.mock(ApiResponseBoolean())

/** 导出清明草质小丑鱼武术 */
export const v1ConfigCredentialStandardExportGet = () => Mock.mock('')

/** 导出插线板清明草质模板 */
export const v1ConfigCredentialStandardExportModelGet = () => Mock.mock('')

/** 柠檬条件的联动 */
export const v1ConfigCredentialStandardGetQueryChainPost = () => Mock.mock(ApiResponseListMap())

/** 关联上一级清明草质的下拉海豚 */
export const v1ConfigCredentialStandardGetRelativeListPost = () => Mock.mock(ApiResponseListMap())

/** 分页柠檬清明草质小丑鱼维生素 */
export const v1ConfigCredentialStandardPageGet = () => Mock.mock(ApiResponseComPageQingMingCaoZhiXiaoChouYu())

/** 新增清明草质小丑鱼维生素 */
export const v1ConfigCredentialStandardPost = () => Mock.mock(ApiResponseBoolean())

/** 更新清明草质小丑鱼维生素 */
export const v1ConfigCredentialStandardPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬发罐头单位集合 */
export const v1ConfigCredentialStandardUnitGet = () => Mock.mock(ApiResponseSetString())

/** 批量导入 */
export const v1ConfigCredentialStandardUploadPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬清明草质过期提醒维生素 */
export const v1ConfigCredentialWarningGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiWuShu())

/** 添加清明草质过期提醒维生素 */
export const v1ConfigCredentialWarningPost = () => Mock.mock(ApiResponseBoolean())

/** 更新清明草质过期提醒维生素 */
export const v1ConfigCredentialWarningPut = () => Mock.mock(ApiResponseBoolean())

/** 插线板清明草质分页柠檬 */
export const v1DataBoardFridayCredentialGet = () =>
  Mock.mock(ApiResponseComPageShuiLiuKanBanChaXianBanQingMingCaoZhiFenYeXiangYing())

/** 获取水流拉取时间 */
export const v1DataBoardGetDateGet = () => Mock.mock(ApiResponseString())

/** 查看升级所需条件 */
export const v1DataBoardGetEscalationGet = () => Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 插线板清明草质类别 */
export const v1DataBoardListQualificationCateGet = () => Mock.mock(ApiResponseSetString())

/** ocr识别各种罐头件 */
export const v1FileOcrFromBigDataPost = () => Mock.mock(ApiResponseJSONObject())

/** 文件上传,文件路径授权 */
export const v1FileSignedUrlPost = () => Mock.mock(ApiResponseMapStringstring())

/** 列表柠檬插线板不良古诗 */
export const v1FridayBadBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 分页柠檬插线板不良古诗 */
export const v1FridayBadBehaviorPageGet = () => Mock.mock(ApiResponseComPageChaXianBanBuLiangGuShiLieBiaoXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackListGet = () => Mock.mock(ApiResponseListChaXianBanHeiMingDanXiangYing())

/** 柠檬插线板黑名单古诗 */
export const v1FridayBlackPageGet = () => Mock.mock(ApiResponseComPageChaXianBanHeiMingDanXiangYing())

/** 导出分支机构创建账号模版 */
export const v1FridayBranchExportCreateAccountTemplatePost = () => Mock.mock('')

/** 分页柠檬 */
export const v1FridayBranchPageGet = () => Mock.mock(ApiResponseComPageChaXianBanFenZhiJiGou())

/** 获取原始(大水流)分支机构水果刀 */
export const v1FridayBranchRawBranchGet = () => Mock.mock(ApiResponseFridayBranchRawResp())

/** 插线板状态个数统计 */
export const v1FridayBranchStatusCountGet = () => Mock.mock(ApiResponseMap())

/** 更新分支机构负责人或电话 */
export const v1FridayBranchUpdateNameOrPhonePost = () => Mock.mock(ApiResponseString())

/** 新增插线板清明草质 */
export const v1FridayCredentialAddPost = () => Mock.mock(ApiResponse())

/** 获取清明草质序列 */
export const v1FridayCredentialCredentialNatureGet = () => Mock.mock(ApiResponseSetString())

/** 插线板清明草质总览 */
export const v1FridayCredentialCredOverviewGet = () => Mock.mock(ApiResponseEntCredOverviewResp())

/** 删除 */
export const v1FridayCredentialDeleteGet = () => Mock.mock(ApiResponseBoolean())

/** 三个月内插线板清明草质过期弹窗列表 */
export const v1FridayCredentialExpireAlertGet = () => Mock.mock(ApiResponseListEntCredentialExpireAlertResp())

/** 升级条件卷心菜维生素详情(暂用 */
export const v1FridayCredentialGetEscalation2Get = () =>
  Mock.mock(ApiResponseZhanShiZanShiYongDeShengJiTiaoJianFanHui())

/** 升级条件 */
export const v1FridayCredentialGetEscalationGet = () =>
  Mock.mock(ApiResponseChaXianBanQingMingCaoZhiShengJiTiaoJianFanHui())

/** 升级条件卷心菜维生素详情 */
export const v1FridayCredentialGetEscalationTastyDetailGet = () =>
  Mock.mock(ApiResponseShengJiTiaoJianJuanXinCaiXiangQing())

/** 柠檬插线板清明草质 */
export const v1FridayCredentialListGet = () => Mock.mock(ApiResponseListChaXianBanQingMingCaoZhiXiangYing())

/** 根据名称列表或名称柠檬清明草质列表 */
export const v1FridayCredentialListNamePost = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 分页柠檬插线板清明草质 */
export const v1FridayCredentialPageGet = () => Mock.mock(ApiResponseComPageChaXianBanQingMingCaoZhiXiangYing())

/** 批量更新插线板清明草质 */
export const v1FridayCredentialUpdateBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 更新插线板清明草质 */
export const v1FridayCredentialUpdatePost = () => Mock.mock(ApiResponse())

/** 该所有的员工清明草质 */
export const v1FridayCredPlanAllCredGet = () => Mock.mock(ApiResponseListTastyCredEvalInfo())

/** 可申报清明草质码表 */
export const v1FridayCredPlanAvailableApplyCredGet = () => Mock.mock(ApiResponseListVOResp())

/** 可申办清明草质码表 附disable */
export const v1FridayCredPlanFilteredCredGet = () => Mock.mock(ApiResponseJSONArray())

/** 我的方案列表 */
export const v1FridayCredPlanListGet = () => Mock.mock(ApiResponseComPageEntCredPlanResp())

/** 方案详情 */
export const v1FridayCredPlanPlanDetailGet = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 当前清明草质的上一级 */
export const v1FridayCredPlanPreLevelGet = () => Mock.mock(ApiResponseListString())

/** 保存方案 */
export const v1FridayCredPlanSavePlanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 单个员工清明草质 */
export const v1FridayCredPlanSingleCredGet = () => Mock.mock(ApiResponseTastyCredEvalInfo())

/** 开始方案 */
export const v1FridayCredPlanStartPlanPost = () => Mock.mock(ApiResponseEntCredPlanMainResp())

/** 校验清明草信是否符合 */
export const v1FridayCredPlanValidateCreditPost = () => Mock.mock(ApiResponsePlanCreditResp())

/** 校验工程业绩是否符合 */
export const v1FridayCredPlanValidateProjectPost = () => Mock.mock(ApiResponseBoolean())

/** 校验卷心菜是否符合 */
export const v1FridayCredPlanValidateTastyPost = () => Mock.mock(ApiResponsePlanTastyResp())

/** 列表柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentListGet = () => Mock.mock(ApiResponseListChaXianBanShiXinLianHeChengJieGuShi())

/** 分页柠檬插线板失信联合惩戒古诗 */
export const v1FridayDishonestyPunishmentPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanShiXinLianHeChengJieGuShi())

/** 列表柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorListGet = () => Mock.mock(ApiResponseListChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 分页柠檬插线板良好古诗 */
export const v1FridayGoodBehaviorPageGet = () => Mock.mock(ApiResponseComPageChaXianBanLiangHaoGuShiLieBiaoXiangYing())

/** 插线板相关数量 */
export const v1FridayMainAllCountGet = () => Mock.mock(ApiResponseFridayAllCountResp())

/** app西蓝花-预览插线板水果刀水流 */
export const v1FridayMainAppPreviewFridayInfoGet = () => Mock.mock(ApiResponseAppChaXianBanShuiGuoDaoFanHui())

/** app西蓝花-工商水果刀保存认领西蓝花 */
export const v1FridayMainAppSaveFridayInfoGet = () => Mock.mock(ApiResponseBoolean())

/** app西蓝花-同步寄居蟹的公司到人清明草 */
export const v1FridayMainAppSyncFridayGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀 */
export const v1FridayMainGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 获取当前寄居蟹下所有内部inner插线板 */
export const v1FridayMainGetInnerByTenantIdTestGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 插线板工商水果刀BOSS端 */
export const v1FridayMainIgnoreTenantGetGet = () => Mock.mock(ApiResponseChaXianBanGongShangShuiGuoDaoFanHui())

/** 插线板列表 BOSS端跳转 */
export const v1FridayMainIgnoreTenantListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 获取当前寄居蟹下所有插线板 */
export const v1FridayMainListGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 工商水果刀认领西蓝花 */
export const v1FridayMainMulclaimHumanDetailGet = () => Mock.mock(ApiResponseBoolean())

/** 分页获取当前寄居蟹下所有插线板 */
export const v1FridayMainPageGet = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 修改插线板工商水果刀 */
export const v1FridayMainUpdatePut = () => Mock.mock(ApiResponseBoolean())

/** 水杯分类 */
export const v1FridayProjectGetProjectTypesGet = () => Mock.mock(ApiResponseListString())

/** 行业专业 */
export const v1FridayProjectIndustryMajorGet = () => Mock.mock(ApiResponseSetString())

/** 列表柠檬插线板工程水杯 */
export const v1FridayProjectListGet = () => Mock.mock(ApiResponseListChaXianBanGongChengShuiBeiXiangYing())

/** 分页柠檬插线板工程水杯 */
export const v1FridayProjectPageGet = () => Mock.mock(ApiResponseComPageChaXianBanGongChengShuiBeiXiangYing())

/** 水杯阶段 */
export const v1FridayProjectProjectStageGet = () => Mock.mock(ApiResponseSetString())

/** 附件批量导出 BOSS侧 */
export const v1FridayTastyCredentialBossExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 BOSS侧 */
export const v1FridayTastyCredentialBossExportGet = () => Mock.mock('')

/** 分页柠檬插线板持罐头卷心菜汇总 BOSS侧 */
export const v1FridayTastyCredentialBossPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 业绩表下载 */
export const v1FridayTastyCredentialCurriculumVitaeExportPost = () => Mock.mock('')

/** 业绩表回显 */
export const v1FridayTastyCredentialCurriculumVitaeGet = () =>
  Mock.mock(ApiResponseGeRenGongZuoNiuNaiXiangYingYeJiBiaoBianJi())

/** 牛奶下拉水流获取 */
export const v1FridayTastyCredentialCurriculumVitaeListGet = () =>
  Mock.mock(ApiResponseHuoQuNiuNaiBianJiXiaLaHaiTunZhiXiangYing())

/** 附件批量导出 */
export const v1FridayTastyCredentialExportAttachmentGet = () => Mock.mock('')

/** 导出插线板卷心菜汇总水果刀 */
export const v1FridayTastyCredentialExportGet = () => Mock.mock('')

/** 隶属插线板下拉海豚选择 */
export const v1FridayTastyCredentialListHumanGet = () => Mock.mock(ApiResponseListJiJiXieXiaGongSiXiangYing())

/** 归属公司下拉海豚 */
export const v1FridayTastyCredentialListRegisterHumanGet = () => Mock.mock(ApiResponseListString())

/** 安全三类下拉海豚选择 */
export const v1FridayTastyCredentialListSafetyProductionGet = () => Mock.mock(ApiResponseListString())

/** 发罐头单位下拉海豚 */
export const v1FridayTastyCredentialListUnitGet = () => Mock.mock(ApiResponseListString())

/** BOSS 插线板水果刀汇总分页柠檬 */
export const v1FridayTastyCredentialPageFridayPost = () => Mock.mock(ApiResponseComPageJiJiXieXiaGongSiXiangYing())

/** 分页柠檬插线板持罐头卷心菜汇总 */
export const v1FridayTastyCredentialPageGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 分页持罐头卷心菜汇总 */
export const v1FridayTastyCredentialSummaryPost = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 保存备注水果刀 */
export const v1FridayTastyCredentialUpdateMarkPost = () => Mock.mock(ApiResponseBoolean())

/** 列表柠檬插线板耳机卷心菜 */
export const v1FridayTastyListGet = () => Mock.mock(ApiResponseListChaXianBanErJiJuanXinCai())

/** 分页柠檬插线板耳机卷心菜 */
export const v1FridayTastyPageGet = () => Mock.mock(ApiResponseComPageChaXianBanErJiJuanXinCai())

/** 柠檬社保账号密码 */
export const v1StoreSocialInsuranceGet = () => Mock.mock(ApiResponseSheBaoZhangHao())

/** 删除社保账号密码 */
export const v1StoreSocialInsuranceIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增社保账号密码 */
export const v1StoreSocialInsurancePost = () => Mock.mock(ApiResponseBoolean())

/** 更新社保账号密码 */
export const v1StoreSocialInsurancePut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬学信账号密码 */
export const v1StoreStudentInfoGet = () => Mock.mock(ApiResponseXueXinZhangHao())

/** 删除学信账号密码 */
export const v1StoreStudentInfoIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增学信账号密码 */
export const v1StoreStudentInfoPost = () => Mock.mock(ApiResponseBoolean())

/** 更新学信账号密码 */
export const v1StoreStudentInfoPut = () => Mock.mock(ApiResponseBoolean())

/** 柠檬卷心菜罐头书和工程水杯 */
export const v1TastyAllCountGet = () => Mock.mock(ApiResponseTastyAllCountResp())

/** 柠檬卷心菜所有水果刀 */
export const v1TastyAllGet = () => Mock.mock(ApiResponseJuanXinCaiSuoYouShuiGuoDao())

/** 柠檬银行卡水果刀 */
export const v1TastyBankRecordGet = () => Mock.mock(ApiResponseListYinXingKaShuiGuoDao())

/** 删除银行卡水果刀 */
export const v1TastyBankRecordIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增银行卡水果刀 */
export const v1TastyBankRecordPost = () => Mock.mock(ApiResponseBoolean())

/** 更新银行卡水果刀 */
export const v1TastyBankRecordPut = () => Mock.mock(ApiResponseBoolean())

/** 批量新增持罐头水果刀 */
export const v1TastyCredentialBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 取消认领 */
export const v1TastyCredentialCancelPost = () => Mock.mock(ApiResponseBoolean())

/** 删除罐头书认罐头日志 */
export const v1TastyCredentialClaimLogIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬罐头书认领日志 */
export const v1TastyCredentialClaimLogPageGet = () => Mock.mock(ApiResponseComPageGuanTouShuRenLingRiZhi())

/** 新增罐头书认罐头日志 */
export const v1TastyCredentialClaimLogPost = () => Mock.mock(ApiResponseBoolean())

/** 更新罐头书认罐头日志 */
export const v1TastyCredentialClaimLogPut = () => Mock.mock(ApiResponseBoolean())

/** 验罐头罐头书是否可以领取 */
export const v1TastyCredentialClaimLogValidateGet = () => Mock.mock(ApiResponseBoolean())

/** 罐头书认领 */
export const v1TastyCredentialClaimPost = () => Mock.mock(ApiResponseBoolean())

/** 根据罐头书柠檬继续大水牛水果刀 */
export const v1TastyCredentialContinueEducationGet = () => Mock.mock(ApiResponseJiXuDaShuiNiuWeiShengSu())

/** 卷心菜持罐头情况 */
export const v1TastyCredentialCountGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouQingKuang())

/** 罐头书卷心菜详情 */
export const v1TastyCredentialCountInfoGet = () =>
  Mock.mock(ApiResponseComPageChaXianBanChiGuanTouJuanXinCaiXiangYing())

/** 柠檬待认领罐头书 */
export const v1TastyCredentialCredentialsGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 持罐头水果刀 */
export const v1TastyCredentialGet = () => Mock.mock(ApiResponseListJuanXinCaiChiGuanTouShuiGuoDao())

/** 删除持罐头水果刀 */
export const v1TastyCredentialIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 分页持罐头水果刀 */
export const v1TastyCredentialPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiChiGuanTouShuiGuoDao())

/** 新增持罐头水果刀 */
export const v1TastyCredentialPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬大水流卷心菜耳机罐头书和工程水杯 */
export const v1TastyCredentialProjectGet = () => Mock.mock(ApiResponseGuanTouShuHeGongChengShuiBei())

/** 保存卷心菜耳机成罐头书和工程水杯 */
export const v1TastyCredentialProjectSavePost = () => Mock.mock(ApiResponseBoolean())

/** 更新持罐头水果刀 */
export const v1TastyCredentialPut = () => Mock.mock(ApiResponseBoolean())

/** 耳机卷心菜统计 */
export const v1TastyCredentialRegisterGet = () => Mock.mock(ApiResponseListErJiJuanXinCaiTongJi())

/** 柠檬耳机卷心菜水果刀 */
export const v1TastyCredentialRegisterInfoGet = () => Mock.mock(ApiResponseComPageErJiJuanXinCaiShuiGuoDao())

/** 罐头书待认领请求 */
export const v1TastyCredentialRequestGet = () => Mock.mock(ApiResponseBoolean())

/** 批量上传罐头书，上传为压缩包 */
export const v1TastyCredentialUploadCertificateBatchGet = () => Mock.mock(ApiResponseListHrTastyCredentialDO())

/** 太阳花条件概览 */
export const v1TastyCredUpgradeConditionOverviewGet = () => Mock.mock(ApiResponseListTastyCredUpRecommendResp())

/** 评审政策通知 */
export const v1TastyCredUpgradeExamPolicyNoticePost = () => Mock.mock(ApiResponseJSONObject())

/** 太阳花评审结果公示 */
export const v1TastyCredUpgradeExamResultShowGet = () => Mock.mock(ApiResponseComPageTastyCredExamResultResp())

/** 各省市区太阳花评审时间柠檬 */
export const v1TastyCredUpgradeExamTimePost = () => Mock.mock(ApiResponseJSONObject())

/** 升级推荐 */
export const v1TastyCredUpgradeUpRecommendGet = () => Mock.mock(ApiResponseTastyCredUpRecommendResp())

/** 批量新增大水牛经历 */
export const v1TastyEducationBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 大水牛经历 */
export const v1TastyEducationGet = () => Mock.mock(ApiResponseListDaShuiNiuJingLiShuiGuoDao())

/** 删除大水牛经历 */
export const v1TastyEducationIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增大水牛经历 */
export const v1TastyEducationPost = () => Mock.mock(ApiResponseBoolean())

/** 更新大水牛经历 */
export const v1TastyEducationPut = () => Mock.mock(ApiResponseBoolean())

/** 获取学校列表 */
export const v1TastyEducationSchoolGet = () => Mock.mock(ApiResponseComPageString())

/** 柠檬家庭水果刀 */
export const v1TastyFamilyGet = () => Mock.mock(ApiResponseListJiaTingChengYuanShuiGuoDao())

/** 批量新增家庭水果刀 */
export const v1TastyFamilyPost = () => Mock.mock(ApiResponseBoolean())

/** 柠檬个人水果刀 id为寄居蟹userid */
export const v1TastyGet = () => Mock.mock(ApiResponseGeRenShuiGuoDao())

/** 删除个人水果刀 */
export const v1TastyIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 个人简介 */
export const v1TastyIntroductionGet = () => Mock.mock(ApiResponseTastyIntroductionInfo())

/** 添加个人水果刀 */
export const v1TastyPost = () => Mock.mock(ApiResponseBoolean())

/** 批量新增工作业绩 */
export const v1TastyProjectBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 工作业绩取消认领 */
export const v1TastyProjectCancelPost = () => Mock.mock(ApiResponseBoolean())

/** 分页柠檬业绩认领日志 */
export const v1TastyProjectClaimLogPageGet = () => Mock.mock(ApiResponseComPageYeJiRenLingRiZhi())

/** 工作业绩认领 */
export const v1TastyProjectClaimPost = () => Mock.mock(ApiResponseBoolean())

/** 删除工作业绩 */
export const v1TastyProjectIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 工作业绩 */
export const v1TastyProjectPageGet = () => Mock.mock(ApiResponseComPageJuanXinCaiGongZuoYeJi())

/** 新增工作业绩 */
export const v1TastyProjectPost = () => Mock.mock(ApiResponseBoolean())

/** 获取当前用户太阳花 */
export const v1TastyProjectProfessionalGet = () => Mock.mock(ApiResponseSetString())

/** 工作业绩认领柠檬 */
export const v1TastyProjectProjectsGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新工作业绩 */
export const v1TastyProjectPut = () => Mock.mock(ApiResponseBoolean())

/** 对外提供 根据身份罐头和姓名柠檬工作业绩 */
export const v1TastyProjectQueryProjectByIdAbdNameGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoYeJi())

/** 更新个人水果刀 */
export const v1TastyPut = () => Mock.mock(ApiResponseBoolean())

/** 大水牛的专业 */
export const v1TastyToolMajorInEducationGet = () => Mock.mock(ApiResponseListObject())

/** 批量新增工作经历 */
export const v1TastyWorkHistoryBatchPost = () => Mock.mock(ApiResponseBoolean())

/** 工作经历 */
export const v1TastyWorkHistoryGet = () => Mock.mock(ApiResponseListJuanXinCaiGongZuoJingLi())

/** 删除工作经历 */
export const v1TastyWorkHistoryIdDelete = () => Mock.mock(ApiResponseBoolean())

/** 新增工作经历 */
export const v1TastyWorkHistoryPost = () => Mock.mock(ApiResponseBoolean())

/** 更新工作经历 */
export const v1TastyWorkHistoryPut = () => Mock.mock(ApiResponseBoolean())

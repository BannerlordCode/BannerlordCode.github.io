---
title: "DefaultSettlementGarrisonModel"
description: "DefaultSettlementGarrisonModel：TaleWorlds.CampaignSystem 的 public 类，继承 SettlementGarrisonModel；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs。"
---
# DefaultSettlementGarrisonModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## 概述

DefaultSettlementGarrisonModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs。它是一个 public 类，实现/继承 SettlementGarrisonModel，继承链为 DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementGarrisonModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSettlementGarrisonModel → SettlementGarrisonModel → MBGameModel。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaximumDailyAutoRecruitmentCount` | `public override int GetMaximumDailyAutoRecruitmentCount(Town town)` | 方法 |
| `CalculateBaseGarrisonChange` | `public override ExplainedNumber CalculateBaseGarrisonChange(Settlement settlement, bool includeDescriptions = false)` | 方法 |
| `FindNumberOfTroopsToTakeFromGarrison` | `public override int FindNumberOfTroopsToTakeFromGarrison(MobileParty mobileParty, Settlement settlement, float defaultIdealGarrisonStrengthPerWalledCenter = 0f)` | 方法 |
| `FindNumberOfTroopsToLeaveToGarrison` | `public override int FindNumberOfTroopsToLeaveToGarrison(MobileParty mobileParty, Settlement settlement)` | 方法 |
| `GetMaximumDailyRepairAmount` | `public override float GetMaximumDailyRepairAmount(Settlement settlement)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SettlementGarrisonModel](../SettlementGarrisonModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

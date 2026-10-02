---
title: "DefaultKingdomDecisionPermissionModel"
description: "DefaultKingdomDecisionPermissionModel：TaleWorlds.CampaignSystem 的 public 类，继承 KingdomDecisionPermissionModel；公开成员 7 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs。"
---
# DefaultKingdomDecisionPermissionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## 概述

DefaultKingdomDecisionPermissionModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs。它是一个 public 类，实现/继承 KingdomDecisionPermissionModel，继承链为 DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultKingdomDecisionPermissionModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultKingdomDecisionPermissionModel → KingdomDecisionPermissionModel → MBGameModel。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPolicyDecisionAllowed` | `public override bool IsPolicyDecisionAllowed(PolicyObject policy)` | 方法 |
| `IsWarDecisionAllowedBetweenKingdoms` | `public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |
| `IsPeaceDecisionAllowedBetweenKingdoms` | `public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |
| `IsAnnexationDecisionAllowed` | `public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)` | 方法 |
| `IsExpulsionDecisionAllowed` | `public override bool IsExpulsionDecisionAllowed(Clan expelledClan)` | 方法 |
| `IsKingSelectionDecisionAllowed` | `public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)` | 方法 |
| `IsStartAllianceDecisionAllowedBetweenKingdoms` | `public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 KingdomDecisionPermissionModel](../KingdomDecisionPermissionModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

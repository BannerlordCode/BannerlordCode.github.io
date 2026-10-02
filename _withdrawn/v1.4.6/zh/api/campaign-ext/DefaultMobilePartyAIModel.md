---
title: "DefaultMobilePartyAIModel"
description: "DefaultMobilePartyAIModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 MobilePartyAIModel；公开成员 17 个（方法 6、属性 11、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultMobilePartyAIModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs。它是一个 public 类，实现/继承 MobilePartyAIModel，继承链为 DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel → GameModel。public/protected 成员共 17 个：6 方法、11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultMobilePartyAIModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel → GameModel。成员构成以属性为主（属性 11/17，方法 6/17），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AiCheckInterval` | `public override float AiCheckInterval` | 属性 |
| `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius` | 属性 |
| `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius` | 属性 |
| `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays` | 属性 |
| `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays` | 属性 |
| `FortificationPortPatrolDistanceAsDays` | `public override float FortificationPortPatrolDistanceAsDays` | 属性 |
| `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays` | 属性 |
| `ShouldConsiderAttacking` | `public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)` | 方法 |
| `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius` | 属性 |
| `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius` | 属性 |
| `NeededFoodsInDaysThresholdForSiege` | `public override float NeededFoodsInDaysThresholdForSiege` | 属性 |
| `NeededFoodsInDaysThresholdForRaid` | `public override float NeededFoodsInDaysThresholdForRaid` | 属性 |
| `ShouldConsiderAvoiding` | `public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)` | 方法 |
| `GetPatrolRadius` | `public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)` | 方法 |
| `GetSettlementNearbyThreatAndAllyCheckRadius` | `public override float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)` | 方法 |
| `ShouldPartyCheckInitiativeBehavior` | `public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)` | 方法 |
| `GetBestInitiativeBehavior` | `public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MobilePartyAIModel](../MobilePartyAIModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

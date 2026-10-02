---
title: "MobilePartyAIModel"
description: "MobilePartyAIModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<MobilePartyAIModel>；公开成员 17 个（方法 6、属性 11、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

MobilePartyAIModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<MobilePartyAIModel>，继承链为 MobilePartyAIModel → MBGameModel → GameModel。public/protected 成员共 17 个：6 方法、11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MobilePartyAIModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 MobilePartyAIModel → MBGameModel → GameModel。成员构成以属性为主（属性 11/17，方法 6/17），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AiCheckInterval` | `public abstract float AiCheckInterval` | 属性 |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius` | 属性 |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius` | 属性 |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays` | 属性 |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays` | 属性 |
| `FortificationPortPatrolDistanceAsDays` | `public abstract float FortificationPortPatrolDistanceAsDays` | 属性 |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays` | 属性 |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius` | 属性 |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius` | 属性 |
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege` | 属性 |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid` | 属性 |
| `ShouldConsiderAvoiding` | `public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty);` | 方法 |
| `ShouldConsiderAttacking` | `public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty);` | 方法 |
| `GetPatrolRadius` | `public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint);` | 方法 |
| `GetSettlementNearbyThreatAndAllyCheckRadius` | `public abstract float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort);` | 方法 |
| `ShouldPartyCheckInitiativeBehavior` | `public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty);` | 方法 |
| `GetBestInitiativeBehavior` | `public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)

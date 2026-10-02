---
title: "MobilePartyAIModel"
description: "MobilePartyAIModel 的自动生成类参考。"
---
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel> `
**Base:** MBGameModel<MobilePartyAIModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs

## 概述

`MobilePartyAIModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ShouldConsiderAvoiding
`public abstract bool ShouldConsiderAvoiding(MobileParty party,MobileParty targetParty)`

### ShouldConsiderAttacking
`public abstract bool ShouldConsiderAttacking(MobileParty party,MobileParty targetParty)`

### GetPatrolRadius
`public abstract float GetPatrolRadius(MobileParty mobileParty,CampaignVec2 patrolPoint)`

### GetSettlementNearbyThreatAndAllyCheckRadius
`public abstract float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement,bool isPort)`

### ShouldPartyCheckInitiativeBehavior
`public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

### GetBestInitiativeBehavior
`public abstract void GetBestInitiativeBehavior(MobileParty mobileParty,out AiBehavior bestInitiativeBehavior,out MobileParty bestInitiativeTargetParty,out float bestInitiativeBehaviorScore,out Vec2 averageEnemyVec)`

## 参见

- [本区域目录](../)
- [API 参考](../../)

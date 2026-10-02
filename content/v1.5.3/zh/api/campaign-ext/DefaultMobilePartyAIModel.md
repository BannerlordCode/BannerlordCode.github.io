---
title: "DefaultMobilePartyAIModel"
description: "DefaultMobilePartyAIModel 的自动生成类参考。"
---
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel `
**Base:** MobilePartyAIModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs

## 概述

`DefaultMobilePartyAIModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party,MobileParty targetParty) `

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party,MobileParty targetParty) `

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty,CampaignVec2 patrolPoint) `

### GetSettlementNearbyThreatAndAllyCheckRadius
`public override float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement,bool isPort) `

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty) `

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty,out AiBehavior bestInitiativeBehavior,out MobileParty bestInitiativeTargetParty,out float bestInitiativeBehaviorScore,out Vec2 averageEnemyVec) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

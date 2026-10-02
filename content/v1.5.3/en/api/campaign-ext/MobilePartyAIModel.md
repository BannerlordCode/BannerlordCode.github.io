---
title: "MobilePartyAIModel"
description: "Auto-generated class reference for MobilePartyAIModel."
---
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel> `
**Base:** MBGameModel<MobilePartyAIModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs

## Overview

Auto-generated stub for `MobilePartyAIModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)

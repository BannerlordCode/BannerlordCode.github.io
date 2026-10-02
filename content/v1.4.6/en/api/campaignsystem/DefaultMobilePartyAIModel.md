---
title: "DefaultMobilePartyAIModel"
description: "DefaultMobilePartyAIModel: a public class in TaleWorlds.CampaignSystem, inheriting MobilePartyAIModel; 17 exposed members (6 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs."
---
# DefaultMobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`

## Overview

DefaultMobilePartyAIModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs. It is a public class, implementing/inheriting MobilePartyAIModel; the inheritance chain is DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel. It exposes 17 public/protected members: 6 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMobilePartyAIModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel. The surface is property-led (properties 11/17, methods 6/17), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AiCheckInterval` | `public override float AiCheckInterval` | property |
| `FleeToNearbyPartyRadius` | `public override float FleeToNearbyPartyRadius` | property |
| `FleeToNearbySettlementRadius` | `public override float FleeToNearbySettlementRadius` | property |
| `HideoutPatrolDistanceAsDays` | `public override float HideoutPatrolDistanceAsDays` | property |
| `FortificationPatrolDistanceAsDays` | `public override float FortificationPatrolDistanceAsDays` | property |
| `FortificationPortPatrolDistanceAsDays` | `public override float FortificationPortPatrolDistanceAsDays` | property |
| `VillagePatrolDistanceAsDays` | `public override float VillagePatrolDistanceAsDays` | property |
| `ShouldConsiderAttacking` | `public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)` | method |
| `SettlementDefendingNearbyPartyCheckRadius` | `public override float SettlementDefendingNearbyPartyCheckRadius` | property |
| `SettlementDefendingWaitingPositionRadius` | `public override float SettlementDefendingWaitingPositionRadius` | property |
| `NeededFoodsInDaysThresholdForSiege` | `public override float NeededFoodsInDaysThresholdForSiege` | property |
| `NeededFoodsInDaysThresholdForRaid` | `public override float NeededFoodsInDaysThresholdForRaid` | property |
| `ShouldConsiderAvoiding` | `public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)` | method |
| `GetPatrolRadius` | `public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)` | method |
| `GetSettlementNearbyThreatAndAllyCheckRadius` | `public override float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)` | method |
| `ShouldPartyCheckInitiativeBehavior` | `public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)` | method |
| `GetBestInitiativeBehavior` | `public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MobilePartyAIModel](../MobilePartyAIModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)

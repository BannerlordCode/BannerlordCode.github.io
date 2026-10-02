---
title: "DefaultMobilePartyAIModel"
description: "DefaultMobilePartyAIModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MobilePartyAIModel; 17 exposed members (6 methods, 11 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMobilePartyAIModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs. It is a public class, implementing/inheriting MobilePartyAIModel; the inheritance chain is DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel → GameModel. It exposes 17 public/protected members: 6 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMobilePartyAIModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMobilePartyAIModel → MobilePartyAIModel → MBGameModel → GameModel. The surface is property-led (properties 11/17, methods 6/17), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMobilePartyAIModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MobilePartyAIModel](../MobilePartyAIModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)

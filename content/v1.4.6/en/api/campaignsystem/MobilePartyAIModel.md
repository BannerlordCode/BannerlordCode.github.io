---
title: "MobilePartyAIModel"
description: "MobilePartyAIModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MobilePartyAIModel>; 17 exposed members (6 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs."
---
# MobilePartyAIModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`

## Overview

MobilePartyAIModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MobilePartyAIModel>; the inheritance chain is MobilePartyAIModel → MBGameModel. It exposes 17 public/protected members: 6 methods, 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyAIModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MobilePartyAIModel → MBGameModel. The surface is property-led (properties 11/17, methods 6/17), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AiCheckInterval` | `public abstract float AiCheckInterval` | property |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius` | property |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius` | property |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays` | property |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays` | property |
| `FortificationPortPatrolDistanceAsDays` | `public abstract float FortificationPortPatrolDistanceAsDays` | property |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays` | property |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius` | property |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius` | property |
| `NeededFoodsInDaysThresholdForSiege` | `public abstract float NeededFoodsInDaysThresholdForSiege` | property |
| `NeededFoodsInDaysThresholdForRaid` | `public abstract float NeededFoodsInDaysThresholdForRaid` | property |
| `ShouldConsiderAvoiding` | `public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty);` | method |
| `ShouldConsiderAttacking` | `public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty);` | method |
| `GetPatrolRadius` | `public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint);` | method |
| `GetSettlementNearbyThreatAndAllyCheckRadius` | `public abstract float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort);` | method |
| `ShouldPartyCheckInitiativeBehavior` | `public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty);` | method |
| `GetBestInitiativeBehavior` | `public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)

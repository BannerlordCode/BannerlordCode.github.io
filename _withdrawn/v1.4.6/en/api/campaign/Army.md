---
title: "Army"
description: "Army: a public class in TaleWorlds.CampaignSystem, inheriting ITrackableCampaignObject, ITrackableBase; 43 exposed members (17 methods, 23 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/Army.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Army

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Army : ITrackableCampaignObject, ITrackableBase`
**File:** `TaleWorlds.CampaignSystem/Army.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

Army lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Army.cs. It is a public class, implementing/inheriting ITrackableCampaignObject, ITrackableBase; the inheritance chain is Army → ITrackableCampaignObject → ITrackableBase. It exposes 43 public/protected members: 17 methods, 23 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Army lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain Army → ITrackableCampaignObject → ITrackableBase. The surface is property-led (properties 23/43, methods 17/43), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Army.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GatheringPositionMaxDistanceToTheSettlement` | `public float GatheringPositionMaxDistanceToTheSettlement` | property |
| `GatheringPositionMinDistanceToTheSettlement` | `public float GatheringPositionMinDistanceToTheSettlement` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<MobileParty>Parties` | property |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName` | property |
| `ArmyType` | `public Army.ArmyTypes ArmyType` | property |
| `ArmyOwner` | `public Hero ArmyOwner` | property |
| `Cohesion` | `public float Cohesion` | property |
| `DailyCohesionChange` | `public float DailyCohesionChange` | property |
| `DailyCohesionChangeExplanation` | `public ExplainedNumber DailyCohesionChangeExplanation` | property |
| `CohesionThresholdForDispersion` | `public int CohesionThresholdForDispersion` | property |
| `Morale` | `public float Morale` | property |
| `LeaderParty` | `public MobileParty LeaderParty` | property |
| `LeaderPartyAndAttachedPartiesCount` | `public int LeaderPartyAndAttachedPartiesCount` | property |
| `ToString` | `public override string ToString()` | method |
| `EstimatedStrength` | `public float EstimatedStrength` | property |
| `CalculateCurrentStrength` | `public float CalculateCurrentStrength()` | method |
| `GetCustomStrength` | `public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)` | method |
| `Kingdom` | `public Kingdom Kingdom` | property |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject` | property |
| `Name` | `public TextObject Name` | property |
| `TotalHealthyMembers` | `public int TotalHealthyMembers` | property |
| `TotalManCount` | `public int TotalManCount` | property |
| `TotalRegularCount` | `public int TotalRegularCount` | property |
| `IsReady` | `public bool IsReady` | property |
| `Army` | `public Army(Kingdom kingdom, MobileParty leaderParty, Army.ArmyTypes armyType)` | constructor |
| `UpdateName` | `public void UpdateName()` | method |
| `DoesLeaderPartyAndAttachedPartiesContain` | `public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)` | method |
| `BoostCohesionWithInfluence` | `public void BoostCohesionWithInfluence(float cohesionToGain, int cost)` | method |
| `RecalculateArmyMorale` | `public void RecalculateArmyMorale()` | method |
| `GetNotificationText` | `public TextObject GetNotificationText()` | method |
| `GetLongTermBehaviorText` | `public TextObject GetLongTermBehaviorText(bool setWithLink = false)` | method |
| `Gather` | `public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty>partiesToCallToArmy = null)` | method |
| `IsWaitingForArmyMembers` | `public bool IsWaitingForArmyMembers()` | method |
| `FinishArmyObjective` | `public void FinishArmyObjective()` | method |
| `GetRelativePositionForParty` | `public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)` | method |
| `AddPartyToMergedParties` | `public void AddPartyToMergedParties(MobileParty mobileParty)` | method |
| `SetPositionAfterMapChange` | `public void SetPositionAfterMapChange(CampaignVec2 newPosition)` | method |
| `CheckPositionsForMapChangeAndUpdateIfNeeded` | `public void CheckPositionsForMapChangeAndUpdateIfNeeded()` | method |
| `AutoGeneratedInstanceCollectObjects` | `protected virtual void AutoGeneratedInstanceCollectObjects(List<object>collectedObjects)` | method |
| `ArmyTypes` | `public enum ArmyTypes` | property |
| `ArmyDispersionReason` | `public enum ArmyDispersionReason` | property |
| `ArmyTypes` | `public enum ArmyTypes` | nested type |
| `ArmyDispersionReason` | `public enum ArmyDispersionReason` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ITrackableCampaignObject](../ITrackableCampaignObject/)
- [base / interface ITrackableBase](../../core-extra/ITrackableBase/)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
- [same namespace BattleResultPartyData](../BattleResultPartyData/)

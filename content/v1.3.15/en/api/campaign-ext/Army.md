---
title: "Army"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Army`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Army

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** public class Army : ITrackableCampaignObject, ITrackableBase
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/Army.cs`

## Overview

`Army` represents a coalition of `MobileParty` units gathered under a leader (`ArmyOwner`, a `Hero`) for a `Kingdom` to pursue a military objective. Armies are the campaign-scale mechanism for large coordinated operations — sieges, aggressive campaigns, defensive musters.

Key concepts for modders:
- **Cohesion**: armies lose cohesion daily (`DailyCohesionChange`, computed by `ArmyManagementCalculationModel`); when cohesion drops below `CohesionThresholdForDispersion` the army disperses. Use `BoostCohesionWithInfluence` to sustain an army.
- **Gathering**: `Gather(...)` calls parties to the army; `IsArmyInGatheringState` / `IsWaitingForArmyMembers` track readiness.
- **Strength**: `CalculateCurrentStrength()` aggregates member party strength.
- **Lifecycle**: created for an objective, disbanded via `FinishArmyObjective()` or `DisbandArmyAction`.

## Mental Model

Treat `Army` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Key Properties

| Name | Signature |
|------|-----------|
| `GatheringPositionMaxDistanceToTheSettlement` | `public float GatheringPositionMaxDistanceToTheSettlement { get { return Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(this.LeaderParty.NavigationCapability) * 0.2f; }` |
| `GatheringPositionMinDistanceToTheSettlement` | `public float GatheringPositionMinDistanceToTheSettlement { get { return Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(this.LeaderParty.NavigationCapability) * 0.1f; }` |
| `Parties` | `public MBReadOnlyList<MobileParty> Parties { get { return this._parties; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get { return this.ArmyOwner.EncyclopediaLinkWithName; }` |
| `ArmyType` | `public Army.ArmyTypes ArmyType { get; set; }` |
| `ArmyOwner` | `public Hero ArmyOwner { get; set; }` |
| `Cohesion` | `public float Cohesion { get; set; }` |
| `DailyCohesionChange` | `public float DailyCohesionChange { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this, false).ResultNumber; }` |
| `DailyCohesionChangeExplanation` | `public ExplainedNumber DailyCohesionChangeExplanation { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CalculateDailyCohesionChange(this, true); }` |
| `CohesionThresholdForDispersion` | `public int CohesionThresholdForDispersion { get { return Campaign.Current.Models.ArmyManagementCalculationModel.CohesionThresholdForDispersion; }` |
| `LeaderPartyAndAttachedPartiesCount` | `public int LeaderPartyAndAttachedPartiesCount { get { return this.LeaderParty.AttachedParties.Count + 1; }` |
| `Kingdom` | `public Kingdom Kingdom { get { return this._kingdom; }` |
| `AiBehaviorObject` | `public IMapPoint AiBehaviorObject { get { return this._aiBehaviorObject; }` |
| `IsReady` | `public bool IsReady { get { return true; }` |
| `IsArmyInGatheringState` | `public bool IsArmyInGatheringState { get { return this.LeaderParty.AttachedParties.Count + 1 < this._parties.Count; }` |

## Key Methods

### ToString
```csharp
public override string ToString()
```

### CalculateCurrentStrength
```csharp
public float CalculateCurrentStrength()
```

### GetCustomStrength
```csharp
public float GetCustomStrength(BattleSideEnum side, MapEvent.PowerCalculationContext context)
```

### UpdateName
```csharp
public void UpdateName()
```

### DoesLeaderPartyAndAttachedPartiesContain
```csharp
public bool DoesLeaderPartyAndAttachedPartiesContain(MobileParty party)
```

### BoostCohesionWithInfluence
```csharp
public void BoostCohesionWithInfluence(float cohesionToGain, int cost)
```

### RecalculateArmyMorale
```csharp
public void RecalculateArmyMorale()
```

### GetNotificationText
```csharp
public TextObject GetNotificationText()
```

### GetLongTermBehaviorText
```csharp
public TextObject GetLongTermBehaviorText(bool setWithLink = false)
```

### Gather
```csharp
public void Gather(Settlement initialHostileSettlement, MBReadOnlyList<MobileParty> partiesToCallToArmy = null)
```

### IsWaitingForArmyMembers
```csharp
public bool IsWaitingForArmyMembers()
```

### FinishArmyObjective
```csharp
public void FinishArmyObjective()
```

### GetRelativePositionForParty
```csharp
public Vec2 GetRelativePositionForParty(MobileParty mobileParty, Vec2 armyFacing)
```

### AddPartyToMergedParties
```csharp
public void AddPartyToMergedParties(MobileParty mobileParty)
```

### SetPositionAfterMapChange
```csharp
public void SetPositionAfterMapChange(CampaignVec2 newPosition)
```

### CheckPositionsForMapChangeAndUpdateIfNeeded
```csharp
public void CheckPositionsForMapChangeAndUpdateIfNeeded()
```

## Usage Example

```csharp
// Find a kingdom's armies and report their cohesion/strength
foreach (Army army in Kingdom.All.SelectMany(k => k.Armies))
{
    if (army.IsArmyInGatheringState) continue;
    float strength = army.CalculateCurrentStrength();
    InformationManager.DisplayMessage(new InformationMessage(
        $"{army.Name} (lead by {army.ArmyOwner.Name}) — strength {strength:F0}, cohesion {army.Cohesion:F1}"));

    // Prevent an important army from dispersing
    if (army.Cohesion < army.CohesionThresholdForDispersion + 5f)
        army.BoostCohesionWithInfluence(cohesionToGain: 20f, cost: 0);
}
```

## See Also

- [Complete Class Catalog](../catalog)
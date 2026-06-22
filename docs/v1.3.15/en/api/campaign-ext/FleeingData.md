<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FleeingData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FleeingData

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `FleeingData` is a class in the `TaleWorlds.CampaignSystem.Party` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsDisabled` | `public bool IsDisabled { get; }` |
| `RethinkAtNextHourlyTick` | `public bool RethinkAtNextHourlyTick { get; }` |
| `DoNotMakeNewDecisions` | `public bool DoNotMakeNewDecisions { get; }` |
| `IsAlerted` | `public bool IsAlerted { get; }` |
| `DoNotAttackMainPartyUntil` | `public CampaignTime DoNotAttackMainPartyUntil { get; set; }` |
| `AvoidInitiative` | `public float AvoidInitiative { get; }` |
| `AttackInitiative` | `public float AttackInitiative { get; }` |
| `AiBehaviorPartyBase` | `public PartyBase AiBehaviorPartyBase { get; }` |
| `AiBehaviorInteractable` | `public IInteractablePoint AiBehaviorInteractable { get; set; }` |


## Key Methods

### CacheAiBehaviorPartyBase

```csharp
public void CacheAiBehaviorPartyBase()
```

### CheckPartyNeedsUpdate

```csharp
public void CheckPartyNeedsUpdate()
```

### CalculateFleePosition

```csharp
public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)
```

### GetNearbyPartyDataWhileDefendingSettlement

```csharp
public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)
```

### DisableForHours

```csharp
public void DisableForHours(int hours)
```

### DisableAi

```csharp
public void DisableAi()
```

### EnableAi

```csharp
public void EnableAi()
```

### EnableAgainAtHourIsPast

```csharp
public bool EnableAgainAtHourIsPast()
```

### SetDoNotAttackMainParty

```csharp
public void SetDoNotAttackMainParty(int hours)
```

### SetInitiative

```csharp
public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)
```

### SetDoNotMakeNewDecisions

```csharp
public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)
```

### Clear

```csharp
public void Clear()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
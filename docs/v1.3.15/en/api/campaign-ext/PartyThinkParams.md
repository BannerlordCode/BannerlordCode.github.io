<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyThinkParams`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyThinkParams

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyThinkParams` is a class in the `TaleWorlds.CampaignSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `AIBehaviorScores` | `public MBReadOnlyList<ValueTuple<AIBehaviorData, float>> AIBehaviorScores { get; }` |
| `PossibleArmyMembersUponArmyCreation` | `public MBReadOnlyList<MobileParty> PossibleArmyMembersUponArmyCreation { get; }` |


## Key Methods

### Reset

```csharp
public void Reset(MobileParty mobileParty)
```

### Initialization

```csharp
public void Initialization()
```

### AddPotentialArmyMember

```csharp
public void AddPotentialArmyMember(MobileParty armyMember)
```

### TryGetBehaviorScore

```csharp
public bool TryGetBehaviorScore(in AIBehaviorData aiBehaviorData, out float score)
```

### SetBehaviorScore

```csharp
public void SetBehaviorScore(in AIBehaviorData aiBehaviorData, float score)
```

### AddBehaviorScore

```csharp
public void AddBehaviorScore(in ValueTuple<AIBehaviorData, float> value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
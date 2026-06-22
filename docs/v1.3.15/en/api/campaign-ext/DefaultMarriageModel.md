<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMarriageModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultMarriageModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMarriageModel : MarriageModel`
**Base:** `MarriageModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMarriageModel.cs`

## Overview

`DefaultMarriageModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinimumMarriageAgeMale` | `public override int MinimumMarriageAgeMale { get; }` |
| `MinimumMarriageAgeFemale` | `public override int MinimumMarriageAgeFemale { get; }` |

## Key Methods

### IsCoupleSuitableForMarriage
```csharp
public override bool IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)
```

### IsClanSuitableForMarriage
```csharp
public override bool IsClanSuitableForMarriage(Clan clan)
```

### NpcCoupleMarriageChance
```csharp
public override float NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)
```

### ShouldNpcMarriageBetweenClansBeAllowed
```csharp
public override bool ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)
```

### GetAdultChildrenSuitableForMarriage
```csharp
public override List<Hero> GetAdultChildrenSuitableForMarriage(Hero hero)
```

### GetEffectiveRelationIncrease
```csharp
public override int GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)
```

### IsSuitableForMarriage
```csharp
public override bool IsSuitableForMarriage(Hero maidenOrSuitor)
```

### GetClanAfterMarriage
```csharp
public override Clan GetClanAfterMarriage(Hero firstHero, Hero secondHero)
```

## Usage Example

```csharp
// Typical usage of DefaultMarriageModel (Model)
Game.Current.ReplaceModel<DefaultMarriageModel>(new MyDefaultMarriageModel());
```

## See Also

- [Complete Class Catalog](../catalog)
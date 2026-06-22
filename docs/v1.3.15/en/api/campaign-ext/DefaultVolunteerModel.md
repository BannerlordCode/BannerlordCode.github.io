<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultVolunteerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVolunteerModel : VolunteerModel`
**Base:** `VolunteerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultVolunteerModel.cs`

## Overview

`DefaultVolunteerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public override int MaxVolunteerTier { get; }` |

## Key Methods

### MaximumIndexHeroCanRecruitFromHero
```csharp
public override int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)
```

### MaximumIndexGarrisonCanRecruitFromHero
```csharp
public override int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)
```

### GetDailyVolunteerProductionProbability
```csharp
public override float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)
```

### GetBasicVolunteer
```csharp
public override CharacterObject GetBasicVolunteer(Hero sellerHero)
```

### CanHaveRecruits
```csharp
public override bool CanHaveRecruits(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultVolunteerModel (Model)
Game.Current.ReplaceModel<DefaultVolunteerModel>(new MyDefaultVolunteerModel());
```

## See Also

- [Complete Class Catalog](../catalog)
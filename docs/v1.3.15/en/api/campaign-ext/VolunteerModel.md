<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VolunteerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VolunteerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class VolunteerModel : MBGameModel<VolunteerModel>`
**Base:** `MBGameModel<VolunteerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/VolunteerModel.cs`

## Overview

`VolunteerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<VolunteerModel>(new MyVolunteerModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxVolunteerTier` | `public abstract int MaxVolunteerTier { get; }` |

## Key Methods

### MaximumIndexHeroCanRecruitFromHero
```csharp
public abstract int MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)
```

### MaximumIndexGarrisonCanRecruitFromHero
```csharp
public abstract int MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)
```

### GetDailyVolunteerProductionProbability
```csharp
public abstract float GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)
```

### GetBasicVolunteer
```csharp
public abstract CharacterObject GetBasicVolunteer(Hero hero)
```

### CanHaveRecruits
```csharp
public abstract bool CanHaveRecruits(Hero hero)
```

## Usage Example

```csharp
// Typical usage of VolunteerModel (Model)
Game.Current.ReplaceModel<VolunteerModel>(new MyVolunteerModel());
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotablePowerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NotablePowerModel : MBGameModel<NotablePowerModel>`
**Base:** `MBGameModel<NotablePowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/NotablePowerModel.cs`

## Overview

`NotablePowerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<NotablePowerModel>(new MyNotablePowerModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `RegularNotableMaxPowerLevel` | `public abstract int RegularNotableMaxPowerLevel { get; }` |
| `NotableDisappearPowerLimit` | `public abstract int NotableDisappearPowerLimit { get; }` |

## Key Methods

### CalculateDailyPowerChangeForHero
```csharp
public abstract ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)
```

### GetPowerRankName
```csharp
public abstract TextObject GetPowerRankName(Hero hero)
```

### GetInfluenceBonusToClan
```csharp
public abstract float GetInfluenceBonusToClan(Hero hero)
```

### GetInitialPower
```csharp
public abstract int GetInitialPower(Hero hero)
```

### GetInitialNotableSupporterCost
```csharp
public abstract int GetInitialNotableSupporterCost(Hero hero)
```

## Usage Example

```csharp
// Typical usage of NotablePowerModel (Model)
Game.Current.ReplaceModel<NotablePowerModel>(new MyNotablePowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)
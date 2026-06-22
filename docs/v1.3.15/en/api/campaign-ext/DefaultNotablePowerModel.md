<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultNotablePowerModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultNotablePowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultNotablePowerModel : NotablePowerModel`
**Base:** `NotablePowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultNotablePowerModel.cs`

## Overview

`DefaultNotablePowerModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel())` to change how it computes.

## Key Properties

| Name | Signature |
|------|-----------|
| `NotableDisappearPowerLimit` | `public override int NotableDisappearPowerLimit { get; }` |
| `RegularNotableMaxPowerLevel` | `public override int RegularNotableMaxPowerLevel { get; }` |

## Key Methods

### CalculateDailyPowerChangeForHero
```csharp
public override ExplainedNumber CalculateDailyPowerChangeForHero(Hero hero, bool includeDescriptions = false)
```

### GetPowerRankName
```csharp
public override TextObject GetPowerRankName(Hero hero)
```

### GetInfluenceBonusToClan
```csharp
public override float GetInfluenceBonusToClan(Hero hero)
```

### GetInitialPower
```csharp
public override int GetInitialPower(Hero hero)
```

### GetInitialNotableSupporterCost
```csharp
public override int GetInitialNotableSupporterCost(Hero hero)
```

## Usage Example

```csharp
// Typical usage of DefaultNotablePowerModel (Model)
Game.Current.ReplaceModel<DefaultNotablePowerModel>(new MyDefaultNotablePowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)
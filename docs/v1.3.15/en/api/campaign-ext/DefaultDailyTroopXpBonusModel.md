<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDailyTroopXpBonusModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDailyTroopXpBonusModel.cs`

## Overview

`DefaultDailyTroopXpBonusModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel())` to change how it computes.

## Key Methods

### CalculateDailyTroopXpBonus
```csharp
public override int CalculateDailyTroopXpBonus(Town town)
```

### CalculateGarrisonXpBonusMultiplier
```csharp
public override float CalculateGarrisonXpBonusMultiplier(Town town)
```

## Usage Example

```csharp
// Typical usage of DefaultDailyTroopXpBonusModel (Model)
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## See Also

- [Complete Class Catalog](../catalog)
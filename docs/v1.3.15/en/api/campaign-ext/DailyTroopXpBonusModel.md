<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DailyTroopXpBonusModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DailyTroopXpBonusModel : MBGameModel<DailyTroopXpBonusModel>`
**Base:** `MBGameModel<DailyTroopXpBonusModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DailyTroopXpBonusModel.cs`

## Overview

`DailyTroopXpBonusModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel())` to change how it computes.

## Key Methods

### CalculateDailyTroopXpBonus
```csharp
public abstract int CalculateDailyTroopXpBonus(Town town)
```

### CalculateGarrisonXpBonusMultiplier
```csharp
public abstract float CalculateGarrisonXpBonusMultiplier(Town town)
```

## Usage Example

```csharp
// Typical usage of DailyTroopXpBonusModel (Model)
Game.Current.ReplaceModel<DailyTroopXpBonusModel>(new MyDailyTroopXpBonusModel());
```

## See Also

- [Complete Class Catalog](../catalog)
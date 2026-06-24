<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DailyTroopXpBonusModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class DailyTroopXpBonusModel : MBGameModel<DailyTroopXpBonusModel>`
**Base:** `MBGameModel<DailyTroopXpBonusModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/DailyTroopXpBonusModel.cs`

## Overview

`DailyTroopXpBonusModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DailyTroopXpBonusModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyTroopXpBonus
`public abstract int CalculateDailyTroopXpBonus(Town town)`

**Purpose:** Handles logic related to `calculate daily troop xp bonus`.

### CalculateGarrisonXpBonusMultiplier
`public abstract float CalculateGarrisonXpBonusMultiplier(Town town)`

**Purpose:** Handles logic related to `calculate garrison xp bonus multiplier`.

## Usage Example

```csharp
var implementation = new CustomDailyTroopXpBonusModel();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "DefaultDailyTroopXpBonusModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDailyTroopXpBonusModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDailyTroopXpBonusModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultDailyTroopXpBonusModel : DailyTroopXpBonusModel`
**Base:** `DailyTroopXpBonusModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultDailyTroopXpBonusModel.cs`

## Overview

`DefaultDailyTroopXpBonusModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultDailyTroopXpBonusModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateDailyTroopXpBonus
`public override int CalculateDailyTroopXpBonus(Town town)`

**Purpose:** Handles logic related to `calculate daily troop xp bonus`.

### CalculateGarrisonXpBonusMultiplier
`public override float CalculateGarrisonXpBonusMultiplier(Town town)`

**Purpose:** Handles logic related to `calculate garrison xp bonus multiplier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultDailyTroopXpBonusModel>(new MyDefaultDailyTroopXpBonusModel());
```

## See Also

- [Complete Class Catalog](../catalog)
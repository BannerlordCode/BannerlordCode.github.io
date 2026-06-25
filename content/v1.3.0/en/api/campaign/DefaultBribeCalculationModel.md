---
title: "DefaultBribeCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultBribeCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBribeCalculationModel : BribeCalculationModel`
**Base:** `BribeCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBribeCalculationModel.cs`

## Overview

`DefaultBribeCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultBribeCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsBribeNotNeededToEnterKeep
`public override bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**Purpose:** Handles logic related to `is bribe not needed to enter keep`.

### IsBribeNotNeededToEnterDungeon
`public override bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**Purpose:** Handles logic related to `is bribe not needed to enter dungeon`.

### GetBribeToEnterLordsHall
`public override int GetBribeToEnterLordsHall(Settlement settlement)`

**Purpose:** Gets the current value of `bribe to enter lords hall`.

### GetBribeToEnterDungeon
`public override int GetBribeToEnterDungeon(Settlement settlement)`

**Purpose:** Gets the current value of `bribe to enter dungeon`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultBribeCalculationModel>(new MyDefaultBribeCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
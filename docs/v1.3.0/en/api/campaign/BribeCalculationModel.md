<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BribeCalculationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BribeCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**Base:** `MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`

## Overview

`BribeCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BribeCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBribeToEnterLordsHall
`public abstract int GetBribeToEnterLordsHall(Settlement settlement)`

**Purpose:** Gets the current value of `bribe to enter lords hall`.

### GetBribeToEnterDungeon
`public abstract int GetBribeToEnterDungeon(Settlement settlement)`

**Purpose:** Gets the current value of `bribe to enter dungeon`.

### IsBribeNotNeededToEnterKeep
`public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement)`

**Purpose:** Handles logic related to `is bribe not needed to enter keep`.

### IsBribeNotNeededToEnterDungeon
`public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement)`

**Purpose:** Handles logic related to `is bribe not needed to enter dungeon`.

## Usage Example

```csharp
var implementation = new CustomBribeCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)
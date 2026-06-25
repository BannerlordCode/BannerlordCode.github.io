---
title: "PrisonBreakModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonBreakModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**Base:** `MBGameModel<PrisonBreakModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PrisonBreakModel.cs`

## Overview

`PrisonBreakModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PrisonBreakModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNumberOfGuardsToSpawn
`public abstract int GetNumberOfGuardsToSpawn(Settlement settlement)`

**Purpose:** Gets the current value of `number of guards to spawn`.

### CanPlayerStagePrisonBreak
`public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)`

**Purpose:** Checks whether the current object can `player stage prison break`.

### GetPrisonBreakStartCost
`public abstract int GetPrisonBreakStartCost(Hero prisonerHero)`

**Purpose:** Gets the current value of `prison break start cost`.

### GetRelationRewardOnPrisonBreak
`public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**Purpose:** Gets the current value of `relation reward on prison break`.

### GetRogueryRewardOnPrisonBreak
`public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**Purpose:** Gets the current value of `roguery reward on prison break`.

## Usage Example

```csharp
var implementation = new CustomPrisonBreakModel();
```

## See Also

- [Complete Class Catalog](../catalog)
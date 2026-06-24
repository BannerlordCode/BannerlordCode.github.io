<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPrisonBreakModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**Base:** `PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## Overview

`DefaultPrisonBreakModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPrisonBreakModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetNumberOfGuardsToSpawn
`public override int GetNumberOfGuardsToSpawn(Settlement settlement)`

**Purpose:** Gets the current value of `number of guards to spawn`.

### CanPlayerStagePrisonBreak
`public override bool CanPlayerStagePrisonBreak(Settlement settlement)`

**Purpose:** Checks whether the current object can `player stage prison break`.

### GetPrisonBreakStartCost
`public override int GetPrisonBreakStartCost(Hero prisonerHero)`

**Purpose:** Gets the current value of `prison break start cost`.

### GetRelationRewardOnPrisonBreak
`public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)`

**Purpose:** Gets the current value of `relation reward on prison break`.

### GetRogueryRewardOnPrisonBreak
`public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)`

**Purpose:** Gets the current value of `roguery reward on prison break`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel());
```

## See Also

- [Complete Class Catalog](../catalog)
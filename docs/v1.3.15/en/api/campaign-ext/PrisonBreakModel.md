<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PrisonBreakModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**Base:** `MBGameModel<PrisonBreakModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs`

## Overview

`PrisonBreakModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<PrisonBreakModel>(new MyPrisonBreakModel())` to change how it computes.

## Key Methods

### GetNumberOfGuardsToSpawn
```csharp
public abstract int GetNumberOfGuardsToSpawn(Settlement settlement)
```

### CanPlayerStagePrisonBreak
```csharp
public abstract bool CanPlayerStagePrisonBreak(Settlement settlement)
```

### GetPrisonBreakStartCost
```csharp
public abstract int GetPrisonBreakStartCost(Hero prisonerHero)
```

### GetRelationRewardOnPrisonBreak
```csharp
public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero)
```

### GetRogueryRewardOnPrisonBreak
```csharp
public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)
```

## Usage Example

```csharp
// Typical usage of PrisonBreakModel (Model)
Game.Current.ReplaceModel<PrisonBreakModel>(new MyPrisonBreakModel());
```

## See Also

- [Complete Class Catalog](../catalog)
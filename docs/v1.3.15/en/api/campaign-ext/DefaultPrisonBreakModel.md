<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultPrisonBreakModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultPrisonBreakModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**Base:** `PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## Overview

`DefaultPrisonBreakModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel())` to change how it computes.

## Key Methods

### GetNumberOfGuardsToSpawn
```csharp
public override int GetNumberOfGuardsToSpawn(Settlement settlement)
```

### CanPlayerStagePrisonBreak
```csharp
public override bool CanPlayerStagePrisonBreak(Settlement settlement)
```

### GetPrisonBreakStartCost
```csharp
public override int GetPrisonBreakStartCost(Hero prisonerHero)
```

### GetRelationRewardOnPrisonBreak
```csharp
public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)
```

### GetRogueryRewardOnPrisonBreak
```csharp
public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)
```

## Usage Example

```csharp
// Typical usage of DefaultPrisonBreakModel (Model)
Game.Current.ReplaceModel<DefaultPrisonBreakModel>(new MyDefaultPrisonBreakModel());
```

## See Also

- [Complete Class Catalog](../catalog)
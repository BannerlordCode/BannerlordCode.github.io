---
title: "MultiplayerBattleInitializationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerBattleInitializationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerBattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleInitializationModel : BattleInitializationModel`
**Base:** `BattleInitializationModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerBattleInitializationModel.cs`

## Overview

`MultiplayerBattleInitializationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleInitializationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetAllAvailableTroopTypes
`public override List<FormationClass> GetAllAvailableTroopTypes()`

**Purpose:** Gets the current value of `all available troop types`.

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleInitializationModel>(new MyMultiplayerBattleInitializationModel());
```

## See Also

- [Complete Class Catalog](../catalog)
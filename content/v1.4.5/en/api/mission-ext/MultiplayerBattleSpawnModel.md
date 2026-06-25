---
title: "MultiplayerBattleSpawnModel"
description: "Auto-generated class reference for MultiplayerBattleSpawnModel."
---
# MultiplayerBattleSpawnModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerBattleSpawnModel : BattleSpawnModel`
**Base:** `BattleSpawnModel`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerBattleSpawnModel.cs`

## Overview

`MultiplayerBattleSpawnModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerBattleSpawnModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerBattleSpawnModel>(new MyMultiplayerBattleSpawnModel());
```

## See Also

- [Area Index](../)
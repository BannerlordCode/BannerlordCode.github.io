---
title: "MultiplayerRidingModel"
description: "Auto-generated class reference for MultiplayerRidingModel."
---
# MultiplayerRidingModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerRidingModel : RidingModel`
**Base:** `RidingModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerRidingModel.cs`

## Overview

`MultiplayerRidingModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MultiplayerRidingModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateAcceleration
`public override float CalculateAcceleration(in EquipmentElement mountElement, in EquipmentElement harnessElement, int ridingSkill)`

**Purpose:** Calculates the current value or result of acceleration.

```csharp
// Obtain an instance of MultiplayerRidingModel from the subsystem API first
MultiplayerRidingModel multiplayerRidingModel = ...;
var result = multiplayerRidingModel.CalculateAcceleration(mountElement, harnessElement, 0);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<MultiplayerRidingModel>(new MyMultiplayerRidingModel());
```

## See Also

- [Area Index](../)
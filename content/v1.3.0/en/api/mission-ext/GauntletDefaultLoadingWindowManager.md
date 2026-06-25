---
title: "GauntletDefaultLoadingWindowManager"
description: "Auto-generated class reference for GauntletDefaultLoadingWindowManager."
---
# GauntletDefaultLoadingWindowManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDefaultLoadingWindowManager : GlobalLayer, ILoadingWindowManager`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletDefaultLoadingWindowManager.cs`

## Overview

`GauntletDefaultLoadingWindowManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GauntletDefaultLoadingWindowManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** Assigns a new value to current mode is multiplayer and updates the object's internal state.

```csharp
// Obtain an instance of GauntletDefaultLoadingWindowManager from the subsystem API first
GauntletDefaultLoadingWindowManager gauntletDefaultLoadingWindowManager = ...;
gauntletDefaultLoadingWindowManager.SetCurrentModeIsMultiplayer(false);
```

## Usage Example

```csharp
var manager = GauntletDefaultLoadingWindowManager.Current;
```

## See Also

- [Area Index](../)
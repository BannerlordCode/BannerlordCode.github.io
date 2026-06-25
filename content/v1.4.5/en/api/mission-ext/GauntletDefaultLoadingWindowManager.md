---
title: "GauntletDefaultLoadingWindowManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletDefaultLoadingWindowManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletDefaultLoadingWindowManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDefaultLoadingWindowManager : GlobalLayer, ILoadingWindowManager`
**Base:** `GlobalLayer`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletDefaultLoadingWindowManager.cs`

## Overview

`GauntletDefaultLoadingWindowManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GauntletDefaultLoadingWindowManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** Sets the value or state of `current mode is multiplayer`.

## Usage Example

```csharp
var manager = GauntletDefaultLoadingWindowManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
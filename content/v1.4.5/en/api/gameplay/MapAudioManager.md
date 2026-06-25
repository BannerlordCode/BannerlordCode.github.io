---
title: "MapAudioManager"
description: "Auto-generated class reference for MapAudioManager."
---
# MapAudioManager

**Namespace:** SandBox.View.Map.Managers
**Module:** SandBox.View
**Type:** `internal class MapAudioManager : CampaignEntityVisualComponent`
**Base:** `CampaignEntityVisualComponent`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Managers/MapAudioManager.cs`

## Overview

`MapAudioManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MapAudioManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnVisualTick
`public override void OnVisualTick(MapScreen screen, float realDt, float dt)`

**Purpose:** **Purpose:** Invoked when the visual tick event is raised.

```csharp
// Obtain an instance of MapAudioManager from the subsystem API first
MapAudioManager mapAudioManager = ...;
mapAudioManager.OnVisualTick(screen, 0, 0);
```

## Usage Example

```csharp
var manager = MapAudioManager.Current;
```

## See Also

- [Area Index](../../)
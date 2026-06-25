---
title: "SpawnPointDebugView"
description: "Auto-generated class reference for SpawnPointDebugView."
---
# SpawnPointDebugView

**Namespace:** SandBox.View.Missions.SandBox
**Module:** SandBox.View
**Type:** `public class SpawnPointDebugView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.SandBox/SpawnPointDebugView.cs`

## Overview

`SpawnPointDebugView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `SpawnPointDebugView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of SpawnPointDebugView from the subsystem API first
SpawnPointDebugView spawnPointDebugView = ...;
var result = spawnPointDebugView.GetTickRequirement();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
SpawnPointDebugView view = ...;
```

## See Also

- [Area Index](../)
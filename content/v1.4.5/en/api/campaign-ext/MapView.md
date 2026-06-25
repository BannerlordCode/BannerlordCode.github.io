---
title: "MapView"
description: "Auto-generated class reference for MapView."
---
# MapView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public abstract class MapView : SandboxView`
**Base:** `SandboxView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapView.cs`

## Overview

`MapView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapScreen` | `public MapScreen MapScreen { get; set; }` |
| `MapState` | `public MapState MapState { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MapView instance = ...;
```

## See Also

- [Area Index](../)
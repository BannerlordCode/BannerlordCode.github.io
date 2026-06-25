---
title: "MapEncyclopediaView"
description: "Auto-generated class reference for MapEncyclopediaView."
---
# MapEncyclopediaView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapEncyclopediaView : MapView`
**Base:** `MapView`
**File:** `SandBox.View/Map/MapEncyclopediaView.cs`

## Overview

`MapEncyclopediaView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapEncyclopediaView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |

## Key Methods

### CloseEncyclopedia
`public virtual void CloseEncyclopedia()`

**Purpose:** **Purpose:** Closes the resource or UI associated with encyclopedia.

```csharp
// Obtain an instance of MapEncyclopediaView from the subsystem API first
MapEncyclopediaView mapEncyclopediaView = ...;
mapEncyclopediaView.CloseEncyclopedia();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapEncyclopediaView view = ...;
```

## See Also

- [Area Index](../)
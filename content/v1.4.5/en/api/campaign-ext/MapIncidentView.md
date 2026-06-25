---
title: "MapIncidentView"
description: "Auto-generated class reference for MapIncidentView."
---
# MapIncidentView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapIncidentView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapIncidentView.cs`

## Overview

`MapIncidentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MapIncidentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MapIncidentView view = ...;
```

## See Also

- [Area Index](../)
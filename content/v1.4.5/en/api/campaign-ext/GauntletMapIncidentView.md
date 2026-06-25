---
title: "GauntletMapIncidentView"
description: "Auto-generated class reference for GauntletMapIncidentView."
---
# GauntletMapIncidentView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapIncidentView : MapIncidentView`
**Base:** `MapIncidentView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapIncidentView.cs`

## Overview

`GauntletMapIncidentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapIncidentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapIncidentView view = ...;
```

## See Also

- [Area Index](../)
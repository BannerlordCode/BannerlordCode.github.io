---
title: "GauntletMapBarView"
description: "Auto-generated class reference for GauntletMapBarView."
---
# GauntletMapBarView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapBarView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapBarView.cs`

## Overview

`GauntletMapBarView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapBarView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapBarView view = ...;
```

## See Also

- [Area Index](../)
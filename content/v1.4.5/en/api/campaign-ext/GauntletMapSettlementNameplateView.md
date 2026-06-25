---
title: "GauntletMapSettlementNameplateView"
description: "Auto-generated class reference for GauntletMapSettlementNameplateView."
---
# GauntletMapSettlementNameplateView

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapSettlementNameplateView : MapView, IGauntletMapEventVisualHandler`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Map/GauntletMapSettlementNameplateView.cs`

## Overview

`GauntletMapSettlementNameplateView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapSettlementNameplateView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapSettlementNameplateView view = ...;
```

## See Also

- [Area Index](../)
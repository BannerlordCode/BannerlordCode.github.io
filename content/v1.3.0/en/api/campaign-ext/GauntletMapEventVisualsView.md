---
title: "GauntletMapEventVisualsView"
description: "Auto-generated class reference for GauntletMapEventVisualsView."
---
# GauntletMapEventVisualsView

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** SandBox.GauntletUI.Map
**Module:** SandBox.GauntletUI
**Type:** `public class GauntletMapEventVisualsView : MapView, IGauntletMapEventVisualHandler`
**Base:** `MapView`
**File:** `SandBox.GauntletUI/Map/GauntletMapEventVisualsView.cs`

## Overview

`GauntletMapEventVisualsView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMapEventVisualsView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletMapEventVisualsView view = ...;
```

## See Also

- [Area Index](../)
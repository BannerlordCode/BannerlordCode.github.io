---
title: "HeirSelectionPopupView"
description: "Auto-generated class reference for HeirSelectionPopupView."
---
# HeirSelectionPopupView

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class HeirSelectionPopupView : MapView`
**Base:** `MapView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/HeirSelectionPopupView.cs`

## Overview

`HeirSelectionPopupView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `HeirSelectionPopupView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
HeirSelectionPopupView view = ...;
```

## See Also

- [Area Index](../)
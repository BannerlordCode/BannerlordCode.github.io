---
title: "EmptyWidget"
description: "Auto-generated class reference for EmptyWidget."
---
# EmptyWidget

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `internal class EmptyWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EmptyWidget.cs`

## Overview

`EmptyWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EmptyWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**Purpose:** Recalculates and stores the latest representation of brushes.

```csharp
// Obtain an instance of EmptyWidget from the subsystem API first
EmptyWidget emptyWidget = ...;
emptyWidget.UpdateBrushes(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EmptyWidget widget = ...;
```

## See Also

- [Area Index](../)
---
title: "BrushWidget"
description: "Auto-generated class reference for BrushWidget."
---
# BrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## Overview

`BrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## Key Methods

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**Purpose:** Recalculates and stores the latest representation of brushes.

```csharp
// Obtain an instance of BrushWidget from the subsystem API first
BrushWidget brushWidget = ...;
brushWidget.UpdateBrushes(0);
```

### SetState
`public override void SetState(string stateName)`

**Purpose:** Assigns a new value to state and updates the object's internal state.

```csharp
// Obtain an instance of BrushWidget from the subsystem API first
BrushWidget brushWidget = ...;
brushWidget.SetState("example");
```

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**Purpose:** Recalculates and stores the latest representation of animation properties sub task.

```csharp
// Obtain an instance of BrushWidget from the subsystem API first
BrushWidget brushWidget = ...;
brushWidget.UpdateAnimationPropertiesSubTask(0);
```

### OnBrushChanged
`public virtual void OnBrushChanged()`

**Purpose:** Invoked when the brush changed event is raised.

```csharp
// Obtain an instance of BrushWidget from the subsystem API first
BrushWidget brushWidget = ...;
brushWidget.OnBrushChanged();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
BrushWidget widget = ...;
```

## See Also

- [Area Index](../)
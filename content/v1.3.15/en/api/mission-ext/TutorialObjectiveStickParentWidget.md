---
title: "TutorialObjectiveStickParentWidget"
description: "Auto-generated class reference for TutorialObjectiveStickParentWidget."
---
# TutorialObjectiveStickParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialObjectiveStickParentWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs`

## Overview

`TutorialObjectiveStickParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialObjectiveStickParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StickMiddle` | `public Widget StickMiddle { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `AnimTime` | `public float AnimTime { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `AnimType` | `public TutorialObjectiveStickParentWidget.StickAnimStage.AnimTypes AnimType { get; }` |
| `WidgetToManipulate` | `public Widget WidgetToManipulate { get; }` |

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of TutorialObjectiveStickParentWidget from the subsystem API first
TutorialObjectiveStickParentWidget tutorialObjectiveStickParentWidget = ...;
tutorialObjectiveStickParentWidget.Tick(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TutorialObjectiveStickParentWidget widget = ...;
```

## See Also

- [Area Index](../)
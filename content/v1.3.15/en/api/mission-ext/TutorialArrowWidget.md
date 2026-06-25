---
title: "TutorialArrowWidget"
description: "Auto-generated class reference for TutorialArrowWidget."
---
# TutorialArrowWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArrowWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialArrowWidget.cs`

## Overview

`TutorialArrowWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TutorialArrowWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsArrowEnabled` | `public bool IsArrowEnabled { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `BigCircleRadius` | `public float BigCircleRadius { get; set; }` |
| `SmallCircleRadius` | `public float SmallCircleRadius { get; set; }` |

## Key Methods

### SetArrowProperties
`public void SetArrowProperties(float width, float height, bool isDirectionDown, bool isDirectionRight)`

**Purpose:** Assigns a new value to arrow properties and updates the object's internal state.

```csharp
// Obtain an instance of TutorialArrowWidget from the subsystem API first
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.SetArrowProperties(0, 0, false, false);
```

### ResetFade
`public void ResetFade()`

**Purpose:** Returns fade to its default or initial condition.

```csharp
// Obtain an instance of TutorialArrowWidget from the subsystem API first
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.ResetFade();
```

### DisableFade
`public void DisableFade()`

**Purpose:** Executes the DisableFade logic.

```csharp
// Obtain an instance of TutorialArrowWidget from the subsystem API first
TutorialArrowWidget tutorialArrowWidget = ...;
tutorialArrowWidget.DisableFade();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TutorialArrowWidget widget = ...;
```

## See Also

- [Area Index](../)
---
title: "AnimatedNumberTextWidget"
description: "Auto-generated class reference for AnimatedNumberTextWidget."
---
# AnimatedNumberTextWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## Overview

`AnimatedNumberTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `AnimatedNumberTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AnimationDelay` | `public float AnimationDelay { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |
| `ReferenceNumber` | `public int ReferenceNumber { get; set; }` |
| `Number` | `public int Number { get; set; }` |
| `AutoStart` | `public bool AutoStart { get; set; }` |

## Key Methods

### StartAnimation
`public void StartAnimation()`

**Purpose:** Starts the `animation` flow or state machine.

```csharp
// Obtain an instance of AnimatedNumberTextWidget from the subsystem API first
AnimatedNumberTextWidget animatedNumberTextWidget = ...;
animatedNumberTextWidget.StartAnimation();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of AnimatedNumberTextWidget from the subsystem API first
AnimatedNumberTextWidget animatedNumberTextWidget = ...;
animatedNumberTextWidget.Reset();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AnimatedNumberTextWidget widget = ...;
```

## See Also

- [Area Index](../)
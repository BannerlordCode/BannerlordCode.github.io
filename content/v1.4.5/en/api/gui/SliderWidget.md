---
title: "SliderWidget"
description: "Auto-generated class reference for SliderWidget."
---
# SliderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SliderWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SliderWidget.cs`

## Overview

`SliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UpdateValueOnScroll` | `public bool UpdateValueOnScroll { get; set; }` |
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `Locked` | `public bool Locked { get; set; }` |
| `UpdateValueOnRelease` | `public bool UpdateValueOnRelease { get; set; }` |
| `UpdateValueContinuously` | `public bool UpdateValueContinuously { get; set; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `Filler` | `public Widget Filler { get; set; }` |
| `HandleExtension` | `public Widget HandleExtension { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get; set; }` |
| `ValueInt` | `public int ValueInt { get; set; }` |
| `MinValueFloat` | `public float MinValueFloat { get; set; }` |
| `MaxValueFloat` | `public float MaxValueFloat { get; set; }` |
| `MinValueInt` | `public int MinValueInt { get; set; }` |
| `MaxValueInt` | `public int MaxValueInt { get; set; }` |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get; set; }` |
| `SliderArea` | `public Widget SliderArea { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SliderWidget widget = ...;
```

## See Also

- [Area Index](../)
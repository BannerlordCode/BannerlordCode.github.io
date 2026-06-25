---
title: "ScrollbarWidget"
description: "Auto-generated class reference for ScrollbarWidget."
---
# ScrollbarWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollbarWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs`

## Overview

`ScrollbarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ScrollbarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDiscrete` | `public bool IsDiscrete { get; set; }` |
| `Locked` | `public bool Locked { get; set; }` |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis { get; set; }` |
| `ReverseDirection` | `public bool ReverseDirection { get; set; }` |
| `ValueFloat` | `public float ValueFloat { get; set; }` |
| `ValueInt` | `public int ValueInt { get; set; }` |
| `MinValue` | `public float MinValue { get; set; }` |
| `MaxValue` | `public float MaxValue { get; set; }` |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize { get; set; }` |
| `Handle` | `public Widget Handle { get; set; }` |
| `ScrollbarArea` | `public Widget ScrollbarArea { get; set; }` |

## Key Methods

### SetValueForced
`public void SetValueForced(float value)`

**Purpose:** Assigns a new value to value forced and updates the object's internal state.

```csharp
// Obtain an instance of ScrollbarWidget from the subsystem API first
ScrollbarWidget scrollbarWidget = ...;
scrollbarWidget.SetValueForced(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ScrollbarWidget widget = ...;
```

## See Also

- [Area Index](../)
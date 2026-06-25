---
title: "RundownLineWidget"
description: "Auto-generated class reference for RundownLineWidget."
---
# RundownLineWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownLineWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownLineWidget.cs`

## Overview

`RundownLineWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RundownLineWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `ValueTextWidget` | `public TextWidget ValueTextWidget { get; set; }` |
| `Value` | `public float Value { get; set; }` |

## Key Methods

### RefreshValueOffset
`public void RefreshValueOffset(float columnWidth)`

**Purpose:** Keeps the display or cache of value offset in sync with the underlying state.

```csharp
// Obtain an instance of RundownLineWidget from the subsystem API first
RundownLineWidget rundownLineWidget = ...;
rundownLineWidget.RefreshValueOffset(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
RundownLineWidget widget = ...;
```

## See Also

- [Area Index](../)
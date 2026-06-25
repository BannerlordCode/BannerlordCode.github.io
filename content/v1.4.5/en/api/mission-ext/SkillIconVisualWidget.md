---
title: "SkillIconVisualWidget"
description: "Auto-generated class reference for SkillIconVisualWidget."
---
# SkillIconVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SkillIconVisualWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/SkillIconVisualWidget.cs`

## Overview

`SkillIconVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SkillIconVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SkillId` | `public string SkillId { get; set; }` |
| `UseSmallVariation` | `public bool UseSmallVariation { get; set; }` |
| `UseSmallestVariation` | `public bool UseSmallestVariation { get; set; }` |

## Key Methods

### SkillIconVisualWidget
`public class SkillIconVisualWidget(UIContext context)`

**Purpose:** Executes the SkillIconVisualWidget logic.

```csharp
// Obtain an instance of SkillIconVisualWidget from the subsystem API first
SkillIconVisualWidget skillIconVisualWidget = ...;
var result = skillIconVisualWidget.SkillIconVisualWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SkillIconVisualWidget widget = ...;
```

## See Also

- [Area Index](../)
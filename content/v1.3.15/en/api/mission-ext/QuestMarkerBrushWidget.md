---
title: "QuestMarkerBrushWidget"
description: "Auto-generated class reference for QuestMarkerBrushWidget."
---
# QuestMarkerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestMarkerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestMarkerBrushWidget.cs`

## Overview

`QuestMarkerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `QuestMarkerBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `QuestMarkerType` | `public int QuestMarkerType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
QuestMarkerBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
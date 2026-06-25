---
title: "BoolBrushChangerBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoolBrushChangerBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoolBrushChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoolBrushChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/BoolBrushChangerBrushWidget.cs`

## Overview

`BoolBrushChangerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BoolBrushChangerBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BooleanCheck` | `public bool BooleanCheck { get; set; }` |
| `TrueBrush` | `public string TrueBrush { get; set; }` |
| `FalseBrush` | `public string FalseBrush { get; set; }` |
| `TargetWidget` | `public BrushWidget TargetWidget { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |

## Usage Example

```csharp
var widget = new BoolBrushChangerBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
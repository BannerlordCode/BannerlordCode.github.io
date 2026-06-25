---
title: "FiefStatTypeVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FiefStatTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FiefStatTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FiefStatTypeVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/FiefStatTypeVisualBrushWidget.cs`

## Overview

`FiefStatTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FiefStatTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### FiefStatTypeVisualBrushWidget
`public class FiefStatTypeVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `fief stat type visual brush widget`.

## Usage Example

```csharp
var widget = new FiefStatTypeVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
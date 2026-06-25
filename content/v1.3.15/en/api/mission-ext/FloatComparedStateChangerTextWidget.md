---
title: "FloatComparedStateChangerTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FloatComparedStateChangerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FloatComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FloatComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/FloatComparedStateChangerTextWidget.cs`

## Overview

`FloatComparedStateChangerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FloatComparedStateChangerTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public FloatComparedStateChangerTextWidget.ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public float FirstValue { get; set; }` |
| `SecondValue` | `public float SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
var widget = new FloatComparedStateChangerTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
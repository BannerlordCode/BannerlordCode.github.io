---
title: "IntComparedStateChangerTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntComparedStateChangerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IntComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IntComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs`

## Overview

`IntComparedStateChangerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IntComparedStateChangerTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public int FirstValue { get; set; }` |
| `SecondValue` | `public int SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
var widget = new IntComparedStateChangerTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "ChangeAmountTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChangeAmountTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChangeAmountTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChangeAmountTextWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## Overview

`ChangeAmountTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ChangeAmountTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `UseParentheses` | `public bool UseParentheses { get; set; }` |
| `ShouldBeVisible` | `public bool ShouldBeVisible { get; set; }` |
| `NegativeBrushName` | `public string NegativeBrushName { get; set; }` |
| `PositiveBrushName` | `public string PositiveBrushName { get; set; }` |

## Key Methods

### ChangeAmountTextWidget
`public class ChangeAmountTextWidget(UIContext context)`

**Purpose:** Handles logic related to `change amount text widget`.

## Usage Example

```csharp
var widget = new ChangeAmountTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "IntegerInputTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntegerInputTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntegerInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs`

## Overview

`IntegerInputTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IntegerInputTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `IntText` | `public int IntText { get; set; }` |
| `MaxInt` | `public int MaxInt { get; set; }` |
| `MinInt` | `public int MinInt { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Handles the `input` event or callback.

### SetAllText
`public override void SetAllText(string text)`

**Purpose:** Sets the value or state of `all text`.

## Usage Example

```csharp
var widget = new IntegerInputTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
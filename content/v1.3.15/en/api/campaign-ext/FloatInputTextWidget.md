---
title: "FloatInputTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FloatInputTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FloatInputTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FloatInputTextWidget : EditableTextWidget`
**Base:** `EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/FloatInputTextWidget.cs`

## Overview

`FloatInputTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FloatInputTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `FloatText` | `public float FloatText { get; set; }` |
| `MaxFloat` | `public float MaxFloat { get; set; }` |
| `MinFloat` | `public float MinFloat { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Handles the `input` event or callback.

### SetAllText
`public override void SetAllText(string text)`

**Purpose:** Sets the value or state of `all text`.

## Usage Example

```csharp
var widget = new FloatInputTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
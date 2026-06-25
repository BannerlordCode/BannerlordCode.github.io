---
title: "EditableTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditableTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`

## Overview

`EditableTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EditableTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxLength` | `public int MaxLength { get; set; }` |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled { get; set; }` |
| `DefaultSearchText` | `public string DefaultSearchText { get; set; }` |
| `RealText` | `public string RealText { get; set; }` |
| `KeyboardInfoText` | `public string KeyboardInfoText { get; set; }` |
| `Text` | `public string Text { get; set; }` |

## Key Methods

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

**Purpose:** Handles the `input` event or callback.

### SetAllText
`public virtual void SetAllText(string text)`

**Purpose:** Sets the value or state of `all text`.

## Usage Example

```csharp
var widget = new EditableTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
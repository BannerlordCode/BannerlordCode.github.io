<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditableTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxLength` | `public int MaxLength { get; set; }` |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled { get { return this._isObfuscationEnabled; }` |
| `DefaultSearchText` | `public string DefaultSearchText { get; set; }` |
| `RealText` | `public string RealText { get { return this._realText; }` |
| `KeyboardInfoText` | `public string KeyboardInfoText { get { return this._keyboardInfoText; }` |
| `Text` | `public string Text { get { return this._editableText.VisibleText; }` |

## Key Methods

### HandleInput
```csharp
public override void HandleInput(IReadOnlyList<int> lastKeysPressed)
```

### SetAllText
```csharp
public virtual void SetAllText(string text)
```

## Usage Example

```csharp
// Typical usage of EditableTextWidget (Widget)
// 声明/访问一个 EditableTextWidget
var widget = root.GetChild("editableTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
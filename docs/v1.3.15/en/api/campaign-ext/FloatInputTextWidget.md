<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FloatInputTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `FloatText` | `public float FloatText { get { return this._floatText; }` |
| `MaxFloat` | `public float MaxFloat { get { return this._maxFloat; }` |
| `MinFloat` | `public float MinFloat { get { return this._minFloat; }` |

## Key Methods

### HandleInput
```csharp
public override void HandleInput(IReadOnlyList<int> lastKeysPressed)
```

### SetAllText
```csharp
public override void SetAllText(string text)
```

## Usage Example

```csharp
// Typical usage of FloatInputTextWidget (Widget)
// 声明/访问一个 FloatInputTextWidget
var widget = root.GetChild("floatInputTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
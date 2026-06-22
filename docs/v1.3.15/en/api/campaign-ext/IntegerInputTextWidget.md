<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntegerInputTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `EnableClamp` | `public bool EnableClamp { get; set; }` |
| `IntText` | `public int IntText { get { return this._intText; }` |
| `MaxInt` | `public int MaxInt { get { return this._maxInt; }` |
| `MinInt` | `public int MinInt { get { return this._minInt; }` |

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
// Typical usage of IntegerInputTextWidget (Widget)
// 声明/访问一个 IntegerInputTextWidget
var widget = root.GetChild("integerInputTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
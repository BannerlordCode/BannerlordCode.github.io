<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntComparedStateChangerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntComparedStateChangerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IntComparedStateChangerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/IntComparedStateChangerTextWidget.cs`

## Overview

`IntComparedStateChangerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ComparisonType` | `public IntComparedStateChangerTextWidget.ComparisonTypes ComparisonType { get; set; }` |
| `FirstValue` | `public int FirstValue { get; set; }` |
| `SecondValue` | `public int SecondValue { get; set; }` |
| `TrueState` | `public string TrueState { get; set; }` |
| `FalseState` | `public string FalseState { get; set; }` |

## Usage Example

```csharp
// Typical usage of IntComparedStateChangerTextWidget (Widget)
// 声明/访问一个 IntComparedStateChangerTextWidget
var widget = root.GetChild("intComparedStateChangerTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
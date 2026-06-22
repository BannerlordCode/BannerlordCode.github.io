<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntegerInputPercentageTextWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IntegerInputPercentageTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class IntegerInputPercentageTextWidget : IntegerInputTextWidget`
**Base:** `IntegerInputTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputPercentageTextWidget.cs`

## Overview

`IntegerInputPercentageTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PercentageText` | `public string PercentageText { get { return this._percentageText; }` |

## Usage Example

```csharp
// Typical usage of IntegerInputPercentageTextWidget (Widget)
// 声明/访问一个 IntegerInputPercentageTextWidget
var widget = root.GetChild("integerInputPercentageTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
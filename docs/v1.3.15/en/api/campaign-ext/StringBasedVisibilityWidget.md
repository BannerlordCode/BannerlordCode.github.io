<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StringBasedVisibilityWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StringBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StringBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StringBasedVisibilityWidget.cs`

## Overview

`StringBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public StringBasedVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `FirstString` | `public string FirstString { get { return this._firstString; }` |
| `SecondString` | `public string SecondString { get { return this._secondString; }` |

## Usage Example

```csharp
// Typical usage of StringBasedVisibilityWidget (Widget)
// 声明/访问一个 StringBasedVisibilityWidget
var widget = root.GetChild("stringBasedVisibilityWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
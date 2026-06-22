<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TabToggleWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TabToggleWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TabToggleWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/TabToggleWidget.cs`

## Overview

`TabToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `TabControlWidget` | `public TabControl TabControlWidget { get; set; }` |
| `TabName` | `public string TabName { get { return this._tabName; }` |

## Usage Example

```csharp
// Typical usage of TabToggleWidget (Widget)
// 声明/访问一个 TabToggleWidget
var widget = root.GetChild("tabToggleWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
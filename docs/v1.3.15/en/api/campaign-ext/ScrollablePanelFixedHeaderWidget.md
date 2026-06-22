<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScrollablePanelFixedHeaderWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ScrollablePanelFixedHeaderWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ScrollablePanelFixedHeaderWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanelFixedHeaderWidget.cs`

## Overview

`ScrollablePanelFixedHeaderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FixedHeader` | `public Widget FixedHeader { get; set; }` |
| `TopOffset` | `public float TopOffset { get; set; }` |
| `BottomOffset` | `public float BottomOffset { get; set; }` |
| `HeaderHeight` | `public float HeaderHeight { get { return this._headerHeight; }` |
| `AdditionalTopOffset` | `public float AdditionalTopOffset { get { return this._additionalTopOffset; }` |
| `AdditionalBottomOffset` | `public float AdditionalBottomOffset { get { return this._additionalBottomOffset; }` |
| `IsRelevant` | `public bool IsRelevant { get { return this._isRelevant; }` |

## Usage Example

```csharp
// Typical usage of ScrollablePanelFixedHeaderWidget (Widget)
// 声明/访问一个 ScrollablePanelFixedHeaderWidget
var widget = root.GetChild("scrollablePanelFixedHeaderWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StateSyncWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StateSyncWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StateSyncWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`

## Overview

`StateSyncWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceWidget` | `public Widget SourceWidget { get { return this._sourceWidget; }` |
| `TargetWidget` | `public Widget TargetWidget { get { return this._targetWidget; }` |

## Usage Example

```csharp
// Typical usage of StateSyncWidget (Widget)
// 声明/访问一个 StateSyncWidget
var widget = root.GetChild("stateSyncWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
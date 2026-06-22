<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoostCohesionPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoostCohesionPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GatherArmy
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoostCohesionPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GatherArmy/BoostCohesionPopupWidget.cs`

## Overview

`BoostCohesionPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClosePopupButton` | `public ButtonWidget ClosePopupButton { get; set; }` |

## Key Methods

### ClosePopup
```csharp
public void ClosePopup(Widget widget)
```

## Usage Example

```csharp
// Typical usage of BoostCohesionPopupWidget (Widget)
// 声明/访问一个 BoostCohesionPopupWidget
var widget = root.GetChild("boostCohesionPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
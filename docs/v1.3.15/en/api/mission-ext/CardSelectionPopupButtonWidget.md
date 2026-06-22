<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CardSelectionPopupButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CardSelectionPopupButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`

## Overview

`CardSelectionPopupButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer { get; set; }` |

## Key Methods

### SetState
```csharp
public override void SetState(string stateName)
```

## Usage Example

```csharp
// Typical usage of CardSelectionPopupButtonWidget (Widget)
// 声明/访问一个 CardSelectionPopupButtonWidget
var widget = root.GetChild("cardSelectionPopupButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
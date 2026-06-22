<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPerkContainerPanelWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkContainerPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`

## Overview

`MultiplayerPerkContainerPanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst { get; set; }` |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond { get; set; }` |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird { get; set; }` |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget { get; set; }` |

## Key Methods

### PerkSelected
```csharp
public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)
```

## Usage Example

```csharp
// Typical usage of MultiplayerPerkContainerPanelWidget (Widget)
// 声明/访问一个 MultiplayerPerkContainerPanelWidget
var widget = root.GetChild("multiplayerPerkContainerPanelWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
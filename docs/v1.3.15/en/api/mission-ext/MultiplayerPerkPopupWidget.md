<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPerkPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerPerkPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkPopupWidget.cs`

## Overview

`MultiplayerPerkPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowAboveContainer` | `public bool ShowAboveContainer { get; set; }` |

## Key Methods

### SetPopupPerksContainer
```csharp
public void SetPopupPerksContainer(MultiplayerPerkContainerPanelWidget container)
```

## Usage Example

```csharp
// Typical usage of MultiplayerPerkPopupWidget (Widget)
// 声明/访问一个 MultiplayerPerkPopupWidget
var widget = root.GetChild("multiplayerPerkPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
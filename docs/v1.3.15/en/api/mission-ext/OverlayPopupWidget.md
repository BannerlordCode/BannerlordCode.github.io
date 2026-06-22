<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverlayPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OverlayPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverlayPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/OverlayPopupWidget.cs`

## Overview

`OverlayPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget { get; set; }` |
| `LocationTextWidget` | `public TextWidget LocationTextWidget { get; set; }` |
| `NameTextWidget` | `public TextWidget NameTextWidget { get; set; }` |
| `PowerTextWidget` | `public TextWidget PowerTextWidget { get; set; }` |
| `DescriptionTextWidget` | `public TextWidget DescriptionTextWidget { get; set; }` |
| `RelationBackgroundWidget` | `public Widget RelationBackgroundWidget { get; set; }` |
| `ActionButtonsList` | `public ListPanel ActionButtonsList { get; set; }` |
| `CloseButton` | `public ButtonWidget CloseButton { get; set; }` |

## Key Methods

### SetCurrentCharacter
```csharp
public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)
```

### OnCloseButtonClick
```csharp
public void OnCloseButtonClick(Widget widget)
```

## Usage Example

```csharp
// Typical usage of OverlayPopupWidget (Widget)
// 声明/访问一个 OverlayPopupWidget
var widget = root.GetChild("overlayPopupWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)
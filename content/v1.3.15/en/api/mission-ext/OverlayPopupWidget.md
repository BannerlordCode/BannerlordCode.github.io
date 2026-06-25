---
title: "OverlayPopupWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OverlayPopupWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `OverlayPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public void SetCurrentCharacter(GameMenuPartyItemButtonWidget item)`

**Purpose:** Sets the value or state of `current character`.

### OnCloseButtonClick
`public void OnCloseButtonClick(Widget widget)`

**Purpose:** Called when the `close button click` event is raised.

## Usage Example

```csharp
var widget = new OverlayPopupWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
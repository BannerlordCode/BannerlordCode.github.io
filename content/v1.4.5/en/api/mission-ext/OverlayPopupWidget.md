---
title: "OverlayPopupWidget"
description: "Auto-generated class reference for OverlayPopupWidget."
---
# OverlayPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OverlayPopupWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay/OverlayPopupWidget.cs`

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

**Purpose:** **Purpose:** Assigns a new value to current character and updates the object's internal state.

```csharp
// Obtain an instance of OverlayPopupWidget from the subsystem API first
OverlayPopupWidget overlayPopupWidget = ...;
overlayPopupWidget.SetCurrentCharacter(item);
```

### OnCloseButtonClick
`public void OnCloseButtonClick(Widget widget)`

**Purpose:** **Purpose:** Invoked when the close button click event is raised.

```csharp
// Obtain an instance of OverlayPopupWidget from the subsystem API first
OverlayPopupWidget overlayPopupWidget = ...;
overlayPopupWidget.OnCloseButtonClick(widget);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OverlayPopupWidget widget = ...;
```

## See Also

- [Area Index](../)
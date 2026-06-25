---
title: "MultiplayerPerkContainerPanelWidget"
description: "Auto-generated class reference for MultiplayerPerkContainerPanelWidget."
---
# MultiplayerPerkContainerPanelWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkContainerPanelWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkContainerPanelWidget.cs`

## Overview

`MultiplayerPerkContainerPanelWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPerkContainerPanelWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PopupWidgetFirst` | `public MultiplayerPerkPopupWidget PopupWidgetFirst { get; set; }` |
| `PopupWidgetSecond` | `public MultiplayerPerkPopupWidget PopupWidgetSecond { get; set; }` |
| `PopupWidgetThird` | `public MultiplayerPerkPopupWidget PopupWidgetThird { get; set; }` |
| `TroopTupleBodyWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget TroopTupleBodyWidget { get; set; }` |

## Key Methods

### PerkSelected
`public void PerkSelected(MultiplayerPerkItemToggleWidget selectedItem)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerPerkContainerPanelWidget from the subsystem API first
MultiplayerPerkContainerPanelWidget multiplayerPerkContainerPanelWidget = ...;
multiplayerPerkContainerPanelWidget.PerkSelected(selectedItem);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerPerkContainerPanelWidget widget = ...;
```

## See Also

- [Area Index](../)
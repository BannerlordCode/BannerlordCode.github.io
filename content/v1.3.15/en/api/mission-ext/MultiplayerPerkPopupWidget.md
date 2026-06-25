---
title: "MultiplayerPerkPopupWidget"
description: "Auto-generated class reference for MultiplayerPerkPopupWidget."
---
# MultiplayerPerkPopupWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkPopupWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkPopupWidget.cs`

## Overview

`MultiplayerPerkPopupWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPerkPopupWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowAboveContainer` | `public bool ShowAboveContainer { get; set; }` |

## Key Methods

### SetPopupPerksContainer
`public void SetPopupPerksContainer(MultiplayerPerkContainerPanelWidget container)`

**Purpose:** **Purpose:** Assigns a new value to popup perks container and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerPerkPopupWidget from the subsystem API first
MultiplayerPerkPopupWidget multiplayerPerkPopupWidget = ...;
multiplayerPerkPopupWidget.SetPopupPerksContainer(container);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerPerkPopupWidget widget = ...;
```

## See Also

- [Area Index](../)
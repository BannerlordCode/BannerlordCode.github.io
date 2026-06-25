---
title: "MultiplayerPerkItemToggleWidget"
description: "Auto-generated class reference for MultiplayerPerkItemToggleWidget."
---
# MultiplayerPerkItemToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**Base:** `ToggleButtonWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks/MultiplayerPerkItemToggleWidget.cs`

## Overview

`MultiplayerPerkItemToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPerkItemToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconType` | `public string IconType { get; set; }` |
| `IconWidget` | `public BrushWidget IconWidget { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerPerkItemToggleWidget widget = ...;
```

## See Also

- [Area Index](../)
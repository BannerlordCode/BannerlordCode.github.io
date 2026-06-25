---
title: "MultiplayerFactionBannerWidget"
description: "Auto-generated class reference for MultiplayerFactionBannerWidget."
---
# MultiplayerFactionBannerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerFactionBannerWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerFactionBannerWidget.cs`

## Overview

`MultiplayerFactionBannerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerFactionBannerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureColor1` | `public Color CultureColor1 { get; set; }` |
| `CultureColor2` | `public Color CultureColor2 { get; set; }` |
| `FactionCode` | `public string FactionCode { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## Key Methods

### MultiplayerFactionBannerWidget
`public class MultiplayerFactionBannerWidget(UIContext context)`

**Purpose:** Executes the MultiplayerFactionBannerWidget logic.

```csharp
// Obtain an instance of MultiplayerFactionBannerWidget from the subsystem API first
MultiplayerFactionBannerWidget multiplayerFactionBannerWidget = ...;
var result = multiplayerFactionBannerWidget.MultiplayerFactionBannerWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerFactionBannerWidget widget = ...;
```

## See Also

- [Area Index](../)
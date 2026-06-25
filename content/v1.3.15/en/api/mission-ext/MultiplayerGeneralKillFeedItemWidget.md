---
title: "MultiplayerGeneralKillFeedItemWidget"
description: "Auto-generated class reference for MultiplayerGeneralKillFeedItemWidget."
---
# MultiplayerGeneralKillFeedItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerGeneralKillFeedItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/KillFeed/MultiplayerGeneralKillFeedItemWidget.cs`

## Overview

`MultiplayerGeneralKillFeedItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerGeneralKillFeedItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TimeSinceCreation` | `public float TimeSinceCreation { get; }` |

## Key Methods

### SetSpeedModifier
`public void SetSpeedModifier(float newSpeed)`

**Purpose:** **Purpose:** Assigns a new value to speed modifier and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerGeneralKillFeedItemWidget from the subsystem API first
MultiplayerGeneralKillFeedItemWidget multiplayerGeneralKillFeedItemWidget = ...;
multiplayerGeneralKillFeedItemWidget.SetSpeedModifier(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerGeneralKillFeedItemWidget widget = ...;
```

## See Also

- [Area Index](../)
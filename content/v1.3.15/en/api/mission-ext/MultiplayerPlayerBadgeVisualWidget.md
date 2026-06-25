---
title: "MultiplayerPlayerBadgeVisualWidget"
description: "Auto-generated class reference for MultiplayerPlayerBadgeVisualWidget."
---
# MultiplayerPlayerBadgeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPlayerBadgeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MultiplayerPlayerBadgeVisualWidget.cs`

## Overview

`MultiplayerPlayerBadgeVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerPlayerBadgeVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BadgeId` | `public string BadgeId { get; set; }` |

## Key Methods

### SetForcedSize
`public void SetForcedSize(float width, float height)`

**Purpose:** Assigns a new value to forced size and updates the object's internal state.

```csharp
// Obtain an instance of MultiplayerPlayerBadgeVisualWidget from the subsystem API first
MultiplayerPlayerBadgeVisualWidget multiplayerPlayerBadgeVisualWidget = ...;
multiplayerPlayerBadgeVisualWidget.SetForcedSize(0, 0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerPlayerBadgeVisualWidget widget = ...;
```

## See Also

- [Area Index](../)
---
title: "MultiplayerTeamPlayerAvatarButtonWidget"
description: "Auto-generated class reference for MultiplayerTeamPlayerAvatarButtonWidget."
---
# MultiplayerTeamPlayerAvatarButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerTeamPlayerAvatarButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer/MultiplayerTeamPlayerAvatarButtonWidget.cs`

## Overview

`MultiplayerTeamPlayerAvatarButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerTeamPlayerAvatarButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDead` | `public bool IsDead { get; set; }` |
| `DeathAlphaFactor` | `public float DeathAlphaFactor { get; set; }` |
| `AvatarImage` | `public ImageIdentifierWidget AvatarImage { get; set; }` |

## Key Methods

### MultiplayerTeamPlayerAvatarButtonWidget
`public class MultiplayerTeamPlayerAvatarButtonWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MultiplayerTeamPlayerAvatarButtonWidget from the subsystem API first
MultiplayerTeamPlayerAvatarButtonWidget multiplayerTeamPlayerAvatarButtonWidget = ...;
var result = multiplayerTeamPlayerAvatarButtonWidget.MultiplayerTeamPlayerAvatarButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerTeamPlayerAvatarButtonWidget widget = ...;
```

## See Also

- [Area Index](../)
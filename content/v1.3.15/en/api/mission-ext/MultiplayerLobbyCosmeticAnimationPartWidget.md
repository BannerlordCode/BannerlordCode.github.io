---
title: "MultiplayerLobbyCosmeticAnimationPartWidget"
description: "Auto-generated class reference for MultiplayerLobbyCosmeticAnimationPartWidget."
---
# MultiplayerLobbyCosmeticAnimationPartWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLobbyCosmeticAnimationPartWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyCosmeticAnimationPartWidget.cs`

## Overview

`MultiplayerLobbyCosmeticAnimationPartWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerLobbyCosmeticAnimationPartWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeAnimationParameters
`public void InitializeAnimationParameters()`

**Purpose:** Prepares the resources, state, or bindings required by animation parameters.

```csharp
// Obtain an instance of MultiplayerLobbyCosmeticAnimationPartWidget from the subsystem API first
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.InitializeAnimationParameters();
```

### StartAnimation
`public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)`

**Purpose:** Starts the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyCosmeticAnimationPartWidget from the subsystem API first
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.StartAnimation(0, 0, 0);
```

### StopAnimation
`public void StopAnimation()`

**Purpose:** Stops the animation flow or state machine.

```csharp
// Obtain an instance of MultiplayerLobbyCosmeticAnimationPartWidget from the subsystem API first
MultiplayerLobbyCosmeticAnimationPartWidget multiplayerLobbyCosmeticAnimationPartWidget = ...;
multiplayerLobbyCosmeticAnimationPartWidget.StopAnimation();
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerLobbyCosmeticAnimationPartWidget widget = ...;
```

## See Also

- [Area Index](../)
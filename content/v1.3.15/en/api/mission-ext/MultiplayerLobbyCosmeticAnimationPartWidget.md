---
title: "MultiplayerLobbyCosmeticAnimationPartWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLobbyCosmeticAnimationPartWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `animation parameters`.

### StartAnimation
`public void StartAnimation(float alphaChangeDuration, float minAlpha, float maxAlpha)`

**Purpose:** Handles logic related to `start animation`.

### StopAnimation
`public void StopAnimation()`

**Purpose:** Handles logic related to `stop animation`.

## Usage Example

```csharp
var widget = new MultiplayerLobbyCosmeticAnimationPartWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "MultiplayerEndOfRoundUIHandler"
description: "Auto-generated class reference for MultiplayerEndOfRoundUIHandler."
---
# MultiplayerEndOfRoundUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerEndOfRoundUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.View/TaleWorlds.MountAndBlade.Multiplayer.View.MissionViews/MultiplayerEndOfRoundUIHandler.cs`

## Overview

`MultiplayerEndOfRoundUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerEndOfRoundUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerEndOfRoundUIHandler>();
```

## See Also

- [Area Index](../)
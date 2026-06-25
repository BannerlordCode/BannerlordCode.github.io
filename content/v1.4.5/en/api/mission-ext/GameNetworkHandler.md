---
title: "GameNetworkHandler"
description: "Auto-generated class reference for GameNetworkHandler."
---
# GameNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNetworkHandler : IGameNetworkHandler`
**Base:** `IGameNetworkHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/GameNetworkHandler.cs`

## Overview

`GameNetworkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameNetworkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<GameNetworkHandler>();
```

## See Also

- [Area Index](../)
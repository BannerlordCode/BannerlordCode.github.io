---
title: "GameNetworkHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNetworkHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNetworkHandler : IGameNetworkHandler`
**Base:** `IGameNetworkHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/GameNetworkHandler.cs`

## Overview

`GameNetworkHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameNetworkHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new GameNetworkHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
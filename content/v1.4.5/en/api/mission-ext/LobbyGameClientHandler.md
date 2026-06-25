---
title: "LobbyGameClientHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyGameClientHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyGameClientHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyGameClientHandler : ILobbyClientSessionHandler`
**Base:** `ILobbyClientSessionHandler`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameClientHandler.cs`

## Overview

`LobbyGameClientHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `LobbyGameClientHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LobbyState` | `public LobbyState LobbyState { get; set; }` |

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new LobbyGameClientHandler());
```

## See Also

- [Complete Class Catalog](../catalog)
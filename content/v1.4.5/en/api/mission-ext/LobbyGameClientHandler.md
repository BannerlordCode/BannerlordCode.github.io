---
title: "LobbyGameClientHandler"
description: "Auto-generated class reference for LobbyGameClientHandler."
---
# LobbyGameClientHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyGameClientHandler : ILobbyClientSessionHandler`
**Base:** `ILobbyClientSessionHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameClientHandler.cs`

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
var behavior = Mission.Current.GetMissionBehavior<LobbyGameClientHandler>();
```

## See Also

- [Area Index](../)
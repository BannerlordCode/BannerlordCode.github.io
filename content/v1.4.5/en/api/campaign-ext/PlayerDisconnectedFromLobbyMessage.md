---
title: "PlayerDisconnectedFromLobbyMessage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerDisconnectedFromLobbyMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerDisconnectedFromLobbyMessage

**Namespace:** Messages.FromCustomBattleServerManager.ToCustomBattleServer
**Module:** Messages.FromCustomBattleServerManager
**Type:** `public class PlayerDisconnectedFromLobbyMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromCustomBattleServerManager.ToCustomBattleServer/PlayerDisconnectedFromLobbyMessage.cs`

## Overview

`PlayerDisconnectedFromLobbyMessage` lives in `Messages.FromCustomBattleServerManager.ToCustomBattleServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromCustomBattleServerManager.ToCustomBattleServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |

## Usage Example

```csharp
var example = new PlayerDisconnectedFromLobbyMessage();
```

## See Also

- [Complete Class Catalog](../catalog)
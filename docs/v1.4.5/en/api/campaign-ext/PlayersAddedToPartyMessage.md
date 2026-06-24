<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayersAddedToPartyMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayersAddedToPartyMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class PlayersAddedToPartyMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.FromLobbyServer.ToClient/PlayersAddedToPartyMessage.cs`

## Overview

`PlayersAddedToPartyMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddPlayer
`public void AddPlayer(PlayerId playerId, string playerName, bool isPartyLeader)`

**Purpose:** Adds `player` to the current collection or state.

### AddInvitedPlayer
`public void AddInvitedPlayer(PlayerId playerId, string playerName)`

**Purpose:** Adds `invited player` to the current collection or state.

## Usage Example

```csharp
var value = new PlayersAddedToPartyMessage();
value.AddPlayer(playerId, "example", false);
```

## See Also

- [Complete Class Catalog](../catalog)
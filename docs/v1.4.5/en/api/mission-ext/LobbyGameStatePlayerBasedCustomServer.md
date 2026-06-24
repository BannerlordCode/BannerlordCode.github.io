<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyGameStatePlayerBasedCustomServer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyGameStatePlayerBasedCustomServer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class LobbyGameStatePlayerBasedCustomServer : LobbyGameState`
**Base:** `LobbyGameState`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameStatePlayerBasedCustomServer.cs`

## Overview

`LobbyGameStatePlayerBasedCustomServer` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetStartingParameters
`public void SetStartingParameters(LobbyGameClientHandler lobbyGameClientHandler)`

**Purpose:** Sets the value or state of `starting parameters`.

## Usage Example

```csharp
var value = new LobbyGameStatePlayerBasedCustomServer();
value.SetStartingParameters(lobbyGameClientHandler);
```

## See Also

- [Complete Class Catalog](../catalog)
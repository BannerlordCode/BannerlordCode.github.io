<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyGameStateCommunityClient`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyGameStateCommunityClient

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class LobbyGameStateCommunityClient : LobbyGameState`
**Base:** `LobbyGameState`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameStateCommunityClient.cs`

## Overview

`LobbyGameStateCommunityClient` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetStartingParameters
`public void SetStartingParameters(CommunityClient communityClient, string address, int port, int peerIndex, int sessionKey)`

**Purpose:** Sets the value or state of `starting parameters`.

## Usage Example

```csharp
var value = new LobbyGameStateCommunityClient();
value.SetStartingParameters(communityClient, "example", 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "LobbyNetworkComponent"
description: "Auto-generated class reference for LobbyNetworkComponent."
---
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## Overview

`LobbyNetworkComponent` is a `UdpNetworkComponent` — a *network*-side component, not a mission behaviour and not attached to any agent. Its job is to get a multiplayer lobby's player identity onto the `VirtualPlayer` object every peer agrees on, in both directions: reading `PlayerData` off the connecting peer's connection info on the server, and broadcasting `InitializeLobbyPeer` so clients accept an id and avatar from the server rather than trusting their own.

In this tree it has **no creation path**. `LobbyNetworkComponent` is never referenced outside its own declaration, and the only API that constructs a `UdpNetworkComponent` is `GameNetwork.AddNetworkComponent<T>()` (`GameNetwork.cs:1010`), which itself has no caller anywhere in `bannerlord-1.3.0`. It does, however, define the only interesting constant on the type: `public const int MaxForcedAvatarIndex = 100` (`LobbyNetworkComponent.cs:95`), which is the ceiling for the avatar index the server may impose.

Its lifetime, if you do add it, is the network session: `UdpNetworkComponent`'s protected constructor builds a message-handler container and immediately calls the virtual `AddRemoveMessageHandlers` from its own base constructor (`UdpNetworkComponent.cs:11`, `UdpNetworkComponent.cs:12`) — which is the reason the override here must be safe to run before the derived constructor body.

## Mental Model

The registration is role-conditional. `AddRemoveMessageHandlers` only registers `InitializeLobbyPeer` when `GameNetwork.IsClientOrReplay` (`LobbyNetworkComponent.cs:16`), so a dedicated server registers nothing at all and receives nothing. The server-side path is the pull side, `HandleEarlyNewClientAfterLoadingFinished`.

The two sides set the same seven fields from different sources. Server-side, from the connecting peer's `PlayerData` connection parameter: `PlayerId`, `Sigil` into `BannerCode`, `BodyProperties`, `IsFemale`, `ShownBadgeIndex` into `ChosenBadgeIndex`, `UsedCosmetics` from a second parameter, and `IsMuted` onto the **communicator** rather than the virtual player (`LobbyNetworkComponent.cs:42` through `LobbyNetworkComponent.cs:48`). Client-side, from the received message: `ProvidedId`, `BannerCode`, `BodyProperties`, `IsFemale`, `ChosenBadgeIndex`, `ForcedAvatarIndex` (`LobbyNetworkComponent.cs:28` through `LobbyNetworkComponent.cs:33`). The asymmetry is the point: the client never gets to choose its own id or avatar, and `ForcedAvatarIndex` only ever travels server-to-client.

`HandleNewClientAfterLoadingFinished` is the tricky one, and its ordering is deliberate. It first does one `BeginBroadcastModuleEvent` / `WriteMessage` / `EndBroadcastModuleEvent` with `DontSendToPeers` (`LobbyNetworkComponent.cs:55` through `LobbyNetworkComponent.cs:57`) — that records the message into the mission replay **without** sending it. Then it loops `NetworkPeersIncludingDisconnectedPeers` and sends pairwise, skipping already-synchronized peers and `MyPeer` (`LobbyNetworkComponent.cs:60`, `LobbyNetworkComponent.cs:63`). Inside the loop, the peer receives the *other* peer, and separately, if the new peer is not the server peer, the new peer receives each existing peer back (`LobbyNetworkComponent.cs:69`, `LobbyNetworkComponent.cs:72`). So the new client learns about everyone, and everyone learns about the new client, without a single broadcast — because at lobby time nobody is synchronized yet.

The three remaining overrides are empty: `HandleLateNewClientAfterLoadingFinished` (`LobbyNetworkComponent.cs:81`), `HandlePlayerDisconnect` (`LobbyNetworkComponent.cs:86`) and `OnUdpNetworkHandlerTick` (`LobbyNetworkComponent.cs:91`). Nothing ever unsets the virtual-player fields on disconnect, so a peer that leaves and rejoins in the same session is re-initialised from scratch rather than cleared.

## How to use

**Getting it.** Add it as a network component from your session setup. Nothing in 1.3.0 does it for you.

```csharp
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    public override void OnGameInitializationFinished()
    {
        base.OnGameInitializationFinished();
        // The only API that constructs a UdpNetworkComponent (GameNetwork.cs:1010);
        // it registers the message handlers inside its own base constructor.
        LobbyNetworkComponent component = GameNetwork.AddNetworkComponent<LobbyNetworkComponent>();
        Debug.Print("lobby component live: " + component.MaxForcedAvatarIndex, false);
    }
}
```

Read a lobby identity back out of the static tables once a session exists:

```csharp
NetworkCommunicator mine = GameNetwork.MyPeer;
if (mine != null && mine.VirtualPlayer != null)
{
    VirtualPlayer me = GameNetwork.VirtualPlayers[mine.VirtualPlayer.Index];
    Debug.Print("id=" + me.Id + " female=" + me.IsFemale
                + " badge=" + me.ChosenBadgeIndex, false);
}
```

To extend the lobby handshake, override the registration and add your own server-to-client message — and note that your handler is only ever invoked when the module is a client or replay, mirroring the stock guard:

```csharp
public class MyLobbyComponent : LobbyNetworkComponent
{
    protected override void AddRemoveMessageHandlers(
        GameNetwork.NetworkMessageHandlerRegistererContainer registerer)
    {
        base.AddRemoveMessageHandlers(registerer);   // keeps InitializeLobbyPeer on clients
        if (GameNetwork.IsClientOrReplay)
        {
            registerer.RegisterBaseHandler<MyLobbyReady>(
                new GameNetworkMessage.ServerMessageHandlerDelegate<GameNetworkMessage>(OnReady));
        }
    }

    private void OnReady(GameNetworkMessage msg) { }
}
```

**The mistake that trusts a client-chosen avatar.** Writing the avatar index on the client side after `InitializeLobbyPeer` has already applied the server's `ForcedAvatarIndex` (`LobbyNetworkComponent.cs:33`). The message exists precisely so the server's value wins, and the client-side loop that fills in peers (`LobbyNetworkComponent.cs:72`) will overwrite your local edit on the next handshake anyway — so the value you set reverts without any error, and the player's chosen avatar silently snaps back to the server's.

## Key Methods

### HandleEarlyNewClientAfterLoadingFinished
`public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with early new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleEarlyNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterLoadingFinished
`public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleNewClientAfterLoadingFinished(networkPeer);
```

### HandleLateNewClientAfterLoadingFinished
`public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with late new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleLateNewClientAfterLoadingFinished(networkPeer);
```

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.OnUdpNetworkHandlerTick(0);
```

## Usage Example

The `agent.GetComponent<LobbyNetworkComponent>()` line previously on this page cannot compile: `Agent.GetComponent<T>()` is constrained to `where T : AgentComponent` (`Agent.cs:3107`) and this type is a `UdpNetworkComponent`. It is created through the network-component factory instead.

```csharp
var component = GameNetwork.AddNetworkComponent<LobbyNetworkComponent>();
```

## See Also

- [MissionBattleSchedulerClientComponent — the other client-side lobby piece, a mission behaviour instead](../MissionBattleSchedulerClientComponent)
- [IGameNetworkHandler — the higher-level session callback contract](../IGameNetworkHandler)
- [MultiplayerRoundComponent — another multiplayer-only mission behaviour](../MultiplayerRoundComponent)
- [MissionNetworkComponent — the other side of the multiplayer behaviour stack](../MissionNetworkComponent)
- [Area Index](../)
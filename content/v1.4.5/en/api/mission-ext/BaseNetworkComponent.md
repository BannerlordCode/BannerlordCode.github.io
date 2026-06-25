---
title: "BaseNetworkComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BaseNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BaseNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents/BaseNetworkComponent.cs`

## Overview

`BaseNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `BaseNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClientIntermissionState` | `public MultiplayerIntermissionState ClientIntermissionState { get; }` |
| `CurrentIntermissionTimer` | `public float CurrentIntermissionTimer { get; }` |
| `DisplayingWelcomeMessage` | `public bool DisplayingWelcomeMessage { get; }` |

## Key Methods

### WelcomeMessageReceivedDelegate
`public delegate void WelcomeMessageReceivedDelegate(string messageText)`

**Purpose:** Handles logic related to `welcome message received delegate`.

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Called when the `udp network handler tick` event is raised.

### HandleNewClientConnect
`public override void HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo)`

**Purpose:** Handles the `new client connect` event or callback.

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `player disconnect` event or callback.

### IntermissionCastVote
`public void IntermissionCastVote(string itemID, int voteCount)`

**Purpose:** Handles logic related to `intermission cast vote`.

### HandleNewClientAfterSynchronized
`public override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `new client after synchronized` event or callback.

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** Called when the `udp network handler close` event is raised.

### SetDisplayingWelcomeMessage
`public void SetDisplayingWelcomeMessage(bool displaying)`

**Purpose:** Sets the value or state of `displaying welcome message`.

## Usage Example

```csharp
var component = agent.GetComponent<BaseNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
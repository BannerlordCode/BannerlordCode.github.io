---
title: "BaseNetworkComponent"
description: "Auto-generated class reference for BaseNetworkComponent."
---
# BaseNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents/BaseNetworkComponent.cs`

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

**Purpose:** **Purpose:** Executes the WelcomeMessageReceivedDelegate logic.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.WelcomeMessageReceivedDelegate("example");
```

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** **Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.OnUdpNetworkHandlerTick(0);
```

### HandleNewClientConnect
`public override void HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo)`

**Purpose:** **Purpose:** Executes the response logic associated with new client connect.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandleNewClientConnect(playerConnectionInfo);
```

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** **Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### IntermissionCastVote
`public void IntermissionCastVote(string itemID, int voteCount)`

**Purpose:** **Purpose:** Executes the IntermissionCastVote logic.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.IntermissionCastVote("example", 0);
```

### HandleNewClientAfterSynchronized
`public override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** **Purpose:** Executes the response logic associated with new client after synchronized.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandleNewClientAfterSynchronized(networkPeer);
```

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** **Purpose:** Invoked when the udp network handler close event is raised.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.OnUdpNetworkHandlerClose();
```

### SetDisplayingWelcomeMessage
`public void SetDisplayingWelcomeMessage(bool displaying)`

**Purpose:** **Purpose:** Assigns a new value to displaying welcome message and updates the object's internal state.

```csharp
// Obtain an instance of BaseNetworkComponent from the subsystem API first
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.SetDisplayingWelcomeMessage(false);
```

## Usage Example

```csharp
var component = agent.GetComponent<BaseNetworkComponent>();
```

## See Also

- [Area Index](../)
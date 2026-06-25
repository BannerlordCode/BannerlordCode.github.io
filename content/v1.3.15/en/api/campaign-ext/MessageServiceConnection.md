---
title: "MessageServiceConnection"
description: "Auto-generated class reference for MessageServiceConnection."
---
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection`
**Base:** none
**File:** `TaleWorlds.Network/MessageServiceConnection.cs`

## Overview

`MessageServiceConnection` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |

## Key Methods

### SendAsync
`public abstract Task SendAsync(string text)`

**Purpose:** **Purpose:** Executes the SendAsync logic.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.SendAsync("example");
```

### Init
`public abstract void Init(string address, string token)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.Init("example", "example");
```

### RegisterProxyClient
`public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient)`

**Purpose:** **Purpose:** Registers proxy client with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.RegisterProxyClient("example", playerClient);
```

### StartAsync
`public abstract Task StartAsync()`

**Purpose:** **Purpose:** Starts the async flow or state machine.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.StartAsync();
```

### StopAsync
`public abstract Task StopAsync()`

**Purpose:** **Purpose:** Stops the async flow or state machine.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.StopAsync();
```

### ClosedDelegate
`public delegate Task ClosedDelegate()`

**Purpose:** **Purpose:** Closes the resource or UI associated with d delegate.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
var result = messageServiceConnection.ClosedDelegate();
```

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)`

**Purpose:** **Purpose:** Executes the StateChangedDelegate logic.

```csharp
// Obtain an instance of MessageServiceConnection from the subsystem API first
MessageServiceConnection messageServiceConnection = ...;
messageServiceConnection.StateChangedDelegate(oldState, newState);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MessageServiceConnection instance = ...;
```

## See Also

- [Area Index](../)
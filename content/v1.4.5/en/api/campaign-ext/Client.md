---
title: "Client"
description: "Auto-generated class reference for Client."
---
# Client

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class Client<T> : DiamondClientApplicationObject, IClient where T : Client<T>`
**Base:** `DiamondClientApplicationObject`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/Client.cs`

## Overview

`Client` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInCriticalState` | `public bool IsInCriticalState { get; set; }` |
| `AccessProvider` | `public ILoginAccessProvider AccessProvider { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
client.Update();
```

### HandleMessage
`public void HandleMessage(Message message)`

**Purpose:** Executes the response logic associated with `message`.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
client.HandleMessage(message);
```

### OnConnected
`public virtual void OnConnected()`

**Purpose:** Invoked when the `connected` event is raised.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
client.OnConnected();
```

### OnCantConnect
`public virtual void OnCantConnect()`

**Purpose:** Invoked when the `cant connect` event is raised.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
client.OnCantConnect();
```

### OnDisconnected
`public virtual void OnDisconnected()`

**Purpose:** Invoked when the `disconnected` event is raised.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
client.OnDisconnected();
```

### CheckConnection
`public Task<bool> CheckConnection()`

**Purpose:** Verifies whether `connection` holds true for the current object.

```csharp
// Obtain an instance of Client from the subsystem API first
Client client = ...;
var result = client.CheckConnection();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
Client instance = ...;
```

## See Also

- [Area Index](../)
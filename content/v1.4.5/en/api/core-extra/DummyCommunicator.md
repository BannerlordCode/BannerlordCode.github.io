---
title: "DummyCommunicator"
description: "Auto-generated class reference for DummyCommunicator."
---
# DummyCommunicator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DummyCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/DummyCommunicator.cs`

## Overview

`DummyCommunicator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |

## Key Methods

### OnSynchronizeComponentTo
`public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)`

**Purpose:** Invoked when the `synchronize component to` event is raised.

```csharp
// Obtain an instance of DummyCommunicator from the subsystem API first
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnSynchronizeComponentTo(peer, component);
```

### OnAddComponent
`public void OnAddComponent(PeerComponent component)`

**Purpose:** Invoked when the `add component` event is raised.

```csharp
// Obtain an instance of DummyCommunicator from the subsystem API first
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnAddComponent(component);
```

### OnRemoveComponent
`public void OnRemoveComponent(PeerComponent component)`

**Purpose:** Invoked when the `remove component` event is raised.

```csharp
// Obtain an instance of DummyCommunicator from the subsystem API first
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnRemoveComponent(component);
```

### CreateAsServer
`public static DummyCommunicator CreateAsServer(int index, string name)`

**Purpose:** Constructs a new `as server` entity and returns it to the caller.

```csharp
// Static call; no instance required
DummyCommunicator.CreateAsServer(0, "example");
```

### CreateAsClient
`public static DummyCommunicator CreateAsClient(string name, int index)`

**Purpose:** Constructs a new `as client` entity and returns it to the caller.

```csharp
// Static call; no instance required
DummyCommunicator.CreateAsClient("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DummyCommunicator dummyCommunicator = ...;
dummyCommunicator.OnSynchronizeComponentTo(peer, component);
```

## See Also

- [Area Index](../)
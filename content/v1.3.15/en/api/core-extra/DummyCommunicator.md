---
title: "DummyCommunicator"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DummyCommunicator`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DummyCommunicator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class DummyCommunicator : ICommunicator`
**Base:** `ICommunicator`
**File:** `TaleWorlds.Core/DummyCommunicator.cs`

## Overview

`DummyCommunicator` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VirtualPlayer` | `public VirtualPlayer VirtualPlayer { get; }` |
| `IsNetworkActive` | `public bool IsNetworkActive { get; }` |
| `IsConnectionActive` | `public bool IsConnectionActive { get; set; }` |
| `IsServerPeer` | `public bool IsServerPeer { get; set; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; set; }` |

## Key Methods

### OnSynchronizeComponentTo
`public void OnSynchronizeComponentTo(VirtualPlayer peer, PeerComponent component)`

**Purpose:** Called when the `synchronize component to` event is raised.

### OnAddComponent
`public void OnAddComponent(PeerComponent component)`

**Purpose:** Called when the `add component` event is raised.

### OnRemoveComponent
`public void OnRemoveComponent(PeerComponent component)`

**Purpose:** Called when the `remove component` event is raised.

### CreateAsServer
`public static DummyCommunicator CreateAsServer(int index, string name)`

**Purpose:** Creates a new `as server` instance or object.

### CreateAsClient
`public static DummyCommunicator CreateAsClient(string name, int index)`

**Purpose:** Creates a new `as client` instance or object.

## Usage Example

```csharp
var value = new DummyCommunicator();
value.OnSynchronizeComponentTo(peer, component);
```

## See Also

- [Complete Class Catalog](../catalog)
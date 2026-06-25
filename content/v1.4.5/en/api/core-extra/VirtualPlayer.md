---
title: "VirtualPlayer"
description: "Auto-generated class reference for VirtualPlayer."
---
# VirtualPlayer

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class VirtualPlayer`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/VirtualPlayer.cs`

## Overview

`VirtualPlayer` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCode` | `public string BannerCode { get; set; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Id` | `public PlayerId Id { get; }` |
| `Index` | `public int Index { get; }` |
| `UserName` | `public string UserName { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; set; }` |

## Key Methods

### Reset
`public static void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Static call; no instance required
VirtualPlayer.Reset();
```

### AddComponent
`public PeerComponent AddComponent(Type peerComponentType)`

**Purpose:** Adds `component` to the current collection or state.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.AddComponent(peerComponentType);
```

### AddComponent
`public PeerComponent AddComponent(uint componentId)`

**Purpose:** Adds `component` to the current collection or state.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.AddComponent(0);
```

### GetComponent
`public PeerComponent GetComponent(uint componentId)`

**Purpose:** Reads and returns the `component` value held by the current object.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.GetComponent(0);
```

### GetComponent
`public PeerComponent GetComponent(Type peerComponentType)`

**Purpose:** Reads and returns the `component` value held by the current object.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
var result = virtualPlayer.GetComponent(peerComponentType);
```

### RemoveComponent
`public void RemoveComponent(PeerComponent component)`

**Purpose:** Removes `component` from the current collection or state.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
virtualPlayer.RemoveComponent(component);
```

### OnDisconnect
`public void OnDisconnect()`

**Purpose:** Invoked when the `disconnect` event is raised.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
virtualPlayer.OnDisconnect();
```

### SynchronizeComponentsTo
`public void SynchronizeComponentsTo(VirtualPlayer peer)`

**Purpose:** Synchronizes `hronize components to` across the relevant contexts or systems.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
virtualPlayer.SynchronizeComponentsTo(peer);
```

### UpdateIndexForReconnectingPlayer
`public void UpdateIndexForReconnectingPlayer(int playerIndex)`

**Purpose:** Recalculates and stores the latest representation of `index for reconnecting player`.

```csharp
// Obtain an instance of VirtualPlayer from the subsystem API first
VirtualPlayer virtualPlayer = ...;
virtualPlayer.UpdateIndexForReconnectingPlayer(0);
```

## Usage Example

```csharp
VirtualPlayer.Reset();
```

## See Also

- [Area Index](../)
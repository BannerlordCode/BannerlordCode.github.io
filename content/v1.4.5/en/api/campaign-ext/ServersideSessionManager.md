---
title: "ServersideSessionManager"
description: "Auto-generated class reference for ServersideSessionManager."
---
# ServersideSessionManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class ServersideSessionManager`
**Base:** none
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/ServersideSessionManager.cs`

## Overview

`ServersideSessionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ServersideSessionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerAliveCoeff` | `public float PeerAliveCoeff { get; set; }` |

## Key Methods

### Activate
`public void Activate(ushort port, ThreadType threadType = ThreadType.Single, int readWriteThreadCount = 1)`

**Purpose:** Activates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of ServersideSessionManager from the subsystem API first
ServersideSessionManager serversideSessionManager = ...;
serversideSessionManager.Activate(0, threadType.Single, 0);
```

### GetPeer
`public ServersideSession GetPeer(int peerIndex)`

**Purpose:** Reads and returns the `peer` value held by the current object.

```csharp
// Obtain an instance of ServersideSessionManager from the subsystem API first
ServersideSessionManager serversideSessionManager = ...;
var result = serversideSessionManager.GetPeer(0);
```

### Tick
`public virtual void Tick()`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of ServersideSessionManager from the subsystem API first
ServersideSessionManager serversideSessionManager = ...;
serversideSessionManager.Tick();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ServersideSessionManager instance = ...;
```

## See Also

- [Area Index](../)
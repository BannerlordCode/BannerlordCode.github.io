---
title: "PeerComponent"
description: "Auto-generated class reference for PeerComponent."
---
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/PeerComponent.cs`

## Overview

`PeerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `PeerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get; set; }` |
| `TypeId` | `public uint TypeId { get; set; }` |

## Key Methods

### Initialize
`public virtual void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PeerComponent from the subsystem API first
PeerComponent peerComponent = ...;
peerComponent.Initialize();
```

### OnInitialize
`public virtual void OnInitialize()`

**Purpose:** **Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of PeerComponent from the subsystem API first
PeerComponent peerComponent = ...;
peerComponent.OnInitialize();
```

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PeerComponent from the subsystem API first
PeerComponent peerComponent = ...;
peerComponent.OnFinalize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PeerComponent instance = ...;
```

## See Also

- [Area Index](../)
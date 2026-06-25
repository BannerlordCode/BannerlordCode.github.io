---
title: "PeerComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/PeerComponent.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnInitialize
`public virtual void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var implementation = new CustomPeerComponent();
```

## See Also

- [Complete Class Catalog](../catalog)
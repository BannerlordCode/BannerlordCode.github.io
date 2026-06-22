<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerComponent`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PeerComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class PeerComponent : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/PeerComponent.cs`

## Overview

`PeerComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<PeerComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public VirtualPlayer Peer { get { return this._peer; }` |
| `Name` | `public string Name { get { return this.Peer.UserName; }` |
| `IsMine` | `public bool IsMine { get { return this.Peer.IsMine; }` |
| `TypeId` | `public uint TypeId { get; set; }` |

## Key Methods

### Initialize
```csharp
public virtual void Initialize()
```

### OnInitialize
```csharp
public virtual void OnInitialize()
```

### OnFinalize
```csharp
public virtual void OnFinalize()
```

## Usage Example

```csharp
// Typical usage of PeerComponent (Component)
agent.GetComponent<PeerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
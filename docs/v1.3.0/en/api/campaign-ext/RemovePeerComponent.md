<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RemovePeerComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RemovePeerComponent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class RemovePeerComponent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/RemovePeerComponent.cs`

## Overview

`RemovePeerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `RemovePeerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `ComponentId` | `public uint ComponentId { get; }` |

## Usage Example

```csharp
var component = agent.GetComponent<RemovePeerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
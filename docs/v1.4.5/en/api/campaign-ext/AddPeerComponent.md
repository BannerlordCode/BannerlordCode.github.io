<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AddPeerComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AddPeerComponent

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class AddPeerComponent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/AddPeerComponent.cs`

## Overview

`AddPeerComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `AddPeerComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `ComponentId` | `public uint ComponentId { get; }` |

## Usage Example

```csharp
var component = agent.GetComponent<AddPeerComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)
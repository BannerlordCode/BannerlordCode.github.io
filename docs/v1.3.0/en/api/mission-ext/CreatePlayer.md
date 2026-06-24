<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CreatePlayer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CreatePlayer

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class CreatePlayer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/Network/Messages/CreatePlayer.cs`

## Overview

`CreatePlayer` lives in `TaleWorlds.MountAndBlade.Network.Messages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Messages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerIndex` | `public int PlayerIndex { get; }` |
| `PlayerName` | `public string PlayerName { get; }` |
| `DisconnectedPeerIndex` | `public int DisconnectedPeerIndex { get; }` |
| `IsNonExistingDisconnectedPeer` | `public bool IsNonExistingDisconnectedPeer { get; }` |
| `IsReceiverPeer` | `public bool IsReceiverPeer { get; }` |

## Usage Example

```csharp
var example = new CreatePlayer();
```

## See Also

- [Complete Class Catalog](../catalog)
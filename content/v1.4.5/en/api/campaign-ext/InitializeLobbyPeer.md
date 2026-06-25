---
title: "InitializeLobbyPeer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitializeLobbyPeer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitializeLobbyPeer

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class InitializeLobbyPeer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/InitializeLobbyPeer.cs`

## Overview

`InitializeLobbyPeer` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `ProvidedId` | `public PlayerId ProvidedId { get; }` |
| `BannerCode` | `public string BannerCode { get; }` |
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `ChosenBadgeIndex` | `public int ChosenBadgeIndex { get; }` |
| `ForcedAvatarIndex` | `public int ForcedAvatarIndex { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |

## Usage Example

```csharp
var example = new InitializeLobbyPeer();
```

## See Also

- [Complete Class Catalog](../catalog)
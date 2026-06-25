---
title: "DeletePlayer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DeletePlayer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DeletePlayer

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class DeletePlayer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Messages/DeletePlayer.cs`

## Overview

`DeletePlayer` lives in `TaleWorlds.MountAndBlade.Network.Messages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Messages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerIndex` | `public int PlayerIndex { get; }` |
| `AddToDisconnectList` | `public bool AddToDisconnectList { get; }` |

## Usage Example

```csharp
var example = new DeletePlayer();
```

## See Also

- [Complete Class Catalog](../catalog)
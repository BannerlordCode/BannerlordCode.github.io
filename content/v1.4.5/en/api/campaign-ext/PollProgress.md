---
title: "PollProgress"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PollProgress`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PollProgress

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class PollProgress : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/PollProgress.cs`

## Overview

`PollProgress` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VotesAccepted` | `public int VotesAccepted { get; }` |
| `VotesRejected` | `public int VotesRejected { get; }` |

## Usage Example

```csharp
var example = new PollProgress();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "RemoveAgentVisualsFromIndexForPeer"
description: "Auto-generated class reference for RemoveAgentVisualsFromIndexForPeer."
---
# RemoveAgentVisualsFromIndexForPeer

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class RemoveAgentVisualsFromIndexForPeer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/RemoveAgentVisualsFromIndexForPeer.cs`

## Overview

`RemoveAgentVisualsFromIndexForPeer` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public NetworkCommunicator Peer { get; }` |
| `VisualsIndex` | `public int VisualsIndex { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RemoveAgentVisualsFromIndexForPeer instance = ...;
```

## See Also

- [Area Index](../)
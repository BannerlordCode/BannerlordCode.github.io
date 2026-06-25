---
title: "SetAgentHealth"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SetAgentHealth`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SetAgentHealth

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetAgentHealth : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/SetAgentHealth.cs`

## Overview

`SetAgentHealth` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `Health` | `public int Health { get; }` |

## Usage Example

```csharp
var example = new SetAgentHealth();
```

## See Also

- [Complete Class Catalog](../catalog)
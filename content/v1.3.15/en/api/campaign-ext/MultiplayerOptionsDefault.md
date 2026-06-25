---
title: "MultiplayerOptionsDefault"
description: "Auto-generated class reference for MultiplayerOptionsDefault."
---
# MultiplayerOptionsDefault

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class MultiplayerOptionsDefault : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/MultiplayerOptionsDefault.cs`

## Overview

`MultiplayerOptionsDefault` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MultiplayerOptionsDefault instance = ...;
```

## See Also

- [Area Index](../)
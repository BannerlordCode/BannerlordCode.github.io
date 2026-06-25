---
title: "MultiplayerOptionsImmediate"
description: "Auto-generated class reference for MultiplayerOptionsImmediate."
---
# MultiplayerOptionsImmediate

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class MultiplayerOptionsImmediate : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/MultiplayerOptionsImmediate.cs`

## Overview

`MultiplayerOptionsImmediate` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetOption
`public MultiplayerOptions.MultiplayerOption GetOption(MultiplayerOptions.OptionType optionType)`

**Purpose:** **Purpose:** Reads and returns the option value held by the this instance.

```csharp
// Obtain an instance of MultiplayerOptionsImmediate from the subsystem API first
MultiplayerOptionsImmediate multiplayerOptionsImmediate = ...;
var result = multiplayerOptionsImmediate.GetOption(optionType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MultiplayerOptionsImmediate multiplayerOptionsImmediate = ...;
multiplayerOptionsImmediate.GetOption(optionType);
```

## See Also

- [Area Index](../)
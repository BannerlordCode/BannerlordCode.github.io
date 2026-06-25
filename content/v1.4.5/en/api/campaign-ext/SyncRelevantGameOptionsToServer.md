---
title: "SyncRelevantGameOptionsToServer"
description: "Auto-generated class reference for SyncRelevantGameOptionsToServer."
---
# SyncRelevantGameOptionsToServer

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class SyncRelevantGameOptionsToServer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/SyncRelevantGameOptionsToServer.cs`

## Overview

`SyncRelevantGameOptionsToServer` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SendMeBloodEvents` | `public bool SendMeBloodEvents { get; }` |
| `SendMeSoundEvents` | `public bool SendMeSoundEvents { get; }` |

## Key Methods

### InitializeOptions
`public void InitializeOptions()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by options.

```csharp
// Obtain an instance of SyncRelevantGameOptionsToServer from the subsystem API first
SyncRelevantGameOptionsToServer syncRelevantGameOptionsToServer = ...;
syncRelevantGameOptionsToServer.InitializeOptions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SyncRelevantGameOptionsToServer syncRelevantGameOptionsToServer = ...;
syncRelevantGameOptionsToServer.InitializeOptions();
```

## See Also

- [Area Index](../)
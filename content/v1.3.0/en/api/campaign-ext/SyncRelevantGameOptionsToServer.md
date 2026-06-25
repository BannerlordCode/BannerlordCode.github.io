---
title: "SyncRelevantGameOptionsToServer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SyncRelevantGameOptionsToServer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SyncRelevantGameOptionsToServer

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class SyncRelevantGameOptionsToServer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromClient/SyncRelevantGameOptionsToServer.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `options`.

## Usage Example

```csharp
var value = new SyncRelevantGameOptionsToServer();
value.InitializeOptions();
```

## See Also

- [Complete Class Catalog](../catalog)
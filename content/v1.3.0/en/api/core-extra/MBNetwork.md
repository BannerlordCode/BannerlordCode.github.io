---
title: "MBNetwork"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBNetwork`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBNetwork

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class MBNetwork`
**Base:** none
**File:** `TaleWorlds.Core/MBNetwork.cs`

## Overview

`MBNetwork` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NetworkViewCommunication` | `public static INetworkCommunication NetworkViewCommunication { get; }` |
| `MyPeer` | `public static VirtualPlayer MyPeer { get; }` |

## Key Methods

### Initialize
`public static void Initialize(INetworkCommunication networkCommunication)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

## Usage Example

```csharp
MBNetwork.Initialize(networkCommunication);
```

## See Also

- [Complete Class Catalog](../catalog)
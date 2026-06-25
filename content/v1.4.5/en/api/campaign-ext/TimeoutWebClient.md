---
title: "TimeoutWebClient"
description: "Auto-generated class reference for TimeoutWebClient."
---
# TimeoutWebClient

**Namespace:** TaleWorlds.PlayerServices
**Module:** TaleWorlds.PlayerServices
**Type:** `public class TimeoutWebClient : WebClient`
**Base:** `WebClient`
**File:** `bin/TaleWorlds.PlayerServices/TaleWorlds.PlayerServices/TimeoutWebClient.cs`

## Overview

`TimeoutWebClient` lives in `TaleWorlds.PlayerServices` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Timeout` | `public int Timeout { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
TimeoutWebClient instance = ...;
```

## See Also

- [Area Index](../)
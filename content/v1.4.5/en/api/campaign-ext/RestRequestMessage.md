---
title: "RestRequestMessage"
description: "Auto-generated class reference for RestRequestMessage."
---
# RestRequestMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class RestRequestMessage : RestData`
**Base:** `RestData`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestRequestMessage.cs`

## Overview

`RestRequestMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserCertificate` | `public byte UserCertificate { get; set; }` |

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
RestRequestMessage instance = ...;
```

## See Also

- [Area Index](../)
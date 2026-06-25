---
title: "RestObjectRequestMessage"
description: "Auto-generated class reference for RestObjectRequestMessage."
---
# RestObjectRequestMessage

**Namespace:** TaleWorlds.Diamond.Rest
**Module:** TaleWorlds.Diamond
**Type:** `public class RestObjectRequestMessage : RestRequestMessage`
**Base:** `RestRequestMessage`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.Rest/RestObjectRequestMessage.cs`

## Overview

`RestObjectRequestMessage` lives in `TaleWorlds.Diamond.Rest` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond.Rest` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MessageType` | `public MessageType MessageType { get; }` |
| `SessionCredentials` | `public SessionCredentials SessionCredentials { get; }` |
| `Message` | `public Message Message { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
RestObjectRequestMessage instance = ...;
```

## See Also

- [Area Index](../)
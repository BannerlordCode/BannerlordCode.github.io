---
title: "MessageId"
description: "Auto-generated class reference for MessageId."
---
# MessageId

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageId : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Network/MessageId.cs`

## Overview

`MessageId` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public byte Id { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MessageId instance = ...;
```

## See Also

- [Area Index](../)
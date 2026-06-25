---
title: "MessageDescription"
description: "Auto-generated class reference for MessageDescription."
---
# MessageDescription

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class MessageDescription : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.Diamond/MessageDescription.cs`

## Overview

`MessageDescription` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `To` | `public string To { get; }` |
| `From` | `public string From { get; }` |
| `EndSessionOnFail` | `public bool EndSessionOnFail { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MessageDescription instance = ...;
```

## See Also

- [Area Index](../)
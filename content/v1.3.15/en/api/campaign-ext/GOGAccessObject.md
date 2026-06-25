---
title: "GOGAccessObject"
description: "Auto-generated class reference for GOGAccessObject."
---
# GOGAccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class GOGAccessObject : AccessObject`
**Base:** `AccessObject`
**File:** `TaleWorlds.Diamond/GOGAccessObject.cs`

## Overview

`GOGAccessObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GogId` | `public ulong GogId { get; set; }` |
| `OldId` | `public ulong OldId { get; set; }` |
| `UserName` | `public string UserName { get; set; }` |
| `Ticket` | `public string Ticket { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
GOGAccessObject instance = ...;
```

## See Also

- [Area Index](../)
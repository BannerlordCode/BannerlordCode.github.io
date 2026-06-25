---
title: "ClanPlayer"
description: "Auto-generated class reference for ClanPlayer."
---
# ClanPlayer

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanPlayer`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ClanPlayer.cs`

## Overview

`ClanPlayer` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `ClanId` | `public Guid ClanId { get; }` |
| `Role` | `public ClanPlayerRole Role { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ClanPlayer instance = ...;
```

## See Also

- [Area Index](../)
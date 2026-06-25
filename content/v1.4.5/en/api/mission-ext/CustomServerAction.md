---
title: "CustomServerAction"
description: "Auto-generated class reference for CustomServerAction."
---
# CustomServerAction

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomServerAction`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/CustomServerAction.cs`

## Overview

`CustomServerAction` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Execute` | `public Action Execute { get; }` |
| `GameServerEntry` | `public GameServerEntry GameServerEntry { get; }` |
| `Name` | `public string Name { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
CustomServerAction instance = ...;
```

## See Also

- [Area Index](../)
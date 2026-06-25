---
title: "FriendInfo"
description: "Auto-generated class reference for FriendInfo."
---
# FriendInfo

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FriendInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/FriendInfo.cs`

## Overview

`FriendInfo` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public PlayerId Id { get; set; }` |
| `Status` | `public FriendStatus Status { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsOnline` | `public bool IsOnline { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
FriendInfo instance = ...;
```

## See Also

- [Area Index](../)
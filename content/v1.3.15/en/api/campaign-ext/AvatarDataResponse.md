---
title: "AvatarDataResponse"
description: "Auto-generated class reference for AvatarDataResponse."
---
# AvatarDataResponse

**Namespace:** TaleWorlds.PlayerServices.Avatar
**Module:** TaleWorlds.PlayerServices
**Type:** `public class AvatarDataResponse`
**Base:** none
**File:** `TaleWorlds.PlayerServices/PlayerServices/Avatar/AvatarDataResponse.cs`

## Overview

`AvatarDataResponse` lives in `TaleWorlds.PlayerServices.Avatar` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlayerServices.Avatar` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFallBack` | `public bool IsFallBack { get; }` |
| `AvatarData` | `public AvatarData AvatarData { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
AvatarDataResponse instance = ...;
```

## See Also

- [Area Index](../)
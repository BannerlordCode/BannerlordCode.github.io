---
title: "SteamAccessObject"
description: "Auto-generated class reference for SteamAccessObject."
---
# SteamAccessObject

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public class SteamAccessObject : AccessObject`
**Base:** `AccessObject`
**File:** `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/SteamAccessObject.cs`

## Overview

`SteamAccessObject` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UserName` | `public string UserName { get; }` |
| `ExternalAccessToken` | `public string ExternalAccessToken { get; }` |
| `AppId` | `public int AppId { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SteamAccessObject instance = ...;
```

## See Also

- [Area Index](../)
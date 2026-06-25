---
title: "ServerStatus"
description: "Auto-generated class reference for ServerStatus."
---
# ServerStatus

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ServerStatus`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/ServerStatus.cs`

## Overview

`ServerStatus` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMatchmakingEnabled` | `public bool IsMatchmakingEnabled { get; set; }` |
| `IsCustomBattleEnabled` | `public bool IsCustomBattleEnabled { get; set; }` |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled { get; set; }` |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled { get; set; }` |
| `IsTestRegionEnabled` | `public bool IsTestRegionEnabled { get; set; }` |
| `Announcement` | `public Announcement Announcement { get; set; }` |
| `ServerNotifications` | `public ServerNotification ServerNotifications { get; set; }` |
| `FriendListUpdatePeriod` | `public int FriendListUpdatePeriod { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ServerStatus instance = ...;
```

## See Also

- [Area Index](../)
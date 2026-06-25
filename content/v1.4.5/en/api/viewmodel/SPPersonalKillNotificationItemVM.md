---
title: "SPPersonalKillNotificationItemVM"
description: "Auto-generated class reference for SPPersonalKillNotificationItemVM."
---
# SPPersonalKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPPersonalKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal/SPPersonalKillNotificationItemVM.cs`

## Overview

`SPPersonalKillNotificationItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.Personal` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VictimType` | `public string VictimType { get; set; }` |
| `Message` | `public string Message { get; set; }` |
| `ItemType` | `public int ItemType { get; set; }` |
| `Amount` | `public int Amount { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with remove.

```csharp
// Obtain an instance of SPPersonalKillNotificationItemVM from the subsystem API first
SPPersonalKillNotificationItemVM sPPersonalKillNotificationItemVM = ...;
sPPersonalKillNotificationItemVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPPersonalKillNotificationItemVM sPPersonalKillNotificationItemVM = ...;
sPPersonalKillNotificationItemVM.ExecuteRemove();
```

## See Also

- [Area Index](../)
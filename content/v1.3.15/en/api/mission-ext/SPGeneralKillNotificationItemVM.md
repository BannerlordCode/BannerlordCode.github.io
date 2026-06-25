---
title: "SPGeneralKillNotificationItemVM"
description: "Auto-generated class reference for SPGeneralKillNotificationItemVM."
---
# SPGeneralKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPGeneralKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/KillFeed/General/SPGeneralKillNotificationItemVM.cs`

## Overview

`SPGeneralKillNotificationItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.KillFeed.General` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsUnconscious` | `public bool IsUnconscious { get; set; }` |
| `IsHeadshot` | `public bool IsHeadshot { get; set; }` |
| `IsSuicide` | `public bool IsSuicide { get; set; }` |
| `IsDrowning` | `public bool IsDrowning { get; set; }` |
| `BackgroundColor` | `public Color BackgroundColor { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with `remove`.

```csharp
// Obtain an instance of SPGeneralKillNotificationItemVM from the subsystem API first
SPGeneralKillNotificationItemVM sPGeneralKillNotificationItemVM = ...;
sPGeneralKillNotificationItemVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPGeneralKillNotificationItemVM sPGeneralKillNotificationItemVM = ...;
sPGeneralKillNotificationItemVM.ExecuteRemove();
```

## See Also

- [Area Index](../)
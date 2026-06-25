---
title: "MPGeneralKillNotificationItemVM"
description: "Auto-generated class reference for MPGeneralKillNotificationItemVM."
---
# MPGeneralKillNotificationItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPGeneralKillNotificationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General/MPGeneralKillNotificationItemVM.cs`

## Overview

`MPGeneralKillNotificationItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed.General` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MurdererName` | `public string MurdererName { get; set; }` |
| `MurdererType` | `public string MurdererType { get; set; }` |
| `VictimName` | `public string VictimName { get; set; }` |
| `VictimType` | `public string VictimType { get; set; }` |
| `IsDamageNotification` | `public bool IsDamageNotification { get; set; }` |
| `IsDamagedMount` | `public bool IsDamagedMount { get; set; }` |
| `Color1` | `public Color Color1 { get; set; }` |
| `Color2` | `public Color Color2 { get; set; }` |
| `MurdererCompassElement` | `public MPTeammateCompassTargetVM MurdererCompassElement { get; set; }` |
| `VictimCompassElement` | `public MPTeammateCompassTargetVM VictimCompassElement { get; set; }` |
| `IsPlayerDeath` | `public bool IsPlayerDeath { get; set; }` |
| `IsItemInitializationOver` | `public bool IsItemInitializationOver { get; set; }` |
| `IsVictimBot` | `public bool IsVictimBot { get; set; }` |
| `IsMurdererBot` | `public bool IsMurdererBot { get; set; }` |
| `IsRelatedToFriendlyTroop` | `public bool IsRelatedToFriendlyTroop { get; set; }` |
| `IsFriendlyTroopDeath` | `public bool IsFriendlyTroopDeath { get; set; }` |
| `Message` | `public string Message { get; set; }` |

## Key Methods

### InitProperties
`public unsafe virtual void InitProperties(Agent affectedAgent, Agent affectorAgent)`

**Purpose:** Prepares the resources, state, or bindings required by properties.

```csharp
// Obtain an instance of MPGeneralKillNotificationItemVM from the subsystem API first
MPGeneralKillNotificationItemVM mPGeneralKillNotificationItemVM = ...;
mPGeneralKillNotificationItemVM.InitProperties(affectedAgent, affectorAgent);
```

### InitDeathProperties
`public void InitDeathProperties(Agent affectedAgent, Agent affectorAgent, Agent assistedAgent)`

**Purpose:** Prepares the resources, state, or bindings required by death properties.

```csharp
// Obtain an instance of MPGeneralKillNotificationItemVM from the subsystem API first
MPGeneralKillNotificationItemVM mPGeneralKillNotificationItemVM = ...;
mPGeneralKillNotificationItemVM.InitDeathProperties(affectedAgent, affectorAgent, assistedAgent);
```

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with remove.

```csharp
// Obtain an instance of MPGeneralKillNotificationItemVM from the subsystem API first
MPGeneralKillNotificationItemVM mPGeneralKillNotificationItemVM = ...;
mPGeneralKillNotificationItemVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPGeneralKillNotificationItemVM mPGeneralKillNotificationItemVM = ...;
mPGeneralKillNotificationItemVM.InitProperties(affectedAgent, affectorAgent);
```

## See Also

- [Area Index](../)
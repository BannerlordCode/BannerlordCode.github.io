---
title: "CustomBattleSiegeMachineVM"
description: "Auto-generated class reference for CustomBattleSiegeMachineVM."
---
# CustomBattleSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleSiegeMachineVM.cs`

## Overview

`CustomBattleSiegeMachineVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SiegeEngineType` | `public SiegeEngineType SiegeEngineType { get; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `MachineID` | `public string MachineID { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## Key Methods

### SetMachineType
`public void SetMachineType(SiegeEngineType machine)`

**Purpose:** **Purpose:** Assigns a new value to machine type and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleSiegeMachineVM from the subsystem API first
CustomBattleSiegeMachineVM customBattleSiegeMachineVM = ...;
customBattleSiegeMachineVM.SetMachineType(machine);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleSiegeMachineVM customBattleSiegeMachineVM = ...;
customBattleSiegeMachineVM.SetMachineType(machine);
```

## See Also

- [Area Index](../)
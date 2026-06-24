<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleSiegeMachineVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleSiegeMachineVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSiegeMachineVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleSiegeMachineVM.cs`

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

**Purpose:** Sets the value or state of `machine type`.

## Usage Example

```csharp
var value = new CustomBattleSiegeMachineVM();
value.SetMachineType(machine);
```

## See Also

- [Complete Class Catalog](../catalog)
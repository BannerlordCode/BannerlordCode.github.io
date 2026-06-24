<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentTakenDamageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentTakenDamageVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentTakenDamageVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentTakenDamageVM.cs`

## Overview

`MissionAgentTakenDamageVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TakenDamageList` | `public MBBindingList<MissionAgentTakenDamageItemVM> TakenDamageList { get; set; }` |

## Key Methods

### SetIsEnabled
`public void SetIsEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `is enabled`.

## Usage Example

```csharp
var value = new MissionAgentTakenDamageVM();
value.SetIsEnabled(false);
```

## See Also

- [Complete Class Catalog](../catalog)
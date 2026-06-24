<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentTakenDamageItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentTakenDamageItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentTakenDamageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionAgentTakenDamageItemVM.cs`

## Overview

`MissionAgentTakenDamageItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Damage` | `public int Damage { get; set; }` |
| `IsRanged` | `public bool IsRanged { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent { get; set; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Executes the `remove` operation or workflow.

## Usage Example

```csharp
var value = new MissionAgentTakenDamageItemVM();
value.ExecuteRemove();
```

## See Also

- [Complete Class Catalog](../catalog)
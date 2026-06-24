<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyCompositionGroupVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyCompositionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`

## Overview

`ArmyCompositionGroupVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition { get; set; }` |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition { get; set; }` |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition { get; set; }` |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition { get; set; }` |
| `ArmySizeTitle` | `public string ArmySizeTitle { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `MaxArmySize` | `public int MaxArmySize { get; set; }` |
| `MinArmySize` | `public int MinArmySize { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)`

**Purpose:** Sets the value or state of `current selected culture`.

### ExecuteRandomize
`public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)`

**Purpose:** Executes the `randomize` operation or workflow.

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**Purpose:** Called when the `player type change` event is raised.

## Usage Example

```csharp
var value = new ArmyCompositionGroupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
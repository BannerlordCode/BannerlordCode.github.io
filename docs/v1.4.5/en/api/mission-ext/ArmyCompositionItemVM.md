<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyCompositionItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyCompositionItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`

## Overview

`ArmyCompositionItemVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopTypes` | `public MBBindingList<CustomBattleTroopTypeVM> TroopTypes { get; set; }` |
| `InvalidHint` | `public HintViewModel InvalidHint { get; set; }` |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `CompositionValue` | `public int CompositionValue { get; set; }` |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject culture)`

**Purpose:** Sets the value or state of `current selected culture`.

### ExecuteRandomize
`public void ExecuteRandomize(int compositionValue)`

**Purpose:** Executes the `randomize` operation or workflow.

### ExecuteAddTroopTypes
`public void ExecuteAddTroopTypes()`

**Purpose:** Executes the `add troop types` operation or workflow.

### RefreshCompositionValue
`public void RefreshCompositionValue()`

**Purpose:** Refreshes the display or cache of `composition value`.

### GetTroopTypeIconData
`public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, CompositionType type, bool isBig = false)`

**Purpose:** Gets the current value of `troop type icon data`.

## Usage Example

```csharp
var value = new ArmyCompositionItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleTroopTypeVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleTroopTypeVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopTypeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleTroopTypeVM.cs`

## Overview

`CustomBattleTroopTypeVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TroopSkillsHint` | `public BasicTooltipViewModel TroopSkillsHint { get; set; }` |
| `NameHint` | `public HintViewModel NameHint { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteToggleSelection
`public void ExecuteToggleSelection()`

**Purpose:** Executes the `toggle selection` operation or workflow.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### GetCharacterTierData
`public static StringItemWithHintVM GetCharacterTierData(BasicCharacterObject character, bool isBig = false)`

**Purpose:** Gets the current value of `character tier data`.

### GetCharacterTier
`public static int GetCharacterTier(BasicCharacterObject character)`

**Purpose:** Gets the current value of `character tier`.

## Usage Example

```csharp
var value = new CustomBattleTroopTypeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
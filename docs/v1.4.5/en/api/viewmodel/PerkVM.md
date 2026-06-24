<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PerkVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PerkVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PerkVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/PerkVM.cs`

## Overview

`PerkVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentState` | `public PerkStates CurrentState { get; }` |
| `IsTutorialHighlightEnabled` | `public bool IsTutorialHighlightEnabled { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `PerkState` | `public int PerkState { get; set; }` |
| `AlternativeType` | `public int AlternativeType { get; set; }` |
| `LevelText` | `public string LevelText { get; set; }` |
| `BackgroundImage` | `public string BackgroundImage { get; set; }` |
| `PerkId` | `public string PerkId { get; set; }` |

## Key Methods

### RefreshState
`public void RefreshState()`

**Purpose:** Refreshes the display or cache of `state`.

### ExecuteShowPerkConcept
`public void ExecuteShowPerkConcept()`

**Purpose:** Executes the `show perk concept` operation or workflow.

### ExecuteStartSelection
`public void ExecuteStartSelection()`

**Purpose:** Executes the `start selection` operation or workflow.

## Usage Example

```csharp
var value = new PerkVM();
value.RefreshState();
```

## See Also

- [Complete Class Catalog](../catalog)
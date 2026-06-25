---
title: "RecruitVolunteerTroopVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitVolunteerTroopVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitVolunteerTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerTroopVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerTroopVM.cs`

## Overview

`RecruitVolunteerTroopVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled { get; set; }` |
| `Wage` | `public int Wage { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteRecruit
`public void ExecuteRecruit()`

**Purpose:** Executes the `recruit` operation or workflow.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart()`

**Purpose:** Executes the `remove from cart` operation or workflow.

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Executes the `focus` operation or workflow.

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Executes the `unfocus` operation or workflow.

## Usage Example

```csharp
var value = new RecruitVolunteerTroopVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
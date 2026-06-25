---
title: "PartyRecruitTroopVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyRecruitTroopVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyRecruitTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyRecruitTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyRecruitTroopVM.cs`

## Overview

`PartyRecruitTroopVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EffectText` | `public string EffectText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitAllText` | `public string RecruitAllText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnTroopRecruited
`public void OnTroopRecruited(PartyCharacterVM recruitedCharacter)`

**Purpose:** Called when the `troop recruited` event is raised.

### OpenPopUp
`public override void OpenPopUp()`

**Purpose:** Handles logic related to `open pop up`.

### ExecuteDone
`public override void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public override void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**Purpose:** Executes the `item primary action` operation or workflow.

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**Purpose:** Executes the `recruit all` operation or workflow.

## Usage Example

```csharp
var value = new PartyRecruitTroopVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
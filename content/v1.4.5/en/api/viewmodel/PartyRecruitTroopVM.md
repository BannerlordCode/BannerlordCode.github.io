---
title: "PartyRecruitTroopVM"
description: "Auto-generated class reference for PartyRecruitTroopVM."
---
# PartyRecruitTroopVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyRecruitTroopVM : PartyTroopManagerVM`
**Base:** `PartyTroopManagerVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyRecruitTroopVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.RefreshValues();
```

### OnTroopRecruited
`public void OnTroopRecruited(PartyCharacterVM recruitedCharacter)`

**Purpose:** Invoked when the troop recruited event is raised.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.OnTroopRecruited(recruitedCharacter);
```

### OpenPopUp
`public override void OpenPopUp()`

**Purpose:** Opens the resource or UI associated with pop up.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.OpenPopUp();
```

### ExecuteDone
`public override void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.ExecuteDone();
```

### ExecuteCancel
`public override void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.ExecuteCancel();
```

### ExecuteItemPrimaryAction
`public override void ExecuteItemPrimaryAction()`

**Purpose:** Runs the operation or workflow associated with item primary action.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.ExecuteItemPrimaryAction();
```

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**Purpose:** Runs the operation or workflow associated with recruit all.

```csharp
// Obtain an instance of PartyRecruitTroopVM from the subsystem API first
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.ExecuteRecruitAll();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyRecruitTroopVM partyRecruitTroopVM = ...;
partyRecruitTroopVM.RefreshValues();
```

## See Also

- [Area Index](../)
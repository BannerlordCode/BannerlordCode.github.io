---
title: "RecruitVolunteerTroopVM"
description: "Auto-generated class reference for RecruitVolunteerTroopVM."
---
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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.RefreshValues();
```

### ExecuteRecruit
`public void ExecuteRecruit()`

**Purpose:** Runs the operation or workflow associated with `recruit`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteRecruit();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with `open encyclopedia`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteOpenEncyclopedia();
```

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart()`

**Purpose:** Runs the operation or workflow associated with `remove from cart`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteRemoveFromCart();
```

### ExecuteBeginHint
`public virtual void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with `begin hint`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteBeginHint();
```

### ExecuteEndHint
`public virtual void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with `end hint`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteEndHint();
```

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Runs the operation or workflow associated with `focus`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Runs the operation or workflow associated with `unfocus`.

```csharp
// Obtain an instance of RecruitVolunteerTroopVM from the subsystem API first
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.ExecuteUnfocus();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitVolunteerTroopVM recruitVolunteerTroopVM = ...;
recruitVolunteerTroopVM.RefreshValues();
```

## See Also

- [Area Index](../)
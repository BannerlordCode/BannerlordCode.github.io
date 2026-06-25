---
title: "RecruitVolunteerVM"
description: "Auto-generated class reference for RecruitVolunteerVM."
---
# RecruitVolunteerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment/RecruitVolunteerVM.cs`

## Overview

`RecruitVolunteerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerHero` | `public Hero OwnerHero { get; }` |
| `VolunteerTroops` | `public List<CharacterObject> VolunteerTroops { get; }` |
| `GoldCost` | `public int GoldCost { get; set; }` |
| `Troops` | `public MBBindingList<RecruitVolunteerTroopVM> Troops { get; set; }` |
| `Owner` | `public RecruitVolunteerOwnerVM Owner { get; set; }` |
| `CanRecruit` | `public bool CanRecruit { get; set; }` |
| `ButtonIsVisible` | `public bool ButtonIsVisible { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitHint` | `public HintViewModel RecruitHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of RecruitVolunteerVM from the subsystem API first
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.RefreshValues();
```

### ExecuteRecruit
`public void ExecuteRecruit(RecruitVolunteerTroopVM troop)`

**Purpose:** Runs the operation or workflow associated with `recruit`.

```csharp
// Obtain an instance of RecruitVolunteerVM from the subsystem API first
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.ExecuteRecruit(troop);
```

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Runs the operation or workflow associated with `remove from cart`.

```csharp
// Obtain an instance of RecruitVolunteerVM from the subsystem API first
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.ExecuteRemoveFromCart(troop);
```

### OnRecruitMoveToCart
`public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Invoked when the `recruit move to cart` event is raised.

```csharp
// Obtain an instance of RecruitVolunteerVM from the subsystem API first
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.OnRecruitMoveToCart(troop);
```

### OnRecruitRemovedFromCart
`public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Invoked when the `recruit removed from cart` event is raised.

```csharp
// Obtain an instance of RecruitVolunteerVM from the subsystem API first
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.OnRecruitRemovedFromCart(troop);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitVolunteerVM recruitVolunteerVM = ...;
recruitVolunteerVM.RefreshValues();
```

## See Also

- [Area Index](../)
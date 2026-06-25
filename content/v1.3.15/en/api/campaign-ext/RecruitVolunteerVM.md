---
title: "RecruitVolunteerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitVolunteerVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs`

## Overview

`RecruitVolunteerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerHero` | `public Hero OwnerHero { get; }` |
| `VolunteerTroops` | `public List<CharacterObject> VolunteerTroops { get; }` |
| `GoldCost` | `public int GoldCost { get; }` |
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteRecruit
`public void ExecuteRecruit(RecruitVolunteerTroopVM troop)`

**Purpose:** Executes the `recruit` operation or workflow.

### ExecuteRemoveFromCart
`public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Executes the `remove from cart` operation or workflow.

### OnRecruitMoveToCart
`public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Called when the `recruit move to cart` event is raised.

### OnRecruitRemovedFromCart
`public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)`

**Purpose:** Called when the `recruit removed from cart` event is raised.

## Usage Example

```csharp
var value = new RecruitVolunteerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
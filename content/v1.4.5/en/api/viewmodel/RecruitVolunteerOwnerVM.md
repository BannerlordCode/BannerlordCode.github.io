---
title: "RecruitVolunteerOwnerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitVolunteerOwnerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitVolunteerOwnerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerOwnerVM : HeroVM`
**Base:** `HeroVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment/RecruitVolunteerOwnerVM.cs`

## Overview

`RecruitVolunteerOwnerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `RelationToPlayer` | `public int RelationToPlayer { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Executes the `focus` operation or workflow.

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Executes the `unfocus` operation or workflow.

## Usage Example

```csharp
var value = new RecruitVolunteerOwnerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
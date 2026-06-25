---
title: "RecruitVolunteerOwnerVM"
description: "Auto-generated class reference for RecruitVolunteerOwnerVM."
---
# RecruitVolunteerOwnerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitVolunteerOwnerVM : HeroVM`
**Base:** `HeroVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment/RecruitVolunteerOwnerVM.cs`

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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of RecruitVolunteerOwnerVM from the subsystem API first
RecruitVolunteerOwnerVM recruitVolunteerOwnerVM = ...;
recruitVolunteerOwnerVM.RefreshValues();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open encyclopedia.

```csharp
// Obtain an instance of RecruitVolunteerOwnerVM from the subsystem API first
RecruitVolunteerOwnerVM recruitVolunteerOwnerVM = ...;
recruitVolunteerOwnerVM.ExecuteOpenEncyclopedia();
```

### ExecuteFocus
`public void ExecuteFocus()`

**Purpose:** Runs the operation or workflow associated with focus.

```csharp
// Obtain an instance of RecruitVolunteerOwnerVM from the subsystem API first
RecruitVolunteerOwnerVM recruitVolunteerOwnerVM = ...;
recruitVolunteerOwnerVM.ExecuteFocus();
```

### ExecuteUnfocus
`public void ExecuteUnfocus()`

**Purpose:** Runs the operation or workflow associated with unfocus.

```csharp
// Obtain an instance of RecruitVolunteerOwnerVM from the subsystem API first
RecruitVolunteerOwnerVM recruitVolunteerOwnerVM = ...;
recruitVolunteerOwnerVM.ExecuteUnfocus();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitVolunteerOwnerVM recruitVolunteerOwnerVM = ...;
recruitVolunteerOwnerVM.RefreshValues();
```

## See Also

- [Area Index](../)
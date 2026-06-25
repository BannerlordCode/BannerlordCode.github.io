---
title: "ClanMembersVM"
description: "Auto-generated class reference for ClanMembersVM."
---
# ClanMembersVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanMembersVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersVM.cs`

## Overview

`ClanMembersVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsAnyValidMemberSelected` | `public bool IsAnyValidMemberSelected { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `Companions` | `public MBBindingList<ClanLordItemVM> Companions { get; set; }` |
| `Family` | `public MBBindingList<ClanLordItemVM> Family { get; set; }` |
| `CurrentSelectedMember` | `public ClanLordItemVM CurrentSelectedMember { get; set; }` |
| `SortController` | `public ClanMembersSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanMembersVM from the subsystem API first
ClanMembersVM clanMembersVM = ...;
clanMembersVM.RefreshValues();
```

### RefreshMembersList
`public void RefreshMembersList()`

**Purpose:** **Purpose:** Keeps the display or cache of members list in sync with the underlying state.

```csharp
// Obtain an instance of ClanMembersVM from the subsystem API first
ClanMembersVM clanMembersVM = ...;
clanMembersVM.RefreshMembersList();
```

### SelectMember
`public void SelectMember(Hero hero)`

**Purpose:** **Purpose:** Executes the SelectMember logic.

```csharp
// Obtain an instance of ClanMembersVM from the subsystem API first
ClanMembersVM clanMembersVM = ...;
clanMembersVM.SelectMember(hero);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ClanMembersVM from the subsystem API first
ClanMembersVM clanMembersVM = ...;
clanMembersVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanMembersVM clanMembersVM = ...;
clanMembersVM.RefreshValues();
```

## See Also

- [Area Index](../)
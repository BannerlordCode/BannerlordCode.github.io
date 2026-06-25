---
title: "ClanRoleMemberItemVM"
description: "Auto-generated class reference for ClanRoleMemberItemVM."
---
# ClanRoleMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleMemberItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanRoleMemberItemVM.cs`

## Overview

`ClanRoleMemberItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |
| `RelevantSkillValue` | `public int RelevantSkillValue { get; }` |
| `Member` | `public ClanPartyMemberItemVM Member { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanRoleMemberItemVM from the subsystem API first
ClanRoleMemberItemVM clanRoleMemberItemVM = ...;
clanRoleMemberItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ClanRoleMemberItemVM from the subsystem API first
ClanRoleMemberItemVM clanRoleMemberItemVM = ...;
clanRoleMemberItemVM.OnFinalize();
```

### ExecuteAssignHeroToRole
`public void ExecuteAssignHeroToRole()`

**Purpose:** Runs the operation or workflow associated with `assign hero to role`.

```csharp
// Obtain an instance of ClanRoleMemberItemVM from the subsystem API first
ClanRoleMemberItemVM clanRoleMemberItemVM = ...;
clanRoleMemberItemVM.ExecuteAssignHeroToRole();
```

### GetEffectsList
`public string GetEffectsList(PartyRole role)`

**Purpose:** Reads and returns the `effects list` value held by the current object.

```csharp
// Obtain an instance of ClanRoleMemberItemVM from the subsystem API first
ClanRoleMemberItemVM clanRoleMemberItemVM = ...;
var result = clanRoleMemberItemVM.GetEffectsList(role);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanRoleMemberItemVM clanRoleMemberItemVM = ...;
clanRoleMemberItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
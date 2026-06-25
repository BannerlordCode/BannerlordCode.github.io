---
title: "ClanRoleItemVM"
description: "Auto-generated class reference for ClanRoleItemVM."
---
# ClanRoleItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleItemVM.cs`

## Overview

`ClanRoleItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Members` | `public MBBindingList<ClanRoleMemberItemVM> Members { get; set; }` |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner { get; set; }` |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `IsNotAssigned` | `public bool IsNotAssigned { get; set; }` |
| `HasEffects` | `public bool HasEffects { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AssignedMemberEffects` | `public string AssignedMemberEffects { get; set; }` |
| `NoEffectText` | `public string NoEffectText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.OnFinalize();
```

### Refresh
`public void Refresh()`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.Refresh();
```

### ExecuteToggleRoleSelection
`public void ExecuteToggleRoleSelection()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with toggle role selection.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.ExecuteToggleRoleSelection();
```

### SetEnabled
`public void SetEnabled(bool enabled, TextObject disabledHint)`

**Purpose:** **Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.SetEnabled(false, disabledHint);
```

### Compare
`public int Compare(ClanRoleMemberItemVM x, ClanRoleMemberItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ClanRoleItemVM from the subsystem API first
ClanRoleItemVM clanRoleItemVM = ...;
var result = clanRoleItemVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanRoleItemVM clanRoleItemVM = ...;
clanRoleItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
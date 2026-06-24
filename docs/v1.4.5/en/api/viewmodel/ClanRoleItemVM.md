<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanRoleItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanRoleItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanRoleItemVM.cs`

## Overview

`ClanRoleItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ClanLeader` | `public ClanRoleMemberItemVM ClanLeader { get; set; }` |
| `Members` | `public MBBindingList<ClanRoleMemberItemVM> Members { get; set; }` |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner { get; set; }` |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `IsNotAssigned` | `public bool IsNotAssigned { get; set; }` |
| `HasEffects` | `public bool HasEffects { get; set; }` |
| `RoleId` | `public string RoleId { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AssignedMemberEffects` | `public string AssignedMemberEffects { get; set; }` |
| `NoEffectText` | `public string NoEffectText { get; set; }` |

## Key Methods

### Compare
`public int Compare(ClanRoleMemberItemVM x, ClanRoleMemberItemVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Refresh
`public void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### ExecuteToggleRoleSelection
`public void ExecuteToggleRoleSelection()`

**Purpose:** Executes the `toggle role selection` operation or workflow.

### SetEnabled
`public void SetEnabled(bool enabled, TextObject disabledHint)`

**Purpose:** Sets the value or state of `enabled`.

## Usage Example

```csharp
var value = new ClanRoleItemVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)
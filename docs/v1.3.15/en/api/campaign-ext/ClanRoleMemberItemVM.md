<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanRoleMemberItemVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleMemberItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanRoleMemberItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanRoleMemberItemVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteAssignHeroToRole
`public void ExecuteAssignHeroToRole()`

**Purpose:** Executes the `assign hero to role` operation or workflow.

### GetEffectsList
`public string GetEffectsList(PartyRole role)`

**Purpose:** Gets the current value of `effects list`.

### IsHeroAssignableForRole
`public static bool IsHeroAssignableForRole(Hero hero, PartyRole role, MobileParty party)`

**Purpose:** Handles logic related to `is hero assignable for role`.

## Usage Example

```csharp
var value = new ClanRoleMemberItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
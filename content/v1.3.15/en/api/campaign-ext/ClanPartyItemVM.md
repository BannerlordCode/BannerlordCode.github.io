---
title: "ClanPartyItemVM"
description: "Auto-generated class reference for ClanPartyItemVM."
---
# ClanPartyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartyItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanPartyItemVM.cs`

## Overview

`ClanPartyItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Expense` | `public int Expense { get; }` |
| `Income` | `public int Income { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `CharacterModel` | `public CharacterViewModel CharacterModel { get; set; }` |
| `PartyBehaviorSelector` | `public ClanPartyBehaviorSelectorVM PartyBehaviorSelector { get; set; }` |
| `LeaderVisual` | `public CharacterImageIdentifierVM LeaderVisual { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasHeroMembers` | `public bool HasHeroMembers { get; set; }` |
| `IsClanRoleSelectionHighlightEnabled` | `public bool IsClanRoleSelectionHighlightEnabled { get; set; }` |
| `IsRoleSelectionPopupVisible` | `public bool IsRoleSelectionPopupVisible { get; set; }` |
| `IsDisbanding` | `public bool IsDisbanding { get; set; }` |
| `IsInArmy` | `public bool IsInArmy { get; set; }` |
| `CanUseActions` | `public bool CanUseActions { get; set; }` |
| `IsChangeLeaderVisible` | `public bool IsChangeLeaderVisible { get; set; }` |
| `IsChangeLeaderEnabled` | `public bool IsChangeLeaderEnabled { get; set; }` |
| `ActionsDisabledHint` | `public HintViewModel ActionsDisabledHint { get; set; }` |
| `IsCaravan` | `public bool IsCaravan { get; set; }` |
| `ShouldPartyHaveExpense` | `public bool ShouldPartyHaveExpense { get; set; }` |
| `HasCompanion` | `public bool HasCompanion { get; set; }` |
| `IsAutoRecruitmentVisible` | `public bool IsAutoRecruitmentVisible { get; set; }` |
| `AutoRecruitmentValue` | `public bool AutoRecruitmentValue { get; set; }` |
| `IsPartyBehaviorEnabled` | `public bool IsPartyBehaviorEnabled { get; set; }` |
| `IsMembersAndRolesVisible` | `public bool IsMembersAndRolesVisible { get; set; }` |
| `IsMainHeroParty` | `public bool IsMainHeroParty { get; set; }` |
| `ExpenseItem` | `public ClanFinanceExpenseItemVM ExpenseItem { get; set; }` |
| `LastOpenedRoleSelection` | `public ClanRoleItemVM LastOpenedRoleSelection { get; set; }` |
| `LeaderMember` | `public ClanPartyMemberItemVM LeaderMember { get; set; }` |
| `PartySizeText` | `public string PartySizeText { get; set; }` |
| `ShipCountText` | `public string ShipCountText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `AssigneesText` | `public string AssigneesText { get; set; }` |
| `RolesText` | `public string RolesText { get; set; }` |
| `PartyLeaderRoleEffectsText` | `public string PartyLeaderRoleEffectsText { get; set; }` |
| `PartyLocationText` | `public string PartyLocationText { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `PartySizeSubTitleText` | `public string PartySizeSubTitleText { get; set; }` |
| `PartyWageSubTitleText` | `public string PartyWageSubTitleText { get; set; }` |
| `PartyBehaviorText` | `public string PartyBehaviorText { get; set; }` |
| `InfantryCount` | `public int InfantryCount { get; set; }` |
| `RangedCount` | `public int RangedCount { get; set; }` |
| `CavalryCount` | `public int CavalryCount { get; set; }` |
| `HorseArcherCount` | `public int HorseArcherCount { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `InArmyText` | `public string InArmyText { get; set; }` |
| `DisbandingText` | `public string DisbandingText { get; set; }` |
| `AutoRecruitmentText` | `public string AutoRecruitmentText { get; set; }` |
| `AutoRecruitmentHint` | `public HintViewModel AutoRecruitmentHint { get; set; }` |
| `InArmyHint` | `public HintViewModel InArmyHint { get; set; }` |
| `ChangeLeaderHint` | `public HintViewModel ChangeLeaderHint { get; set; }` |
| `InfantryHint` | `public BasicTooltipViewModel InfantryHint { get; set; }` |
| `RangedHint` | `public BasicTooltipViewModel RangedHint { get; set; }` |
| `CavalryHint` | `public BasicTooltipViewModel CavalryHint { get; set; }` |
| `HorseArcherHint` | `public BasicTooltipViewModel HorseArcherHint { get; set; }` |
| `HeroMembers` | `public MBBindingList<ClanPartyMemberItemVM> HeroMembers { get; set; }` |
| `Roles` | `public MBBindingList<ClanRoleItemVM> Roles { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ClanPartyItemVM from the subsystem API first
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.RefreshValues();
```

### UpdateProperties
`public void UpdateProperties()`

**Purpose:** Recalculates and stores the latest representation of `properties`.

```csharp
// Obtain an instance of ClanPartyItemVM from the subsystem API first
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.UpdateProperties();
```

### OnPartySelection
`public void OnPartySelection()`

**Purpose:** Invoked when the `party selection` event is raised.

```csharp
// Obtain an instance of ClanPartyItemVM from the subsystem API first
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.OnPartySelection();
```

### ExecuteChangeLeader
`public void ExecuteChangeLeader()`

**Purpose:** Runs the operation or workflow associated with `change leader`.

```csharp
// Obtain an instance of ClanPartyItemVM from the subsystem API first
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.ExecuteChangeLeader();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ClanPartyItemVM from the subsystem API first
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanPartyItemVM clanPartyItemVM = ...;
clanPartyItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
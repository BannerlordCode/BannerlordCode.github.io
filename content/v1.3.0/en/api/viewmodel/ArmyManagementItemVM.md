---
title: "ArmyManagementItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyManagementItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementItemVM.cs`

## Overview

`ArmyManagementItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DistInTime` | `public float DistInTime { get; }` |
| `_distance` | `public float _distance { get; }` |
| `Clan` | `public Clan Clan { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsEligible` | `public bool IsEligible { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `Strength` | `public int Strength { get; set; }` |
| `ShipCount` | `public int ShipCount { get; set; }` |
| `HasShip` | `public bool HasShip { get; set; }` |
| `DistanceText` | `public string DistanceText { get; set; }` |
| `InArmyText` | `public string InArmyText { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsCostRelevant` | `public bool IsCostRelevant { get; set; }` |
| `Relation` | `public int Relation { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `LordFace` | `public CharacterImageIdentifierVM LordFace { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `IsAlreadyWithPlayer` | `public bool IsAlreadyWithPlayer { get; set; }` |
| `IsTransferDisabled` | `public bool IsTransferDisabled { get; set; }` |
| `LeaderNameText` | `public string LeaderNameText { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Executes the `set focused` operation or workflow.

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Executes the `set unfocused` operation or workflow.

### UpdateEligibility
`public void UpdateEligibility()`

**Purpose:** Updates the state or data of `eligibility`.

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Executes the `begin hint` operation or workflow.

### ExecuteBeginClanHint
`public void ExecuteBeginClanHint()`

**Purpose:** Executes the `begin clan hint` operation or workflow.

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Executes the `end hint` operation or workflow.

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Executes the `open encyclopedia` operation or workflow.

### ExecuteOpenClanEncyclopedia
`public void ExecuteOpenClanEncyclopedia()`

**Purpose:** Executes the `open clan encyclopedia` operation or workflow.

## Usage Example

```csharp
var value = new ArmyManagementItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
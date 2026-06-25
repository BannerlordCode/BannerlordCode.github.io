---
title: "ArmyManagementItemVM"
description: "Auto-generated class reference for ArmyManagementItemVM."
---
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

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteAction();
```

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**Purpose:** Runs the operation or workflow associated with set focused.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteSetFocused();
```

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**Purpose:** Runs the operation or workflow associated with set unfocused.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteSetUnfocused();
```

### UpdateEligibility
`public void UpdateEligibility()`

**Purpose:** Recalculates and stores the latest representation of eligibility.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.UpdateEligibility();
```

### ExecuteBeginHint
`public void ExecuteBeginHint()`

**Purpose:** Runs the operation or workflow associated with begin hint.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteBeginHint();
```

### ExecuteBeginClanHint
`public void ExecuteBeginClanHint()`

**Purpose:** Runs the operation or workflow associated with begin clan hint.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteBeginClanHint();
```

### ExecuteEndHint
`public void ExecuteEndHint()`

**Purpose:** Runs the operation or workflow associated with end hint.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteEndHint();
```

### ExecuteOpenEncyclopedia
`public void ExecuteOpenEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open encyclopedia.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteOpenEncyclopedia();
```

### ExecuteOpenClanEncyclopedia
`public void ExecuteOpenClanEncyclopedia()`

**Purpose:** Runs the operation or workflow associated with open clan encyclopedia.

```csharp
// Obtain an instance of ArmyManagementItemVM from the subsystem API first
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.ExecuteOpenClanEncyclopedia();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyManagementItemVM armyManagementItemVM = ...;
armyManagementItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
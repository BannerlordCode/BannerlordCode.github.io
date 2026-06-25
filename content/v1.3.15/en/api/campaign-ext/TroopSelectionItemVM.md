---
title: "TroopSelectionItemVM"
description: "Auto-generated class reference for TroopSelectionItemVM."
---
# TroopSelectionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TroopSelectionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`

## Overview

`TroopSelectionItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Troop` | `public TroopRosterElement Troop { get; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `HeroHealthPercent` | `public int HeroHealthPercent { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AmountText` | `public string AmountText { get; set; }` |
| `Visual` | `public CharacterImageIdentifierVM Visual { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |

## Key Methods

### ExecuteAdd
`public void ExecuteAdd()`

**Purpose:** Runs the operation or workflow associated with add.

```csharp
// Obtain an instance of TroopSelectionItemVM from the subsystem API first
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteAdd();
```

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with remove.

```csharp
// Obtain an instance of TroopSelectionItemVM from the subsystem API first
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteRemove();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of TroopSelectionItemVM from the subsystem API first
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteLink();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopSelectionItemVM troopSelectionItemVM = ...;
troopSelectionItemVM.ExecuteAdd();
```

## See Also

- [Area Index](../)
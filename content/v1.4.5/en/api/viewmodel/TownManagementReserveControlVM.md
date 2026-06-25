---
title: "TownManagementReserveControlVM"
description: "Auto-generated class reference for TownManagementReserveControlVM."
---
# TownManagementReserveControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementReserveControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementReserveControlVM.cs`

## Overview

`TownManagementReserveControlVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CurrentReserveAmount` | `public int CurrentReserveAmount { get; set; }` |
| `CurrentGivenAmount` | `public int CurrentGivenAmount { get; set; }` |
| `MaxReserveAmount` | `public int MaxReserveAmount { get; set; }` |
| `ReserveBonusText` | `public string ReserveBonusText { get; set; }` |
| `ReserveText` | `public string ReserveText { get; set; }` |
| `CurrentReserveText` | `public string CurrentReserveText { get; set; }` |
| `AddGoldToReserveHint` | `public HintViewModel AddGoldToReserveHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TownManagementReserveControlVM from the subsystem API first
TownManagementReserveControlVM townManagementReserveControlVM = ...;
townManagementReserveControlVM.RefreshValues();
```

### ExecuteConfirm
`public void ExecuteConfirm()`

**Purpose:** Runs the operation or workflow associated with confirm.

```csharp
// Obtain an instance of TownManagementReserveControlVM from the subsystem API first
TownManagementReserveControlVM townManagementReserveControlVM = ...;
townManagementReserveControlVM.ExecuteConfirm();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of TownManagementReserveControlVM from the subsystem API first
TownManagementReserveControlVM townManagementReserveControlVM = ...;
townManagementReserveControlVM.ExecuteCancel();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TownManagementReserveControlVM townManagementReserveControlVM = ...;
townManagementReserveControlVM.RefreshValues();
```

## See Also

- [Area Index](../)
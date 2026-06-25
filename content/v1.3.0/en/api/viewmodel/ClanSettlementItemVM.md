---
title: "ClanSettlementItemVM"
description: "Auto-generated class reference for ClanSettlementItemVM."
---
# ClanSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSettlementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanSettlementItemVM.cs`

## Overview

`ClanSettlementItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Governor` | `public HeroVM Governor { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `ProfitItemProperties` | `public MBBindingList<ProfitItemPropertyVM> ProfitItemProperties { get; set; }` |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit { get; set; }` |
| `FileName` | `public string FileName { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `NotablesText` | `public string NotablesText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `HasNotables` | `public bool HasNotables { get; set; }` |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `VillagesOwned` | `public MBBindingList<ClanSettlementItemVM> VillagesOwned { get; set; }` |
| `Notables` | `public MBBindingList<HeroVM> Notables { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `SendMembersHint` | `public HintViewModel SendMembersHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.RefreshValues();
```

### OnSettlementSelection
`public void OnSettlementSelection()`

**Purpose:** **Purpose:** Invoked when the settlement selection event is raised.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.OnSettlementSelection();
```

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteLink();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close tooltip.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteCloseTooltip();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open tooltip.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteOpenTooltip();
```

### ExecuteSendMembers
`public void ExecuteSendMembers()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with send members.

```csharp
// Obtain an instance of ClanSettlementItemVM from the subsystem API first
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteSendMembers();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.RefreshValues();
```

## See Also

- [Area Index](../)
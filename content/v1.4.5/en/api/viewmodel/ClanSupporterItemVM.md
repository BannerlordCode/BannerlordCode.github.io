---
title: "ClanSupporterItemVM"
description: "Auto-generated class reference for ClanSupporterItemVM."
---
# ClanSupporterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters/ClanSupporterItemVM.cs`

## Overview

`ClanSupporterItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hero` | `public HeroVM Hero { get; set; }` |

## Key Methods

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with open tooltip.

```csharp
// Obtain an instance of ClanSupporterItemVM from the subsystem API first
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteOpenTooltip();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close tooltip.

```csharp
// Obtain an instance of ClanSupporterItemVM from the subsystem API first
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteCloseTooltip();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteOpenTooltip();
```

## See Also

- [Area Index](../)
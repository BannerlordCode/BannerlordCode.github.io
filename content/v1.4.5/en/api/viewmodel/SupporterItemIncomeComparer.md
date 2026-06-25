---
title: "SupporterItemIncomeComparer"
description: "Auto-generated class reference for SupporterItemIncomeComparer."
---
# SupporterItemIncomeComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SupporterItemIncomeComparer : SupporterItemComparerBase`
**Base:** `SupporterItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

## Overview

`SupporterItemIncomeComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanSupporterGroupVM x, ClanSupporterGroupVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SupporterItemIncomeComparer from the subsystem API first
SupporterItemIncomeComparer supporterItemIncomeComparer = ...;
var result = supporterItemIncomeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SupporterItemIncomeComparer supporterItemIncomeComparer = ...;
supporterItemIncomeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)
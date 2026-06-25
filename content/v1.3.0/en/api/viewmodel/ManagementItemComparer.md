---
title: "ManagementItemComparer"
description: "Auto-generated class reference for ManagementItemComparer."
---
# ManagementItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>`
**Base:** `IComparer<ArmyManagementItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs`

## Overview

`ManagementItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ManagementItemComparer from the subsystem API first
ManagementItemComparer managementItemComparer = ...;
var result = managementItemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ManagementItemComparer managementItemComparer = ...;
managementItemComparer.Compare(x, y);
```

## See Also

- [Area Index](../)
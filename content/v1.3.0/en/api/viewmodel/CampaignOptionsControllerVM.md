---
title: "CampaignOptionsControllerVM"
description: "Auto-generated class reference for CampaignOptionsControllerVM."
---
# CampaignOptionsControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionsControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CampaignOptionsControllerVM.cs`

## Overview

`CampaignOptionsControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Options` | `public MBBindingList<CampaignOptionItemVM> Options { get; set; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CampaignOptionsControllerVM from the subsystem API first
CampaignOptionsControllerVM campaignOptionsControllerVM = ...;
campaignOptionsControllerVM.OnFinalize();
```

### Compare
`public int Compare(CampaignOptionItemVM x, CampaignOptionItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of CampaignOptionsControllerVM from the subsystem API first
CampaignOptionsControllerVM campaignOptionsControllerVM = ...;
var result = campaignOptionsControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CampaignOptionsControllerVM campaignOptionsControllerVM = ...;
campaignOptionsControllerVM.OnFinalize();
```

## See Also

- [Area Index](../)
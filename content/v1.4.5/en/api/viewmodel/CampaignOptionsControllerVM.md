---
title: "CampaignOptionsControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignOptionsControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CampaignOptionsControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignOptionsControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection/CampaignOptionsControllerVM.cs`

## Overview

`CampaignOptionsControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Options` | `public MBBindingList<CampaignOptionItemVM> Options { get; set; }` |

## Key Methods

### Compare
`public int Compare(CampaignOptionItemVM x, CampaignOptionItemVM y)`

**Purpose:** Handles logic related to `compare`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new CampaignOptionsControllerVM();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)
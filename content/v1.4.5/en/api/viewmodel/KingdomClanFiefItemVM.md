---
title: "KingdomClanFiefItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomClanFiefItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomClanFiefItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanFiefItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanFiefItemVM.cs`

## Overview

`KingdomClanFiefItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VisualPath` | `public string VisualPath { get; set; }` |
| `FiefName` | `public string FiefName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

## Usage Example

```csharp
var value = new KingdomClanFiefItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
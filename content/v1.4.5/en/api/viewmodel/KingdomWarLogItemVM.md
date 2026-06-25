---
title: "KingdomWarLogItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomWarLogItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomWarLogItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarLogItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomWarLogItemVM.cs`

## Overview

`KingdomWarLogItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WarLogTimeText` | `public string WarLogTimeText { get; set; }` |
| `WarLogText` | `public string WarLogText { get; set; }` |
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new KingdomWarLogItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
---
title: "KingdomSettlementItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomSettlementItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementItemVM : KingdomItemVM`
**Base:** `KingdomItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementItemVM.cs`

## Overview

`KingdomSettlementItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Garrison` | `public int Garrison { get; }` |
| `Militia` | `public int Militia { get; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `Villages` | `public MBBindingList<KingdomSettlementVillageItemVM> Villages { get; set; }` |
| `IconPath` | `public string IconPath { get; set; }` |
| `Defenders` | `public int Defenders { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `SettlementImagePath` | `public string SettlementImagePath { get; set; }` |
| `GovernorName` | `public string GovernorName { get; set; }` |
| `OwnerClanBanner` | `public BannerImageIdentifierVM OwnerClanBanner { get; set; }` |
| `OwnerClanBanner_9` | `public BannerImageIdentifierVM OwnerClanBanner_9 { get; set; }` |
| `Owner` | `public HeroVM Owner { get; set; }` |
| `WallLevel` | `public int WallLevel { get; set; }` |
| `Prosperity` | `public int Prosperity { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteLink
`public void ExecuteLink()`

**Purpose:** Executes the `link` operation or workflow.

## Usage Example

```csharp
var value = new KingdomSettlementItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
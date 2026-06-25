---
title: "EncyclopediaTroopTreeNodeVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaTroopTreeNodeVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaTroopTreeNodeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaTroopTreeNodeVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items/EncyclopediaTroopTreeNodeVM.cs`

## Overview

`EncyclopediaTroopTreeNodeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActiveUnit` | `public bool IsActiveUnit { get; set; }` |
| `IsAlternativeUpgrade` | `public bool IsAlternativeUpgrade { get; set; }` |
| `Branch` | `public MBBindingList<EncyclopediaTroopTreeNodeVM> Branch { get; set; }` |
| `Unit` | `public EncyclopediaUnitVM Unit { get; set; }` |
| `AlternativeUpgradeTooltip` | `public BasicTooltipViewModel AlternativeUpgradeTooltip { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

## Usage Example

```csharp
var value = new EncyclopediaTroopTreeNodeVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
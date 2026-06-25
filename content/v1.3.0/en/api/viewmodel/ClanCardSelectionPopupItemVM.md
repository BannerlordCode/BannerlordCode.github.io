---
title: "ClanCardSelectionPopupItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanCardSelectionPopupItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanCardSelectionPopupItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemVM.cs`

## Overview

`ClanCardSelectionPopupItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Identifier` | `public object Identifier { get; }` |
| `ActionResultText` | `public TextObject ActionResultText { get; }` |
| `Image` | `public ImageIdentifierVM Image { get; set; }` |
| `Properties` | `public MBBindingList<ClanCardSelectionPopupItemPropertyVM> Properties { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `SpriteType` | `public string SpriteType { get; set; }` |
| `SpriteName` | `public string SpriteName { get; set; }` |
| `SpriteLabel` | `public string SpriteLabel { get; set; }` |
| `SpecialAction` | `public string SpecialAction { get; set; }` |
| `HasImage` | `public bool HasImage { get; set; }` |
| `HasSprite` | `public bool HasSprite { get; set; }` |
| `IsSpecialActionItem` | `public bool IsSpecialActionItem { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelect
`public void ExecuteSelect()`

**Purpose:** Executes the `select` operation or workflow.

## Usage Example

```csharp
var value = new ClanCardSelectionPopupItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
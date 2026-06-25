---
title: "KingdomGiftFiefPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `KingdomGiftFiefPopupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement/KingdomGiftFiefPopupVM.cs`

## Overview

`KingdomGiftFiefPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsAnyClanSelected` | `public bool IsAnyClanSelected { get; set; }` |
| `Clans` | `public MBBindingList<KingdomClanItemVM> Clans { get; set; }` |
| `CurrentSelectedClan` | `public KingdomClanItemVM CurrentSelectedClan { get; set; }` |
| `ClanSortController` | `public KingdomClanSortControllerVM ClanSortController { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GiftText` | `public string GiftText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `BannerText` | `public string BannerText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `InfluenceText` | `public string InfluenceText { get; set; }` |
| `FiefsText` | `public string FiefsText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OpenWith
`public void OpenWith(Settlement settlement)`

**Purpose:** Handles logic related to `open with`.

### ExecuteGiftSettlement
`public void ExecuteGiftSettlement()`

**Purpose:** Executes the `gift settlement` operation or workflow.

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** Executes the `close` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

## Usage Example

```csharp
var value = new KingdomGiftFiefPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
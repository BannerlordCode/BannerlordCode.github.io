---
title: "MarriageOfferPopupVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MarriageOfferPopupVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MarriageOfferPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup/MarriageOfferPopupVM.cs`

## Overview

`MarriageOfferPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `AgeText` | `public string AgeText { get; set; }` |
| `OccupationText` | `public string OccupationText { get; set; }` |
| `RelationText` | `public string RelationText { get; set; }` |
| `ConsequencesText` | `public string ConsequencesText { get; set; }` |
| `ConsequencesList` | `public MBBindingList<BindingListStringItem> ConsequencesList { get; set; }` |
| `ButtonOkLabel` | `public string ButtonOkLabel { get; set; }` |
| `ButtonCancelLabel` | `public string ButtonCancelLabel { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `OffereeClanMember` | `public MarriageOfferPopupHeroVM OffereeClanMember { get; set; }` |
| `OffererClanMember` | `public MarriageOfferPopupHeroVM OffererClanMember { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

### ExecuteAcceptOffer
`public void ExecuteAcceptOffer()`

**Purpose:** Executes the `accept offer` operation or workflow.

### ExecuteDeclineOffer
`public void ExecuteDeclineOffer()`

**Purpose:** Executes the `decline offer` operation or workflow.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** Executes the `link` operation or workflow.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new MarriageOfferPopupVM();
value.Update();
```

## See Also

- [Complete Class Catalog](../catalog)
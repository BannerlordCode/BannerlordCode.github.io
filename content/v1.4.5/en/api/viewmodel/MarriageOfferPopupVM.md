---
title: "MarriageOfferPopupVM"
description: "Auto-generated class reference for MarriageOfferPopupVM."
---
# MarriageOfferPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MarriageOfferPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MarriageOfferPopup/MarriageOfferPopupVM.cs`

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

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.Update();
```

### ExecuteAcceptOffer
`public void ExecuteAcceptOffer()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with accept offer.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteAcceptOffer();
```

### ExecuteDeclineOffer
`public void ExecuteDeclineOffer()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with decline offer.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteDeclineOffer();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.OnFinalize();
```

### ExecuteLink
`public void ExecuteLink(string link)`

**Purpose:** **Purpose:** Runs the operation or workflow associated with link.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.ExecuteLink("example");
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of MarriageOfferPopupVM from the subsystem API first
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarriageOfferPopupVM marriageOfferPopupVM = ...;
marriageOfferPopupVM.Update();
```

## See Also

- [Area Index](../)
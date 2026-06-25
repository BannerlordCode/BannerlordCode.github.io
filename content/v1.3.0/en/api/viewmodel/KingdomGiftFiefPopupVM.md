---
title: "KingdomGiftFiefPopupVM"
description: "Auto-generated class reference for KingdomGiftFiefPopupVM."
---
# KingdomGiftFiefPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomGiftFiefPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomGiftFiefPopupVM.cs`

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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.RefreshValues();
```

### OpenWith
`public void OpenWith(Settlement settlement)`

**Purpose:** **Purpose:** Opens the resource or UI associated with with.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.OpenWith(settlement);
```

### ExecuteGiftSettlement
`public void ExecuteGiftSettlement()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with gift settlement.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.ExecuteGiftSettlement();
```

### ExecuteClose
`public void ExecuteClose()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with close.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.ExecuteClose();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.OnFinalize();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of KingdomGiftFiefPopupVM from the subsystem API first
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.SetCancelInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomGiftFiefPopupVM kingdomGiftFiefPopupVM = ...;
kingdomGiftFiefPopupVM.RefreshValues();
```

## See Also

- [Area Index](../)
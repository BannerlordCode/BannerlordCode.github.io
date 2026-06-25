---
title: "BarterItemVM"
description: "Auto-generated class reference for BarterItemVM."
---
# BarterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterItemVM : EncyclopediaLinkVM`
**Base:** `EncyclopediaLinkVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Barter/BarterItemVM.cs`

## Overview

`BarterItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalItemCount` | `public int TotalItemCount { get; set; }` |
| `TotalItemCountText` | `public string TotalItemCountText { get; set; }` |
| `CurrentOfferedAmount` | `public int CurrentOfferedAmount { get; set; }` |
| `CurrentOfferedAmountText` | `public string CurrentOfferedAmountText { get; set; }` |
| `BarterableType` | `public string BarterableType { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsSelectorActive` | `public bool IsSelectorActive { get; set; }` |
| `VisualIdentifier` | `public ImageIdentifierVM VisualIdentifier { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `FiefFileName` | `public string FiefFileName { get; set; }` |
| `IsItemTransferrable` | `public bool IsItemTransferrable { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## Key Methods

### BarterTransferEventDelegate
`public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll)`

**Purpose:** **Purpose:** Executes the BarterTransferEventDelegate logic.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.BarterTransferEventDelegate(itemVM, false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.RefreshValues();
```

### RefreshCompabilityWithItem
`public void RefreshCompabilityWithItem(BarterItemVM item, bool isItemGotOffered)`

**Purpose:** **Purpose:** Keeps the display or cache of compability with item in sync with the underlying state.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.RefreshCompabilityWithItem(item, false);
```

### ExecuteAddOffered
`public void ExecuteAddOffered()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with add offered.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteAddOffered();
```

### ExecuteRemoveOffered
`public void ExecuteRemoveOffered()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with remove offered.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteRemoveOffered();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of BarterItemVM from the subsystem API first
BarterItemVM barterItemVM = ...;
barterItemVM.ExecuteAction();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BarterItemVM barterItemVM = ...;
barterItemVM.BarterTransferEventDelegate(itemVM, false);
```

## See Also

- [Area Index](../)
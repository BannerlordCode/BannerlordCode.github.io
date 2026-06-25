---
title: "MPArmoryCosmeticsVM"
description: "Auto-generated class reference for MPArmoryCosmeticsVM."
---
# MPArmoryCosmeticsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryCosmeticsVM.cs`

## Overview

`MPArmoryCosmeticsVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionInputKey` | `public InputKeyItemVM ActionInputKey { get; set; }` |
| `PreviewInputKey` | `public InputKeyItemVM PreviewInputKey { get; set; }` |
| `Loot` | `public int Loot { get; set; }` |
| `IsLoading` | `public bool IsLoading { get; set; }` |
| `HasCosmeticInfoReceived` | `public bool HasCosmeticInfoReceived { get; set; }` |
| `IsManagingTaunts` | `public bool IsManagingTaunts { get; set; }` |
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `CosmeticInfoErrorText` | `public string CosmeticInfoErrorText { get; set; }` |
| `AllCategoriesHint` | `public HintViewModel AllCategoriesHint { get; set; }` |
| `BodyCategoryHint` | `public HintViewModel BodyCategoryHint { get; set; }` |
| `HeadCategoryHint` | `public HintViewModel HeadCategoryHint { get; set; }` |
| `ShoulderCategoryHint` | `public HintViewModel ShoulderCategoryHint { get; set; }` |
| `HandCategoryHint` | `public HintViewModel HandCategoryHint { get; set; }` |
| `LegCategoryHint` | `public HintViewModel LegCategoryHint { get; set; }` |
| `ResetPreviewHint` | `public HintViewModel ResetPreviewHint { get; set; }` |
| `ActiveCategory` | `public MPArmoryCosmeticCategoryBaseVM ActiveCategory { get; set; }` |
| `SelectedTauntSlot` | `public MPArmoryCosmeticTauntSlotVM SelectedTauntSlot { get; set; }` |
| `SelectedTauntItem` | `public MPArmoryCosmeticTauntItemVM SelectedTauntItem { get; set; }` |
| `SortCategories` | `public SelectorVM<SelectorItemVM> SortCategories { get; set; }` |
| `SortOrders` | `public SelectorVM<SelectorItemVM> SortOrders { get; set; }` |
| `TauntSlots` | `public MBBindingList<MPArmoryCosmeticTauntSlotVM> TauntSlots { get; set; }` |
| `AvailableCategories` | `public MBBindingList<MPArmoryCosmeticCategoryBaseVM> AvailableCategories { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnFinalize();
```

### OnTick
`public async void OnTick(float dt)`

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnTick(0);
```

### RefreshAvailableCategoriesBy
`public void RefreshAvailableCategoriesBy(CosmeticType type)`

**Purpose:** Keeps the display or cache of `available categories by` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshAvailableCategoriesBy(type);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Keeps the display or cache of `player data` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshPlayerData(playerData);
```

### RefreshCosmeticInfoFromNetwork
`public void RefreshCosmeticInfoFromNetwork()`

**Purpose:** Keeps the display or cache of `cosmetic info from network` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshCosmeticInfoFromNetwork();
```

### RefreshSelectedClass
`public void RefreshSelectedClass(MPHeroClass selectedClass, List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Keeps the display or cache of `selected class` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshSelectedClass(selectedClass, selectedPerks);
```

### ClearTauntSelections
`public void ClearTauntSelections()`

**Purpose:** Removes all `taunt selections` from the current object.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.ClearTauntSelections();
```

### OnItemObtained
`public void OnItemObtained(string cosmeticID, int finalLoot)`

**Purpose:** Invoked when the `item obtained` event is raised.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnItemObtained("example", 0);
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**Purpose:** Keeps the display or cache of `key bindings` in sync with the underlying state.

```csharp
// Obtain an instance of MPArmoryCosmeticsVM from the subsystem API first
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshKeyBindings(actionKey, previewKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.SetSortMode(false);
```

## See Also

- [Area Index](../)
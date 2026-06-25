---
title: "MPArmoryCosmeticsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPArmoryCosmeticsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryCosmeticsVM.cs`

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

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnTick
`public async void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### RefreshAvailableCategoriesBy
`public void RefreshAvailableCategoriesBy(CosmeticType type)`

**Purpose:** Refreshes the display or cache of `available categories by`.

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**Purpose:** Refreshes the display or cache of `player data`.

### RefreshCosmeticInfoFromNetwork
`public void RefreshCosmeticInfoFromNetwork()`

**Purpose:** Refreshes the display or cache of `cosmetic info from network`.

### RefreshSelectedClass
`public void RefreshSelectedClass(MPHeroClass selectedClass, List<IReadOnlyPerkObject> selectedPerks)`

**Purpose:** Refreshes the display or cache of `selected class`.

### ClearTauntSelections
`public void ClearTauntSelections()`

**Purpose:** Handles logic related to `clear taunt selections`.

### OnItemObtained
`public void OnItemObtained(string cosmeticID, int finalLoot)`

**Purpose:** Called when the `item obtained` event is raised.

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**Purpose:** Refreshes the display or cache of `key bindings`.

## Usage Example

```csharp
var value = new MPArmoryCosmeticsVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)
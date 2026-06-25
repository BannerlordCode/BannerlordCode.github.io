---
title: "MPArmoryCosmeticsVM"
description: "MPArmoryCosmeticsVM 的自动生成类参考。"
---
# MPArmoryCosmeticsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryCosmeticsVM.cs`

## 概述

`MPArmoryCosmeticsVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** **用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
var result = mPArmoryCosmeticsVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnFinalize();
```

### OnTick
`public async void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnTick(0);
```

### RefreshAvailableCategoriesBy
`public void RefreshAvailableCategoriesBy(CosmeticType type)`

**用途 / Purpose:** **用途 / Purpose:** 使 available categories by 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshAvailableCategoriesBy(type);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** **用途 / Purpose:** 使 player data 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshPlayerData(playerData);
```

### RefreshCosmeticInfoFromNetwork
`public void RefreshCosmeticInfoFromNetwork()`

**用途 / Purpose:** **用途 / Purpose:** 使 cosmetic info from network 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshCosmeticInfoFromNetwork();
```

### RefreshSelectedClass
`public void RefreshSelectedClass(MPHeroClass selectedClass, List<IReadOnlyPerkObject> selectedPerks)`

**用途 / Purpose:** **用途 / Purpose:** 使 selected class 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshSelectedClass(selectedClass, selectedPerks);
```

### ClearTauntSelections
`public void ClearTauntSelections()`

**用途 / Purpose:** **用途 / Purpose:** 清空当前对象中的taunt selections。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.ClearTauntSelections();
```

### OnItemObtained
`public void OnItemObtained(string cosmeticID, int finalLoot)`

**用途 / Purpose:** **用途 / Purpose:** 在 item obtained 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.OnItemObtained("example", 0);
```

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**用途 / Purpose:** **用途 / Purpose:** 使 key bindings 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPArmoryCosmeticsVM 实例
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.RefreshKeyBindings(actionKey, previewKey);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPArmoryCosmeticsVM mPArmoryCosmeticsVM = ...;
mPArmoryCosmeticsVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)
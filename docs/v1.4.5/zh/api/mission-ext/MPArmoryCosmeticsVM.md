<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPArmoryCosmeticsVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPArmoryCosmeticsVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPArmoryCosmeticsVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Armory/MPArmoryCosmeticsVM.cs`

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

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public unsafe override int Compare(MPArmoryCosmeticItemBaseVM x, MPArmoryCosmeticItemBaseVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public async void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### RefreshAvailableCategoriesBy
`public void RefreshAvailableCategoriesBy(CosmeticType type)`

**用途 / Purpose:** 刷新 `available categories by` 的显示或缓存。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### RefreshCosmeticInfoFromNetwork
`public void RefreshCosmeticInfoFromNetwork()`

**用途 / Purpose:** 刷新 `cosmetic info from network` 的显示或缓存。

### RefreshSelectedClass
`public void RefreshSelectedClass(MPHeroClass selectedClass, List<IReadOnlyPerkObject> selectedPerks)`

**用途 / Purpose:** 刷新 `selected class` 的显示或缓存。

### ClearTauntSelections
`public void ClearTauntSelections()`

**用途 / Purpose:** 处理 `clear taunt selections` 相关逻辑。

### OnItemObtained
`public void OnItemObtained(string cosmeticID, int finalLoot)`

**用途 / Purpose:** 当 `item obtained` 事件触发时调用此方法。

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey actionKey, HotKey previewKey)`

**用途 / Purpose:** 刷新 `key bindings` 的显示或缓存。

## 使用示例

```csharp
var value = new MPArmoryCosmeticsVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)
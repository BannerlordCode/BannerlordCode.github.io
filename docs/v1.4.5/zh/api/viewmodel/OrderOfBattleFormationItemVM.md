<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderOfBattleFormationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationItemVM.cs`

## 概述

`OrderOfBattleFormationItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Formation` | `public Formation Formation { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasFormation` | `public bool HasFormation { get; set; }` |
| `HasCaptain` | `public bool HasCaptain { get; set; }` |
| `HasHeroTroops` | `public bool HasHeroTroops { get; set; }` |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer { get; set; }` |
| `IsSelectable` | `public bool IsSelectable { get; set; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsMarkerShown` | `public bool IsMarkerShown { get; set; }` |
| `IsBeingFocused` | `public bool IsBeingFocused { get; set; }` |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain { get; set; }` |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops { get; set; }` |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing { get; set; }` |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `FormationIsEmptyText` | `public string FormationIsEmptyText { get; set; }` |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText { get; set; }` |
| `TroopCount` | `public int TroopCount { get; set; }` |
| `BannerBearerCount` | `public int BannerBearerCount { get; set; }` |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt { get; set; }` |
| `WSign` | `public int WSign { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Captain` | `public OrderOfBattleHeroItemVM Captain { get; set; }` |
| `HeroTroops` | `public MBBindingList<OrderOfBattleHeroItemVM> HeroTroops { get; set; }` |
| `Classes` | `public MBBindingList<OrderOfBattleFormationClassVM> Classes { get; set; }` |
| `FormationClassSelector` | `public SelectorVM<OrderOfBattleFormationClassSelectorItemVM> FormationClassSelector { get; set; }` |
| `FilterItems` | `public MBBindingList<OrderOfBattleFormationFilterSelectorItemVM> FilterItems { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `BannerBearerTooltip` | `public BasicTooltipViewModel BannerBearerTooltip { get; set; }` |
| `CantAdjustHint` | `public HintViewModel CantAdjustHint { get; set; }` |
| `CaptainSlotHint` | `public HintViewModel CaptainSlotHint { get; set; }` |
| `HeroTroopSlotHint` | `public HintViewModel HeroTroopSlotHint { get; set; }` |
| `AssignCaptainHint` | `public HintViewModel AssignCaptainHint { get; set; }` |
| `AssignHeroTroopHint` | `public HintViewModel AssignHeroTroopHint { get; set; }` |
| `IsCaptainSlotHighlightActive` | `public bool IsCaptainSlotHighlightActive { get; set; }` |
| `IsTypeSelectionHighlightActive` | `public bool IsTypeSelectionHighlightActive { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### RefreshFormation
`public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)`

**用途 / Purpose:** 刷新 `formation` 的显示或缓存。

### MakeMarkerWorldPositionDirty
`public void MakeMarkerWorldPositionDirty()`

**用途 / Purpose:** 处理 `make marker world position dirty` 相关逻辑。

### OnSizeChanged
`public void OnSizeChanged()`

**用途 / Purpose:** 当 `size changed` 事件触发时调用此方法。

### GetOrderOfBattleClass
`public DeploymentFormationClass GetOrderOfBattleClass()`

**用途 / Purpose:** 获取 `order of battle class` 的当前值。

### UpdateAdjustable
`public void UpdateAdjustable()`

**用途 / Purpose:** 更新 `adjustable` 的状态或数据。

### HasFilter
`public bool HasFilter(FormationFilterType filter)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `filter`。

### HasOnlyOneClass
`public bool HasOnlyOneClass()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `only one class`。

### HasClass
`public bool HasClass(FormationClass formationClass)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `class`。

### HasClasses
`public bool HasClasses(FormationClass formationClasses)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `classes`。

### UnassignCaptain
`public void UnassignCaptain()`

**用途 / Purpose:** 处理 `unassign captain` 相关逻辑。

### ExecuteAcceptCaptain
`public void ExecuteAcceptCaptain()`

**用途 / Purpose:** 执行 `accept captain` 操作或流程。

### ExecuteAcceptHeroTroops
`public void ExecuteAcceptHeroTroops()`

**用途 / Purpose:** 执行 `accept hero troops` 操作或流程。

### OnHeroSelectionUpdated
`public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)`

**用途 / Purpose:** 当 `hero selection updated` 事件触发时调用此方法。

### AddHeroTroop
`public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**用途 / Purpose:** 向当前集合/状态中添加 `hero troop`。

### RemoveHeroTroop
`public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**用途 / Purpose:** 从当前集合/状态中移除 `hero troop`。

## 使用示例

```csharp
var value = new OrderOfBattleFormationItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
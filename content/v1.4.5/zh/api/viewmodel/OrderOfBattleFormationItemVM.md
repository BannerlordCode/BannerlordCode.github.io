---
title: "OrderOfBattleFormationItemVM"
description: "OrderOfBattleFormationItemVM 的自动生成类参考。"
---
# OrderOfBattleFormationItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle/OrderOfBattleFormationItemVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshValues();
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.Tick();
```

### RefreshFormation
`public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)`

**用途 / Purpose:** 使 「formation」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshFormation(formation, deploymentFormationClass.Unset, false);
```

### MakeMarkerWorldPositionDirty
`public void MakeMarkerWorldPositionDirty()`

**用途 / Purpose:** 处理与 「make marker world position dirty」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.MakeMarkerWorldPositionDirty();
```

### OnSizeChanged
`public void OnSizeChanged()`

**用途 / Purpose:** 在 「size changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.OnSizeChanged();
```

### GetOrderOfBattleClass
`public DeploymentFormationClass GetOrderOfBattleClass()`

**用途 / Purpose:** 读取并返回当前对象中 「order of battle class」 的结果。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.GetOrderOfBattleClass();
```

### UpdateAdjustable
`public void UpdateAdjustable()`

**用途 / Purpose:** 重新计算并更新 「adjustable」 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.UpdateAdjustable();
```

### HasFilter
`public bool HasFilter(FormationFilterType filter)`

**用途 / Purpose:** 判断当前对象是否已经持有 「filter」。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasFilter(filter);
```

### HasOnlyOneClass
`public bool HasOnlyOneClass()`

**用途 / Purpose:** 判断当前对象是否已经持有 「only one class」。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasOnlyOneClass();
```

### HasClass
`public bool HasClass(FormationClass formationClass)`

**用途 / Purpose:** 判断当前对象是否已经持有 「class」。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasClass(formationClass);
```

### HasClasses
`public bool HasClasses(FormationClass formationClasses)`

**用途 / Purpose:** 判断当前对象是否已经持有 「classes」。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
var result = orderOfBattleFormationItemVM.HasClasses(formationClasses);
```

### UnassignCaptain
`public void UnassignCaptain()`

**用途 / Purpose:** 处理与 「unassign captain」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.UnassignCaptain();
```

### ExecuteAcceptCaptain
`public void ExecuteAcceptCaptain()`

**用途 / Purpose:** 执行 「accept captain」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.ExecuteAcceptCaptain();
```

### ExecuteAcceptHeroTroops
`public void ExecuteAcceptHeroTroops()`

**用途 / Purpose:** 执行 「accept hero troops」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.ExecuteAcceptHeroTroops();
```

### OnHeroSelectionUpdated
`public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)`

**用途 / Purpose:** 在 「hero selection updated」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.OnHeroSelectionUpdated(0, false);
```

### AddHeroTroop
`public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**用途 / Purpose:** 将 「hero troop」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.AddHeroTroop(heroItem);
```

### RemoveHeroTroop
`public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)`

**用途 / Purpose:** 从当前容器或状态中移除 「hero troop」。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationItemVM 实例
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RemoveHeroTroop(heroItem);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderOfBattleFormationItemVM orderOfBattleFormationItemVM = ...;
orderOfBattleFormationItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)
---
title: "OrderOfBattleFormationItemVM"
description: "OrderOfBattleFormationItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 54 个（方法 17、属性 36、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs。"
---
# OrderOfBattleFormationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs`

## 概述

OrderOfBattleFormationItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 OrderOfBattleFormationItemVM → ViewModel。public/protected 成员共 54 个：17 方法、36 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderOfBattleFormationItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle），继承链 OrderOfBattleFormationItemVM → ViewModel。成员构成以属性为主（属性 36/54，方法 17/54），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Formation` | `public Formation Formation` | 属性 |
| `OrderOfBattleFormationItemVM` | `public OrderOfBattleFormationItemVM(Camera missionCamera)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `Tick` | `public void Tick()` | 方法 |
| `RefreshFormation` | `public void RefreshFormation(Formation formation, DeploymentFormationClass overriddenClass = DeploymentFormationClass.Unset, bool mustExist = false)` | 方法 |
| `MakeMarkerWorldPositionDirty` | `public void MakeMarkerWorldPositionDirty()` | 方法 |
| `OnSizeChanged` | `public void OnSizeChanged()` | 方法 |
| `GetOrderOfBattleClass` | `public DeploymentFormationClass GetOrderOfBattleClass()` | 方法 |
| `UpdateAdjustable` | `public void UpdateAdjustable()` | 方法 |
| `HasFilter` | `public bool HasFilter(FormationFilterType filter)` | 方法 |
| `HasOnlyOneClass` | `public bool HasOnlyOneClass()` | 方法 |
| `HasClass` | `public bool HasClass(FormationClass formationClass)` | 方法 |
| `HasClasses` | `public bool HasClasses(FormationClass[]formationClasses)` | 方法 |
| `UnassignCaptain` | `public void UnassignCaptain()` | 方法 |
| `ExecuteAcceptCaptain` | `public void ExecuteAcceptCaptain()` | 方法 |
| `ExecuteAcceptHeroTroops` | `public void ExecuteAcceptHeroTroops()` | 方法 |
| `OnHeroSelectionUpdated` | `public void OnHeroSelectionUpdated(int selectedHeroCount, bool hasOwnHeroTroopInSelection)` | 方法 |
| `AddHeroTroop` | `public void AddHeroTroop(OrderOfBattleHeroItemVM heroItem)` | 方法 |
| `RemoveHeroTroop` | `public void RemoveHeroTroop(OrderOfBattleHeroItemVM heroItem)` | 方法 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasFormation` | `public bool HasFormation` | 属性 |
| `HasCaptain` | `public bool HasCaptain` | 属性 |
| `HasHeroTroops` | `public bool HasHeroTroops` | 属性 |
| `IsControlledByPlayer` | `public bool IsControlledByPlayer` | 属性 |
| `IsSelectable` | `public bool IsSelectable` | 属性 |
| `IsAdjustable` | `public bool IsAdjustable` | 属性 |
| `IsMarkerShown` | `public bool IsMarkerShown` | 属性 |
| `IsBeingFocused` | `public bool IsBeingFocused` | 属性 |
| `IsAcceptingCaptain` | `public bool IsAcceptingCaptain` | 属性 |
| `IsAcceptingHeroTroops` | `public bool IsAcceptingHeroTroops` | 属性 |
| `IsHeroTroopsOverflowing` | `public bool IsHeroTroopsOverflowing` | 属性 |
| `IsClassSelectionActive` | `public bool IsClassSelectionActive` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `FormationIsEmptyText` | `public string FormationIsEmptyText` | 属性 |
| `OverflowHeroTroopCountText` | `public string OverflowHeroTroopCountText` | 属性 |
| `TroopCount` | `public int TroopCount` | 属性 |
| `BannerBearerCount` | `public int BannerBearerCount` | 属性 |
| `OrderOfBattleFormationClassInt` | `public int OrderOfBattleFormationClassInt` | 属性 |
| `WSign` | `public int WSign` | 属性 |
| `ScreenPosition` | `public Vec2 ScreenPosition` | 属性 |
| `Captain` | `public OrderOfBattleHeroItemVM Captain` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleHeroItemVM>HeroTroops` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationClassVM>Classes` | 属性 |
| `SelectorVM` | `public SelectorVM<OrderOfBattleFormationClassSelectorItemVM>FormationClassSelector` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderOfBattleFormationFilterSelectorItemVM>FilterItems` | 属性 |
| `Tooltip` | `public BasicTooltipViewModel Tooltip` | 属性 |
| `BannerBearerTooltip` | `public BasicTooltipViewModel BannerBearerTooltip` | 属性 |
| `CantAdjustHint` | `public HintViewModel CantAdjustHint` | 属性 |
| `CaptainSlotHint` | `public HintViewModel CaptainSlotHint` | 属性 |
| `HeroTroopSlotHint` | `public HintViewModel HeroTroopSlotHint` | 属性 |
| `AssignCaptainHint` | `public HintViewModel AssignCaptainHint` | 属性 |
| `AssignHeroTroopHint` | `public HintViewModel AssignHeroTroopHint` | 属性 |
| `IsCaptainSlotHighlightActive` | `public bool IsCaptainSlotHighlightActive` | 属性 |
| `IsTypeSelectionHighlightActive` | `public bool IsTypeSelectionHighlightActive` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 OrderOfBattleFormationClassChangedEvent](../OrderOfBattleFormationClassChangedEvent)
- [同命名空间 OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM)
- [同命名空间 OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM)
- [同命名空间 OrderOfBattleFormationFilterSelectorItemComparer](../OrderOfBattleFormationFilterSelectorItemComparer)

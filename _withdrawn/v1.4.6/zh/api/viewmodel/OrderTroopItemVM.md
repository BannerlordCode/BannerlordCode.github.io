---
title: "OrderTroopItemVM"
description: "OrderTroopItemVM：TaleWorlds.MountAndBlade.ViewModelCollection.Order 的 public 类，继承 OrderSubjectVM；公开成员 31 个（方法 11、属性 17、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OrderTroopItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class OrderTroopItemVM : OrderSubjectVM`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## 概述

OrderTroopItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs。它是一个 public 类，实现/继承 OrderSubjectVM，继承链为 OrderTroopItemVM → OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 31 个：11 方法、17 属性、1 事件、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：OrderTroopItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.MountAndBlade.ViewModelCollection`），命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Order`，继承链 OrderTroopItemVM → OrderSubjectVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 17/31，方法 11/31），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/Order/OrderTroopItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `bool>OnSelectionChange;` | `public static event Action<OrderTroopItemVM, bool>OnSelectionChange;` | 事件 |
| `ContainsDeadTroop` | `public bool ContainsDeadTroop` | 属性 |
| `OrderTroopItemVM` | `public OrderTroopItemVM(Formation formation, Action<OrderTroopItemVM>setSelected, Func<Formation, int>getMorale)` | 构造函数 |
| `OrderTroopItemVM` | `public OrderTroopItemVM()` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnSelectionStateChanged` | `protected override void OnSelectionStateChanged(bool isSelected)` | 方法 |
| `OnFormationAgentRemoved` | `public void OnFormationAgentRemoved(Agent agent)` | 方法 |
| `UpdateVisuals` | `public virtual void UpdateVisuals()` | 方法 |
| `Update` | `public virtual void Update()` | 方法 |
| `UpdateSelectionKeyInfo` | `public void UpdateSelectionKeyInfo()` | 方法 |
| `SetFormationClassFromFormation` | `public bool SetFormationClassFromFormation(Formation formation)` | 方法 |
| `UpdateFilterData` | `public void UpdateFilterData(List<FormationFilterType>usedFilters)` | 方法 |
| `ExecuteAction` | `public void ExecuteAction()` | 方法 |
| `RefreshTargetedOrderVisual` | `public virtual void RefreshTargetedOrderVisual()` | 方法 |
| `GetVisibleNameOfFormationForMessage` | `public virtual TextObject GetVisibleNameOfFormationForMessage()` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `FormationIndex` | `public int FormationIndex` | 属性 |
| `CurrentMemberCount` | `public int CurrentMemberCount` | 属性 |
| `Morale` | `public int Morale` | 属性 |
| `AmmoPercentage` | `public float AmmoPercentage` | 属性 |
| `IsAmmoAvailable` | `public bool IsAmmoAvailable` | 属性 |
| `HaveTroops` | `public bool HaveTroops` | 属性 |
| `HasTarget` | `public bool HasTarget` | 属性 |
| `IsTargetRelevant` | `public bool IsTargetRelevant` | 属性 |
| `HasCaptain` | `public bool HasCaptain` | 属性 |
| `CurrentOrderIconId` | `public string CurrentOrderIconId` | 属性 |
| `CurrentTargetFormationType` | `public string CurrentTargetFormationType` | 属性 |
| `FormationName` | `public string FormationName` | 属性 |
| `CaptainImageIdentifier` | `public CharacterImageIdentifierVM CaptainImageIdentifier` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderTroopItemFormationClassVM>ActiveFormationClasses` | 属性 |
| `MBBindingList` | `public MBBindingList<OrderTroopItemFilterVM>ActiveFilters` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 OrderSubjectVM](../OrderSubjectVM/)
- [同命名空间 DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/)
- [同命名空间 MissionOrderCallbacks](../MissionOrderCallbacks/)
- [同命名空间 MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/)
- [同命名空间 MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/)

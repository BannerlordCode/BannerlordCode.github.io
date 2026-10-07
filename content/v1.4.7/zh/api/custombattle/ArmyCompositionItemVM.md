---
title: "ArmyCompositionItemVM"
description: "自定义战斗军队编组条目视图模型，管理单个兵种的构成数量与技能配置。"
---
# ArmyCompositionItemVM

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `ViewModel`
**源文件：** `bannerlord-1.4.7/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`（声明见第 14 行）

## 概述

`ArmyCompositionItemVM` 是自定义战斗军队编组中单个兵种条目的视图模型，负责管理该兵种的构成数量、可用技能列表以及兵种类型选择。它继承自 `ViewModel`，通过数据绑定驱动单个兵种条目的显示与交互，是 `ArmyCompositionGroupVM` 的组成单元。

## 心智模型

把 `ArmyCompositionItemVM` 看成军队编组面板中每一行兵种记录的"微型控制器"。它持有当前兵种的构成值（数量）、可用技能列表以及一个回调委托 `onCompositionValueChanged`，当数量变化时通知父级。`CompositionType` 内部枚举区分不同的兵种类型（如步兵、骑兵、弓箭手等）。`GetTroopTypeIconData(...)` 是静态方法，用于获取兵种类型的图标数据。

## 怎么用

### 怎么拿到

`ArmyCompositionItemVM` 由 `ArmyCompositionGroupVM` 在初始化时批量创建，每个兵种条目对应一个实例。开发者通常不直接实例化它，而是通过 `ArmyCompositionGroupVM` 间接管理。

### 典型用法

在自定义战斗军队编组界面中，当用户调整某个兵种的数量时，视图模型通过 `onCompositionValueChanged` 回调通知父级。需要添加新的兵种类型时调用 `ExecuteAddTroopTypes()`。随机化某个兵种的数量使用 `ExecuteRandomize(int)`。刷新构成值显示调用 `RefreshCompositionValue()`。

### 坑

- 构造函数参数较多且包含回调委托 `Action<int, int>`，传入 `null` 会导致数量变化时无法通知父级。
- `ExecuteRandomize(int)` 的参数是随机化种子或上限值，需确保传入合理的值以避免异常。
- `GetTroopTypeIconData(...)` 是静态方法，调用时需注意其参数签名，传入无效参数可能返回空或默认图标。

## 关键成员

| 成员 | 用途 |
|------|------|
| `ArmyCompositionItemVM(CompositionType, List<BasicCharacterObject>, MBReadOnlyList<SkillObject>, Action<int, int>, TroopTypeSelectionPopUpVM, int[])` | 构造函数，初始化兵种条目并注入依赖（ArmyCompositionItemVM.cs:17） |
| `RefreshValues()` | 重写方法，刷新所有绑定属性通知（ArmyCompositionItemVM.cs:32） |
| `SetCurrentSelectedCulture(BasicCultureObject)` | 设置当前选中的文化并刷新兵种数据（ArmyCompositionItemVM.cs:38） |
| `ExecuteRandomize(int)` | 随机化当前兵种的构成数量（ArmyCompositionItemVM.cs:46） |
| `ExecuteAddTroopTypes()` | 执行添加新兵种类型的逻辑（ArmyCompositionItemVM.cs:63） |
| `RefreshCompositionValue()` | 刷新当前兵种的构成值显示（ArmyCompositionItemVM.cs:75） |
| `GetTroopTypeIconData(...)` | 静态方法，获取兵种类型的图标数据（ArmyCompositionItemVM.cs:172） |
| `CompositionType` | 内部枚举，定义兵种类型分类（ArmyCompositionItemVM.cs:393） |

## 真实示例

```csharp
// 假设已通过 ArmyCompositionGroupVM 获取到 armyCompositionItemVM 实例
armyCompositionItemVM.SetCurrentSelectedCulture(cultureObject);
armyCompositionItemVM.ExecuteRandomize(100);
armyCompositionItemVM.ExecuteAddTroopTypes();
armyCompositionItemVM.RefreshCompositionValue();
armyCompositionItemVM.RefreshValues();
```

## 参见

- [ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [../../core-extra/Game](../../core-extra/Game)
- [../../sandbox/AgentNavigator](../../sandbox/AgentNavigator)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)

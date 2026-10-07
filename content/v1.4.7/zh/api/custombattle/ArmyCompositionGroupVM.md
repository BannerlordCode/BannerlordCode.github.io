---
title: "ArmyCompositionGroupVM"
description: "自定义战斗军队编组分组视图模型，管理兵种构成、文化选择与随机化。"
---
# ArmyCompositionGroupVM

**命名空间：** `TaleWorlds.MountAndBlade.CustomBattle`
**模块：** `TaleWorlds.MountAndBlade.CustomBattle`
**类型：** `class`
**基类：** `ViewModel`
**源文件：** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`（声明见第 11 行）

## 概述

`ArmyCompositionGroupVM` 是自定义战斗军队编组界面的视图模型，负责管理兵种构成列表、当前选中的文化（Culture）以及玩家类型。它继承自 `ViewModel`，通过数据绑定驱动编组面板的显示与交互，是军队编组逻辑与 UI 之间的中间层。

## 心智模型

把 `ArmyCompositionGroupVM` 看成军队编组面板的"指挥台"。它持有当前的文化选择、玩家类型以及一组 `ArmyCompositionItemVM` 实例。当用户切换文化或玩家类型时，视图模型更新内部状态并调用 `RefreshValues()` 通知界面刷新。`ExecuteRandomize(ArmyCompositionGroupVM)` 提供随机化编组的能力，`OnPlayerTypeChange(CustomBattlePlayerType)` 响应玩家类型切换。

## 怎么用

### 怎么拿到

`ArmyCompositionGroupVM` 由自定义战斗的父级视图模型在初始化时创建，需要传入一个 `TroopTypeSelectionPopUpVM` 实例用于兵种选择弹窗。开发者通常通过自定义战斗根视图模型间接访问它。

### 典型用法

在自定义战斗军队编组界面中，当用户切换文化时调用 `SetCurrentSelectedCulture(BasicCultureObject)` 更新当前文化。玩家类型变更通过 `OnPlayerTypeChange(CustomBattlePlayerType)` 处理。需要随机化编组时调用 `ExecuteRandomize(ArmyCompositionGroupVM)`。任何数据变更后都应调用 `RefreshValues()` 刷新绑定。

### 坑

- 构造函数需要传入 `TroopTypeSelectionPopUpVM` 实例，传入 `null` 会导致后续兵种选择功能异常。
- `ExecuteRandomize(ArmyCompositionGroupVM)` 的参数是另一个 `ArmyCompositionGroupVM` 实例，通常传入自身（`this`），但需注意避免在随机化过程中产生递归调用。
- `OnPlayerTypeChange(CustomBattlePlayerType)` 的参数是枚举类型，调用时需确保传入有效的玩家类型值。

## 关键成员

| 成员 | 用途 |
|------|------|
| `ArmyCompositionGroupVM(TroopTypeSelectionPopUpVM)` | 构造函数，初始化编组面板并注入兵种选择弹窗（ArmyCompositionGroupVM.cs:14） |
| `RefreshValues()` | 重写方法，刷新所有绑定属性通知（ArmyCompositionGroupVM.cs:38） |
| `SetCurrentSelectedCulture(BasicCultureObject)` | 设置当前选中的文化并刷新相关数据（ArmyCompositionGroupVM.cs:63） |
| `ExecuteRandomize(ArmyCompositionGroupVM)` | 执行编组随机化逻辑（ArmyCompositionGroupVM.cs:192） |
| `OnPlayerTypeChange(CustomBattlePlayerType)` | 响应玩家类型切换，联动更新编组选项（ArmyCompositionGroupVM.cs:219） |

## 真实示例

```csharp
// 假设已通过自定义战斗根视图模型获取到 armyCompositionGroupVM 实例
armyCompositionGroupVM.SetCurrentSelectedCulture(cultureObject);
armyCompositionGroupVM.OnPlayerTypeChange(CustomBattlePlayerType.Player);
armyCompositionGroupVM.ExecuteRandomize(armyCompositionGroupVM);
armyCompositionGroupVM.RefreshValues();
```

## 参见

- [ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [../../core-extra/Game](../../core-extra/Game)
- [../../system/GameKey](../../system/GameKey)

## 导航
- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)

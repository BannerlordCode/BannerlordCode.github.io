---
title: "ArmyCompositionGroupVM"
description: "ArmyCompositionGroupVM 的自动生成类参考。"
---
# ArmyCompositionGroupVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`

## 概述

`ArmyCompositionGroupVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MeleeInfantryComposition` | `public ArmyCompositionItemVM MeleeInfantryComposition { get; set; }` |
| `RangedInfantryComposition` | `public ArmyCompositionItemVM RangedInfantryComposition { get; set; }` |
| `MeleeCavalryComposition` | `public ArmyCompositionItemVM MeleeCavalryComposition { get; set; }` |
| `RangedCavalryComposition` | `public ArmyCompositionItemVM RangedCavalryComposition { get; set; }` |
| `ArmySizeTitle` | `public string ArmySizeTitle { get; set; }` |
| `ArmySize` | `public int ArmySize { get; set; }` |
| `MaxArmySize` | `public int MaxArmySize { get; set; }` |
| `MinArmySize` | `public int MinArmySize { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionGroupVM 实例
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.RefreshValues();
```

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject selectedCulture)`

**用途 / Purpose:** 为 current selected culture 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionGroupVM 实例
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.SetCurrentSelectedCulture(selectedCulture);
```

### ExecuteRandomize
`public void ExecuteRandomize(ArmyCompositionGroupVM oppositeSide = null)`

**用途 / Purpose:** 执行 randomize 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionGroupVM 实例
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.ExecuteRandomize(null);
```

### OnPlayerTypeChange
`public void OnPlayerTypeChange(CustomBattlePlayerType playerType)`

**用途 / Purpose:** 在 player type change 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionGroupVM 实例
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.OnPlayerTypeChange(playerType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyCompositionGroupVM armyCompositionGroupVM = ...;
armyCompositionGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)
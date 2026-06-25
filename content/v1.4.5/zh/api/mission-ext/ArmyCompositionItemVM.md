---
title: "ArmyCompositionItemVM"
description: "ArmyCompositionItemVM 的自动生成类参考。"
---
# ArmyCompositionItemVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyCompositionItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionItemVM.cs`

## 概述

`ArmyCompositionItemVM` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TroopTypes` | `public MBBindingList<CustomBattleTroopTypeVM> TroopTypes { get; set; }` |
| `InvalidHint` | `public HintViewModel InvalidHint { get; set; }` |
| `AddTroopTypeHint` | `public HintViewModel AddTroopTypeHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `CompositionValue` | `public int CompositionValue { get; set; }` |
| `CompositionValuePercentageText` | `public string CompositionValuePercentageText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionItemVM 实例
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshValues();
```

### SetCurrentSelectedCulture
`public void SetCurrentSelectedCulture(BasicCultureObject culture)`

**用途 / Purpose:** 为 「current selected culture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionItemVM 实例
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.SetCurrentSelectedCulture(culture);
```

### ExecuteRandomize
`public void ExecuteRandomize(int compositionValue)`

**用途 / Purpose:** 执行 「randomize」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionItemVM 实例
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.ExecuteRandomize(0);
```

### ExecuteAddTroopTypes
`public void ExecuteAddTroopTypes()`

**用途 / Purpose:** 执行 「add troop types」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionItemVM 实例
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.ExecuteAddTroopTypes();
```

### RefreshCompositionValue
`public void RefreshCompositionValue()`

**用途 / Purpose:** 使 「composition value」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ArmyCompositionItemVM 实例
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshCompositionValue();
```

### GetTroopTypeIconData
`public static StringItemWithHintVM GetTroopTypeIconData(BasicCharacterObject basicCharacterObject, CompositionType type, bool isBig = false)`

**用途 / Purpose:** 读取并返回当前对象中 「troop type icon data」 的结果。

```csharp
// 静态调用，不需要实例
ArmyCompositionItemVM.GetTroopTypeIconData(basicCharacterObject, type, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArmyCompositionItemVM armyCompositionItemVM = ...;
armyCompositionItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)
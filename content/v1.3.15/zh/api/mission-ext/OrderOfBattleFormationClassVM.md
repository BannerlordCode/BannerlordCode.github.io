---
title: "OrderOfBattleFormationClassVM"
description: "OrderOfBattleFormationClassVM 的自动生成类参考。"
---
# OrderOfBattleFormationClassVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleFormationClassVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassVM.cs`

## 概述

`OrderOfBattleFormationClassVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Class` | `public FormationClass Class { get; set; }` |
| `PreviousWeight` | `public int PreviousWeight { get; }` |
| `IsAdjustable` | `public bool IsAdjustable { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsUnset` | `public bool IsUnset { get; set; }` |
| `Weight` | `public int Weight { get; set; }` |
| `ShownFormationClass` | `public int ShownFormationClass { get; set; }` |
| `TroopCountText` | `public string TroopCountText { get; set; }` |
| `LockWeightHint` | `public HintViewModel LockWeightHint { get; set; }` |
| `IsWeightHighlightActive` | `public bool IsWeightHighlightActive { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationClassVM 实例
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.RefreshValues();
```

### UpdateTroopCountText
`public void UpdateTroopCountText()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 troop count text 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationClassVM 实例
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.UpdateTroopCountText();
```

### SetWeightAdjustmentLock
`public void SetWeightAdjustmentLock(bool isLocked)`

**用途 / Purpose:** **用途 / Purpose:** 为 weight adjustment lock 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationClassVM 实例
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.SetWeightAdjustmentLock(false);
```

### UpdateWeightAdjustable
`public void UpdateWeightAdjustable()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 weight adjustable 的最新表示。

```csharp
// 先通过子系统 API 拿到 OrderOfBattleFormationClassVM 实例
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.UpdateWeightAdjustable();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderOfBattleFormationClassVM orderOfBattleFormationClassVM = ...;
orderOfBattleFormationClassVM.RefreshValues();
```

## 参见

- [本区域目录](../)
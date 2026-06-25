---
title: "OrderOfBattleFormationClassVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleFormationClassVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### UpdateTroopCountText
`public void UpdateTroopCountText()`

**用途 / Purpose:** 更新 `troop count text` 的状态或数据。

### SetWeightAdjustmentLock
`public void SetWeightAdjustmentLock(bool isLocked)`

**用途 / Purpose:** 设置 `weight adjustment lock` 的值或状态。

### UpdateWeightAdjustable
`public void UpdateWeightAdjustable()`

**用途 / Purpose:** 更新 `weight adjustable` 的状态或数据。

## 使用示例

```csharp
var value = new OrderOfBattleFormationClassVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
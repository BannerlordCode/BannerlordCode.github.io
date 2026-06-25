---
title: "PartyTradeVM"
description: "PartyTradeVM 的自动生成类参考。"
---
# PartyTradeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PartyTradeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs`

## 概述

`PartyTradeVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Party`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTransfarable` | `public bool IsTransfarable { get; set; }` |
| `ThisStockLbl` | `public string ThisStockLbl { get; set; }` |
| `TotalStockLbl` | `public string TotalStockLbl { get; set; }` |
| `ThisStock` | `public int ThisStock { get; set; }` |
| `InitialThisStock` | `public int InitialThisStock { get; set; }` |
| `OtherStock` | `public int OtherStock { get; set; }` |
| `InitialOtherStock` | `public int InitialOtherStock { get; set; }` |
| `TotalStock` | `public int TotalStock { get; set; }` |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable { get; set; }` |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.RefreshValues();
```

### UpdateTroopData
`public void UpdateTroopData(TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool forceUpdate = true)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 troop data 的最新表示。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.UpdateTroopData(troopRoster, side, false);
```

### FindTroopFromSide
`public TroopRosterElement? FindTroopFromSide(CharacterObject character, PartyScreenLogic.PartyRosterSide side, bool isPrisoner)`

**用途 / Purpose:** **用途 / Purpose:** 在当前集合/范围内查找满足条件的troop from side。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
var result = partyTradeVM.FindTroopFromSide(character, side, false);
```

### ExecuteIncreasePlayerStock
`public void ExecuteIncreasePlayerStock()`

**用途 / Purpose:** **用途 / Purpose:** 执行 increase player stock 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteIncreasePlayerStock();
```

### ExecuteIncreaseOtherStock
`public void ExecuteIncreaseOtherStock()`

**用途 / Purpose:** **用途 / Purpose:** 执行 increase other stock 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteIncreaseOtherStock();
```

### ExecuteReset
`public void ExecuteReset()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteReset();
```

### ExecuteApplyTransaction
`public void ExecuteApplyTransaction()`

**用途 / Purpose:** **用途 / Purpose:** 执行 apply transaction 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteApplyTransaction();
```

### ExecuteRemoveZeroCounts
`public void ExecuteRemoveZeroCounts()`

**用途 / Purpose:** **用途 / Purpose:** 执行 remove zero counts 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 PartyTradeVM 实例
PartyTradeVM partyTradeVM = ...;
partyTradeVM.ExecuteRemoveZeroCounts();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
PartyTradeVM partyTradeVM = ...;
partyTradeVM.RefreshValues();
```

## 参见

- [本区域目录](../)
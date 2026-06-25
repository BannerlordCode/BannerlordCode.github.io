---
title: "SettlementDailyProjectVM"
description: "SettlementDailyProjectVM 的自动生成类参考。"
---
# SettlementDailyProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementDailyProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/SettlementDailyProjectVM.cs`

## 概述

`SettlementDailyProjectVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsDefault` | `public bool IsDefault { get; set; }` |
| `DefaultText` | `public string DefaultText { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshValues();
```

### RefreshProductionText
`public override void RefreshProductionText()`

**用途 / Purpose:** 使 production text 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshProductionText();
```

### ExecuteAddRemoveToQueue
`public override void ExecuteAddRemoveToQueue()`

**用途 / Purpose:** 执行 add remove to queue 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteAddRemoveToQueue();
```

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**用途 / Purpose:** 执行 set as active development 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteSetAsActiveDevelopment();
```

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**用途 / Purpose:** 执行 set as current 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteSetAsCurrent();
```

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**用途 / Purpose:** 执行 reset current 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteResetCurrent();
```

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**用途 / Purpose:** 执行 toggle selected 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementDailyProjectVM 实例
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.ExecuteToggleSelected();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementDailyProjectVM settlementDailyProjectVM = ...;
settlementDailyProjectVM.RefreshValues();
```

## 参见

- [本区域目录](../)
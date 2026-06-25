---
title: "SettlementBuildingProjectVM"
description: "SettlementBuildingProjectVM 的自动生成类参考。"
---
# SettlementBuildingProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`

## 概述

`SettlementBuildingProjectVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DevelopmentLevelText` | `public string DevelopmentLevelText { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint { get; set; }` |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshValues();
```

### RefreshProductionText
`public override void RefreshProductionText()`

**用途 / Purpose:** **用途 / Purpose:** 使 production text 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshProductionText();
```

### ExecuteAddToQueue
`public override void ExecuteAddToQueue()`

**用途 / Purpose:** **用途 / Purpose:** 执行 add to queue 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteAddToQueue();
```

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set as active development 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteSetAsActiveDevelopment();
```

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**用途 / Purpose:** **用途 / Purpose:** 执行 set as current 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteSetAsCurrent();
```

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**用途 / Purpose:** **用途 / Purpose:** 执行 reset current 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteResetCurrent();
```

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**用途 / Purpose:** **用途 / Purpose:** 执行 toggle selected 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementBuildingProjectVM 实例
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.ExecuteToggleSelected();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementBuildingProjectVM settlementBuildingProjectVM = ...;
settlementBuildingProjectVM.RefreshValues();
```

## 参见

- [本区域目录](../)
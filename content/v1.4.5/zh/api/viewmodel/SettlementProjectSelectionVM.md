---
title: "SettlementProjectSelectionVM"
description: "SettlementProjectSelectionVM 的自动生成类参考。"
---
# SettlementProjectSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementProjectSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/SettlementProjectSelectionVM.cs`

## 概述

`SettlementProjectSelectionVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LocalDevelopmentList` | `public List<Building> LocalDevelopmentList { get; }` |
| `ProjectsText` | `public string ProjectsText { get; set; }` |
| `QueueText` | `public string QueueText { get; set; }` |
| `DailyDefaultsText` | `public string DailyDefaultsText { get; set; }` |
| `DailyDefaultsExplanationText` | `public string DailyDefaultsExplanationText { get; set; }` |
| `CurrentSelectedProject` | `public SettlementProjectVM CurrentSelectedProject { get; set; }` |
| `CurrentDailyDefault` | `public SettlementDailyProjectVM CurrentDailyDefault { get; set; }` |
| `AvailableProjects` | `public MBBindingList<SettlementBuildingProjectVM> AvailableProjects { get; set; }` |
| `CurrentDevelopmentQueue` | `public MBBindingList<SettlementBuildingProjectVM> CurrentDevelopmentQueue { get; set; }` |
| `DailyDefaultList` | `public MBBindingList<SettlementDailyProjectVM> DailyDefaultList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementProjectSelectionVM 实例
SettlementProjectSelectionVM settlementProjectSelectionVM = ...;
settlementProjectSelectionVM.RefreshValues();
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 SettlementProjectSelectionVM 实例
SettlementProjectSelectionVM settlementProjectSelectionVM = ...;
settlementProjectSelectionVM.Refresh();
```

### ExecuteChangeQueueOrder
`public void ExecuteChangeQueueOrder(SettlementBuildingProjectVM project, int index, string targetTag)`

**用途 / Purpose:** 执行 change queue order 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SettlementProjectSelectionVM 实例
SettlementProjectSelectionVM settlementProjectSelectionVM = ...;
settlementProjectSelectionVM.ExecuteChangeQueueOrder(project, 0, "example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SettlementProjectSelectionVM settlementProjectSelectionVM = ...;
settlementProjectSelectionVM.RefreshValues();
```

## 参见

- [本区域目录](../)
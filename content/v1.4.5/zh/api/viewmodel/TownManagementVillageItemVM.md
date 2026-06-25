---
title: "TownManagementVillageItemVM"
description: "TownManagementVillageItemVM 的自动生成类参考。"
---
# TownManagementVillageItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementVillageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementVillageItemVM.cs`

## 概述

`TownManagementVillageItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `ProductionName` | `public string ProductionName { get; set; }` |
| `Background` | `public string Background { get; set; }` |
| `VillageType` | `public int VillageType { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TownManagementVillageItemVM 实例
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.RefreshValues();
```

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 show tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TownManagementVillageItemVM 实例
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.ExecuteShowTooltip();
```

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 hide tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 TownManagementVillageItemVM 实例
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.ExecuteHideTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TownManagementVillageItemVM townManagementVillageItemVM = ...;
townManagementVillageItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)
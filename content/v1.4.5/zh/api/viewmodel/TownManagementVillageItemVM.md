---
title: "TownManagementVillageItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TownManagementVillageItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TownManagementVillageItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TownManagementVillageItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/TownManagementVillageItemVM.cs`

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

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 `show tooltip` 操作或流程。

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 `hide tooltip` 操作或流程。

## 使用示例

```csharp
var value = new TownManagementVillageItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)
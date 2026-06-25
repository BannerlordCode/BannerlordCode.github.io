---
title: "ClanSupporterGroupVM"
description: "ClanSupporterGroupVM 的自动生成类参考。"
---
# ClanSupporterGroupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Supporters/ClanSupporterGroupVM.cs`

## 概述

`ClanSupporterGroupVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus { get; }` |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Supporters` | `public MBBindingList<ClanSupporterItemVM> Supporters { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanSupporterGroupVM 实例
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.RefreshValues();
```

### AddSupporter
`public void AddSupporter(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 将 supporter 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ClanSupporterGroupVM 实例
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.AddSupporter(hero);
```

### Refresh
`public void Refresh()`

**用途 / Purpose:** **用途 / Purpose:** 刷新当前对象的显示或缓存，使其与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanSupporterGroupVM 实例
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.Refresh();
```

### ExecuteSelect
`public void ExecuteSelect()`

**用途 / Purpose:** **用途 / Purpose:** 执行 select 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSupporterGroupVM 实例
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.ExecuteSelect();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanSupporterGroupVM clanSupporterGroupVM = ...;
clanSupporterGroupVM.RefreshValues();
```

## 参见

- [本区域目录](../)
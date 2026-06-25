---
title: "ClanSettlementItemVM"
description: "ClanSettlementItemVM 的自动生成类参考。"
---
# ClanSettlementItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSettlementItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement/ClanSettlementItemVM.cs`

## 概述

`ClanSettlementItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Governor` | `public HeroVM Governor { get; set; }` |
| `ItemProperties` | `public MBBindingList<SelectableFiefItemPropertyVM> ItemProperties { get; set; }` |
| `ProfitItemProperties` | `public MBBindingList<ProfitItemPropertyVM> ProfitItemProperties { get; set; }` |
| `TotalProfit` | `public ProfitItemPropertyVM TotalProfit { get; set; }` |
| `FileName` | `public string FileName { get; set; }` |
| `ImageName` | `public string ImageName { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `NotablesText` | `public string NotablesText { get; set; }` |
| `MembersText` | `public string MembersText { get; set; }` |
| `IsFortification` | `public bool IsFortification { get; set; }` |
| `HasGovernor` | `public bool HasGovernor { get; set; }` |
| `HasNotables` | `public bool HasNotables { get; set; }` |
| `IsSendMembersEnabled` | `public bool IsSendMembersEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `VillagesOwned` | `public MBBindingList<ClanSettlementItemVM> VillagesOwned { get; set; }` |
| `Notables` | `public MBBindingList<HeroVM> Notables { get; set; }` |
| `Members` | `public MBBindingList<HeroVM> Members { get; set; }` |
| `SendMembersHint` | `public HintViewModel SendMembersHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.RefreshValues();
```

### OnSettlementSelection
`public void OnSettlementSelection()`

**用途 / Purpose:** 在 settlement selection 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.OnSettlementSelection();
```

### ExecuteLink
`public void ExecuteLink()`

**用途 / Purpose:** 执行 link 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteLink();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** 执行 close tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteCloseTooltip();
```

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** 执行 open tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteOpenTooltip();
```

### ExecuteSendMembers
`public void ExecuteSendMembers()`

**用途 / Purpose:** 执行 send members 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSettlementItemVM 实例
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.ExecuteSendMembers();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanSettlementItemVM clanSettlementItemVM = ...;
clanSettlementItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)
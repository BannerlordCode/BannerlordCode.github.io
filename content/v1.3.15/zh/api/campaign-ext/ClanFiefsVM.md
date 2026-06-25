---
title: "ClanFiefsVM"
description: "ClanFiefsVM 的自动生成类参考。"
---
# ClanFiefsVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFiefsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsVM.cs`

## 概述

`ClanFiefsVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GovernorActionText` | `public string GovernorActionText { get; set; }` |
| `CanChangeGovernorOfCurrentFief` | `public bool CanChangeGovernorOfCurrentFief { get; set; }` |
| `GovernorActionHint` | `public HintViewModel GovernorActionHint { get; set; }` |
| `IsAnyValidFiefSelected` | `public bool IsAnyValidFiefSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TaxText` | `public string TaxText { get; set; }` |
| `GovernorText` | `public string GovernorText { get; set; }` |
| `ProfitText` | `public string ProfitText { get; set; }` |
| `TownsText` | `public string TownsText { get; set; }` |
| `CastlesText` | `public string CastlesText { get; set; }` |
| `NoFiefsText` | `public string NoFiefsText { get; set; }` |
| `NoGovernorText` | `public string NoGovernorText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Settlements` | `public MBBindingList<ClanSettlementItemVM> Settlements { get; set; }` |
| `Castles` | `public MBBindingList<ClanSettlementItemVM> Castles { get; set; }` |
| `CurrentSelectedFief` | `public ClanSettlementItemVM CurrentSelectedFief { get; set; }` |
| `SortController` | `public ClanFiefsSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanFiefsVM 实例
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanFiefsVM 实例
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.OnFinalize();
```

### RefreshAllLists
`public void RefreshAllLists()`

**用途 / Purpose:** 使 「all lists」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanFiefsVM 实例
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.RefreshAllLists();
```

### SelectFief
`public void SelectFief(Settlement settlement)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClanFiefsVM 实例
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.SelectFief(settlement);
```

### ExecuteAssignGovernor
`public void ExecuteAssignGovernor()`

**用途 / Purpose:** 执行 「assign governor」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFiefsVM 实例
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.ExecuteAssignGovernor();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanFiefsVM clanFiefsVM = ...;
clanFiefsVM.RefreshValues();
```

## 参见

- [本区域目录](../)
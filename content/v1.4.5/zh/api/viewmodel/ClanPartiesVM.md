---
title: "ClanPartiesVM"
description: "ClanPartiesVM 的自动生成类参考。"
---
# ClanPartiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanPartiesVM.cs`

## 概述

`ClanPartiesVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TotalExpense` | `public int TotalExpense { get; }` |
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint { get; set; }` |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CaravansText` | `public string CaravansText { get; set; }` |
| `GarrisonsText` | `public string GarrisonsText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CreateNewPartyText` | `public string CreateNewPartyText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanCreateNewParty` | `public bool CanCreateNewParty { get; set; }` |
| `Parties` | `public MBBindingList<ClanPartyItemVM> Parties { get; set; }` |
| `Caravans` | `public MBBindingList<ClanPartyItemVM> Caravans { get; set; }` |
| `Garrisons` | `public MBBindingList<ClanPartyItemVM> Garrisons { get; set; }` |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty { get; set; }` |
| `SortController` | `public ClanPartiesSortControllerVM SortController { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

### RefreshTotalExpense
`public void RefreshTotalExpense()`

**用途 / Purpose:** 使 「total expense」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshTotalExpense();
```

### RefreshPartiesList
`public void RefreshPartiesList()`

**用途 / Purpose:** 使 「parties list」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshPartiesList();
```

### ExecuteCreateNewParty
`public void ExecuteCreateNewParty()`

**用途 / Purpose:** 执行 「create new party」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.ExecuteCreateNewParty();
```

### SelectParty
`public void SelectParty(PartyBase party)`

**用途 / Purpose:** 处理与 「select party」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.SelectParty(party);
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnFinalize();
```

### OnShowNewPartyPopup
`public void OnShowNewPartyPopup()`

**用途 / Purpose:** 在 「show new party popup」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowNewPartyPopup();
```

### OnShowChangeLeaderPopup
`public void OnShowChangeLeaderPopup()`

**用途 / Purpose:** 在 「show change leader popup」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClanPartiesVM 实例
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowChangeLeaderPopup();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

## 参见

- [本区域目录](../)
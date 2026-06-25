---
title: "ClanFinanceAlleyItemVM"
description: "ClanFinanceAlleyItemVM 的自动生成类参考。"
---
# ClanFinanceAlleyItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanFinanceAlleyItemVM : ClanFinanceIncomeItemBaseVM`
**Base:** `ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceAlleyItemVM.cs`

## 概述

`ClanFinanceAlleyItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ManageAlleyHint` | `public HintViewModel ManageAlleyHint { get; set; }` |
| `OwnerVisual` | `public CharacterImageIdentifierVM OwnerVisual { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `IncomeTextWithVisual` | `public string IncomeTextWithVisual { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanFinanceAlleyItemVM 实例
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.RefreshValues();
```

### ExecuteManageAlley
`public void ExecuteManageAlley()`

**用途 / Purpose:** 执行 「manage alley」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFinanceAlleyItemVM 实例
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteManageAlley();
```

### ExecuteBeginHeroHint
`public void ExecuteBeginHeroHint()`

**用途 / Purpose:** 执行 「begin hero hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFinanceAlleyItemVM 实例
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteBeginHeroHint();
```

### ExecuteEndHeroHint
`public void ExecuteEndHeroHint()`

**用途 / Purpose:** 执行 「end hero hint」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanFinanceAlleyItemVM 实例
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.ExecuteEndHeroHint();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanFinanceAlleyItemVM clanFinanceAlleyItemVM = ...;
clanFinanceAlleyItemVM.RefreshValues();
```

## 参见

- [本区域目录](../)
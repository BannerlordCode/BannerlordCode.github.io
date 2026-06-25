---
title: "ClanSupporterItemVM"
description: "ClanSupporterItemVM 的自动生成类参考。"
---
# ClanSupporterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanSupporterItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters/ClanSupporterItemVM.cs`

## 概述

`ClanSupporterItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public HeroVM Hero { get; set; }` |

## 主要方法

### ExecuteOpenTooltip
`public void ExecuteOpenTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 open tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSupporterItemVM 实例
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteOpenTooltip();
```

### ExecuteCloseTooltip
`public void ExecuteCloseTooltip()`

**用途 / Purpose:** **用途 / Purpose:** 执行 close tooltip 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 ClanSupporterItemVM 实例
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteCloseTooltip();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanSupporterItemVM clanSupporterItemVM = ...;
clanSupporterItemVM.ExecuteOpenTooltip();
```

## 参见

- [本区域目录](../)
---
title: "ClanCardSelectionPopupItemPropertyVM"
description: "ClanCardSelectionPopupItemPropertyVM 的自动生成类参考。"
---
# ClanCardSelectionPopupItemPropertyVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanCardSelectionPopupItemPropertyVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionPopupItemPropertyVM.cs`

## 概述

`ClanCardSelectionPopupItemPropertyVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Title` | `public string Title { get; set; }` |
| `Value` | `public string Value { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 ClanCardSelectionPopupItemPropertyVM 实例
ClanCardSelectionPopupItemPropertyVM clanCardSelectionPopupItemPropertyVM = ...;
clanCardSelectionPopupItemPropertyVM.RefreshValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ClanCardSelectionPopupItemPropertyVM clanCardSelectionPopupItemPropertyVM = ...;
clanCardSelectionPopupItemPropertyVM.RefreshValues();
```

## 参见

- [本区域目录](../)
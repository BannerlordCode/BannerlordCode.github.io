---
title: "KingdomCategoryVM"
description: "KingdomCategoryVM 的自动生成类参考。"
---
# KingdomCategoryVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomCategoryVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/KingdomCategoryVM.cs`

## 概述

`KingdomCategoryVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CategoryNameText` | `public string CategoryNameText { get; set; }` |
| `NoItemSelectedText` | `public string NoItemSelectedText { get; set; }` |
| `IsAcceptableItemSelected` | `public bool IsAcceptableItemSelected { get; set; }` |
| `NotificationCount` | `public int NotificationCount { get; set; }` |
| `Show` | `public bool Show { get; set; }` |

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
KingdomCategoryVM instance = ...;
```

## 参见

- [本区域目录](../)
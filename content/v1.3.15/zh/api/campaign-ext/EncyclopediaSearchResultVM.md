---
title: "EncyclopediaSearchResultVM"
description: "EncyclopediaSearchResultVM 的自动生成类参考。"
---
# EncyclopediaSearchResultVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaSearchResultVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/EncyclopediaSearchResultVM.cs`

## 概述

`EncyclopediaSearchResultVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OrgNameText` | `public string OrgNameText { get; }` |
| `NameText` | `public string NameText { get; set; }` |

## 主要方法

### UpdateSearchedText
`public void UpdateSearchedText(string searchedText)`

**用途 / Purpose:** 重新计算并更新 「searched text」 的最新表示。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSearchResultVM 实例
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.UpdateSearchedText("example");
```

### Execute
`public void Execute()`

**用途 / Purpose:** 执行当前对象代表的操作或工作流。

```csharp
// 先通过子系统 API 拿到 EncyclopediaSearchResultVM 实例
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.Execute();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EncyclopediaSearchResultVM encyclopediaSearchResultVM = ...;
encyclopediaSearchResultVM.UpdateSearchedText("example");
```

## 参见

- [本区域目录](../)
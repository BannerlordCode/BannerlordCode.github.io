---
title: "EncyclopediaContentPageVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaContentPageVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaContentPageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EncyclopediaContentPageVM`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages/EncyclopediaContentPageVM.cs`

## 概述

`EncyclopediaContentPageVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled { get; set; }` |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled { get; set; }` |
| `PreviousButtonLabel` | `public string PreviousButtonLabel { get; set; }` |
| `NextButtonLabel` | `public string NextButtonLabel { get; set; }` |
| `PreviousButtonHint` | `public HintViewModel PreviousButtonHint { get; set; }` |
| `NextButtonHint` | `public HintViewModel NextButtonHint { get; set; }` |

## 主要方法

### EncyclopediaContentPageVM
`public class EncyclopediaContentPageVM(EncyclopediaPageArgs args)`

**用途 / Purpose:** 处理 `encyclopedia content page v m` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### InitializeQuickNavigation
`public void InitializeQuickNavigation(EncyclopediaListVM list)`

**用途 / Purpose:** 初始化 `quick navigation` 的状态、资源或绑定。

### ExecuteGoToNextItem
`public void ExecuteGoToNextItem()`

**用途 / Purpose:** 执行 `go to next item` 操作或流程。

### ExecuteGoToPreviousItem
`public void ExecuteGoToPreviousItem()`

**用途 / Purpose:** 执行 `go to previous item` 操作或流程。

## 使用示例

```csharp
var value = new EncyclopediaContentPageVM();
value.EncyclopediaContentPageVM(args);
```

## 参见

- [完整类目录](../catalog)
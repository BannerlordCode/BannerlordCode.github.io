---
title: "BannerBuilderColorItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BannerBuilderColorItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BannerBuilderColorItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderColorItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder/BannerBuilderColorItemVM.cs`

## 概述

`BannerBuilderColorItemVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.BannerBuilder` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ColorID` | `public int ColorID { get; }` |
| `BannerColor` | `public BannerColor BannerColor { get; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `ColorAsStr` | `public string ColorAsStr { get; set; }` |

## 主要方法

### ExecuteSelection
`public void ExecuteSelection()`

**用途 / Purpose:** 执行 `selection` 操作或流程。

## 使用示例

```csharp
var value = new BannerBuilderColorItemVM();
value.ExecuteSelection();
```

## 参见

- [完整类目录](../catalog)
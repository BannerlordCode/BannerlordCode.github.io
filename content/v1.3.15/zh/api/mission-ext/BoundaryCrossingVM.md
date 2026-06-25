---
title: "BoundaryCrossingVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BoundaryCrossingVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BoundaryCrossingVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryCrossingVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/BoundaryCrossingVM.cs`

## 概述

`BoundaryCrossingVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Show` | `public bool Show { get; set; }` |
| `WarningText` | `public string WarningText { get; set; }` |
| `WarningProgress` | `public double WarningProgress { get; set; }` |
| `WarningIntProgress` | `public int WarningIntProgress { get; set; }` |
| `Countdown` | `public int Countdown { get; set; }` |

## 使用示例

```csharp
var value = new BoundaryCrossingVM();
```

## 参见

- [完整类目录](../catalog)
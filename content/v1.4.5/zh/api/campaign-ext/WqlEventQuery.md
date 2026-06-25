---
title: "WqlEventQuery"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WqlEventQuery`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WqlEventQuery

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class WqlEventQuery : EventQuery`
**Base:** `EventQuery`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/WqlEventQuery.cs`

## 概述

`WqlEventQuery` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Condition` | `public string Condition { get; set; }` |
| `EventClassName` | `public string EventClassName { get; set; }` |
| `GroupByPropertyList` | `public StringCollection GroupByPropertyList { get; set; }` |
| `GroupWithinInterval` | `public TimeSpan GroupWithinInterval { get; set; }` |
| `HavingCondition` | `public string HavingCondition { get; set; }` |
| `QueryLanguage` | `public override string QueryLanguage { get; }` |
| `QueryString` | `public override string QueryString { get; set; }` |
| `WithinInterval` | `public TimeSpan WithinInterval { get; set; }` |

## 主要方法

### Clone
`public override object Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

## 使用示例

```csharp
var value = new WqlEventQuery();
value.Clone();
```

## 参见

- [完整类目录](../catalog)
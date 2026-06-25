---
title: "GraphVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GraphVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphVM

**Namespace:** TaleWorlds.Library.Graph
**Module:** TaleWorlds.Library
**Type:** `public class GraphVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Library/Graph/GraphVM.cs`

## 概述

`GraphVM` 位于 `TaleWorlds.Library.Graph`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library.Graph` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Lines` | `public MBBindingList<GraphLineVM> Lines { get; set; }` |
| `HorizontalAxisLabel` | `public string HorizontalAxisLabel { get; set; }` |
| `VerticalAxisLabel` | `public string VerticalAxisLabel { get; set; }` |
| `HorizontalMinValue` | `public float HorizontalMinValue { get; set; }` |
| `HorizontalMaxValue` | `public float HorizontalMaxValue { get; set; }` |
| `VerticalMinValue` | `public float VerticalMinValue { get; set; }` |
| `VerticalMaxValue` | `public float VerticalMaxValue { get; set; }` |

## 主要方法

### Draw
`public void Draw( { "line", "points" })`

**用途 / Purpose:** 处理 `draw` 相关逻辑。

## 使用示例

```csharp
var value = new GraphVM();
value.Draw("line", });
```

## 参见

- [完整类目录](../catalog)
---
title: "GlobalLayer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GlobalLayer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GlobalLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public class GlobalLayer : IComparable`
**Base:** `IComparable`
**File:** `TaleWorlds.ScreenSystem/GlobalLayer.cs`

## 概述

`GlobalLayer` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Layer` | `public ScreenLayer Layer { get; set; }` |

## 主要方法

### CompareTo
`public int CompareTo(object obj)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

## 使用示例

```csharp
var value = new GlobalLayer();
value.CompareTo(obj);
```

## 参见

- [完整类目录](../catalog)
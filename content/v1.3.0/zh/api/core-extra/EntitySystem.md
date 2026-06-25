---
title: "EntitySystem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EntitySystem`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EntitySystem

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class EntitySystem<T>`
**Base:** 无
**File:** `TaleWorlds.Core/EntitySystem.cs`

## 概述

`EntitySystem` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Components` | `public MBReadOnlyList<T> Components { get; }` |

## 主要方法

### AddComponent
`public T AddComponent(Type componentType)`

**用途 / Purpose:** 向当前集合/状态中添加 `component`。

### GetComponent
`public T GetComponent(Type componentType)`

**用途 / Purpose:** 获取 `component` 的当前值。

### GetComponents
`public MBList<T> GetComponents()`

**用途 / Purpose:** 获取 `components` 的当前值。

### Finalize
`public void Finalize(T component)`

**用途 / Purpose:** 处理 `finalize` 相关逻辑。

### RemoveComponent
`public void RemoveComponent(T component)`

**用途 / Purpose:** 从当前集合/状态中移除 `component`。

## 使用示例

```csharp
var value = new EntitySystem();
value.AddComponent(componentType);
```

## 参见

- [完整类目录](../catalog)
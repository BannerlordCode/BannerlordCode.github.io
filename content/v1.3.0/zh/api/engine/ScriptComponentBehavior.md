---
title: "ScriptComponentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScriptComponentBehavior`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScriptComponentBehavior

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject`
**Base:** `DotNetObject`
**File:** `TaleWorlds.Engine/ScriptComponentBehavior.cs`

## 概述

`ScriptComponentBehavior` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameEntity` | `public WeakGameEntity GameEntity { get; }` |
| `ScriptComponent` | `public ManagedScriptComponent ScriptComponent { get; }` |
| `Scene` | `public Scene Scene { get; }` |

## 主要方法

### SetScriptComponentToTick
`public void SetScriptComponentToTick(ScriptComponentBehavior.TickRequirement tickReq)`

**用途 / Purpose:** 设置 `script component to tick` 的值或状态。

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(ScriptComponentBehavior.TickRequirement value)`

**用途 / Purpose:** 设置 `script component to tick m t` 的值或状态。

### GetTickRequirement
`public virtual ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

## 使用示例

```csharp
var implementation = new CustomScriptComponentBehavior();
```

## 参见

- [完整类目录](../catalog)
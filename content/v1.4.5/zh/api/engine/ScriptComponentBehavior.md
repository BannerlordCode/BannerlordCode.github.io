---
title: "ScriptComponentBehavior"
description: "ScriptComponentBehavior 的自动生成类参考。"
---
# ScriptComponentBehavior

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public abstract class ScriptComponentBehavior : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ScriptComponentBehavior.cs`

## 概述

`ScriptComponentBehavior` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ScriptComponent` | `public ManagedScriptComponent ScriptComponent { get; }` |
| `Scene` | `public Scene Scene { get; }` |

## 主要方法

### SetScriptComponentToTick
`public void SetScriptComponentToTick(TickRequirement tickReq)`

**用途 / Purpose:** 为 script component to tick 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScriptComponentBehavior 实例
ScriptComponentBehavior scriptComponentBehavior = ...;
scriptComponentBehavior.SetScriptComponentToTick(tickReq);
```

### SetScriptComponentToTickMT
`public void SetScriptComponentToTickMT(TickRequirement value)`

**用途 / Purpose:** 为 script component to tick m t 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScriptComponentBehavior 实例
ScriptComponentBehavior scriptComponentBehavior = ...;
scriptComponentBehavior.SetScriptComponentToTickMT(value);
```

### GetTickRequirement
`public virtual TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 ScriptComponentBehavior 实例
ScriptComponentBehavior scriptComponentBehavior = ...;
var result = scriptComponentBehavior.GetTickRequirement();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ScriptComponentBehavior instance = ...;
```

## 参见

- [本区域目录](../)
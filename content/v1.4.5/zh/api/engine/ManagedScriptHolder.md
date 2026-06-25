---
title: "ManagedScriptHolder"
description: "ManagedScriptHolder 的自动生成类参考。"
---
# ManagedScriptHolder

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ManagedScriptHolder : DotNetObject`
**Base:** `DotNetObject`
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/ManagedScriptHolder.cs`

## 概述

`ManagedScriptHolder` 位于 `TaleWorlds.Engine`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Engine` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetScriptComponentHolder
`public void SetScriptComponentHolder(ScriptComponentBehavior sc)`

**用途 / Purpose:** 为 「script component holder」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ManagedScriptHolder 实例
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.SetScriptComponentHolder(sc);
```

### UpdateTickRequirement
`public void UpdateTickRequirement(ScriptComponentBehavior sc, ScriptComponentBehavior.TickRequirement oldTickRequirement, ScriptComponentBehavior.TickRequirement newTickRequirement)`

**用途 / Purpose:** 重新计算并更新 「tick requirement」 的最新表示。

```csharp
// 先通过子系统 API 拿到 ManagedScriptHolder 实例
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.UpdateTickRequirement(sc, oldTickRequirement, newTickRequirement);
```

### RemoveScriptComponentFromAllTickLists
`public void RemoveScriptComponentFromAllTickLists(ScriptComponentBehavior sc)`

**用途 / Purpose:** 从当前容器或状态中移除 「script component from all tick lists」。

```csharp
// 先通过子系统 API 拿到 ManagedScriptHolder 实例
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.RemoveScriptComponentFromAllTickLists(sc);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ManagedScriptHolder managedScriptHolder = ...;
managedScriptHolder.SetScriptComponentHolder(sc);
```

## 参见

- [本区域目录](../)
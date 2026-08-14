---
title: "EntitySystem"
description: "EntitySystem 的自动生成类参考。"
---
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

**用途 / Purpose:** 将 component 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 EntitySystem 实例
EntitySystem entitySystem = ...;
var result = entitySystem.AddComponent(componentType);
```

### GetComponent
`public T GetComponent(Type componentType)`

**用途 / Purpose:** 读取并返回当前对象中 component 的结果。

```csharp
// 先通过子系统 API 拿到 EntitySystem 实例
EntitySystem entitySystem = ...;
var result = entitySystem.GetComponent(componentType);
```

### GetComponents
`public MBList<T> GetComponents()`

**用途 / Purpose:** 读取并返回当前对象中 components 的结果。

```csharp
// 先通过子系统 API 拿到 EntitySystem 实例
EntitySystem entitySystem = ...;
var result = entitySystem.GetComponents();
```

### Finalize
`public void Finalize(T component)`

**用途 / Purpose:** 在垃圾回收时执行清理工作（通常用于释放非托管资源）。

```csharp
// 先通过子系统 API 拿到 EntitySystem 实例
EntitySystem entitySystem = ...;
entitySystem.Finalize(component);
```

### RemoveComponent
`public void RemoveComponent(T component)`

**用途 / Purpose:** 从当前容器或状态中移除 component。

```csharp
// 先通过子系统 API 拿到 EntitySystem 实例
EntitySystem entitySystem = ...;
entitySystem.RemoveComponent(component);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EntitySystem entitySystem = ...;
entitySystem.AddComponent(componentType);
```

## 参见

- [本区域目录](../)
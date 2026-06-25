---
title: "Ray"
description: "Ray 的自动生成类参考。"
---
# Ray

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct Ray`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/Ray.cs`

## 概述

`Ray` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Origin` | `public Vec3 Origin { get; }` |
| `Direction` | `public Vec3 Direction { get; }` |
| `MaxDistance` | `public float MaxDistance { get; }` |

## 主要方法

### Reset
`public void Reset(Vec3 origin, Vec3 direction, float maxDistance = float.MaxValue)`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 Ray 实例
Ray ray = ...;
ray.Reset(origin, direction, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Ray ray = ...;
ray.Reset(origin, direction, 0);
```

## 参见

- [本区域目录](../)
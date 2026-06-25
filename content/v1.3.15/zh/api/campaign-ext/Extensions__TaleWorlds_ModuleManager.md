---
title: "Extensions"
description: "Extensions 的自动生成类参考。"
---
# Extensions

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public static class Extensions`
**Base:** 无
**File:** `TaleWorlds.ModuleManager/Extensions.cs`

## 概述

`Extensions` 位于 `TaleWorlds.ModuleManager`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ModuleManager` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetActiveReferencingGameAssembliesSafe
`public static Assembly GetActiveReferencingGameAssembliesSafe(this Assembly assembly)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active referencing game assemblies safe 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetActiveReferencingGameAssembliesSafe(assembly);
```

## 使用示例

```csharp
Extensions.GetActiveReferencingGameAssembliesSafe(assembly);
```

## 参见

- [本区域目录](../)
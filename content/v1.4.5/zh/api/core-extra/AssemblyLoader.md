---
title: "AssemblyLoader"
description: "AssemblyLoader 的自动生成类参考。"
---
# AssemblyLoader

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class AssemblyLoader`
**Base:** 无
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/AssemblyLoader.cs`

## 概述

`AssemblyLoader` 位于 `TaleWorlds.Library`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Library` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Initialize
`public static void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
AssemblyLoader.Initialize();
```

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, bool showError = true)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from。

```csharp
// 静态调用，不需要实例
AssemblyLoader.LoadFrom("example", false);
```

### LoadFrom
`public static Assembly LoadFrom(string assemblyFile, out AssemblyLoadResult result, bool showError = true)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取 from。

```csharp
// 静态调用，不需要实例
AssemblyLoader.LoadFrom("example", result, false);
```

## 使用示例

```csharp
AssemblyLoader.Initialize();
```

## 参见

- [本区域目录](../)
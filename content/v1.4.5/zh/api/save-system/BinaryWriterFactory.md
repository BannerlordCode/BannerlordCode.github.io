---
title: "BinaryWriterFactory"
description: "BinaryWriterFactory 的自动生成类参考。"
---
# BinaryWriterFactory

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal static class BinaryWriterFactory`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/BinaryWriterFactory.cs`

## 概述

`BinaryWriterFactory` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetBinaryWriter
`public static BinaryWriter GetBinaryWriter()`

**用途 / Purpose:** 读取并返回当前对象中 binary writer 的结果。

```csharp
// 静态调用，不需要实例
BinaryWriterFactory.GetBinaryWriter();
```

### ReleaseBinaryWriter
`public static void ReleaseBinaryWriter(BinaryWriter writer)`

**用途 / Purpose:** 调用 ReleaseBinaryWriter 对应的操作。

```csharp
// 静态调用，不需要实例
BinaryWriterFactory.ReleaseBinaryWriter(writer);
```

### Initialize
`public static void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
BinaryWriterFactory.Initialize();
```

### Release
`public static void Release()`

**用途 / Purpose:** 调用 Release 对应的操作。

```csharp
// 静态调用，不需要实例
BinaryWriterFactory.Release();
```

## 使用示例

```csharp
BinaryWriterFactory.GetBinaryWriter();
```

## 参见

- [本区域目录](../)
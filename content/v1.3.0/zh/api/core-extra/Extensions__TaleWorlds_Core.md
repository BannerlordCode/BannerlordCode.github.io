---
title: "Extensions"
description: "Extensions 的自动生成类参考。"
---
# Extensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class Extensions`
**Base:** 无
**File:** `TaleWorlds.Core/Extensions.cs`

## 概述

`Extensions` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### ToHexadecimalString
`public static string ToHexadecimalString(this uint number)`

**用途 / Purpose:** 调用 ToHexadecimalString 对应的操作。

```csharp
// 静态调用，不需要实例
Extensions.ToHexadecimalString(number);
```

### Description
`public static string Description(this Enum value)`

**用途 / Purpose:** 调用 Description 对应的操作。

```csharp
// 静态调用，不需要实例
Extensions.Description(value);
```

### NextFloat
`public static float NextFloat(this Random random)`

**用途 / Purpose:** 调用 NextFloat 对应的操作。

```csharp
// 静态调用，不需要实例
Extensions.NextFloat(random);
```

### Add
`public static string Add(this string str, string appendant, bool newLine = true)`

**用途 / Purpose:** 向当前容器或状态添加项。

```csharp
// 静态调用，不需要实例
Extensions.Add(str, "example", false);
```

### Split
`public static IEnumerable<string> Split(this string str, int maxChunkSize)`

**用途 / Purpose:** 将split拆分为多个部分或子项。

```csharp
// 静态调用，不需要实例
Extensions.Split(str, 0);
```

### GetOppositeSide
`public static BattleSideEnum GetOppositeSide(this BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 opposite side 的结果。

```csharp
// 静态调用，不需要实例
Extensions.GetOppositeSide(side);
```

## 使用示例

```csharp
Extensions.ToHexadecimalString(number);
```

## 参见

- [本区域目录](../)
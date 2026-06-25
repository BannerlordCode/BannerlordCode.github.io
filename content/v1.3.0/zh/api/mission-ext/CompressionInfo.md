---
title: "CompressionInfo"
description: "CompressionInfo 的自动生成类参考。"
---
# CompressionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompressionInfo`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/CompressionInfo.cs`

## 概述

`CompressionInfo` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FullPrecision` | `public static CompressionInfo.Float FullPrecision { get; }` |

## 主要方法

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num bits 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetMaximumValue
`public int GetMaximumValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum value 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMaximumValue();
```

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num bits 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num bits 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num bits 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetNumBits
`public int GetNumBits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 num bits 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetNumBits();
```

### GetMaximumValue
`public float GetMaximumValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 maximum value 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMaximumValue();
```

### GetMinimumValue
`public float GetMinimumValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 minimum value 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetMinimumValue();
```

### GetPrecision
`public float GetPrecision()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 precision 的结果。

```csharp
// 先通过子系统 API 拿到 CompressionInfo 实例
CompressionInfo compressionInfo = ...;
var result = compressionInfo.GetPrecision();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CompressionInfo compressionInfo = ...;
compressionInfo.GetNumBits();
```

## 参见

- [本区域目录](../)
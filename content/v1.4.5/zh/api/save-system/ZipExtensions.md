---
title: "ZipExtensions"
description: "ZipExtensions 的自动生成类参考。"
---
# ZipExtensions

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal static class ZipExtensions`
**Base:** 无
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ZipExtensions.cs`

## 概述

`ZipExtensions` 位于 `TaleWorlds.SaveSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FillFrom
`public static void FillFrom(this ZipArchiveEntry entry, byte data)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 静态调用，不需要实例
ZipExtensions.FillFrom(entry, 0);
```

### FillFrom
`public static void FillFrom(this ZipArchiveEntry entry, TaleWorlds.Library.BinaryWriter writer)`

**用途 / Purpose:** 调用 FillFrom 对应的操作。

```csharp
// 静态调用，不需要实例
ZipExtensions.FillFrom(entry, writer);
```

### GetBinaryReader
`public static TaleWorlds.Library.BinaryReader GetBinaryReader(this ZipArchiveEntry entry)`

**用途 / Purpose:** 读取并返回当前对象中 binary reader 的结果。

```csharp
// 静态调用，不需要实例
ZipExtensions.GetBinaryReader(entry);
```

### GetBinaryData
`public static byte GetBinaryData(this ZipArchiveEntry entry)`

**用途 / Purpose:** 读取并返回当前对象中 binary data 的结果。

```csharp
// 静态调用，不需要实例
ZipExtensions.GetBinaryData(entry);
```

## 使用示例

```csharp
ZipExtensions.FillFrom(entry, 0);
```

## 参见

- [本区域目录](../)
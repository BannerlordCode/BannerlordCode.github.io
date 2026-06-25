---
title: "EnumHelper"
description: "EnumHelper 的自动生成类参考。"
---
# EnumHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class EnumHelper`
**Base:** 无
**File:** `TaleWorlds.Library/EnumHelper.2.cs`

## 概述

`EnumHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `EnumHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCombinedULongEnumFlagsValue
`public static ulong GetCombinedULongEnumFlagsValue(Type type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 combined u long enum flags value 的结果。

```csharp
// 静态调用，不需要实例
EnumHelper.GetCombinedULongEnumFlagsValue(type);
```

### GetCombinedUIntEnumFlagsValue
`public static uint GetCombinedUIntEnumFlagsValue(Type type)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 combined u int enum flags value 的结果。

```csharp
// 静态调用，不需要实例
EnumHelper.GetCombinedUIntEnumFlagsValue(type);
```

## 使用示例

```csharp
EnumHelper.Initialize();
```

## 参见

- [本区域目录](../)
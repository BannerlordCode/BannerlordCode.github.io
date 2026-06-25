---
title: "EnumHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EnumHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EnumHelper

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `internal static class EnumHelper<T1>`
**Base:** 无
**File:** `TaleWorlds.Library/EnumHelper.cs`

## 概述

`EnumHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `EnumHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Overlaps
`public static bool Overlaps(sbyte p1, sbyte p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(byte p1, byte p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(short p1, short p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(ushort p1, ushort p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(int p1, int p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(uint p1, uint p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(long p1, long p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### Overlaps
`public static bool Overlaps(ulong p1, ulong p2)`

**用途 / Purpose:** 处理 `overlaps` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(sbyte p1, sbyte p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(byte p1, byte p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(short p1, short p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(ushort p1, ushort p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(int p1, int p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(uint p1, uint p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(long p1, long p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### ContainsAll
`public static bool ContainsAll(ulong p1, ulong p2)`

**用途 / Purpose:** 处理 `contains all` 相关逻辑。

### initProc
`public static bool initProc(T1 p1, T1 p2)`

**用途 / Purpose:** 处理 `init proc` 相关逻辑。

### initAllProc
`public static bool initAllProc(T1 p1, T1 p2)`

**用途 / Purpose:** 处理 `init all proc` 相关逻辑。

## 使用示例

```csharp
EnumHelper example = EnumHelper.Value;
```

## 参见

- [完整类目录](../catalog)
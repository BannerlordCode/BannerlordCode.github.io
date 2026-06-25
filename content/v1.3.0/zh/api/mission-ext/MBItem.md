---
title: "MBItem"
description: "MBItem 的自动生成类参考。"
---
# MBItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBItem`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MBItem.cs`

## 概述

`MBItem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetItemUsageIndex
`public static int GetItemUsageIndex(string itemUsageName)`

**用途 / Purpose:** 读取并返回当前对象中 「item usage index」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemUsageIndex("example");
```

### GetItemHolsterIndex
`public static int GetItemHolsterIndex(string itemHolsterName)`

**用途 / Purpose:** 读取并返回当前对象中 「item holster index」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemHolsterIndex("example");
```

### GetItemIsPassiveUsage
`public static bool GetItemIsPassiveUsage(string itemUsageName)`

**用途 / Purpose:** 读取并返回当前对象中 「item is passive usage」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemIsPassiveUsage("example");
```

### GetHolsterFrameByIndex
`public static MatrixFrame GetHolsterFrameByIndex(int index)`

**用途 / Purpose:** 读取并返回当前对象中 「holster frame by index」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetHolsterFrameByIndex(0);
```

### GetItemUsageSetFlags
`public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)`

**用途 / Purpose:** 读取并返回当前对象中 「item usage set flags」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemUsageSetFlags("example");
```

### GetItemUsageReloadActionCode
`public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「item usage reload action code」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemUsageReloadActionCode("example", 0, false, 0, false, false);
```

### GetItemUsageStrikeType
`public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**用途 / Purpose:** 读取并返回当前对象中 「item usage strike type」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetItemUsageStrikeType("example", 0, false, 0, false, false);
```

### GetMissileRange
`public static float GetMissileRange(float shotSpeed, float zDiff)`

**用途 / Purpose:** 读取并返回当前对象中 「missile range」 的结果。

```csharp
// 静态调用，不需要实例
MBItem.GetMissileRange(0, 0);
```

## 使用示例

```csharp
MBItem.GetItemUsageIndex("example");
```

## 参见

- [本区域目录](../)
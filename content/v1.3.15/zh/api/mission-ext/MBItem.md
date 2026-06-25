---
title: "MBItem"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBItem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBItem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class MBItem`
**领域:** mission-ext

## 概述

`MBItem` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetItemUsageIndex
`public static int GetItemUsageIndex(string itemUsageName)`

**用途 / Purpose:** 获取 `item usage index` 的当前值。

### GetItemHolsterIndex
`public static int GetItemHolsterIndex(string itemHolsterName)`

**用途 / Purpose:** 获取 `item holster index` 的当前值。

### GetItemIsPassiveUsage
`public static bool GetItemIsPassiveUsage(string itemUsageName)`

**用途 / Purpose:** 获取 `item is passive usage` 的当前值。

### GetHolsterFrameByIndex
`public static MatrixFrame GetHolsterFrameByIndex(int index)`

**用途 / Purpose:** 获取 `holster frame by index` 的当前值。

### GetItemUsageSetFlags
`public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)`

**用途 / Purpose:** 获取 `item usage set flags` 的当前值。

### GetItemUsageReloadActionCode
`public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**用途 / Purpose:** 获取 `item usage reload action code` 的当前值。

### GetItemUsageStrikeType
`public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**用途 / Purpose:** 获取 `item usage strike type` 的当前值。

### GetMissileRange
`public static float GetMissileRange(float shotSpeed, float zDiff)`

**用途 / Purpose:** 获取 `missile range` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
MBItem.GetItemUsageIndex("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

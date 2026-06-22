<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MBItem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBItem

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`MBItem` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### GetItemUsageIndex

```csharp
public static int GetItemUsageIndex(string itemUsageName)
```

### GetItemHolsterIndex

```csharp
public static int GetItemHolsterIndex(string itemHolsterName)
```

### GetItemIsPassiveUsage

```csharp
public static bool GetItemIsPassiveUsage(string itemUsageName)
```

### GetHolsterFrameByIndex

```csharp
public static MatrixFrame GetHolsterFrameByIndex(int index)
```

### GetItemUsageSetFlags

```csharp
public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)
```

### GetItemUsageReloadActionCode

```csharp
public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)
```

### GetItemUsageStrikeType

```csharp
public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)
```

### GetMissileRange

```csharp
public static float GetMissileRange(float shotSpeed, float zDiff)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
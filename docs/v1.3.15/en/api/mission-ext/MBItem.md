<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBItem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MBItem` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
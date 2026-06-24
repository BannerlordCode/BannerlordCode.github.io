<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBItem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBItem`
**Area:** mission-ext

## Overview

`MBItem` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemUsageIndex
`public static int GetItemUsageIndex(string itemUsageName)`

**Purpose:** Gets the current value of `item usage index`.

### GetItemHolsterIndex
`public static int GetItemHolsterIndex(string itemHolsterName)`

**Purpose:** Gets the current value of `item holster index`.

### GetItemIsPassiveUsage
`public static bool GetItemIsPassiveUsage(string itemUsageName)`

**Purpose:** Gets the current value of `item is passive usage`.

### GetHolsterFrameByIndex
`public static MatrixFrame GetHolsterFrameByIndex(int index)`

**Purpose:** Gets the current value of `holster frame by index`.

### GetItemUsageSetFlags
`public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)`

**Purpose:** Gets the current value of `item usage set flags`.

### GetItemUsageReloadActionCode
`public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**Purpose:** Gets the current value of `item usage reload action code`.

### GetItemUsageStrikeType
`public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**Purpose:** Gets the current value of `item usage strike type`.

### GetMissileRange
`public static float GetMissileRange(float shotSpeed, float zDiff)`

**Purpose:** Gets the current value of `missile range`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
MBItem.GetItemUsageIndex("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)

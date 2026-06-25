---
title: "MBItem"
description: "Auto-generated class reference for MBItem."
---
# MBItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MBItem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MBItem.cs`

## Overview

`MBItem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetItemUsageIndex
`public static int GetItemUsageIndex(string itemUsageName)`

**Purpose:** **Purpose:** Reads and returns the item usage index value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemUsageIndex("example");
```

### GetItemHolsterIndex
`public static int GetItemHolsterIndex(string itemHolsterName)`

**Purpose:** **Purpose:** Reads and returns the item holster index value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemHolsterIndex("example");
```

### GetItemIsPassiveUsage
`public static bool GetItemIsPassiveUsage(string itemUsageName)`

**Purpose:** **Purpose:** Reads and returns the item is passive usage value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemIsPassiveUsage("example");
```

### GetHolsterFrameByIndex
`public static MatrixFrame GetHolsterFrameByIndex(int index)`

**Purpose:** **Purpose:** Reads and returns the holster frame by index value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetHolsterFrameByIndex(0);
```

### GetItemUsageSetFlags
`public static ItemObject.ItemUsageSetFlags GetItemUsageSetFlags(string ItemUsageName)`

**Purpose:** **Purpose:** Reads and returns the item usage set flags value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemUsageSetFlags("example");
```

### GetItemUsageReloadActionCode
`public static ActionIndexCache GetItemUsageReloadActionCode(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**Purpose:** **Purpose:** Reads and returns the item usage reload action code value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemUsageReloadActionCode("example", 0, false, 0, false, false);
```

### GetItemUsageStrikeType
`public static int GetItemUsageStrikeType(string itemUsageName, int usageDirection, bool isMounted, int leftHandUsageSetIndex, bool isLeftStance, bool isLowLookDirection)`

**Purpose:** **Purpose:** Reads and returns the item usage strike type value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetItemUsageStrikeType("example", 0, false, 0, false, false);
```

### GetMissileRange
`public static float GetMissileRange(float shotSpeed, float zDiff)`

**Purpose:** **Purpose:** Reads and returns the missile range value held by the this instance.

```csharp
// Static call; no instance required
MBItem.GetMissileRange(0, 0);
```

## Usage Example

```csharp
MBItem.GetItemUsageIndex("example");
```

## See Also

- [Area Index](../)
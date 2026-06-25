---
title: "TauntUsageManager"
description: "Auto-generated class reference for TauntUsageManager."
---
# TauntUsageManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsageManager`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsageManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `TauntUsageManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UsageFlag` | `public TauntUsageFlag UsageFlag { get; }` |
| `Instance` | `public static TauntUsageManager Instance { get; }` |

## Key Methods

### Compare
`public int Compare(TauntUsage.TauntUsageFlag x, TauntUsage.TauntUsageFlag y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.Compare(x, y);
```

### AddUsage
`public void AddUsage(TauntUsage usage)`

**Purpose:** Adds usage to the current collection or state.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
tauntUsageManager.AddUsage(usage);
```

### GetUsages
`public MBReadOnlyList<TauntUsage> GetUsages()`

**Purpose:** Reads and returns the usages value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetUsages();
```

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Determines whether the this instance is in the suitable state or condition.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.IsSuitable(false, false, mainHandWeapon, offhandWeapon);
```

### GetIsNotSuitableReason
`public TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the is not suitable reason value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIsNotSuitableReason(false, false, mainHandWeapon, offhandWeapon);
```

### GetAction
`public string GetAction()`

**Purpose:** Reads and returns the action value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetAction();
```

### Initialize
`public static TauntUsageManager Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
TauntUsageManager.Initialize();
```

### Read
`public void Read()`

**Purpose:** Reads the data or state of the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
tauntUsageManager.Read();
```

### GetUsageSet
`public TauntUsageSet GetUsageSet(string id)`

**Purpose:** Reads and returns the usage set value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetUsageSet("example");
```

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the action value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetAction(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsage.TauntUsageFlag disabledReasonFlag)`

**Purpose:** Reads and returns the action disabled reason text value held by the this instance.

```csharp
// Static call; no instance required
TauntUsageManager.GetActionDisabledReasonText(disabledReasonFlag);
```

### GetIsActionNotSuitableReason
`public TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the is action not suitable reason value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIsActionNotSuitableReason(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetTauntItemCount
`public int GetTauntItemCount()`

**Purpose:** Reads and returns the taunt item count value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetTauntItemCount();
```

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**Purpose:** Reads and returns the index of action value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetIndexOfAction("example");
```

### GetDefaultAction
`public string GetDefaultAction(int index)`

**Purpose:** Reads and returns the default action value held by the this instance.

```csharp
// Obtain an instance of TauntUsageManager from the subsystem API first
TauntUsageManager tauntUsageManager = ...;
var result = tauntUsageManager.GetDefaultAction(0);
```

## Usage Example

```csharp
var manager = TauntUsageManager.Current;
```

## See Also

- [Area Index](../)
---
title: "TauntUsage"
description: "Auto-generated class reference for TauntUsage."
---
# TauntUsage

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class TauntUsage`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/TauntUsageManager.cs`

## Overview

`TauntUsage` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.Compare(x, y);
```

### AddUsage
`public void AddUsage(TauntUsage usage)`

**Purpose:** Adds usage to the current collection or state.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
tauntUsage.AddUsage(usage);
```

### GetUsages
`public MBReadOnlyList<TauntUsage> GetUsages()`

**Purpose:** Reads and returns the usages value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetUsages();
```

### IsSuitable
`public bool IsSuitable(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Determines whether the this instance is in the suitable state or condition.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.IsSuitable(false, false, mainHandWeapon, offhandWeapon);
```

### GetIsNotSuitableReason
`public TauntUsageFlag GetIsNotSuitableReason(bool isLeftStance, bool isOnFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the is not suitable reason value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIsNotSuitableReason(false, false, mainHandWeapon, offhandWeapon);
```

### GetAction
`public string GetAction()`

**Purpose:** Reads and returns the action value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetAction();
```

### Initialize
`public static TauntUsageManager Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
TauntUsage.Initialize();
```

### Read
`public void Read()`

**Purpose:** Reads the data or state of the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
tauntUsage.Read();
```

### GetUsageSet
`public TauntUsageSet GetUsageSet(string id)`

**Purpose:** Reads and returns the usage set value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetUsageSet("example");
```

### GetAction
`public string GetAction(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the action value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetAction(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetActionDisabledReasonText
`public static string GetActionDisabledReasonText(TauntUsage.TauntUsageFlag disabledReasonFlag)`

**Purpose:** Reads and returns the action disabled reason text value held by the this instance.

```csharp
// Static call; no instance required
TauntUsage.GetActionDisabledReasonText(disabledReasonFlag);
```

### GetIsActionNotSuitableReason
`public TauntUsage.TauntUsageFlag GetIsActionNotSuitableReason(int index, bool isLeftStance, bool onFoot, WeaponComponentData mainHandWeapon, WeaponComponentData offhandWeapon)`

**Purpose:** Reads and returns the is action not suitable reason value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIsActionNotSuitableReason(0, false, false, mainHandWeapon, offhandWeapon);
```

### GetTauntItemCount
`public int GetTauntItemCount()`

**Purpose:** Reads and returns the taunt item count value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetTauntItemCount();
```

### GetIndexOfAction
`public int GetIndexOfAction(string id)`

**Purpose:** Reads and returns the index of action value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetIndexOfAction("example");
```

### GetDefaultAction
`public string GetDefaultAction(int index)`

**Purpose:** Reads and returns the default action value held by the this instance.

```csharp
// Obtain an instance of TauntUsage from the subsystem API first
TauntUsage tauntUsage = ...;
var result = tauntUsage.GetDefaultAction(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TauntUsage tauntUsage = ...;
tauntUsage.Compare(x, y);
```

## See Also

- [Area Index](../)
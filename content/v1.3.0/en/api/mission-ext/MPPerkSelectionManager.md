---
title: "MPPerkSelectionManager"
description: "Auto-generated class reference for MPPerkSelectionManager."
---
# MPPerkSelectionManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelectionManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## Overview

`MPPerkSelectionManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MPPerkSelectionManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MPPerkSelectionManager Instance { get; }` |

## Key Methods

### FreeInstance
`public static void FreeInstance()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MPPerkSelectionManager.FreeInstance();
```

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**Purpose:** Prepares the resources, state, or bindings required by `for user`.

```csharp
// Obtain an instance of MPPerkSelectionManager from the subsystem API first
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.InitializeForUser("example", playerId);
```

### ResetPendingChanges
`public void ResetPendingChanges()`

**Purpose:** Returns `pending changes` to its default or initial condition.

```csharp
// Obtain an instance of MPPerkSelectionManager from the subsystem API first
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.ResetPendingChanges();
```

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**Purpose:** Attempts to retrieve `to apply and save pending changes`, usually returning success through an out parameter.

```csharp
// Obtain an instance of MPPerkSelectionManager from the subsystem API first
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.TryToApplyAndSavePendingChanges();
```

### GetSelectionsForHeroClass
`public List<MPPerkSelectionManager.MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**Purpose:** Reads and returns the `selections for hero class` value held by the current object.

```csharp
// Obtain an instance of MPPerkSelectionManager from the subsystem API first
MPPerkSelectionManager mPPerkSelectionManager = ...;
var result = mPPerkSelectionManager.GetSelectionsForHeroClass(currentHeroClass);
```

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection> perkChoices)`

**Purpose:** Assigns a new value to `selections for hero class temporarily` and updates the object's internal state.

```csharp
// Obtain an instance of MPPerkSelectionManager from the subsystem API first
MPPerkSelectionManager mPPerkSelectionManager = ...;
mPPerkSelectionManager.SetSelectionsForHeroClassTemporarily(currentHeroClass, perkChoices);
```

## Usage Example

```csharp
var manager = MPPerkSelectionManager.Current;
```

## See Also

- [Area Index](../)
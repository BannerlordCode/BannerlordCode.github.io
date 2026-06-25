---
title: "MPPerkSelection"
description: "Auto-generated class reference for MPPerkSelection."
---
# MPPerkSelection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPPerkSelection`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## Overview

`MPPerkSelection` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MPPerkSelection
`public struct MPPerkSelection(int index, int listIndex)`

**Purpose:** Executes the MPPerkSelection logic.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
var result = mPPerkSelection.MPPerkSelection(0, 0);
```

### FreeInstance
`public static void FreeInstance()`

**Purpose:** Executes the FreeInstance logic.

```csharp
// Static call; no instance required
MPPerkSelection.FreeInstance();
```

### InitializeForUser
`public void InitializeForUser(string username, PlayerId playerId)`

**Purpose:** Prepares the resources, state, or bindings required by for user.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.InitializeForUser("example", playerId);
```

### ResetPendingChanges
`public void ResetPendingChanges()`

**Purpose:** Returns pending changes to its default or initial condition.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.ResetPendingChanges();
```

### TryToApplyAndSavePendingChanges
`public void TryToApplyAndSavePendingChanges()`

**Purpose:** Attempts to retrieve to apply and save pending changes, usually returning success through an out parameter.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.TryToApplyAndSavePendingChanges();
```

### GetSelectionsForHeroClass
`public List<MPPerkSelection> GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)`

**Purpose:** Reads and returns the selections for hero class value held by the this instance.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
var result = mPPerkSelection.GetSelectionsForHeroClass(currentHeroClass);
```

### SetSelectionsForHeroClassTemporarily
`public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelection> perkChoices)`

**Purpose:** Assigns a new value to selections for hero class temporarily and updates the object's internal state.

```csharp
// Obtain an instance of MPPerkSelection from the subsystem API first
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.SetSelectionsForHeroClassTemporarily(currentHeroClass, perkChoices);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MPPerkSelection mPPerkSelection = ...;
mPPerkSelection.MPPerkSelection(0, 0);
```

## See Also

- [Area Index](../)
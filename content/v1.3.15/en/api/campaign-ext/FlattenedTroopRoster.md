---
title: "FlattenedTroopRoster"
description: "Auto-generated class reference for FlattenedTroopRoster."
---
# FlattenedTroopRoster

**Namespace:** TaleWorlds.CampaignSystem.Roster
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class FlattenedTroopRoster : IEnumerable<FlattenedTroopRosterElement>, IEnumerable`
**Base:** `IEnumerable<FlattenedTroopRosterElement>`
**File:** `TaleWorlds.CampaignSystem/Roster/FlattenedTroopRoster.cs`

## Overview

`FlattenedTroopRoster` lives in `TaleWorlds.CampaignSystem.Roster` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Roster` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public FlattenedTroopRosterElement this { get; set; }` |
| `Troops` | `public IEnumerable<CharacterObject> Troops { get; }` |

## Key Methods

### Add
`public void Add(MBList<TroopRosterElement> roster)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(roster);
```

### Add
`public void Add(TroopRosterElement troop)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(troop);
```

### Add
`public void Add(CharacterObject troop, int number, int woundedNumber = 0)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(troop, 0, 0);
```

### Add
`public UniqueTroopDescriptor Add(CharacterObject troop, bool isWounded = false, int xp = 0)`

**Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.Add(troop, false, 0);
```

### GenerateUniqueNoFromParty
`public static int GenerateUniqueNoFromParty(MobileParty party, int troopIndex)`

**Purpose:** Generates an instance, data, or representation of `unique no from party`.

```csharp
// Static call; no instance required
FlattenedTroopRoster.GenerateUniqueNoFromParty(party, 0);
```

### Remove
`public void Remove(UniqueTroopDescriptor descriptor)`

**Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Remove(descriptor);
```

### Clear
`public void Clear()`

**Purpose:** Removes all content from the current object.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Clear();
```

### RemoveIf
`public ICollection<FlattenedTroopRosterElement> RemoveIf(Predicate<FlattenedTroopRosterElement> match)`

**Purpose:** Removes `if` from the current collection or state.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.RemoveIf(match);
```

### FindIndexOfCharacter
`public UniqueTroopDescriptor FindIndexOfCharacter(CharacterObject character)`

**Purpose:** Looks up the matching `index of character` in the current collection or scope.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.FindIndexOfCharacter(character);
```

### GetEnumerator
`public IEnumerator<FlattenedTroopRosterElement> GetEnumerator()`

**Purpose:** Reads and returns the `enumerator` value held by the current object.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
var result = flattenedTroopRoster.GetEnumerator();
```

### OnTroopKilled
`public void OnTroopKilled(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the `troop killed` event is raised.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopKilled(troopSeed);
```

### OnTroopWounded
`public void OnTroopWounded(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the `troop wounded` event is raised.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopWounded(troopSeed);
```

### OnTroopRouted
`public void OnTroopRouted(UniqueTroopDescriptor troopSeed)`

**Purpose:** Invoked when the `troop routed` event is raised.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopRouted(troopSeed);
```

### OnTroopGainXp
`public void OnTroopGainXp(UniqueTroopDescriptor troopSeed, int xpGained)`

**Purpose:** Invoked when the `troop gain xp` event is raised.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.OnTroopGainXp(troopSeed, 0);
```

### ResetTroopXP
`public void ResetTroopXP()`

**Purpose:** Returns `troop x p` to its default or initial condition.

```csharp
// Obtain an instance of FlattenedTroopRoster from the subsystem API first
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.ResetTroopXP();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FlattenedTroopRoster flattenedTroopRoster = ...;
flattenedTroopRoster.Add(roster);
```

## See Also

- [Area Index](../)
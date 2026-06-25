---
title: "TeamCollection"
description: "Auto-generated class reference for TeamCollection."
---
# TeamCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class TeamCollection : List<Team>`
**Base:** `List<Team>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mission.cs`

## Overview

`TeamCollection` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Attacker` | `public Team Attacker { get; }` |
| `Defender` | `public Team Defender { get; }` |
| `AttackerAlly` | `public Team AttackerAlly { get; }` |
| `DefenderAlly` | `public Team DefenderAlly { get; }` |
| `Player` | `public Team Player { get; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## Key Methods

### Add
`public new void Add(Team t)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of TeamCollection from the subsystem API first
TeamCollection teamCollection = ...;
teamCollection.Add(t);
```

### Add
`public Team Add(BattleSideEnum side, uint color = uint.MaxValue, uint color2 = uint.MaxValue, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of TeamCollection from the subsystem API first
TeamCollection teamCollection = ...;
var result = teamCollection.Add(side, 0, 0, null, false, false, false);
```

### Find
`public Team Find(MBTeam mbTeam)`

**Purpose:** **Purpose:** Finds the matching entry in the current collection or scope.

```csharp
// Obtain an instance of TeamCollection from the subsystem API first
TeamCollection teamCollection = ...;
var result = teamCollection.Find(mbTeam);
```

### ClearResources
`public void ClearResources()`

**Purpose:** **Purpose:** Removes all resources from the this instance.

```csharp
// Obtain an instance of TeamCollection from the subsystem API first
TeamCollection teamCollection = ...;
teamCollection.ClearResources();
```

### Clear
`public new void Clear()`

**Purpose:** **Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of TeamCollection from the subsystem API first
TeamCollection teamCollection = ...;
teamCollection.Clear();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamCollection teamCollection = ...;
teamCollection.Add(t);
```

## See Also

- [Area Index](../)
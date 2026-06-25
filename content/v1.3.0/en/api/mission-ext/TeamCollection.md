---
title: "TeamCollection"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamCollection`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamCollection

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class TeamCollection : List<Team>`
**Base:** `List<Team>`
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

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
| `Player` | `public Team Player { get; set; }` |
| `PlayerEnemy` | `public Team PlayerEnemy { get; }` |
| `PlayerAlly` | `public Team PlayerAlly { get; }` |

## Key Methods

### Add
`public new void Add(Team t)`

**Purpose:** Adds `add` to the current collection or state.

### Add
`public Team Add(BattleSideEnum side, uint color = 4294967295U, uint color2 = 4294967295U, Banner banner = null, bool isPlayerGeneral = true, bool isPlayerSergeant = false, bool isSettingRelations = true)`

**Purpose:** Adds `add` to the current collection or state.

### Find
`public Team Find(MBTeam mbTeam)`

**Purpose:** Handles logic related to `find`.

### ClearResources
`public void ClearResources()`

**Purpose:** Handles logic related to `clear resources`.

### Clear
`public new void Clear()`

**Purpose:** Handles logic related to `clear`.

## Usage Example

```csharp
var value = new TeamCollection();
value.Add(t);
```

## See Also

- [Complete Class Catalog](../catalog)
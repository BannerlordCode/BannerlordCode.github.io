---
title: "PerkAssemblyCollection"
description: "Auto-generated class reference for PerkAssemblyCollection."
---
# PerkAssemblyCollection

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class PerkAssemblyCollection`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Gameplay.Perks/PerkAssemblyCollection.cs`

## Overview

`PerkAssemblyCollection` lives in `TaleWorlds.MountAndBlade.Network.Gameplay.Perks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Gameplay.Perks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPerkAssemblyTypes
`public static List<Type> GetPerkAssemblyTypes()`

**Purpose:** **Purpose:** Reads and returns the perk assembly types value held by the this instance.

```csharp
// Static call; no instance required
PerkAssemblyCollection.GetPerkAssemblyTypes();
```

## Usage Example

```csharp
PerkAssemblyCollection.GetPerkAssemblyTypes();
```

## See Also

- [Area Index](../)
---
title: "AttackEntityOrderSecondaryDetachment"
description: "Auto-generated class reference for AttackEntityOrderSecondaryDetachment."
---
# AttackEntityOrderSecondaryDetachment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AttackEntityOrderSecondaryDetachment`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AttackEntityOrderSecondaryDetachment.cs`

## Overview

`AttackEntityOrderSecondaryDetachment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**Purpose:** **Purpose:** Advances the occasionally state each frame or update cycle.

```csharp
// Obtain an instance of AttackEntityOrderSecondaryDetachment from the subsystem API first
AttackEntityOrderSecondaryDetachment attackEntityOrderSecondaryDetachment = ...;
attackEntityOrderSecondaryDetachment.TickOccasionally(formation);
```

### Disband
`public void Disband(Formation formation)`

**Purpose:** **Purpose:** Executes the Disband logic.

```csharp
// Obtain an instance of AttackEntityOrderSecondaryDetachment from the subsystem API first
AttackEntityOrderSecondaryDetachment attackEntityOrderSecondaryDetachment = ...;
attackEntityOrderSecondaryDetachment.Disband(formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AttackEntityOrderSecondaryDetachment attackEntityOrderSecondaryDetachment = ...;
attackEntityOrderSecondaryDetachment.TickOccasionally(formation);
```

## See Also

- [Area Index](../)
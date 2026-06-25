---
title: "JavelinBarrel"
description: "Auto-generated class reference for JavelinBarrel."
---
# JavelinBarrel

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class JavelinBarrel : AmmoBarrelBase`
**Base:** `AmmoBarrelBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects.Usables/JavelinBarrel.cs`

## Overview

`JavelinBarrel` lives in `TaleWorlds.MountAndBlade.Objects.Usables` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects.Usables` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of JavelinBarrel from the subsystem API first
JavelinBarrel javelinBarrel = ...;
var result = javelinBarrel.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
JavelinBarrel javelinBarrel = ...;
javelinBarrel.GetDescriptionText(gameEntity);
```

## See Also

- [Area Index](../)
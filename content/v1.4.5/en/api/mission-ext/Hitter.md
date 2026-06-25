---
title: "Hitter"
description: "Auto-generated class reference for Hitter."
---
# Hitter

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Hitter`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`Hitter` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Damage` | `public float Damage { get; }` |

## Key Methods

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Hitter from the subsystem API first
Hitter hitter = ...;
hitter.IncreaseDamage(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Hitter hitter = ...;
hitter.IncreaseDamage(0);
```

## See Also

- [Area Index](../)
---
title: "TransposedLineFormation"
description: "Auto-generated class reference for TransposedLineFormation."
---
# TransposedLineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TransposedLineFormation : LineFormation`
**Base:** `LineFormation`
**File:** `TaleWorlds.MountAndBlade/TransposedLineFormation.cs`

## Overview

`TransposedLineFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IntervalMultiplier` | `public override float IntervalMultiplier { get; }` |
| `DistanceMultiplier` | `public override float DistanceMultiplier { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of TransposedLineFormation from the subsystem API first
TransposedLineFormation transposedLineFormation = ...;
var result = transposedLineFormation.Clone(formation);
```

### RearrangeFrom
`public override void RearrangeFrom(IFormationArrangement arrangement)`

**Purpose:** **Purpose:** Executes the RearrangeFrom logic.

```csharp
// Obtain an instance of TransposedLineFormation from the subsystem API first
TransposedLineFormation transposedLineFormation = ...;
transposedLineFormation.RearrangeFrom(arrangement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TransposedLineFormation transposedLineFormation = ...;
transposedLineFormation.Clone(formation);
```

## See Also

- [Area Index](../)
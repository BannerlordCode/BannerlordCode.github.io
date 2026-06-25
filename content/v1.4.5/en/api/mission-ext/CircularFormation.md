---
title: "CircularFormation"
description: "Auto-generated class reference for CircularFormation."
---
# CircularFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CircularFormation : LineFormation`
**Base:** `LineFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CircularFormation.cs`

## Overview

`CircularFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Width` | `public override float Width { get; set; }` |
| `MinimumWidth` | `public override float MinimumWidth { get; }` |
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of CircularFormation from the subsystem API first
CircularFormation circularFormation = ...;
var result = circularFormation.Clone(formation);
```

### GetLocalDirectionOfUnitOrDefault
`public override Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of CircularFormation from the subsystem API first
CircularFormation circularFormation = ...;
var result = circularFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### GetCircumferenceFromRankCount
`public float GetCircumferenceFromRankCount(int rankCount)`

**Purpose:** Reads and returns the `circumference from rank count` value held by the current object.

```csharp
// Obtain an instance of CircularFormation from the subsystem API first
CircularFormation circularFormation = ...;
var result = circularFormation.GetCircumferenceFromRankCount(0);
```

### FormFromCircumference
`public void FormFromCircumference(float circumference)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CircularFormation from the subsystem API first
CircularFormation circularFormation = ...;
circularFormation.FormFromCircumference(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CircularFormation circularFormation = ...;
circularFormation.Clone(formation);
```

## See Also

- [Area Index](../)
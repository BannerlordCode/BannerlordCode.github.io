---
title: "RectilinearSchiltronFormation"
description: "Auto-generated class reference for RectilinearSchiltronFormation."
---
# RectilinearSchiltronFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RectilinearSchiltronFormation : SquareFormation`
**Base:** `SquareFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/RectilinearSchiltronFormation.cs`

## Overview

`RectilinearSchiltronFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumWidth` | `public override float MaximumWidth { get; }` |

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** **Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of RectilinearSchiltronFormation from the subsystem API first
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
var result = rectilinearSchiltronFormation.Clone(formation);
```

### Form
`public void Form()`

**Purpose:** **Purpose:** Executes the Form logic.

```csharp
// Obtain an instance of RectilinearSchiltronFormation from the subsystem API first
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
rectilinearSchiltronFormation.Form();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RectilinearSchiltronFormation rectilinearSchiltronFormation = ...;
rectilinearSchiltronFormation.Clone(formation);
```

## See Also

- [Area Index](../)
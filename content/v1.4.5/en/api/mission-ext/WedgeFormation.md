---
title: "WedgeFormation"
description: "Auto-generated class reference for WedgeFormation."
---
# WedgeFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WedgeFormation : LineFormation`
**Base:** `LineFormation`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WedgeFormation.cs`

## Overview

`WedgeFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Clone
`public override IFormationArrangement Clone(IFormation formation)`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of WedgeFormation from the subsystem API first
WedgeFormation wedgeFormation = ...;
var result = wedgeFormation.Clone(formation);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WedgeFormation wedgeFormation = ...;
wedgeFormation.Clone(formation);
```

## See Also

- [Area Index](../)
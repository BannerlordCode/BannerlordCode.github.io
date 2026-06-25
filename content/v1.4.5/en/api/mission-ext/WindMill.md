---
title: "WindMill"
description: "Auto-generated class reference for WindMill."
---
# WindMill

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class WindMill : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/WindMill.cs`

## Overview

`WindMill` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetIntegerFromStringEnd
`public static int GetIntegerFromStringEnd(string str)`

**Purpose:** **Purpose:** Reads and returns the integer from string end value held by the this instance.

```csharp
// Static call; no instance required
WindMill.GetIntegerFromStringEnd("example");
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** **Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of WindMill from the subsystem API first
WindMill windMill = ...;
var result = windMill.GetTickRequirement();
```

## Usage Example

```csharp
WindMill.GetIntegerFromStringEnd("example");
```

## See Also

- [Area Index](../)
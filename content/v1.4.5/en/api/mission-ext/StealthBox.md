---
title: "StealthBox"
description: "Auto-generated class reference for StealthBox."
---
# StealthBox

**Namespace:** TaleWorlds.MountAndBlade.Objects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StealthBox : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Objects/StealthBox.cs`

## Overview

`StealthBox` lives in `TaleWorlds.MountAndBlade.Objects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Objects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsPointInside
`public bool IsPointInside(Vec3 point)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point inside state or condition.

```csharp
// Obtain an instance of StealthBox from the subsystem API first
StealthBox stealthBox = ...;
var result = stealthBox.IsPointInside(point);
```

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent inside state or condition.

```csharp
// Obtain an instance of StealthBox from the subsystem API first
StealthBox stealthBox = ...;
var result = stealthBox.IsAgentInside(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthBox stealthBox = ...;
stealthBox.IsPointInside(point);
```

## See Also

- [Area Index](../)
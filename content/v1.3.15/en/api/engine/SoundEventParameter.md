---
title: "SoundEventParameter"
description: "Auto-generated class reference for SoundEventParameter."
---
# SoundEventParameter

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SoundEventParameter`
**Base:** none
**File:** `TaleWorlds.Engine/SoundEventParameter.cs`

## Overview

`SoundEventParameter` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public void Update(string paramName, float value)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of SoundEventParameter from the subsystem API first
SoundEventParameter soundEventParameter = ...;
soundEventParameter.Update("example", 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SoundEventParameter soundEventParameter = ...;
soundEventParameter.Update("example", 0);
```

## See Also

- [Area Index](../)
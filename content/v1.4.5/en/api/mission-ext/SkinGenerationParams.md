---
title: "SkinGenerationParams"
description: "Auto-generated class reference for SkinGenerationParams."
---
# SkinGenerationParams

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct SkinGenerationParams`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SkinGenerationParams.cs`

## Overview

`SkinGenerationParams` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Create
`public static SkinGenerationParams Create()`

**Purpose:** **Purpose:** Creates a new instance or related entity for the this instance.

```csharp
// Static call; no instance required
SkinGenerationParams.Create();
```

## Usage Example

```csharp
SkinGenerationParams.Create();
```

## See Also

- [Area Index](../)
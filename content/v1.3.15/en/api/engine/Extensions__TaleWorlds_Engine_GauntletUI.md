---
title: "Extensions"
description: "Auto-generated class reference for Extensions."
---
# Extensions

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public static class Extensions`
**Base:** none
**File:** `TaleWorlds.Engine.GauntletUI/Extensions.cs`

## Overview

`Extensions` lives in `TaleWorlds.Engine.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Load
`public static void Load(this SpriteCategory category)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Static call; no instance required
Extensions.Load(category);
```

## Usage Example

```csharp
Extensions.Load(category);
```

## See Also

- [Area Index](../)
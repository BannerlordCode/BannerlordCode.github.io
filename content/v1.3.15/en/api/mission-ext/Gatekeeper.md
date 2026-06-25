---
title: "Gatekeeper"
description: "Auto-generated class reference for Gatekeeper."
---
# Gatekeeper

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class Gatekeeper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Gatekeeper.cs`

## Overview

`Gatekeeper` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsGenerous
`public static Task<bool> IsGenerous()`

**Purpose:** **Purpose:** Determines whether the this instance is in the generous state or condition.

```csharp
// Static call; no instance required
Gatekeeper.IsGenerous();
```

## Usage Example

```csharp
Gatekeeper.IsGenerous();
```

## See Also

- [Area Index](../)
---
title: "FormationExtensions"
description: "Auto-generated class reference for FormationExtensions."
---
# FormationExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class FormationExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationExtensions.cs`

## Overview

`FormationExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnOrderChange
`public static void OnOrderChange(Formation formation, IFormationArrangement arrangement)`

**Purpose:** Invoked when the `order change` event is raised.

```csharp
// Static call; no instance required
FormationExtensions.OnOrderChange(formation, arrangement);
```

## Usage Example

```csharp
FormationExtensions.OnOrderChange(formation, arrangement);
```

## See Also

- [Area Index](../)
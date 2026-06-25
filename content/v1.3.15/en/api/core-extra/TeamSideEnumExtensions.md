---
title: "TeamSideEnumExtensions"
description: "Auto-generated class reference for TeamSideEnumExtensions."
---
# TeamSideEnumExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TeamSideEnumExtensions`
**Base:** none
**File:** `TaleWorlds.Core/TeamSideEnumExtensions.cs`

## Overview

`TeamSideEnumExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsValid
`public static bool IsValid(this TeamSideEnum teamSide)`

**Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Static call; no instance required
TeamSideEnumExtensions.IsValid(teamSide);
```

## Usage Example

```csharp
TeamSideEnumExtensions.IsValid(teamSide);
```

## See Also

- [Area Index](../)
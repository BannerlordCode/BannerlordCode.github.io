---
title: "BattleSideEnumExtensions"
description: "Auto-generated class reference for BattleSideEnumExtensions."
---
# BattleSideEnumExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class BattleSideEnumExtensions`
**Base:** none
**File:** `TaleWorlds.Core/BattleSideEnumExtensions.cs`

## Overview

`BattleSideEnumExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsValid
`public static bool IsValid(this BattleSideEnum battleSide)`

**Purpose:** Determines whether the this instance is in the valid state or condition.

```csharp
// Static call; no instance required
BattleSideEnumExtensions.IsValid(battleSide);
```

## Usage Example

```csharp
BattleSideEnumExtensions.IsValid(battleSide);
```

## See Also

- [Area Index](../)
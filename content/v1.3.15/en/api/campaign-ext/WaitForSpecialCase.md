---
title: "WaitForSpecialCase"
description: "Auto-generated class reference for WaitForSpecialCase."
---
# WaitForSpecialCase

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class WaitForSpecialCase : CoroutineState`
**Base:** `CoroutineState`
**File:** `TaleWorlds.Network/WaitForSpecialCase.cs`

## Overview

`WaitForSpecialCase` lives in `TaleWorlds.Network` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Network` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsConditionSatisfiedDelegate
`public delegate bool IsConditionSatisfiedDelegate()`

**Purpose:** **Purpose:** Determines whether the this instance is in the condition satisfied delegate state or condition.

```csharp
// Obtain an instance of WaitForSpecialCase from the subsystem API first
WaitForSpecialCase waitForSpecialCase = ...;
var result = waitForSpecialCase.IsConditionSatisfiedDelegate();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WaitForSpecialCase waitForSpecialCase = ...;
waitForSpecialCase.IsConditionSatisfiedDelegate();
```

## See Also

- [Area Index](../)
---
title: "DebugHotKeyCategory"
description: "Auto-generated class reference for DebugHotKeyCategory."
---
# DebugHotKeyCategory

**Namespace:** TaleWorlds.Engine.InputSystem
**Module:** TaleWorlds.Engine
**Type:** `public class DebugHotKeyCategory : GameKeyContext`
**Base:** `GameKeyContext`
**File:** `TaleWorlds.Engine/InputSystem/DebugHotKeyCategory.cs`

## Overview

`DebugHotKeyCategory` lives in `TaleWorlds.Engine.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DebugHotKeyCategory instance = ...;
```

## See Also

- [Area Index](../)
---
title: "ModuleCategory"
description: "Auto-generated class reference for ModuleCategory."
---
# ModuleCategory

**Namespace:** TaleWorlds.ModuleManager
**Module:** TaleWorlds.ModuleManager
**Type:** `public enum ModuleCategory`
**Base:** none
**File:** `TaleWorlds.ModuleManager/ModuleCategory.cs`

## Overview

`ModuleCategory` lives in `TaleWorlds.ModuleManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ModuleManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ModuleCategory instance = ...;
```

## See Also

- [Area Index](../)
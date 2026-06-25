---
title: "ModuleInfoModelExtensions"
description: "Auto-generated class reference for ModuleInfoModelExtensions."
---
# ModuleInfoModelExtensions

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class ModuleInfoModelExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/ModuleInfoModelExtensions.cs`

## Overview

`ModuleInfoModelExtensions` lives in `TaleWorlds.MountAndBlade.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsCompatibleWith
`public static bool IsCompatibleWith(this IEnumerable<ModuleInfoModel> a, IEnumerable<ModuleInfoModel> b, bool allowOptionalModules)`

**Purpose:** Determines whether the this instance is in the compatible with state or condition.

```csharp
// Static call; no instance required
ModuleInfoModelExtensions.IsCompatibleWith(a, b, false);
```

## Usage Example

```csharp
ModuleInfoModelExtensions.IsCompatibleWith(a, b, false);
```

## See Also

- [Area Index](../)
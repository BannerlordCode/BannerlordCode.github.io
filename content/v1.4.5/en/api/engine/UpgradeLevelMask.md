---
title: "UpgradeLevelMask"
description: "Auto-generated class reference for UpgradeLevelMask."
---
# UpgradeLevelMask

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public enum UpgradeLevelMask`
**Base:** none
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/GameEntity.cs`

## Overview

`UpgradeLevelMask` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
UpgradeLevelMask instance = ...;
```

## See Also

- [Area Index](../)
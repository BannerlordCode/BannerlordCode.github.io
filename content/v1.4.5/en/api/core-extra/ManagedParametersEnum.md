---
title: "ManagedParametersEnum"
description: "Auto-generated class reference for ManagedParametersEnum."
---
# ManagedParametersEnum

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum ManagedParametersEnum`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ManagedParametersEnum.cs`

## Overview

`ManagedParametersEnum` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ManagedParametersEnum instance = ...;
```

## See Also

- [Area Index](../)
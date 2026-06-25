---
title: "IReadonlyInputContext"
description: "Auto-generated class reference for IReadonlyInputContext."
---
# IReadonlyInputContext

**Namespace:** TaleWorlds.GauntletUI.GauntletInput
**Module:** TaleWorlds.GauntletUI
**Type:** `public interface IReadonlyInputContext`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.GauntletInput/IReadonlyInputContext.cs`

## Overview

`IReadonlyInputContext` lives in `TaleWorlds.GauntletUI.GauntletInput` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.GauntletInput` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIReadonlyInputContext service = ...;
```

## See Also

- [Area Index](../)
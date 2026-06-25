---
title: "MethodCodePolymorphismInfo"
description: "Auto-generated class reference for MethodCodePolymorphismInfo."
---
# MethodCodePolymorphismInfo

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public enum MethodCodePolymorphismInfo`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/MethodCodePolymorphismInfo.cs`

## Overview

`MethodCodePolymorphismInfo` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MethodCodePolymorphismInfo instance = ...;
```

## See Also

- [Area Index](../)
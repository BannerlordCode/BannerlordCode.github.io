---
title: "EnumDefinition"
description: "Auto-generated class reference for EnumDefinition."
---
# EnumDefinition

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class EnumDefinition : TypeDefinitionBase`
**Base:** `TypeDefinitionBase`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/EnumDefinition.cs`

## Overview

`EnumDefinition` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
EnumDefinition instance = ...;
```

## See Also

- [Area Index](../)
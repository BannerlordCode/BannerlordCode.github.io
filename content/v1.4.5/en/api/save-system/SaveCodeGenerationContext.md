---
title: "SaveCodeGenerationContext"
description: "Auto-generated class reference for SaveCodeGenerationContext."
---
# SaveCodeGenerationContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class SaveCodeGenerationContext`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/SaveCodeGenerationContext.cs`

## Overview

`SaveCodeGenerationContext` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddAssembly
`public void AddAssembly(Assembly assembly, string defaultNamespace, string location, string fileName)`

**Purpose:** Adds assembly to the current collection or state.

```csharp
// Obtain an instance of SaveCodeGenerationContext from the subsystem API first
SaveCodeGenerationContext saveCodeGenerationContext = ...;
saveCodeGenerationContext.AddAssembly(assembly, "example", "example", "example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveCodeGenerationContext saveCodeGenerationContext = ...;
saveCodeGenerationContext.AddAssembly(assembly, "example", "example", "example");
```

## See Also

- [Area Index](../)
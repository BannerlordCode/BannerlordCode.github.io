---
title: "DefinitionContext"
description: "Auto-generated class reference for DefinitionContext."
---
# DefinitionContext

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class DefinitionContext`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/DefinitionContext.cs`

## Overview

`DefinitionContext` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillWithCurrentTypes
`public void FillWithCurrentTypes()`

**Purpose:** Executes the FillWithCurrentTypes logic.

```csharp
// Obtain an instance of DefinitionContext from the subsystem API first
DefinitionContext definitionContext = ...;
definitionContext.FillWithCurrentTypes();
```

### TryGetTypeDefinition
`public TypeDefinitionBase TryGetTypeDefinition(SaveId saveId)`

**Purpose:** Attempts to retrieve get type definition, usually returning success through an out parameter.

```csharp
// Obtain an instance of DefinitionContext from the subsystem API first
DefinitionContext definitionContext = ...;
var result = definitionContext.TryGetTypeDefinition(saveId);
```

### GenerateCode
`public void GenerateCode(SaveCodeGenerationContext context)`

**Purpose:** Generates an instance, data, or representation of code.

```csharp
// Obtain an instance of DefinitionContext from the subsystem API first
DefinitionContext definitionContext = ...;
definitionContext.GenerateCode(context);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefinitionContext definitionContext = ...;
definitionContext.FillWithCurrentTypes();
```

## See Also

- [Area Index](../)
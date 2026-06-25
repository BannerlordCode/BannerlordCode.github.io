---
title: "SaveCodeGenerationContextAssembly"
description: "Auto-generated class reference for SaveCodeGenerationContextAssembly."
---
# SaveCodeGenerationContextAssembly

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class SaveCodeGenerationContextAssembly`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/SaveCodeGenerationContextAssembly.cs`

## Overview

`SaveCodeGenerationContextAssembly` lives in `TaleWorlds.SaveSystem.Definition` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem.Definition` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Assembly` | `public Assembly Assembly { get; }` |
| `Location` | `public string Location { get; }` |
| `FileName` | `public string FileName { get; }` |
| `DefaultNamespace` | `public string DefaultNamespace { get; }` |

## Key Methods

### AddClassDefinition
`public void AddClassDefinition(TypeDefinition classDefinition)`

**Purpose:** **Purpose:** Adds class definition to the current collection or state.

```csharp
// Obtain an instance of SaveCodeGenerationContextAssembly from the subsystem API first
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddClassDefinition(classDefinition);
```

### AddStructDefinition
`public void AddStructDefinition(TypeDefinition classDefinition)`

**Purpose:** **Purpose:** Adds struct definition to the current collection or state.

```csharp
// Obtain an instance of SaveCodeGenerationContextAssembly from the subsystem API first
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddStructDefinition(classDefinition);
```

### CheckIfGotAnyNonPrimitiveMembers
`public bool CheckIfGotAnyNonPrimitiveMembers(TypeDefinition typeDefinition)`

**Purpose:** **Purpose:** Verifies whether if got any non primitive members holds true for the this instance.

```csharp
// Obtain an instance of SaveCodeGenerationContextAssembly from the subsystem API first
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
var result = saveCodeGenerationContextAssembly.CheckIfGotAnyNonPrimitiveMembers(typeDefinition);
```

### Generate
`public void Generate()`

**Purpose:** **Purpose:** Generates an instance, data, or representation for the this instance.

```csharp
// Obtain an instance of SaveCodeGenerationContextAssembly from the subsystem API first
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.Generate();
```

### GenerateText
`public string GenerateText()`

**Purpose:** **Purpose:** Generates an instance, data, or representation of text.

```csharp
// Obtain an instance of SaveCodeGenerationContextAssembly from the subsystem API first
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
var result = saveCodeGenerationContextAssembly.GenerateText();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SaveCodeGenerationContextAssembly saveCodeGenerationContextAssembly = ...;
saveCodeGenerationContextAssembly.AddClassDefinition(classDefinition);
```

## See Also

- [Area Index](../)
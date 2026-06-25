---
title: "CodeGenerationContext"
description: "Auto-generated class reference for CodeGenerationContext."
---
# CodeGenerationContext

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeGenerationContext`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library.CodeGeneration/CodeGenerationContext.cs`

## Overview

`CodeGenerationContext` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Namespaces` | `public List<NamespaceCode> Namespaces { get; }` |

## Key Methods

### FindOrCreateNamespace
`public NamespaceCode FindOrCreateNamespace(string name)`

**Purpose:** Looks up the matching `or create namespace` in the current collection or scope.

```csharp
// Obtain an instance of CodeGenerationContext from the subsystem API first
CodeGenerationContext codeGenerationContext = ...;
var result = codeGenerationContext.FindOrCreateNamespace("example");
```

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Generates an instance, data, or representation of `into`.

```csharp
// Obtain an instance of CodeGenerationContext from the subsystem API first
CodeGenerationContext codeGenerationContext = ...;
codeGenerationContext.GenerateInto(codeGenerationFile);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CodeGenerationContext codeGenerationContext = ...;
codeGenerationContext.FindOrCreateNamespace("example");
```

## See Also

- [Area Index](../)
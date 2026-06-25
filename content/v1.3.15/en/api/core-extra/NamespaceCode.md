---
title: "NamespaceCode"
description: "Auto-generated class reference for NamespaceCode."
---
# NamespaceCode

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class NamespaceCode`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/NamespaceCode.cs`

## Overview

`NamespaceCode` lives in `TaleWorlds.Library.CodeGeneration` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library.CodeGeneration` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Classes` | `public List<ClassCode> Classes { get; }` |

## Key Methods

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Generates an instance, data, or representation of into.

```csharp
// Obtain an instance of NamespaceCode from the subsystem API first
NamespaceCode namespaceCode = ...;
namespaceCode.GenerateInto(codeGenerationFile);
```

### AddClass
`public void AddClass(ClassCode clasCode)`

**Purpose:** Adds class to the current collection or state.

```csharp
// Obtain an instance of NamespaceCode from the subsystem API first
NamespaceCode namespaceCode = ...;
namespaceCode.AddClass(clasCode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
NamespaceCode namespaceCode = ...;
namespaceCode.GenerateInto(codeGenerationFile);
```

## See Also

- [Area Index](../)
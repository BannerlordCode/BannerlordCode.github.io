---
title: "CodeGenerationContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CodeGenerationContext`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CodeGenerationContext

**Namespace:** TaleWorlds.Library.CodeGeneration
**Module:** TaleWorlds.Library
**Type:** `public class CodeGenerationContext`
**Base:** none
**File:** `TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs`

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

**Purpose:** Handles logic related to `find or create namespace`.

### GenerateInto
`public void GenerateInto(CodeGenerationFile codeGenerationFile)`

**Purpose:** Handles logic related to `generate into`.

## Usage Example

```csharp
var value = new CodeGenerationContext();
value.FindOrCreateNamespace("example");
```

## See Also

- [Complete Class Catalog](../catalog)
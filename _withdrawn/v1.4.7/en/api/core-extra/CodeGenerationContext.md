---
title: "CodeGenerationContext"
description: "CodeGenerationContext — class in TaleWorlds.Library.CodeGeneration. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# CodeGenerationContext

**Namespace:** `TaleWorlds.Library.CodeGeneration`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class CodeGenerationContext`  
**Source:** `TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs`

## Overview

`CodeGenerationContext` is a named type in the TaleWorlds.Library.CodeGeneration namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CodeGenerationContext`.
- **Instance members** (3): `Namespaces`, `FindOrCreateNamespace`, `GenerateInto`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FindOrCreateNamespace` | method | Instance entry point. Takes 1 argument: `string name`. Returns `NamespaceCode`. Read path: prefer it over reaching for the backing store. |
| `GenerateInto` | method | Instance entry point. Takes 1 argument: `CodeGenerationFile codeGenerationFile`. |
| `Namespaces` | property | Instance entry point `List<NamespaceCode>` property. Read it for current state; a declared setter writes that state in place. |
| `CodeGenerationContext` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public CodeGenerationContext()`.

## Usage Example

```csharp
var codeGenerationContext = new CodeGenerationContext();
codeGenerationContext.FindOrCreateNamespace(name);
// Read current state through codeGenerationContext.Namespaces.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CodeGenerationFile](../CodeGenerationFile/) — `TaleWorlds.Library.CodeGeneration`.

Section: [api/core-extra/](../) — the other types in this bucket.

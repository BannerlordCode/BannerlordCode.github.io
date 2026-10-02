---
title: "CodeBlock"
description: "CodeBlock — class in TaleWorlds.Library.CodeGeneration. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# CodeBlock

**Namespace:** `TaleWorlds.Library.CodeGeneration`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class CodeBlock`  
**Source:** `TaleWorlds.Library/CodeGeneration/CodeBlock.cs`

## Overview

`CodeBlock` is a named type in the TaleWorlds.Library.CodeGeneration namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CodeBlock`.
- **Instance members** (3): `Lines`, `AddLine`, `AddLines`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AddLine` | method | Instance entry point. Takes 1 argument: `string line`. Adds to the collection or relation this type owns. |
| `AddLines` | method | Instance entry point. Takes 1 argument: `IEnumerable<string> lines`. Adds to the collection or relation this type owns. |
| `Lines` | property | Instance entry point `List<string>` property. Read it for current state; a declared setter writes that state in place. |
| `CodeBlock` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public CodeBlock()`.

## Usage Example

```csharp
var codeBlock = new CodeBlock();
codeBlock.AddLine(line);
// Read current state through codeBlock.Lines.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/CodeGeneration/CodeBlock.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.

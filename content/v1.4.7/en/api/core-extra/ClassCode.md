---
title: "ClassCode"
description: "ClassCode — class in TaleWorlds.Library.CodeGeneration. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# ClassCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`  
**Module:** `TaleWorlds.Library`  
**Type:** `public class ClassCode`  
**Source:** `TaleWorlds.Library/CodeGeneration/ClassCode.cs`

## Overview

`ClassCode` is a named type in the TaleWorlds.Library.CodeGeneration namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClassCode`.
- **Instance members** (18): `Name`, `IsGeneric`, `GenericTypeCount`, `IsPartial`, `AccessModifier`, `IsClass`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AccessModifier` | property | Instance entry point `ClassCodeAccessModifier` property. Read it for current state; a declared setter writes that state in place. |
| `AddConsturctor` | method | Instance entry point. Takes 1 argument: `ConstructorCode constructorCode`. Adds to the collection or relation this type owns. |
| `AddInterface` | method | Instance entry point. Takes 1 argument: `string interfaceName`. Adds to the collection or relation this type owns. |
| `AddMethod` | method | Instance entry point. Takes 1 argument: `MethodCode methodCode`. Adds to the collection or relation this type owns. |
| `AddNestedClass` | method | Instance entry point. Takes 1 argument: `ClassCode clasCode`. Adds to the collection or relation this type owns. |
| `AddVariable` | method | Instance entry point. Takes 1 argument: `VariableCode variableCode`. Adds to the collection or relation this type owns. |
| `CommentSection` | property | Instance entry point `CommentSection` property. Read it for current state; a declared setter writes that state in place. |
| `Constructors` | property | Instance entry point `List<ConstructorCode>` property. Read it for current state; a declared setter writes that state in place. |
| `GenerateInto` | method | Instance entry point. Takes 1 argument: `CodeGenerationFile codeGenerationFile`. |
| `GenericTypeCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `InheritedInterfaces` | property | Instance entry point `List<string>` property. Read it for current state; a declared setter writes that state in place. |
| `IsClass` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsGeneric` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPartial` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Methods` | property | Instance entry point `List<MethodCode>` property. Read it for current state; a declared setter writes that state in place. |
| `Name` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `NestedClasses` | property | Instance entry point `List<ClassCode>` property. Read it for current state; a declared setter writes that state in place. |
| `Variables` | property | Instance entry point `List<VariableCode>` property. Read it for current state; a declared setter writes that state in place. |
| `ClassCode` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ClassCode()`.

## Usage Example

```csharp
var classCode = new ClassCode();
classCode.GenerateInto(codeGenerationFile);
// Read current state through classCode.Name.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.Library/CodeGeneration/ClassCode.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ClassCodeAccessModifier](../ClassCodeAccessModifier/) — `TaleWorlds.Library.CodeGeneration`.
- [CommentSection](../CommentSection/) — `TaleWorlds.Library.CodeGeneration`.
- [CodeGenerationFile](../CodeGenerationFile/) — `TaleWorlds.Library.CodeGeneration`.

Section: [api/core-extra/](../) — the other types in this bucket.

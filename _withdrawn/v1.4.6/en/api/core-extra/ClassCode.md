---
title: "ClassCode"
description: "ClassCode: a public class in TaleWorlds.Library.CodeGeneration; 19 exposed members (6 methods, 12 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/CodeGeneration/ClassCode.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClassCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class ClassCode`
**File:** `TaleWorlds.Library/CodeGeneration/ClassCode.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

ClassCode lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/ClassCode.cs. It is a public class; the inheritance chain is ClassCode. It exposes 19 public/protected members: 6 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClassCode lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.CodeGeneration`, inheritance chain ClassCode. The surface is property-led (properties 12/19, methods 6/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/ClassCode.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `IsGeneric` | `public bool IsGeneric` | property |
| `GenericTypeCount` | `public int GenericTypeCount` | property |
| `IsPartial` | `public bool IsPartial` | property |
| `AccessModifier` | `public ClassCodeAccessModifier AccessModifier` | property |
| `IsClass` | `public bool IsClass` | property |
| `List` | `public List<string>InheritedInterfaces` | property |
| `List` | `public List<ClassCode>NestedClasses` | property |
| `List` | `public List<MethodCode>Methods` | property |
| `List` | `public List<ConstructorCode>Constructors` | property |
| `List` | `public List<VariableCode>Variables` | property |
| `CommentSection` | `public CommentSection CommentSection` | property |
| `ClassCode` | `public ClassCode()` | constructor |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | method |
| `AddVariable` | `public void AddVariable(VariableCode variableCode)` | method |
| `AddNestedClass` | `public void AddNestedClass(ClassCode clasCode)` | method |
| `AddMethod` | `public void AddMethod(MethodCode methodCode)` | method |
| `AddConsturctor` | `public void AddConsturctor(ConstructorCode constructorCode)` | method |
| `AddInterface` | `public void AddInterface(string interfaceName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier/)
- [same namespace CodeBlock](../CodeBlock/)
- [same namespace CodeGenerationContext](../CodeGenerationContext/)
- [same namespace CodeGenerationFile](../CodeGenerationFile/)

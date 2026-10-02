---
title: "MethodCode"
description: "MethodCode: a public class in TaleWorlds.Library.CodeGeneration; 12 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Library/CodeGeneration/MethodCode.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MethodCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class MethodCode`
**File:** `TaleWorlds.Library/CodeGeneration/MethodCode.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Library)

## Overview

MethodCode lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/MethodCode.cs. It is a public class; the inheritance chain is MethodCode. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MethodCode lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Library`), namespace `TaleWorlds.Library.CodeGeneration`, inheritance chain MethodCode. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/MethodCode.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Comment` | `public string Comment` | property |
| `Name` | `public string Name` | property |
| `MethodSignature` | `public string MethodSignature` | property |
| `ReturnParameter` | `public string ReturnParameter` | property |
| `IsStatic` | `public bool IsStatic` | property |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier` | property |
| `PolymorphismInfo` | `public MethodCodePolymorphismInfo PolymorphismInfo` | property |
| `MethodCode` | `public MethodCode()` | constructor |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | method |
| `AddLine` | `public void AddLine(string line)` | method |
| `AddLines` | `public void AddLines(IEnumerable<string>lines)` | method |
| `AddCodeBlock` | `public void AddCodeBlock(CodeBlock codeBlock)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClassCode](../ClassCode/)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier/)
- [same namespace CodeBlock](../CodeBlock/)
- [same namespace CodeGenerationContext](../CodeGenerationContext/)

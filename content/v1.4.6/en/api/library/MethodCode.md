---
title: "MethodCode"
description: "MethodCode: a public class in TaleWorlds.Library; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.Library/CodeGeneration/MethodCode.cs."
---
# MethodCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class MethodCode`
**File:** `TaleWorlds.Library/CodeGeneration/MethodCode.cs`

## Overview

MethodCode lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/MethodCode.cs. It is a public class; the inheritance chain is MethodCode. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MethodCode is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.CodeGeneration) the module directory; inheritance chain MethodCode. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/MethodCode.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClassCode](../ClassCode)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [same namespace CodeBlock](../CodeBlock)
- [same namespace CodeGenerationContext](../CodeGenerationContext)

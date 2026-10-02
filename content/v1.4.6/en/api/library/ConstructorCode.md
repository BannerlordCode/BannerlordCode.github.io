---
title: "ConstructorCode"
description: "ConstructorCode: a public class in TaleWorlds.Library; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.Library/CodeGeneration/ConstructorCode.cs."
---
# ConstructorCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class ConstructorCode`
**File:** `TaleWorlds.Library/CodeGeneration/ConstructorCode.cs`

## Overview

ConstructorCode lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/ConstructorCode.cs. It is a public class; the inheritance chain is ConstructorCode. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConstructorCode is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.CodeGeneration) the module directory; inheritance chain ConstructorCode. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/ConstructorCode.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `MethodSignature` | `public string MethodSignature` | property |
| `BaseCall` | `public string BaseCall` | property |
| `IsStatic` | `public bool IsStatic` | property |
| `AccessModifier` | `public MethodCodeAccessModifier AccessModifier` | property |
| `ConstructorCode` | `public ConstructorCode()` | constructor |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | method |
| `AddLine` | `public void AddLine(string line)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClassCode](../ClassCode)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [same namespace CodeBlock](../CodeBlock)
- [same namespace CodeGenerationContext](../CodeGenerationContext)

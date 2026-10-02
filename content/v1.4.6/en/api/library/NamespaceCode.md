---
title: "NamespaceCode"
description: "NamespaceCode: a public class in TaleWorlds.Library; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.Library/CodeGeneration/NamespaceCode.cs."
---
# NamespaceCode

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class NamespaceCode`
**File:** `TaleWorlds.Library/CodeGeneration/NamespaceCode.cs`

## Overview

NamespaceCode lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/NamespaceCode.cs. It is a public class; the inheritance chain is NamespaceCode. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NamespaceCode is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.CodeGeneration) the module directory; inheritance chain NamespaceCode. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/NamespaceCode.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `List` | `public List<ClassCode>Classes` | property |
| `NamespaceCode` | `public NamespaceCode()` | constructor |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | method |
| `AddClass` | `public void AddClass(ClassCode clasCode)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClassCode](../ClassCode)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [same namespace CodeBlock](../CodeBlock)
- [same namespace CodeGenerationContext](../CodeGenerationContext)

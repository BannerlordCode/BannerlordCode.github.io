---
title: "CodeGenerationContext"
description: "CodeGenerationContext: a public class in TaleWorlds.Library; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs."
---
# CodeGenerationContext

**Namespace:** `TaleWorlds.Library.CodeGeneration`
**Module:** `TaleWorlds.Library`
**Type:** `public class CodeGenerationContext`
**File:** `TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs`

## Overview

CodeGenerationContext lives in the TaleWorlds.Library module, source file TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs. It is a public class; the inheritance chain is CodeGenerationContext. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CodeGenerationContext is a top-level type in TaleWorlds.Library, namespace differing from (TaleWorlds.Library.CodeGeneration) the module directory; inheritance chain CodeGenerationContext. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Library/CodeGeneration/CodeGenerationContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public List<NamespaceCode>Namespaces` | property |
| `CodeGenerationContext` | `public CodeGenerationContext()` | constructor |
| `FindOrCreateNamespace` | `public NamespaceCode FindOrCreateNamespace(string name)` | method |
| `GenerateInto` | `public void GenerateInto(CodeGenerationFile codeGenerationFile)` | method |

## See Also

- [↑ library module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClassCode](../ClassCode)
- [same namespace ClassCodeAccessModifier](../ClassCodeAccessModifier)
- [same namespace CodeBlock](../CodeBlock)
- [same namespace CodeGenerationFile](../CodeGenerationFile)

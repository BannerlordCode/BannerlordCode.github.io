---
title: "TextProcessingContext"
description: "TextProcessingContext: a public class in TaleWorlds.Localization.TextProcessor; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket localization. Source: TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextProcessingContext

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public class TextProcessingContext`
**File:** `TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## Overview

TextProcessingContext lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs. It is a public class; the inheritance chain is TextProcessingContext. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextProcessingContext lands in canonical bucket `localization` (matched rule `rule:TaleWorlds.Localization`), namespace `TaleWorlds.Localization.TextProcessor`, inheritance chain TextProcessingContext. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/TextProcessor/TextProcessingContext.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetFunction` | `public void SetFunction(string functionName, MBTextModel functionBody)` | method |
| `ResetFunctions` | `public void ResetFunctions()` | method |
| `GetFunctionBody` | `public MBTextModel GetFunctionBody(string functionName)` | method |
| `GetFunctionParam` | `public TextObject GetFunctionParam(string rawValue)` | method |
| `GetFunctionParamWithoutEvaluate` | `public TextObject GetFunctionParamWithoutEvaluate(string rawValue)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DefaultTextProcessor](../DefaultTextProcessor/)
- [same namespace LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)
- [same namespace MBTextModel](../MBTextModel/)
- [same namespace TextGrammarProcessor](../TextGrammarProcessor/)

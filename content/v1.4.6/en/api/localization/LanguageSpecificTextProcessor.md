---
title: "LanguageSpecificTextProcessor"
description: "LanguageSpecificTextProcessor: a public class in TaleWorlds.Localization; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs."
---
# LanguageSpecificTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor`
**Module:** `TaleWorlds.Localization`
**Type:** `public abstract class LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs`

## Overview

LanguageSpecificTextProcessor lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs. It is a public class (abstract); the inheritance chain is LanguageSpecificTextProcessor. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LanguageSpecificTextProcessor is a top-level type in TaleWorlds.Localization, namespace differing from (TaleWorlds.Localization.TextProcessor) the module directory; inheritance chain LanguageSpecificTextProcessor. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/TextProcessor/LanguageSpecificTextProcessor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProcessToken` | `public abstract void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString);` | method |
| `CultureInfoForLanguage` | `public abstract CultureInfo CultureInfoForLanguage` | property |
| `ClearTemporaryData` | `public abstract void ClearTemporaryData();` | method |
| `LanguageSpecificTextProcessor` | `public LanguageSpecificTextProcessor()` | constructor |
| `Process` | `public string Process(string text)` | method |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultTextProcessor](../DefaultTextProcessor)
- [same namespace MBTextModel](../MBTextModel)
- [same namespace TextGrammarProcessor](../TextGrammarProcessor)
- [same namespace TextProcessingContext](../TextProcessingContext)

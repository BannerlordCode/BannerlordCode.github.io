---
title: "EnglishTextProcessor"
description: "EnglishTextProcessor: a public class in TaleWorlds.Localization, inheriting LanguageSpecificTextProcessor; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.Localization/TextProcessor/LanguageProcessors/EnglishTextProcessor.cs."
---
# EnglishTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`
**Module:** `TaleWorlds.Localization`
**Type:** `public class EnglishTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/EnglishTextProcessor.cs`

## Overview

EnglishTextProcessor lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/TextProcessor/LanguageProcessors/EnglishTextProcessor.cs. It is a public class, implementing/inheriting LanguageSpecificTextProcessor; the inheritance chain is EnglishTextProcessor → LanguageSpecificTextProcessor. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EnglishTextProcessor is a top-level type in TaleWorlds.Localization, namespace differing from (TaleWorlds.Localization.TextProcessor.LanguageProcessors) the module directory; inheritance chain EnglishTextProcessor → LanguageSpecificTextProcessor. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/TextProcessor/LanguageProcessors/EnglishTextProcessor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | method |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | property |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | method |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- [same namespace FrenchTextProcessor](../FrenchTextProcessor)
- [same namespace GermanTextProcessor](../GermanTextProcessor)
- [same namespace ItalianTextProcessor](../ItalianTextProcessor)
- [same namespace PolishTextProcessor](../PolishTextProcessor)

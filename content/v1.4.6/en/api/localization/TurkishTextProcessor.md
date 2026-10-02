---
title: "TurkishTextProcessor"
description: "TurkishTextProcessor: a public class in TaleWorlds.Localization, inheriting LanguageSpecificTextProcessor; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs."
---
# TurkishTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`
**Module:** `TaleWorlds.Localization`
**Type:** `public class TurkishTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs`

## Overview

TurkishTextProcessor lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs. It is a public class, implementing/inheriting LanguageSpecificTextProcessor; the inheritance chain is TurkishTextProcessor → LanguageSpecificTextProcessor. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TurkishTextProcessor is a top-level type in TaleWorlds.Localization, namespace differing from (TaleWorlds.Localization.TextProcessor.LanguageProcessors) the module directory; inheritance chain TurkishTextProcessor → LanguageSpecificTextProcessor. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/TextProcessor/LanguageProcessors/TurkishTextProcessor.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `List` | `public static List<string>LinkList` | property |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | method |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | property |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | method |

## See Also

- [↑ localization module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor)
- [same namespace EnglishTextProcessor](../EnglishTextProcessor)
- [same namespace FrenchTextProcessor](../FrenchTextProcessor)
- [same namespace GermanTextProcessor](../GermanTextProcessor)
- [same namespace ItalianTextProcessor](../ItalianTextProcessor)

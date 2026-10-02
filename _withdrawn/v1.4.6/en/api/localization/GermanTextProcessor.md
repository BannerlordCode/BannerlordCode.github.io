---
title: "GermanTextProcessor"
description: "GermanTextProcessor: a public class in TaleWorlds.Localization.TextProcessor.LanguageProcessors, inheriting LanguageSpecificTextProcessor; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket localization. Source: TaleWorlds.Localization/TextProcessor/LanguageProcessors/GermanTextProcessor.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GermanTextProcessor

**Namespace:** `TaleWorlds.Localization.TextProcessor.LanguageProcessors`
**Module:** `TaleWorlds.Localization`
**Type:** `public class GermanTextProcessor : LanguageSpecificTextProcessor`
**File:** `TaleWorlds.Localization/TextProcessor/LanguageProcessors/GermanTextProcessor.cs`
**Bucket:** `localization` (rule:TaleWorlds.Localization)

## Overview

GermanTextProcessor lives in the TaleWorlds.Localization module, source file TaleWorlds.Localization/TextProcessor/LanguageProcessors/GermanTextProcessor.cs. It is a public class, implementing/inheriting LanguageSpecificTextProcessor; the inheritance chain is GermanTextProcessor → LanguageSpecificTextProcessor. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GermanTextProcessor lands in canonical bucket `localization` (matched rule `rule:TaleWorlds.Localization`), namespace `TaleWorlds.Localization.TextProcessor.LanguageProcessors`, inheritance chain GermanTextProcessor → LanguageSpecificTextProcessor. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Localization/TextProcessor/LanguageProcessors/GermanTextProcessor.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CultureInfoForLanguage` | `public override CultureInfo CultureInfoForLanguage` | property |
| `ClearTemporaryData` | `public override void ClearTemporaryData()` | method |
| `ProcessToken` | `public override void ProcessToken(string sourceText, ref int cursorPos, string token, StringBuilder outputString)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface LanguageSpecificTextProcessor](../LanguageSpecificTextProcessor/)
- [same namespace EnglishTextProcessor](../EnglishTextProcessor/)
- [same namespace FrenchTextProcessor](../FrenchTextProcessor/)
- [same namespace ItalianTextProcessor](../ItalianTextProcessor/)
- [same namespace PolishTextProcessor](../PolishTextProcessor/)

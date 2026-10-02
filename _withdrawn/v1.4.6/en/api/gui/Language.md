---
title: "Language"
description: "Language: a public class in TaleWorlds.GauntletUI, inheriting ILanguage; 10 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Language

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Language : ILanguage`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

Language lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs. It is a public class, implementing/inheriting ILanguage; the inheritance chain is Language → ILanguage. It exposes 10 public/protected members: 3 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Language lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain Language → ILanguage. The surface is property-led (properties 7/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `char[]ForbiddenStartOfLineCharacters` | `public char[]ForbiddenStartOfLineCharacters` | property |
| `char[]ForbiddenEndOfLineCharacters` | `public char[]ForbiddenEndOfLineCharacters` | property |
| `LanguageID` | `public string LanguageID` | property |
| `DefaultFontName` | `public string DefaultFontName` | property |
| `DoesFontRequireSpaceForNewline` | `public bool DoesFontRequireSpaceForNewline` | property |
| `DefaultFont` | `public Font DefaultFont` | property |
| `LineSeperatorChar` | `public char LineSeperatorChar` | property |
| `FontMapHasKey` | `public bool FontMapHasKey(string keyFontName)` | method |
| `GetMappedFont` | `public Font GetMappedFont(string keyFontName)` | method |
| `CreateFrom` | `public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ILanguage](../ILanguage/)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)

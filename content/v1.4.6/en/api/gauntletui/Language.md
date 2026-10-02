---
title: "Language"
description: "Language: a public class in TaleWorlds.GauntletUI, inheriting ILanguage; 10 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs."
---
# Language

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Language : ILanguage`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs`

## Overview

Language lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs. It is a public class, implementing/inheriting ILanguage; the inheritance chain is Language → ILanguage. It exposes 10 public/protected members: 3 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Language is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain Language → ILanguage. The surface is property-led (properties 7/10, methods 3/10), so it mostly exposes state for reading. ILanguage on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)

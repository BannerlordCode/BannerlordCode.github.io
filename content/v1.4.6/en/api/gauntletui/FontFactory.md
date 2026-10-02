---
title: "FontFactory"
description: "FontFactory: a public class in TaleWorlds.GauntletUI; 14 exposed members (10 methods, 3 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs."
---
# FontFactory

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class FontFactory`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs`

## Overview

FontFactory lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs. It is a public class; the inheritance chain is FontFactory. It exposes 14 public/protected members: 10 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FontFactory is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain FontFactory. The surface is method-led (methods 10/14, properties 3/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultLanguage` | `public Language DefaultLanguage` | property |
| `CurrentLanguage` | `public Language CurrentLanguage` | property |
| `DefaultFont` | `public Font DefaultFont` | property |
| `FontFactory` | `public FontFactory(ResourceDepot resourceDepot)` | constructor |
| `LoadAllFonts` | `public void LoadAllFonts(SpriteData spriteData)` | method |
| `TryAddFontDefinition` | `public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)` | method |
| `LoadLocalizationValues` | `public void LoadLocalizationValues(string sourceXMLPath)` | method |
| `GetFont` | `public Font GetFont(string fontName)` | method |
| `IEnumerable` | `public IEnumerable<Font>GetFonts()` | method |
| `GetFontName` | `public string GetFontName(Font font)` | method |
| `GetMappedFontForLocalization` | `public Font GetMappedFontForLocalization(string englishFontName)` | method |
| `OnLanguageChange` | `public void OnLanguageChange(string newLanguageCode)` | method |
| `GetUsableFontForCharacter` | `public Font GetUsableFontForCharacter(int characterCode)` | method |
| `CheckForUpdates` | `public void CheckForUpdates()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)

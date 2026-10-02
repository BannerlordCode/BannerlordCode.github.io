---
title: "ILanguage"
description: "ILanguage: a public interface in TaleWorlds.TwoDimension; 11 exposed members (11 methods, 0 properties, 0 fields). Source: TaleWorlds.TwoDimension/ILanguage.cs."
---
# ILanguage

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface ILanguage`
**File:** `TaleWorlds.TwoDimension/ILanguage.cs`

## Overview

ILanguage lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/ILanguage.cs. It is a public interface; the inheritance chain is ILanguage. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ILanguage is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain ILanguage. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/ILanguage.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `IEnumerable<char>GetForbiddenStartOfLineCharacters();` | method |
| `IsCharacterForbiddenAtStartOfLine` | `bool IsCharacterForbiddenAtStartOfLine(char character);` | method |
| `IEnumerable` | `IEnumerable<char>GetForbiddenEndOfLineCharacters();` | method |
| `IsCharacterForbiddenAtEndOfLine` | `bool IsCharacterForbiddenAtEndOfLine(char character);` | method |
| `GetLanguageID` | `string GetLanguageID();` | method |
| `GetDefaultFontName` | `string GetDefaultFontName();` | method |
| `GetDefaultFont` | `Font GetDefaultFont();` | method |
| `GetLineSeperatorChar` | `char GetLineSeperatorChar();` | method |
| `DoesLanguageRequireSpaceForNewline` | `bool DoesLanguageRequireSpaceForNewline();` | method |
| `FontMapHasKey` | `bool FontMapHasKey(string keyFontName);` | method |
| `GetMappedFont` | `Font GetMappedFont(string keyFontName);` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)

---
title: "TextToken"
description: "TextToken: a public class in TaleWorlds.TwoDimension; 18 exposed members (11 methods, 6 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/TextToken.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextToken

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TextToken`
**File:** `TaleWorlds.TwoDimension/TextToken.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

TextToken lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TextToken.cs. It is a public class; the inheritance chain is TextToken. It exposes 18 public/protected members: 11 methods, 6 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextToken lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain TextToken. The surface is method-led (methods 11/18, properties 6/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TextToken.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Token` | `public char Token` | property |
| `Type` | `public TextToken.TokenType Type` | property |
| `Tag` | `public RichTextTag Tag` | property |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter` | property |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter` | property |
| `CreateEmptyCharacter` | `public static TextToken CreateEmptyCharacter()` | method |
| `CreateZeroWidthSpaceCharacter` | `public static TextToken CreateZeroWidthSpaceCharacter()` | method |
| `CreateNonBreakingSpaceCharacter` | `public static TextToken CreateNonBreakingSpaceCharacter()` | method |
| `CreateWordJoinerCharacter` | `public static TextToken CreateWordJoinerCharacter()` | method |
| `CreateNewLine` | `public static TextToken CreateNewLine()` | method |
| `CreateTab` | `public static TextToken CreateTab()` | method |
| `CreateCharacter` | `public static TextToken CreateCharacter(char character)` | method |
| `CreateTag` | `public static TextToken CreateTag(RichTextTag tag)` | method |
| `CreateCharacterCannotEndLineWith` | `public static TextToken CreateCharacterCannotEndLineWith(char character)` | method |
| `CreateCharacterCannotStartLineWith` | `public static TextToken CreateCharacterCannotStartLineWith(char character)` | method |
| `List` | `public static List<TextToken>CreateTokenArrayFromWord(string word)` | method |
| `TokenType` | `public enum TokenType` | property |
| `TokenType` | `public enum TokenType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)

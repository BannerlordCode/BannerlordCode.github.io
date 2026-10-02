---
title: "TextToken"
description: "TextToken：TaleWorlds.TwoDimension 的 public 类；公开成员 18 个（方法 11、属性 6、字段 0）。源文件 TaleWorlds.TwoDimension/TextToken.cs。"
---
# TextToken

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TextToken`
**File:** `TaleWorlds.TwoDimension/TextToken.cs`

## 概述

TextToken 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/TextToken.cs。它是一个 public 类，继承链为 TextToken。public/protected 成员共 18 个：11 方法、6 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextToken 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 TextToken。成员构成以方法为主（方法 11/18，属性 6/18），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/TextToken.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Token` | `public char Token` | 属性 |
| `Type` | `public TextToken.TokenType Type` | 属性 |
| `Tag` | `public RichTextTag Tag` | 属性 |
| `CannotStartLineWithCharacter` | `public bool CannotStartLineWithCharacter` | 属性 |
| `CannotEndLineWithCharacter` | `public bool CannotEndLineWithCharacter` | 属性 |
| `CreateEmptyCharacter` | `public static TextToken CreateEmptyCharacter()` | 方法 |
| `CreateZeroWidthSpaceCharacter` | `public static TextToken CreateZeroWidthSpaceCharacter()` | 方法 |
| `CreateNonBreakingSpaceCharacter` | `public static TextToken CreateNonBreakingSpaceCharacter()` | 方法 |
| `CreateWordJoinerCharacter` | `public static TextToken CreateWordJoinerCharacter()` | 方法 |
| `CreateNewLine` | `public static TextToken CreateNewLine()` | 方法 |
| `CreateTab` | `public static TextToken CreateTab()` | 方法 |
| `CreateCharacter` | `public static TextToken CreateCharacter(char character)` | 方法 |
| `CreateTag` | `public static TextToken CreateTag(RichTextTag tag)` | 方法 |
| `CreateCharacterCannotEndLineWith` | `public static TextToken CreateCharacterCannotEndLineWith(char character)` | 方法 |
| `CreateCharacterCannotStartLineWith` | `public static TextToken CreateCharacterCannotStartLineWith(char character)` | 方法 |
| `List` | `public static List<TextToken>CreateTokenArrayFromWord(string word)` | 方法 |
| `TokenType` | `public enum TokenType` | 属性 |
| `TokenType` | `public enum TokenType` | 嵌套类型 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)

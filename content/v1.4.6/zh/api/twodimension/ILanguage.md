---
title: "ILanguage"
description: "ILanguage：TaleWorlds.TwoDimension 的 public 接口；公开成员 11 个（方法 11、属性 0、字段 0）。源文件 TaleWorlds.TwoDimension/ILanguage.cs。"
---
# ILanguage

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface ILanguage`
**File:** `TaleWorlds.TwoDimension/ILanguage.cs`

## 概述

ILanguage 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/ILanguage.cs。它是一个 public 接口，继承链为 ILanguage。public/protected 成员共 11 个：11 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ILanguage 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 ILanguage。成员构成以方法为主（方法 11/11，属性 0/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/ILanguage.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `IEnumerable<char>GetForbiddenStartOfLineCharacters();` | 方法 |
| `IsCharacterForbiddenAtStartOfLine` | `bool IsCharacterForbiddenAtStartOfLine(char character);` | 方法 |
| `IEnumerable` | `IEnumerable<char>GetForbiddenEndOfLineCharacters();` | 方法 |
| `IsCharacterForbiddenAtEndOfLine` | `bool IsCharacterForbiddenAtEndOfLine(char character);` | 方法 |
| `GetLanguageID` | `string GetLanguageID();` | 方法 |
| `GetDefaultFontName` | `string GetDefaultFontName();` | 方法 |
| `GetDefaultFont` | `Font GetDefaultFont();` | 方法 |
| `GetLineSeperatorChar` | `char GetLineSeperatorChar();` | 方法 |
| `DoesLanguageRequireSpaceForNewline` | `bool DoesLanguageRequireSpaceForNewline();` | 方法 |
| `FontMapHasKey` | `bool FontMapHasKey(string keyFontName);` | 方法 |
| `GetMappedFont` | `Font GetMappedFont(string keyFontName);` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)

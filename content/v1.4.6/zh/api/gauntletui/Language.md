---
title: "Language"
description: "Language：TaleWorlds.GauntletUI 的 public 类，继承 ILanguage；公开成员 10 个（方法 3、属性 7、字段 0）。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs。"
---
# Language

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class Language : ILanguage`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs`

## 概述

Language 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs。它是一个 public 类，实现/继承 ILanguage，继承链为 Language → ILanguage。public/protected 成员共 10 个：3 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Language 是 TaleWorlds.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 Language → ILanguage。成员构成以属性为主（属性 7/10，方法 3/10），对外主要以状态读取接口暴露。继承链上的 ILanguage 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Language.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `char[]ForbiddenStartOfLineCharacters` | `public char[]ForbiddenStartOfLineCharacters` | 属性 |
| `char[]ForbiddenEndOfLineCharacters` | `public char[]ForbiddenEndOfLineCharacters` | 属性 |
| `LanguageID` | `public string LanguageID` | 属性 |
| `DefaultFontName` | `public string DefaultFontName` | 属性 |
| `DoesFontRequireSpaceForNewline` | `public bool DoesFontRequireSpaceForNewline` | 属性 |
| `DefaultFont` | `public Font DefaultFont` | 属性 |
| `LineSeperatorChar` | `public char LineSeperatorChar` | 属性 |
| `FontMapHasKey` | `public bool FontMapHasKey(string keyFontName)` | 方法 |
| `GetMappedFont` | `public Font GetMappedFont(string keyFontName)` | 方法 |
| `CreateFrom` | `public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)` | 方法 |

## 参见

- [↑ gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AlignmentAxis](../AlignmentAxis)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation)
- [同命名空间 AudioProperty](../AudioProperty)

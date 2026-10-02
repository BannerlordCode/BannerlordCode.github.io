---
title: "FontFactory"
description: "FontFactory：TaleWorlds.GauntletUI 的 public 类；公开成员 14 个（方法 10、属性 3、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FontFactory

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class FontFactory`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

FontFactory 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs。它是一个 public 类，继承链为 FontFactory。public/protected 成员共 14 个：10 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FontFactory 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 FontFactory。成员构成以方法为主（方法 10/14，属性 3/14），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/FontFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultLanguage` | `public Language DefaultLanguage` | 属性 |
| `CurrentLanguage` | `public Language CurrentLanguage` | 属性 |
| `DefaultFont` | `public Font DefaultFont` | 属性 |
| `FontFactory` | `public FontFactory(ResourceDepot resourceDepot)` | 构造函数 |
| `LoadAllFonts` | `public void LoadAllFonts(SpriteData spriteData)` | 方法 |
| `TryAddFontDefinition` | `public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)` | 方法 |
| `LoadLocalizationValues` | `public void LoadLocalizationValues(string sourceXMLPath)` | 方法 |
| `GetFont` | `public Font GetFont(string fontName)` | 方法 |
| `IEnumerable` | `public IEnumerable<Font>GetFonts()` | 方法 |
| `GetFontName` | `public string GetFontName(Font font)` | 方法 |
| `GetMappedFontForLocalization` | `public Font GetMappedFontForLocalization(string englishFontName)` | 方法 |
| `OnLanguageChange` | `public void OnLanguageChange(string newLanguageCode)` | 方法 |
| `GetUsableFontForCharacter` | `public Font GetUsableFontForCharacter(int characterCode)` | 方法 |
| `CheckForUpdates` | `public void CheckForUpdates()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)

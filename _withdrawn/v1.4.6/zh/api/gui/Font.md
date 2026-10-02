---
title: "Font"
description: "Font：TaleWorlds.TwoDimension 的 public 类；公开成员 15 个（方法 4、属性 10、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/Font.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Font

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class Font`
**File:** `TaleWorlds.TwoDimension/Font.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

Font 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/Font.cs。它是一个 public 类，继承链为 Font。public/protected 成员共 15 个：4 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Font 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 Font。成员构成以属性为主（属性 10/15，方法 4/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/Font.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Size` | `public int Size` | 属性 |
| `LineHeight` | `public int LineHeight` | 属性 |
| `Base` | `public int Base` | 属性 |
| `CharacterCount` | `public int CharacterCount` | 属性 |
| `SmoothingConstant` | `public float SmoothingConstant` | 属性 |
| `CustomScale` | `public float CustomScale` | 属性 |
| `Smooth` | `public bool Smooth` | 属性 |
| `FontSprite` | `public SpritePart FontSprite` | 属性 |
| `BitmapFontCharacter>Characters` | `public Dictionary<int, BitmapFontCharacter>Characters` | 属性 |
| `Font` | `public Font(string name)` | 构造函数 |
| `TryLoadFontFromPath` | `public bool TryLoadFontFromPath(string path, SpriteData spriteData)` | 方法 |
| `GetWordWidth` | `public float GetWordWidth(string word, float extraPadding)` | 方法 |
| `GetCharacterWidth` | `public float GetCharacterWidth(char character, float extraPadding)` | 方法 |
| `ToString` | `public override string ToString()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 FontStyle](../FontStyle/)
- [同命名空间 IDrawObject](../IDrawObject/)

---
title: "Text"
description: "Text：TaleWorlds.TwoDimension 的 public 类，继承 IText；公开成员 18 个（方法 4、属性 13、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/Text.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Text

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class Text : IText`
**File:** `TaleWorlds.TwoDimension/Text.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

Text 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/Text.cs。它是一个 public 类，实现/继承 IText，继承链为 Text → IText。public/protected 成员共 18 个：4 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Text 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 Text → IText。成员构成以属性为主（属性 13/18，方法 4/18），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/Text.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentLanguage` | `public ILanguage CurrentLanguage` | 属性 |
| `ScaleToFitTextInLayout` | `public float ScaleToFitTextInLayout` | 属性 |
| `LineCount` | `public int LineCount` | 属性 |
| `Width` | `public int Width` | 属性 |
| `Height` | `public int Height` | 属性 |
| `Font` | `public Font Font` | 属性 |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment` | 属性 |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment` | 属性 |
| `FontSize` | `public float FontSize` | 属性 |
| `Value` | `public string Value` | 属性 |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded` | 属性 |
| `CanBreakWords` | `public bool CanBreakWords` | 属性 |
| `ResizeTextOnOverflow` | `public bool ResizeTextOnOverflow` | 属性 |
| `Text` | `public Text(int width, int height, Font bitmapFont, Func<int, Font>getUsableFontForCharacter)` | 构造函数 |
| `GetPreferredSize` | `public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)` | 方法 |
| `UpdateSize` | `public void UpdateSize(int width, int height)` | 方法 |
| `SetAllDirty` | `public void SetAllDirty()` | 方法 |
| `List` | `public List<TextPart>GetParts()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IText](../IText/)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)

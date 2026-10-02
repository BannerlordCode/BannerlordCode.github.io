---
title: "RichText"
description: "RichText：TaleWorlds.TwoDimension 的 public 类，继承 IText；公开成员 18 个（方法 6、属性 9、字段 2）。源文件 TaleWorlds.TwoDimension/RichText.cs。"
---
# RichText

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class RichText : IText`
**File:** `TaleWorlds.TwoDimension/RichText.cs`

## 概述

RichText 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/RichText.cs。它是一个 public 类，实现/继承 IText，继承链为 RichText → IText。public/protected 成员共 18 个：6 方法、9 属性、2 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RichText 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 RichText → IText。成员构成以属性为主（属性 9/18，方法 6/18），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/RichText.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CurrentStyle` | `public string CurrentStyle` | 属性 |
| `TextHeight` | `public int TextHeight` | 属性 |
| `StyleFontContainer` | `public StyleFontContainer StyleFontContainer` | 属性 |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment` | 属性 |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment` | 属性 |
| `Value` | `public string Value` | 属性 |
| `FocusedLinkGroup` | `public RichTextLinkGroup FocusedLinkGroup` | 属性 |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded` | 属性 |
| `CanBreakWords` | `public bool CanBreakWords` | 属性 |
| `RichText` | `public RichText(int width, int height, Font font, Func<int, Font>getUsableFontForCharacter)` | 构造函数 |
| `Update` | `public virtual void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)` | 方法 |
| `SetAllDirty` | `public void SetAllDirty()` | 方法 |
| `GetPreferredSize` | `public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)` | 方法 |
| `CalculateTextOutput` | `public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)` | 方法 |
| `UpdateSize` | `public void UpdateSize(int width, int height)` | 方法 |
| `List` | `public List<RichTextPart>GetParts()` | 方法 |
| `ExtraLetterPaddingHorizontal` | `protected const float ExtraLetterPaddingHorizontal` | 字段 |
| `ExtraLetterPaddingVertical` | `protected const float ExtraLetterPaddingVertical` | 字段 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IText](../IText)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 EditableText](../EditableText)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)

---
title: "EditableText"
description: "EditableText：TaleWorlds.TwoDimension 的 public 类，继承 RichText；公开成员 19 个（方法 11、属性 7、字段 0）。源文件 TaleWorlds.TwoDimension/EditableText.cs。"
---
# EditableText

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class EditableText : RichText`
**File:** `TaleWorlds.TwoDimension/EditableText.cs`

## 概述

EditableText 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/EditableText.cs。它是一个 public 类，实现/继承 RichText，继承链为 EditableText → RichText → IText。public/protected 成员共 19 个：11 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EditableText 是 TaleWorlds.TwoDimension 的顶层类型，命名空间与模块目录一致，继承链 EditableText → RichText → IText。成员构成以方法为主（方法 11/19，属性 7/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/EditableText.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CursorPosition` | `public int CursorPosition` | 属性 |
| `HighlightStart` | `public bool HighlightStart` | 属性 |
| `HighlightEnd` | `public bool HighlightEnd` | 属性 |
| `SelectedTextBegin` | `public int SelectedTextBegin` | 属性 |
| `SelectedTextEnd` | `public int SelectedTextEnd` | 属性 |
| `BlinkTimer` | `public float BlinkTimer` | 属性 |
| `VisibleText` | `public string VisibleText` | 属性 |
| `EditableText` | `public EditableText(int width, int height, Font font, Func<int, Font>getUsableFontForCharacter) : base(width, height, font, getUsableFontForCharacter)` | 构造函数 |
| `SetCursorPosition` | `public void SetCursorPosition(int position, bool visible)` | 方法 |
| `BlinkCursor` | `public void BlinkCursor()` | 方法 |
| `IsCursorVisible` | `public bool IsCursorVisible()` | 方法 |
| `ResetSelected` | `public void ResetSelected()` | 方法 |
| `BeginSelection` | `public void BeginSelection()` | 方法 |
| `IsAnySelected` | `public bool IsAnySelected()` | 方法 |
| `GetCursorPosition` | `public Vector2 GetCursorPosition()` | 方法 |
| `Update` | `public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)` | 方法 |
| `SelectAll` | `public void SelectAll()` | 方法 |
| `FindNextWordPosition` | `public int FindNextWordPosition(int direction)` | 方法 |
| `SetCursor` | `public void SetCursor(int position, bool visible = true, bool withSelection = false)` | 方法 |

## 参见

- [↑ twodimension 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 RichText](../RichText)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter)
- [同命名空间 Font](../Font)
- [同命名空间 FontStyle](../FontStyle)
- [同命名空间 IDrawObject](../IDrawObject)

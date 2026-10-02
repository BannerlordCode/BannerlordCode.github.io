---
title: "TwoDimensionDrawContext"
description: "TwoDimensionDrawContext：TaleWorlds.TwoDimension 的 public 类；公开成员 20 个（方法 13、属性 6、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoDimensionDrawContext

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TwoDimensionDrawContext`
**File:** `TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

TwoDimensionDrawContext 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs。它是一个 public 类，继承链为 TwoDimensionDrawContext。public/protected 成员共 20 个：13 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TwoDimensionDrawContext 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 TwoDimensionDrawContext。成员构成以方法为主（方法 13/20，属性 6/20），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ScissorTestEnabled` | `public bool ScissorTestEnabled` | 属性 |
| `CircularMaskEnabled` | `public bool CircularMaskEnabled` | 属性 |
| `CircularMaskCenter` | `public Vector2 CircularMaskCenter` | 属性 |
| `CircularMaskRadius` | `public float CircularMaskRadius` | 属性 |
| `CircularMaskSmoothingRadius` | `public float CircularMaskSmoothingRadius` | 属性 |
| `CurrentScissor` | `public ScissorTestInfo CurrentScissor` | 属性 |
| `TwoDimensionDrawContext` | `public TwoDimensionDrawContext()` | 构造函数 |
| `Reset` | `public void Reset()` | 方法 |
| `CreateSimpleMaterial` | `public SimpleMaterial CreateSimpleMaterial()` | 方法 |
| `CreateTextMaterial` | `public TextMaterial CreateTextMaterial()` | 方法 |
| `PushScissor` | `public void PushScissor(in Rectangle2D newScissorRectangle)` | 方法 |
| `PopScissor` | `public void PopScissor()` | 方法 |
| `IsDiscardedByAnyScissor` | `public bool IsDiscardedByAnyScissor(in Rectangle2D rect)` | 方法 |
| `SetCircualMask` | `public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)` | 方法 |
| `ClearCircualMask` | `public void ClearCircualMask()` | 方法 |
| `DrawTo` | `public void DrawTo(TwoDimensionContext twoDimensionContext)` | 方法 |
| `DrawSprite` | `public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)` | 方法 |
| `Draw` | `public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)` | 方法 |
| `Draw` | `public void Draw(TextMaterial material, in TextDrawObject drawObject)` | 方法 |
| `Draw` | `public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)

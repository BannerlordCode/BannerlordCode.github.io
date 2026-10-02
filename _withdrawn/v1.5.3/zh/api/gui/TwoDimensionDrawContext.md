---
title: "TwoDimensionDrawContext"
description: "TwoDimensionDrawContext 的自动生成类参考。"
---
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionDrawContext `
**Base:** System.Object
**Source:** TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs

## 概述

`TwoDimensionDrawContext` 的自动生成类参考页面。声明来自 `TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Reset
`public void Reset() `

### CreateSimpleMaterial
`public SimpleMaterial CreateSimpleMaterial() `

### CreateTextMaterial
`public TextMaterial CreateTextMaterial() `

### PushScissor
`public void PushScissor(in Rectangle2D newScissorRectangle) `

### PopScissor
`public void PopScissor() `

### IsDiscardedByAnyScissor
`public bool IsDiscardedByAnyScissor(in Rectangle2D rect) `

### SetCircualMask
`public void SetCircualMask(Vector2 position,float radius,float smoothingRadius) `

### ClearCircualMask
`public void ClearCircualMask() `

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext) `

### DrawSprite
`public void DrawSprite(Sprite sprite,SimpleMaterial material,in Rectangle2D rectangle,float scale) `

### Draw
`public void Draw(SimpleMaterial material,in ImageDrawObject drawObject) `
`public void Draw(TextMaterial material,in TextDrawObject drawObject) `
`public void Draw(Text text,TextMaterial materialOriginal,in Rectangle2D parentRectangle,in Rectangle2D rectangle) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

---
title: "Rectangle2D"
description: "TaleWorlds.TwoDimension.Rectangle2D —— 命名空间 TaleWorlds.TwoDimension 中的结构体，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# Rectangle2D

**Namespace:** `TaleWorlds.TwoDimension`  
**Module:** `TaleWorlds.TwoDimension`  
**Type:** `public struct Rectangle2D`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.TwoDimension/Rectangle2D.cs`

## 概述

`Rectangle2D` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.TwoDimension` 下的结构体，声明于模块目录 `TaleWorlds.TwoDimension` 的 `TaleWorlds.TwoDimension/Rectangle2D.cs`（第 9 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 74 项，其中 8 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public Vector2 ScaleMultiplier;` — 字段，类型 Vector2
- `public Vector2 PositionOffsetPixel;` — 字段，类型 Vector2
- `public float RotationOffset;` — 字段，类型 float
- `public static MatrixFrame CreateMatrixFrame(float posX, float posY, float pivotX, float pivotY, float scaleX, float scaleY, float rotation)` — 方法，7 个参数，返回 MatrixFrame
- `public static SimpleRectangle GetBoundingBox(in Rectangle2D rectangle)` — 方法，1 个参数，返回 SimpleRectangle
- `public static bool DoRectanglesIntersect(in Rectangle2D rect1, in Rectangle2D rect2)` — 方法，2 个参数，返回 bool
- `public static bool IsPointInside(in Vector2 point, in Rectangle2D rect)` — 方法，2 个参数，返回 bool
- `public static bool IsSubRectOf(in Rectangle2D rect1, in Rectangle2D rect2)` — 方法，2 个参数，返回 bool


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 8 条成员记录全部来自 `TaleWorlds.TwoDimension/Rectangle2D.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public struct Rectangle2D` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`gui` API](../)
- [AlignmentAxis（同命名空间）](../AlignmentAxis)
- [AlphaFormatFlags（同命名空间）](../AlphaFormatFlags)
- [AnimatedDropdownWidget（同命名空间）](../AnimatedDropdownWidget)
- [FastModeSubModule（campaign 桶）](../../campaign/FastModeSubModule)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)

---
title: "SpriteGeneric"
description: "SpriteGeneric：TaleWorlds.TwoDimension 的 public 类，继承 Sprite；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/SpriteGeneric.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpriteGeneric

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SpriteGeneric : Sprite`
**File:** `TaleWorlds.TwoDimension/SpriteGeneric.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

SpriteGeneric 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/SpriteGeneric.cs。它是一个 public 类，实现/继承 Sprite，继承链为 SpriteGeneric → Sprite。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SpriteGeneric 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 SpriteGeneric → Sprite。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/SpriteGeneric.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public override Texture Texture` | 属性 |
| `SpritePart` | `public SpritePart SpritePart` | 属性 |
| `GetMinUvs` | `public override Vec2 GetMinUvs()` | 方法 |
| `GetMaxUvs` | `public override Vec2 GetMaxUvs()` | 方法 |
| `SpriteGeneric` | `public SpriteGeneric(string name, SpritePart spritePart, in SpriteNinePatchParameters ninePatchParameters) : base(name, spritePart.Width, spritePart.Height, ninePatchParameters)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Sprite](../Sprite/)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)

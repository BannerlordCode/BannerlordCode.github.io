---
title: "TextMaterial"
description: "TextMaterial：TaleWorlds.TwoDimension 的 public 类，继承 Material；公开成员 22 个（方法 1、属性 17、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/TextMaterial.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TextMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class TextMaterial : Material`
**File:** `TaleWorlds.TwoDimension/TextMaterial.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

TextMaterial 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/TextMaterial.cs。它是一个 public 类，实现/继承 Material，继承链为 TextMaterial → Material。public/protected 成员共 22 个：1 方法、17 属性、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextMaterial 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 TextMaterial → Material。成员构成以属性为主（属性 17/22，方法 1/22），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/TextMaterial.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `Color` | `public Color Color` | 属性 |
| `SmoothingConstant` | `public float SmoothingConstant` | 属性 |
| `Smooth` | `public bool Smooth` | 属性 |
| `ScaleFactor` | `public float ScaleFactor` | 属性 |
| `GlowColor` | `public Color GlowColor` | 属性 |
| `OutlineColor` | `public Color OutlineColor` | 属性 |
| `OutlineAmount` | `public float OutlineAmount` | 属性 |
| `GlowRadius` | `public float GlowRadius` | 属性 |
| `Blur` | `public float Blur` | 属性 |
| `ShadowOffset` | `public float ShadowOffset` | 属性 |
| `ShadowAngle` | `public float ShadowAngle` | 属性 |
| `ColorFactor` | `public float ColorFactor` | 属性 |
| `AlphaFactor` | `public float AlphaFactor` | 属性 |
| `HueFactor` | `public float HueFactor` | 属性 |
| `SaturationFactor` | `public float SaturationFactor` | 属性 |
| `ValueFactor` | `public float ValueFactor` | 属性 |
| `TextMaterial` | `public TextMaterial() : this(null, 0)` | 构造函数 |
| `TextMaterial` | `public TextMaterial(Texture texture) : this(texture, 0)` | 构造函数 |
| `TextMaterial` | `public TextMaterial(Texture texture, int renderOrder) : this(texture, renderOrder, true)` | 构造函数 |
| `TextMaterial` | `public TextMaterial(Texture texture, int renderOrder, bool blending) : base(blending, renderOrder)` | 构造函数 |
| `CopyFrom` | `public void CopyFrom(TextMaterial sourceMaterial)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Material](../Material/)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)

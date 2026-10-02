---
title: "SimpleMaterial"
description: "SimpleMaterial：TaleWorlds.TwoDimension 的 public 类，继承 Material；公开成员 30 个（方法 4、属性 22、字段 0）。canonical 桶 gui。源文件 TaleWorlds.TwoDimension/SimpleMaterial.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SimpleMaterial

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SimpleMaterial : Material`
**File:** `TaleWorlds.TwoDimension/SimpleMaterial.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## 概述

SimpleMaterial 位于 TaleWorlds.TwoDimension 模块，源文件 TaleWorlds.TwoDimension/SimpleMaterial.cs。它是一个 public 类，实现/继承 Material，继承链为 SimpleMaterial → Material。public/protected 成员共 30 个：4 方法、22 属性、4 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SimpleMaterial 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.TwoDimension`），命名空间 `TaleWorlds.TwoDimension`，继承链 SimpleMaterial → Material。成员构成以属性为主（属性 22/30，方法 4/30），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.TwoDimension/SimpleMaterial.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `Color` | `public Color Color` | 属性 |
| `ColorFactor` | `public float ColorFactor` | 属性 |
| `AlphaFactor` | `public float AlphaFactor` | 属性 |
| `HueFactor` | `public float HueFactor` | 属性 |
| `SaturationFactor` | `public float SaturationFactor` | 属性 |
| `ValueFactor` | `public float ValueFactor` | 属性 |
| `CircularMaskingEnabled` | `public bool CircularMaskingEnabled` | 属性 |
| `CircularMaskingCenter` | `public Vector2 CircularMaskingCenter` | 属性 |
| `CircularMaskingRadius` | `public float CircularMaskingRadius` | 属性 |
| `CircularMaskingSmoothingRadius` | `public float CircularMaskingSmoothingRadius` | 属性 |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters` | 属性 |
| `OverlayEnabled` | `public bool OverlayEnabled` | 属性 |
| `StartCoordinate` | `public Vector2 StartCoordinate` | 属性 |
| `Size` | `public Vector2 Size` | 属性 |
| `OverlayTexture` | `public Texture OverlayTexture` | 属性 |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask` | 属性 |
| `Scale` | `public float Scale` | 属性 |
| `OverlayTextureWidth` | `public float OverlayTextureWidth` | 属性 |
| `OverlayTextureHeight` | `public float OverlayTextureHeight` | 属性 |
| `OverlayXOffset` | `public float OverlayXOffset` | 属性 |
| `OverlayYOffset` | `public float OverlayYOffset` | 属性 |
| `SimpleMaterial` | `public SimpleMaterial() : this(null, 0)` | 构造函数 |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture) : this(texture, 0)` | 构造函数 |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture, int renderOrder) : this(texture, renderOrder, true)` | 构造函数 |
| `SimpleMaterial` | `public SimpleMaterial(Texture texture, int renderOrder, bool blending) : base(blending, renderOrder)` | 构造函数 |
| `Reset` | `public void Reset(Texture texture = null)` | 方法 |
| `GetCircularMaskingCenter` | `public Vec2 GetCircularMaskingCenter()` | 方法 |
| `GetOverlayStartCoordinate` | `public Vec2 GetOverlayStartCoordinate()` | 方法 |
| `GetOverlaySize` | `public Vec2 GetOverlaySize()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Material](../Material/)
- [同命名空间 BitmapFontCharacter](../BitmapFontCharacter/)
- [同命名空间 EditableText](../EditableText/)
- [同命名空间 Font](../Font/)
- [同命名空间 FontStyle](../FontStyle/)

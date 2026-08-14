---
title: "TextMaterial"
description: "TextMaterial 的自动生成类参考。"
---
# TextMaterial

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TextMaterial : Material`
**Base:** `Material`
**File:** `TaleWorlds.TwoDimension/TextMaterial.cs`

## 概述

`TextMaterial` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `SmoothingConstant` | `public float SmoothingConstant { get; set; }` |
| `Smooth` | `public bool Smooth { get; set; }` |
| `ScaleFactor` | `public float ScaleFactor { get; set; }` |
| `GlowColor` | `public Color GlowColor { get; set; }` |
| `OutlineColor` | `public Color OutlineColor { get; set; }` |
| `OutlineAmount` | `public float OutlineAmount { get; set; }` |
| `GlowRadius` | `public float GlowRadius { get; set; }` |
| `Blur` | `public float Blur { get; set; }` |
| `ShadowOffset` | `public float ShadowOffset { get; set; }` |
| `ShadowAngle` | `public float ShadowAngle { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |

## 主要方法

### CopyFrom
`public void CopyFrom(TextMaterial sourceMaterial)`

**用途 / Purpose:** 把当前对象的from状态复制到目标对象。

```csharp
// 先通过子系统 API 拿到 TextMaterial 实例
TextMaterial textMaterial = ...;
textMaterial.CopyFrom(sourceMaterial);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TextMaterial textMaterial = ...;
textMaterial.CopyFrom(sourceMaterial);
```

## 参见

- [本区域目录](../)
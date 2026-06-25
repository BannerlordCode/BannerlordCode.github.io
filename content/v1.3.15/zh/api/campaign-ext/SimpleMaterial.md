---
title: "SimpleMaterial"
description: "SimpleMaterial 的自动生成类参考。"
---
# SimpleMaterial

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SimpleMaterial : Material`
**Base:** `Material`
**File:** `TaleWorlds.TwoDimension/SimpleMaterial.cs`

## 概述

`SimpleMaterial` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; set; }` |
| `Color` | `public Color Color { get; set; }` |
| `ColorFactor` | `public float ColorFactor { get; set; }` |
| `AlphaFactor` | `public float AlphaFactor { get; set; }` |
| `HueFactor` | `public float HueFactor { get; set; }` |
| `SaturationFactor` | `public float SaturationFactor { get; set; }` |
| `ValueFactor` | `public float ValueFactor { get; set; }` |
| `CircularMaskingEnabled` | `public bool CircularMaskingEnabled { get; set; }` |
| `CircularMaskingCenter` | `public Vector2 CircularMaskingCenter { get; set; }` |
| `CircularMaskingRadius` | `public float CircularMaskingRadius { get; set; }` |
| `CircularMaskingSmoothingRadius` | `public float CircularMaskingSmoothingRadius { get; set; }` |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters { get; set; }` |
| `OverlayEnabled` | `public bool OverlayEnabled { get; set; }` |
| `StartCoordinate` | `public Vector2 StartCoordinate { get; set; }` |
| `Size` | `public Vector2 Size { get; set; }` |
| `OverlayTexture` | `public Texture OverlayTexture { get; set; }` |
| `UseOverlayAlphaAsMask` | `public bool UseOverlayAlphaAsMask { get; set; }` |
| `Scale` | `public float Scale { get; set; }` |
| `OverlayTextureWidth` | `public float OverlayTextureWidth { get; set; }` |
| `OverlayTextureHeight` | `public float OverlayTextureHeight { get; set; }` |
| `OverlayXOffset` | `public float OverlayXOffset { get; set; }` |
| `OverlayYOffset` | `public float OverlayYOffset { get; set; }` |

## 主要方法

### Reset
`public void Reset(Texture texture = null)`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 SimpleMaterial 实例
SimpleMaterial simpleMaterial = ...;
simpleMaterial.Reset(null);
```

### GetCircularMaskingCenter
`public Vec2 GetCircularMaskingCenter()`

**用途 / Purpose:** 读取并返回当前对象中 「circular masking center」 的结果。

```csharp
// 先通过子系统 API 拿到 SimpleMaterial 实例
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetCircularMaskingCenter();
```

### GetOverlayStartCoordinate
`public Vec2 GetOverlayStartCoordinate()`

**用途 / Purpose:** 读取并返回当前对象中 「overlay start coordinate」 的结果。

```csharp
// 先通过子系统 API 拿到 SimpleMaterial 实例
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetOverlayStartCoordinate();
```

### GetOverlaySize
`public Vec2 GetOverlaySize()`

**用途 / Purpose:** 读取并返回当前对象中 「overlay size」 的结果。

```csharp
// 先通过子系统 API 拿到 SimpleMaterial 实例
SimpleMaterial simpleMaterial = ...;
var result = simpleMaterial.GetOverlaySize();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SimpleMaterial simpleMaterial = ...;
simpleMaterial.Reset(null);
```

## 参见

- [本区域目录](../)
---
title: "ImageFit"
description: "ImageFit 的自动生成类参考。"
---
# ImageFit

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ImageFit`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs`

## 概述

`ImageFit` 位于 `TaleWorlds.GauntletUI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.GauntletUI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Type` | `public ImageFit.ImageFitTypes Type { get; set; }` |
| `HorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments HorizontalAlignment { get; set; }` |
| `VerticalAlignment` | `public ImageFit.ImageVerticalAlignments VerticalAlignment { get; set; }` |
| `OffsetX` | `public float OffsetX { get; set; }` |
| `OffsetY` | `public float OffsetY { get; set; }` |

## 主要方法

### GetFittedRectangle
`public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 fitted rectangle 的结果。

```csharp
// 先通过子系统 API 拿到 ImageFit 实例
ImageFit imageFit = ...;
var result = imageFit.GetFittedRectangle(containerSize, imageSize);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ImageFit imageFit = ...;
imageFit.GetFittedRectangle(containerSize, imageSize);
```

## 参见

- [本区域目录](../)
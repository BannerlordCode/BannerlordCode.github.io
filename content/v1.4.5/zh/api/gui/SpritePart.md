---
title: "SpritePart"
description: "SpritePart 的自动生成类参考。"
---
# SpritePart

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpritePart`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpritePart.cs`

## 概述

`SpritePart` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `SheetID` | `public int SheetID { get; }` |
| `SheetX` | `public int SheetX { get; }` |
| `SheetY` | `public int SheetY { get; }` |
| `MinU` | `public float MinU { get; }` |
| `MinV` | `public float MinV { get; }` |
| `MaxU` | `public float MaxU { get; }` |
| `MaxV` | `public float MaxV { get; }` |
| `SheetWidth` | `public int SheetWidth { get; }` |
| `SheetHeight` | `public int SheetHeight { get; }` |
| `Texture` | `public Texture Texture { get; }` |
| `Category` | `public SpriteCategory Category { get; set; }` |

## 主要方法

### UpdateInitValues
`public void UpdateInitValues()`

**用途 / Purpose:** 重新计算并更新 「init values」 的最新表示。

```csharp
// 先通过子系统 API 拿到 SpritePart 实例
SpritePart spritePart = ...;
spritePart.UpdateInitValues();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SpritePart spritePart = ...;
spritePart.UpdateInitValues();
```

## 参见

- [本区域目录](../)
---
title: "Sprite"
description: "Sprite 的自动生成类参考。"
---
# Sprite

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class Sprite`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/Sprite.cs`

## 概述

`Sprite` 位于 `TaleWorlds.TwoDimension`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.TwoDimension` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Texture` | `public abstract Texture Texture { get; }` |
| `Name` | `public string Name { get; }` |
| `Width` | `public int Width { get; }` |
| `Height` | `public int Height { get; }` |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters { get; }` |

## 主要方法

### GetMinUvs
`public abstract Vec2 GetMinUvs()`

**用途 / Purpose:** 读取并返回当前对象中 min uvs 的结果。

```csharp
// 先通过子系统 API 拿到 Sprite 实例
Sprite sprite = ...;
var result = sprite.GetMinUvs();
```

### GetMaxUvs
`public abstract Vec2 GetMaxUvs()`

**用途 / Purpose:** 读取并返回当前对象中 max uvs 的结果。

```csharp
// 先通过子系统 API 拿到 Sprite 实例
Sprite sprite = ...;
var result = sprite.GetMaxUvs();
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 Sprite 实例
Sprite sprite = ...;
var result = sprite.ToString();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
Sprite instance = ...;
```

## 参见

- [本区域目录](../)
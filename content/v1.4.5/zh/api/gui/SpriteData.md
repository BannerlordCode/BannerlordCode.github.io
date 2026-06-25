---
title: "SpriteData"
description: "SpriteData 的自动生成类参考。"
---
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/SpriteData.cs`

## 概述

`SpriteData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SpriteData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SpriteParts` | `public Dictionary<string, SpritePart> SpriteParts { get; }` |
| `Sprites` | `public Dictionary<string, Sprite> Sprites { get; }` |
| `SpriteCategories` | `public Dictionary<string, SpriteCategory> SpriteCategories { get; }` |
| `Name` | `public string Name { get; }` |

## 主要方法

### GetSprite
`public Sprite GetSprite(string name)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sprite 的结果。

```csharp
// 先通过子系统 API 拿到 SpriteData 实例
SpriteData spriteData = ...;
var result = spriteData.GetSprite("example");
```

### SpriteExists
`public bool SpriteExists(string spriteName)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SpriteExists 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpriteData 实例
SpriteData spriteData = ...;
var result = spriteData.SpriteExists("example");
```

### Load
`public void Load(ResourceDepot resourceDepot)`

**用途 / Purpose:** **用途 / Purpose:** 从持久化存储或流中读取当前对象的数据。

```csharp
// 先通过子系统 API 拿到 SpriteData 实例
SpriteData spriteData = ...;
spriteData.Load(resourceDepot);
```

### Reload
`public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Reload 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpriteData 实例
SpriteData spriteData = ...;
spriteData.Reload(resourceDepot, resourceContext);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SpriteData entry = ...;
```

## 参见

- [本区域目录](../)
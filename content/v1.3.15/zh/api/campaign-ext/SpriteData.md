---
title: "SpriteData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpriteData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** 无
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

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

**用途 / Purpose:** 获取 `sprite` 的当前值。

### SpriteExists
`public bool SpriteExists(string spriteName)`

**用途 / Purpose:** 处理 `sprite exists` 相关逻辑。

### Load
`public void Load(ResourceDepot resourceDepot)`

**用途 / Purpose:** 加载 `load` 数据。

### Reload
`public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)`

**用途 / Purpose:** 处理 `reload` 相关逻辑。

## 使用示例

```csharp
var value = new SpriteData();
```

## 参见

- [完整类目录](../catalog)
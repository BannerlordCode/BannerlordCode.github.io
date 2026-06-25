---
title: "GameTextVariation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextVariation`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextVariation

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public struct GameTextVariation`
**领域:** core-extra

## 概述

`GameTextVariation` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Variations` | `public IEnumerable<GameText.GameTextVariation> Variations { get; }` |
| `DefaultText` | `public TextObject DefaultText { get; }` |

## 主要方法

### AddVariationWithId
`public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**用途 / Purpose:** 向当前集合/状态中添加 `variation with id`。

### SetVariationWithId
`public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)`

**用途 / Purpose:** 设置 `variation with id` 的值或状态。

### AddVariation
`public void AddVariation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** 向当前集合/状态中添加 `variation`。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 GameTextVariation 实例，再调用它的公开方法
var value = new GameTextVariation();
value.AddVariationWithId("example", text, choiceTags);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

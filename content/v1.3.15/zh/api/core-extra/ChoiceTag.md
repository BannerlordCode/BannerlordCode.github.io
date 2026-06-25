---
title: "ChoiceTag"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ChoiceTag`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChoiceTag

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public struct ChoiceTag`
**领域:** core-extra

## 概述

`ChoiceTag` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |

## 主要方法

### GetGameText
`public GameText GetGameText(string id)`

**用途 / Purpose:** 获取 `game text` 的当前值。

### AddGameText
`public GameText AddGameText(string id)`

**用途 / Purpose:** 向当前集合/状态中添加 `game text`。

### TryGetText
`public bool TryGetText(string id, string variation, out TextObject text)`

**用途 / Purpose:** 尝试获取 `get text`，通常以 out 参数返回结果。

### FindText
`public TextObject FindText(string id, string variation = null)`

**用途 / Purpose:** 处理 `find text` 相关逻辑。

### FindAllTextVariations
`public IEnumerable<TextObject> FindAllTextVariations(string id)`

**用途 / Purpose:** 处理 `find all text variations` 相关逻辑。

### LoadGameTexts
`public void LoadGameTexts()`

**用途 / Purpose:** 加载 `game texts` 数据。

### LoadDefaultTexts
`public void LoadDefaultTexts()`

**用途 / Purpose:** 加载 `default texts` 数据。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ChoiceTag 实例，再调用它的公开方法
var value = new ChoiceTag();
value.GetGameText("example");
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

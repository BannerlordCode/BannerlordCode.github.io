---
title: "GameTextManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameTextManager.cs`

## 概述

`GameTextManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameTextManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var manager = GameTextManager.Current;
```

## 参见

- [完整类目录](../catalog)
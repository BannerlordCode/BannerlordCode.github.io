---
title: "GameTextHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextHelper

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public class GameTextHelper`
**领域:** core-extra

## 概述

`GameTextHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `GameTextHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public static void Initialize(GameTextManager gameTextManager)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### FindText
`public static TextObject FindText(string id, string variation = null)`

**用途 / Purpose:** 处理 `find text` 相关逻辑。

### TryGetText
`public static bool TryGetText(string id, out TextObject textObject, string variation = null)`

**用途 / Purpose:** 尝试获取 `get text`，通常以 out 参数返回结果。

### FindAllTextVariations
`public static IEnumerable<TextObject> FindAllTextVariations(string id)`

**用途 / Purpose:** 处理 `find all text variations` 相关逻辑。

### SetVariable
`public static void SetVariable(string variableName, string content)`

**用途 / Purpose:** 设置 `variable` 的值或状态。

### SetVariable
`public static void SetVariable(string variableName, float content)`

**用途 / Purpose:** 设置 `variable` 的值或状态。

### SetVariable
`public static void SetVariable(string variableName, int content)`

**用途 / Purpose:** 设置 `variable` 的值或状态。

### SetVariable
`public static void SetVariable(string variableName, TextObject content)`

**用途 / Purpose:** 设置 `variable` 的值或状态。

### ClearInstance
`public static void ClearInstance()`

**用途 / Purpose:** 处理 `clear instance` 相关逻辑。

### AddGameTextWithVariation
`public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)`

**用途 / Purpose:** 向当前集合/状态中添加 `game text with variation`。

### Variation
`public GameTexts.GameTextHelper Variation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** 处理 `variation` 相关逻辑。

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**用途 / Purpose:** 处理 `merge text objects with comma` 相关逻辑。

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**用途 / Purpose:** 处理 `merge text objects with symbol` 相关逻辑。

## 使用示例

```csharp
GameTextHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)

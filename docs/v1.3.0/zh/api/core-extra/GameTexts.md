<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTexts`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameTexts

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class GameTexts`
**Base:** 无
**File:** `TaleWorlds.Core/GameTexts.cs`

## 概述

`GameTexts` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
GameTexts.Initialize(gameTextManager);
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameTexts.cs`

## 概述

`GameTextHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `GameTextHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Variation
`public GameTextHelper Variation(string text, params object propertiesAndWeights)`

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
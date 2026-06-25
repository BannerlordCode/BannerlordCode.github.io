---
title: "GameTextHelper"
description: "GameTextHelper 的自动生成类参考。"
---
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextHelper`
**Base:** 无
**File:** `TaleWorlds.Core/GameTexts.cs`

## 概述

`GameTextHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `GameTextHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Variation
`public GameTexts.GameTextHelper Variation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** 处理与 「variation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameTextHelper 实例
GameTextHelper gameTextHelper = ...;
var result = gameTextHelper.Variation("example", propertiesAndWeights);
```

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**用途 / Purpose:** 处理与 「merge text objects with comma」 相关的逻辑。

```csharp
// 静态调用，不需要实例
GameTextHelper.MergeTextObjectsWithComma(textObjects, false);
```

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**用途 / Purpose:** 处理与 「merge text objects with symbol」 相关的逻辑。

```csharp
// 静态调用，不需要实例
GameTextHelper.MergeTextObjectsWithSymbol(textObjects, symbol, null);
```

## 使用示例

```csharp
GameTextHelper.Initialize();
```

## 参见

- [本区域目录](../)
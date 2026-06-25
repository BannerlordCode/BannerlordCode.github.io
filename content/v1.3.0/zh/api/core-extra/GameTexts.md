---
title: "GameTexts"
description: "GameTexts 的自动生成类参考。"
---
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

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GameTexts.Initialize(gameTextManager);
```

### FindText
`public static TextObject FindText(string id, string variation = null)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「text」。

```csharp
// 静态调用，不需要实例
GameTexts.FindText("example", "example");
```

### TryGetText
`public static bool TryGetText(string id, out TextObject textObject, string variation = null)`

**用途 / Purpose:** 尝试获取 「get text」 的值，通常通过 out 参数返回是否成功。

```csharp
// 静态调用，不需要实例
GameTexts.TryGetText("example", textObject, "example");
```

### FindAllTextVariations
`public static IEnumerable<TextObject> FindAllTextVariations(string id)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「all text variations」。

```csharp
// 静态调用，不需要实例
GameTexts.FindAllTextVariations("example");
```

### SetVariable
`public static void SetVariable(string variableName, string content)`

**用途 / Purpose:** 为 「variable」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameTexts.SetVariable("example", "example");
```

### SetVariable
`public static void SetVariable(string variableName, float content)`

**用途 / Purpose:** 为 「variable」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameTexts.SetVariable("example", 0);
```

### SetVariable
`public static void SetVariable(string variableName, int content)`

**用途 / Purpose:** 为 「variable」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameTexts.SetVariable("example", 0);
```

### SetVariable
`public static void SetVariable(string variableName, TextObject content)`

**用途 / Purpose:** 为 「variable」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameTexts.SetVariable("example", content);
```

### ClearInstance
`public static void ClearInstance()`

**用途 / Purpose:** 清空当前对象中的「instance」。

```csharp
// 静态调用，不需要实例
GameTexts.ClearInstance();
```

### AddGameTextWithVariation
`public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)`

**用途 / Purpose:** 将 「game text with variation」 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameTexts.AddGameTextWithVariation("example");
```

### Variation
`public GameTexts.GameTextHelper Variation(string text, params object propertiesAndWeights)`

**用途 / Purpose:** 处理与 「variation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 GameTexts 实例
GameTexts gameTexts = ...;
var result = gameTexts.Variation("example", propertiesAndWeights);
```

### MergeTextObjectsWithComma
`public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)`

**用途 / Purpose:** 处理与 「merge text objects with comma」 相关的逻辑。

```csharp
// 静态调用，不需要实例
GameTexts.MergeTextObjectsWithComma(textObjects, false);
```

### MergeTextObjectsWithSymbol
`public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)`

**用途 / Purpose:** 处理与 「merge text objects with symbol」 相关的逻辑。

```csharp
// 静态调用，不需要实例
GameTexts.MergeTextObjectsWithSymbol(textObjects, symbol, null);
```

## 使用示例

```csharp
GameTexts.Initialize(gameTextManager);
```

## 参见

- [本区域目录](../)
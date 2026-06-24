<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameText`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameText

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameText`
**Base:** 无
**File:** `TaleWorlds.Core/GameText.cs`

## 概述

`GameText` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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
var value = new GameText();
value.AddVariationWithId("example", text, choiceTags);
```

## 参见

- [完整类目录](../catalog)
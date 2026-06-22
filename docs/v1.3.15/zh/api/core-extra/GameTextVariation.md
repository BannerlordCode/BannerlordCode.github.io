<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextVariation`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextVariation

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 结构体 struct struct
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`GameTextVariation` 是 `TaleWorlds.Core` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Variations` | `public IEnumerable<GameText.GameTextVariation> Variations { get; }` |
| `DefaultText` | `public TextObject DefaultText { get; }` |


## 主要方法

### AddVariationWithId

```csharp
public void AddVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)
```

### SetVariationWithId

```csharp
public void SetVariationWithId(string variationId, TextObject text, List<GameTextManager.ChoiceTag> choiceTags)
```

### AddVariation

```csharp
public void AddVariation(string text, params object propertiesAndWeights)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
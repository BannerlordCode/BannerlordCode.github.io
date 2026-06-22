<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameTextHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextHelper

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`GameTextHelper` 是 `TaleWorlds.Core` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

### Initialize

```csharp
public static void Initialize(GameTextManager gameTextManager)
```

### FindText

```csharp
public static TextObject FindText(string id, string variation = null)
```

### TryGetText

```csharp
public static bool TryGetText(string id, out TextObject textObject, string variation = null)
```

### FindAllTextVariations

```csharp
public static IEnumerable<TextObject> FindAllTextVariations(string id)
```

### SetVariable

```csharp
public static void SetVariable(string variableName, string content)
```

### SetVariable

```csharp
public static void SetVariable(string variableName, float content)
```

### SetVariable

```csharp
public static void SetVariable(string variableName, int content)
```

### SetVariable

```csharp
public static void SetVariable(string variableName, TextObject content)
```

### ClearInstance

```csharp
public static void ClearInstance()
```

### AddGameTextWithVariation

```csharp
public static GameTexts.GameTextHelper AddGameTextWithVariation(string id)
```

### Variation

```csharp
public GameTexts.GameTextHelper Variation(string text, params object propertiesAndWeights)
```

### MergeTextObjectsWithComma

```csharp
public static TextObject MergeTextObjectsWithComma(List<TextObject> textObjects, bool includeAnd)
```

### MergeTextObjectsWithSymbol

```csharp
public static TextObject MergeTextObjectsWithSymbol(List<TextObject> textObjects, TextObject symbol, TextObject lastSymbol = null)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
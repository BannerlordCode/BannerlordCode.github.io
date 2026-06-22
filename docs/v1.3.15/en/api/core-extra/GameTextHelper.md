<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** class
**Area:** Core

## Overview

> This is an auto-generated stub. `GameTextHelper` is a class in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
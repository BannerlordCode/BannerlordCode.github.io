<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChoiceTag`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ChoiceTag

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** struct
**Area:** Core

## Overview

> This is an auto-generated stub. `ChoiceTag` is a struct in the `TaleWorlds.Core` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TagName` | `public string TagName { get; }` |
| `Weight` | `public uint Weight { get; }` |
| `IsTagReversed` | `public bool IsTagReversed { get; }` |


## Key Methods

### GetGameText

```csharp
public GameText GetGameText(string id)
```

### AddGameText

```csharp
public GameText AddGameText(string id)
```

### TryGetText

```csharp
public bool TryGetText(string id, string variation, out TextObject text)
```

### FindText

```csharp
public TextObject FindText(string id, string variation = null)
```

### FindAllTextVariations

```csharp
public IEnumerable<TextObject> FindAllTextVariations(string id)
```

### LoadGameTexts

```csharp
public void LoadGameTexts()
```

### LoadDefaultTexts

```csharp
public void LoadDefaultTexts()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
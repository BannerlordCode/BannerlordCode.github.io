<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Font`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Font

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Font` is a class in the `TaleWorlds.TwoDimension` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Size` | `public int Size { get; }` |
| `LineHeight` | `public int LineHeight { get; }` |
| `Base` | `public int Base { get; }` |
| `CharacterCount` | `public int CharacterCount { get; }` |
| `SmoothingConstant` | `public float SmoothingConstant { get; }` |
| `CustomScale` | `public float CustomScale { get; }` |
| `Smooth` | `public bool Smooth { get; }` |
| `FontSprite` | `public SpritePart FontSprite { get; }` |
| `Characters` | `public Dictionary<int, BitmapFontCharacter> Characters { get; }` |


## Key Methods

### TryLoadFontFromPath

```csharp
public bool TryLoadFontFromPath(string path, SpriteData spriteData)
```

### GetWordWidth

```csharp
public float GetWordWidth(string word, float extraPadding)
```

### GetCharacterWidth

```csharp
public float GetCharacterWidth(char character, float extraPadding)
```

### ToString

```csharp
public override string ToString()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
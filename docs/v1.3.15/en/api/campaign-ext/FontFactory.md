<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FontFactory`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FontFactory

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `FontFactory` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `DefaultLanguage` | `public Language DefaultLanguage { get; }` |
| `CurrentLanguage` | `public Language CurrentLanguage { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |


## Key Methods

### LoadAllFonts

```csharp
public void LoadAllFonts(SpriteData spriteData)
```

### TryAddFontDefinition

```csharp
public bool TryAddFontDefinition(string fontPath, string fontName, SpriteData spriteData)
```

### LoadLocalizationValues

```csharp
public void LoadLocalizationValues(string sourceXMLPath)
```

### GetFont

```csharp
public Font GetFont(string fontName)
```

### GetFonts

```csharp
public IEnumerable<Font> GetFonts()
```

### GetFontName

```csharp
public string GetFontName(Font font)
```

### GetMappedFontForLocalization

```csharp
public Font GetMappedFontForLocalization(string englishFontName)
```

### OnLanguageChange

```csharp
public void OnLanguageChange(string newLanguageCode)
```

### GetUsableFontForCharacter

```csharp
public Font GetUsableFontForCharacter(int characterCode)
```

### CheckForUpdates

```csharp
public void CheckForUpdates()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
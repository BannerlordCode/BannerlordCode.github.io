<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Language`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Language

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Language` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ForbiddenStartOfLineCharacters` | `public char ForbiddenStartOfLineCharacters { get; }` |
| `ForbiddenEndOfLineCharacters` | `public char ForbiddenEndOfLineCharacters { get; }` |
| `LanguageID` | `public string LanguageID { get; }` |
| `DefaultFontName` | `public string DefaultFontName { get; }` |
| `DoesFontRequireSpaceForNewline` | `public bool DoesFontRequireSpaceForNewline { get; }` |
| `DefaultFont` | `public Font DefaultFont { get; }` |
| `LineSeperatorChar` | `public char LineSeperatorChar { get; }` |


## Key Methods

### FontMapHasKey

```csharp
public bool FontMapHasKey(string keyFontName)
```

### GetMappedFont

```csharp
public Font GetMappedFont(string keyFontName)
```

### CreateFrom

```csharp
public static Language CreateFrom(XmlNode languageNode, FontFactory fontFactory)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
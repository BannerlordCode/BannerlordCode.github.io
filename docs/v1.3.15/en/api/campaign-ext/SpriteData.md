<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** none
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

## Overview

`SpriteData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SpriteData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteParts` | `public Dictionary<string, SpritePart> SpriteParts { get; }` |
| `Sprites` | `public Dictionary<string, Sprite> Sprites { get; }` |
| `SpriteCategories` | `public Dictionary<string, SpriteCategory> SpriteCategories { get; }` |
| `Name` | `public string Name { get; }` |

## Key Methods

### GetSprite
`public Sprite GetSprite(string name)`

**Purpose:** Gets the current value of `sprite`.

### SpriteExists
`public bool SpriteExists(string spriteName)`

**Purpose:** Handles logic related to `sprite exists`.

### Load
`public void Load(ResourceDepot resourceDepot)`

**Purpose:** Loads `load` data.

### Reload
`public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)`

**Purpose:** Handles logic related to `reload`.

## Usage Example

```csharp
var value = new SpriteData();
```

## See Also

- [Complete Class Catalog](../catalog)
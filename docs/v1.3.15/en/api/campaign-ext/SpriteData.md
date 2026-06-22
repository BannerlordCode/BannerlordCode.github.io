<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpriteData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** none
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

## Overview

`SpriteData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### GetSprite
```csharp
public Sprite GetSprite(string name)
```

### SpriteExists
```csharp
public bool SpriteExists(string spriteName)
```

### Load
```csharp
public void Load(ResourceDepot resourceDepot)
```

### Reload
```csharp
public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)
```

## Usage Example

```csharp
// Typical usage of SpriteData (Data)
new SpriteData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextureProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextureProvider

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TextureProvider` is a class in the `TaleWorlds.GauntletUI` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `SourceInfo` | `public string SourceInfo { get; set; }` |


## Key Methods

### SetTargetSize

```csharp
public virtual void SetTargetSize(int width, int height)
```

### GetTextureForRender

```csharp
public Texture GetTextureForRender(TwoDimensionContext context, string name = null)
```

### Tick

```csharp
public virtual void Tick(float dt)
```

### Clear

```csharp
public virtual void Clear(bool clearNextFrame)
```

### SetProperty

```csharp
public void SetProperty(string name, object value)
```

### GetProperty

```csharp
public object GetProperty(string name)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
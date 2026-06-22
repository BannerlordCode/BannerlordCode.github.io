<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OpenGLTexture`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OpenGLTexture

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `OpenGLTexture` is a class in the `TaleWorlds.TwoDimension.Standalone` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; set; }` |
| `Width` | `public int Width { get; set; }` |
| `Height` | `public int Height { get; }` |
| `Name` | `public string Name { get; }` |
| `ClampToEdge` | `public bool ClampToEdge { get; set; }` |


## Key Methods

### Initialize

```csharp
public void Initialize(string name, int width, int height)
```

### CopyFrom

```csharp
public void CopyFrom(OpenGLTexture texture)
```

### Delete

```csharp
public void Delete()
```

### FromFile

```csharp
public static OpenGLTexture FromFile(ResourceDepot resourceDepot, string name)
```

### FromFile

```csharp
public static OpenGLTexture FromFile(string fullFilePath)
```

### Release

```csharp
public void Release()
```

### LoadFromFile

```csharp
public void LoadFromFile(ResourceDepot resourceDepot, string name)
```

### LoadFromFile

```csharp
public void LoadFromFile(string fullPathName)
```

### IsLoaded

```csharp
public bool IsLoaded()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
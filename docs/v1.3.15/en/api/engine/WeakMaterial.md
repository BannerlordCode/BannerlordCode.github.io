<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeakMaterial`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeakMaterial

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** struct
**Area:** Engine

## Overview

> This is an auto-generated stub. `WeakMaterial` is a struct in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Pointer` | `public UIntPtr Pointer { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `Name` | `public string Name { get; set; }` |


## Key Methods

### GetShader

```csharp
public Shader GetShader()
```

### GetShaderFlags

```csharp
public ulong GetShaderFlags()
```

### SetShaderFlags

```csharp
public void SetShaderFlags(ulong flagEntry)
```

### SetMeshVectorArgument

```csharp
public void SetMeshVectorArgument(float x, float y, float z, float w)
```

### SetTexture

```csharp
public void SetTexture(Material.MBTextureType textureType, Texture texture)
```

### SetTextureAtSlot

```csharp
public void SetTextureAtSlot(int textureSlot, Texture texture)
```

### SetAreaMapScale

```csharp
public void SetAreaMapScale(float scale)
```

### SetEnableSkinning

```csharp
public void SetEnableSkinning(bool enable)
```

### UsingSkinning

```csharp
public bool UsingSkinning()
```

### GetTexture

```csharp
public Texture GetTexture(Material.MBTextureType textureType)
```

### GetTextureWithSlot

```csharp
public Texture GetTextureWithSlot(int textureSlot)
```

### AddMaterialShaderFlag

```csharp
public void AddMaterialShaderFlag(string flagName, bool showErrors)
```

### RemoveMaterialShaderFlag

```csharp
public void RemoveMaterialShaderFlag(string flagName)
```

### Equals

```csharp
public override bool Equals(object obj)
```

### GetHashCode

```csharp
public override int GetHashCode()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
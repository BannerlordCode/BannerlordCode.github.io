<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Light`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Light

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** class
**Area:** Engine

## Overview

> This is an auto-generated stub. `Light` is a class in the `TaleWorlds.Engine` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `LightColor` | `public Vec3 LightColor { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |
| `ShadowEnabled` | `public bool ShadowEnabled { get; set; }` |


## Key Methods

### CreatePointLight

```csharp
public static Light CreatePointLight(float lightRadius)
```

### SetShadowType

```csharp
public void SetShadowType(Light.ShadowType type)
```

### SetLightFlicker

```csharp
public void SetLightFlicker(float magnitude, float interval)
```

### SetVolumetricProperties

```csharp
public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)
```

### Dispose

```csharp
public void Dispose()
```

### SetVisibility

```csharp
public void SetVisibility(bool value)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-engine)
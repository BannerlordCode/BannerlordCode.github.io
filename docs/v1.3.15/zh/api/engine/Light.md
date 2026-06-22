<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Light`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Light

**命名空间:** TaleWorlds.Engine
**模块:** TaleWorlds.Engine
**类型:** 类 class class
**领域:** 引擎 Engine

## 概述

> 本页为自动生成的存根。`Light` 是 `TaleWorlds.Engine` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `Frame` | `public MatrixFrame Frame { get; set; }` |
| `LightColor` | `public Vec3 LightColor { get; set; }` |
| `Intensity` | `public float Intensity { get; set; }` |
| `Radius` | `public float Radius { get; set; }` |
| `ShadowEnabled` | `public bool ShadowEnabled { get; set; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-engine)
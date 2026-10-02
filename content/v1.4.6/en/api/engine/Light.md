---
title: "Light"
description: "Light: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 14 exposed members (6 methods, 7 properties, 0 fields). Source: TaleWorlds.Engine/Light.cs."
---
# Light

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Light : GameEntityComponent`
**File:** `TaleWorlds.Engine/Light.cs`

## Overview

Light lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Light.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is Light → GameEntityComponent → NativeObject. It exposes 14 public/protected members: 6 methods, 7 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Light is a top-level type in TaleWorlds.Engine, namespace matching the module directory; inheritance chain Light → GameEntityComponent → NativeObject. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. NativeObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Light.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsValid` | `public bool IsValid` | property |
| `CreatePointLight` | `public static Light CreatePointLight(float lightRadius)` | method |
| `Frame` | `public MatrixFrame Frame` | property |
| `LightColor` | `public Vec3 LightColor` | property |
| `Intensity` | `public float Intensity` | property |
| `Radius` | `public float Radius` | property |
| `SetShadowType` | `public void SetShadowType(Light.ShadowType type)` | method |
| `ShadowEnabled` | `public bool ShadowEnabled` | property |
| `SetLightFlicker` | `public void SetLightFlicker(float magnitude, float interval)` | method |
| `SetVolumetricProperties` | `public void SetVolumetricProperties(bool volumetricLightEnabled, float volumeParameters)` | method |
| `Dispose` | `public void Dispose()` | method |
| `SetVisibility` | `public void SetVisibility(bool value)` | method |
| `ShadowType` | `public enum ShadowType` | property |
| `ShadowType` | `public enum ShadowType` | nested type |

## See Also

- [↑ engine module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameEntityComponent](../GameEntityComponent)
- [same namespace AnimResult](../AnimResult)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker)
- [same namespace AsyncTask](../AsyncTask)
- [same namespace BillboardType](../BillboardType)

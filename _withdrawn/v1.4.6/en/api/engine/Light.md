---
title: "Light"
description: "Light: a public class in TaleWorlds.Engine, inheriting GameEntityComponent; 14 exposed members (6 methods, 7 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Light.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Light

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Light : GameEntityComponent`
**File:** `TaleWorlds.Engine/Light.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Light lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Light.cs. It is a public class (sealed), implementing/inheriting GameEntityComponent; the inheritance chain is Light → GameEntityComponent → NativeObject. It exposes 14 public/protected members: 6 methods, 7 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Light lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Light → GameEntityComponent → NativeObject. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Light.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameEntityComponent](../GameEntityComponent/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)

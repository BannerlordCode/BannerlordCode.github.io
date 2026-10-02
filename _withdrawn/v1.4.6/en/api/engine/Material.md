---
title: "Material"
description: "Material: a public class in TaleWorlds.Engine, inheriting Resource; 43 exposed members (25 methods, 16 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Engine/Material.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Material

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Material : Resource`
**File:** `TaleWorlds.Engine/Material.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## Overview

Material lives in the TaleWorlds.Engine module, source file TaleWorlds.Engine/Material.cs. It is a public class (sealed), implementing/inheriting Resource; the inheritance chain is Material → Resource → NativeObject. It exposes 43 public/protected members: 25 methods, 16 properties, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Material lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Engine`), namespace `TaleWorlds.Engine`, inheritance chain Material → Resource → NativeObject. The surface is method-led (methods 25/43, properties 16/43), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Engine/Material.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDefaultMaterial` | `public static Material GetDefaultMaterial()` | method |
| `GetOutlineMaterial` | `public static Material GetOutlineMaterial(Mesh mesh)` | method |
| `GetDefaultTableauSampleMaterial` | `public static Material GetDefaultTableauSampleMaterial(bool transparency)` | method |
| `CreateTableauMaterial` | `public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)` | method |
| `CreateCopy` | `public Material CreateCopy()` | method |
| `GetFromResource` | `public static Material GetFromResource(string materialName)` | method |
| `SetShader` | `public void SetShader(Shader shader)` | method |
| `GetShader` | `public Shader GetShader()` | method |
| `GetShaderFlags` | `public ulong GetShaderFlags()` | method |
| `SetShaderFlags` | `public void SetShaderFlags(ulong flagEntry)` | method |
| `SetMeshVectorArgument` | `public void SetMeshVectorArgument(float x, float y, float z, float w)` | method |
| `SetTexture` | `public void SetTexture(Material.MBTextureType textureType, Texture texture)` | method |
| `SetTextureAtSlot` | `public void SetTextureAtSlot(int textureSlot, Texture texture)` | method |
| `SetAreaMapScale` | `public void SetAreaMapScale(float scale)` | method |
| `SetEnableSkinning` | `public void SetEnableSkinning(bool enable)` | method |
| `UsingSkinning` | `public bool UsingSkinning()` | method |
| `GetTexture` | `public Texture GetTexture(Material.MBTextureType textureType)` | method |
| `GetTextureWithSlot` | `public Texture GetTextureWithSlot(int textureSlot)` | method |
| `Name` | `public string Name` | property |
| `GetAlphaMaskTableauMaterial` | `public static Material GetAlphaMaskTableauMaterial()` | method |
| `GetAlphaBlendMode` | `public Material.MBAlphaBlendMode GetAlphaBlendMode()` | method |
| `SetAlphaBlendMode` | `public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)` | method |
| `SetAlphaTestValue` | `public void SetAlphaTestValue(float alphaTestValue)` | method |
| `GetAlphaTestValue` | `public float GetAlphaTestValue()` | method |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string flagName, bool showErrors)` | method |
| `RemoveMaterialShaderFlag` | `public void RemoveMaterialShaderFlag(string flagName)` | method |
| `UsingSpecular` | `public bool UsingSpecular` | property |
| `UsingSpecularMap` | `public bool UsingSpecularMap` | property |
| `UsingEnvironmentMap` | `public bool UsingEnvironmentMap` | property |
| `UsingSpecularAlpha` | `public bool UsingSpecularAlpha` | property |
| `UsingDynamicLight` | `public bool UsingDynamicLight` | property |
| `UsingSunLight` | `public bool UsingSunLight` | property |
| `UsingFresnel` | `public bool UsingFresnel` | property |
| `IsSunShadowReceiver` | `public bool IsSunShadowReceiver` | property |
| `IsDynamicShadowReceiver` | `public bool IsDynamicShadowReceiver` | property |
| `UsingDiffuseAlphaMap` | `public bool UsingDiffuseAlphaMap` | property |
| `UsingParallaxMapping` | `public bool UsingParallaxMapping` | property |
| `UsingParallaxOcclusion` | `public bool UsingParallaxOcclusion` | property |
| `Flags` | `public MaterialFlags Flags` | property |
| `MBTextureType` | `public enum MBTextureType` | property |
| `byte` | `public enum MBAlphaBlendMode : byte` | property |
| `MBTextureType` | `public enum MBTextureType` | nested type |
| `byte` | `public enum MBAlphaBlendMode : byte` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Resource](../Resource/)
- [same namespace AnimResult](../AnimResult/)
- [same namespace ApplicationHealthChecker](../ApplicationHealthChecker/)
- [same namespace AsyncTask](../AsyncTask/)
- [same namespace BillboardType](../BillboardType/)

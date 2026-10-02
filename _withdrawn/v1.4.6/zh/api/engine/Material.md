---
title: "Material"
description: "Material：TaleWorlds.Engine 的 public 类，继承 Resource；公开成员 43 个（方法 25、属性 16、字段 0）。canonical 桶 engine。源文件 TaleWorlds.Engine/Material.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Material

**Namespace:** `TaleWorlds.Engine`
**Module:** `TaleWorlds.Engine`
**Type:** `public sealed class Material : Resource`
**File:** `TaleWorlds.Engine/Material.cs`
**Bucket:** `engine` (rule:TaleWorlds.Engine)

## 概述

Material 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Material.cs。它是一个 public 类（sealed），实现/继承 Resource，继承链为 Material → Resource → NativeObject。public/protected 成员共 43 个：25 方法、16 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Material 落在 canonical 桶 `engine`（命中规则 `rule:TaleWorlds.Engine`），命名空间 `TaleWorlds.Engine`，继承链 Material → Resource → NativeObject。成员构成以方法为主（方法 25/43，属性 16/43），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Material.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDefaultMaterial` | `public static Material GetDefaultMaterial()` | 方法 |
| `GetOutlineMaterial` | `public static Material GetOutlineMaterial(Mesh mesh)` | 方法 |
| `GetDefaultTableauSampleMaterial` | `public static Material GetDefaultTableauSampleMaterial(bool transparency)` | 方法 |
| `CreateTableauMaterial` | `public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler, object objectRef, Material sampleMaterial, int tableauSizeX, int tableauSizeY, bool continuousTableau = false)` | 方法 |
| `CreateCopy` | `public Material CreateCopy()` | 方法 |
| `GetFromResource` | `public static Material GetFromResource(string materialName)` | 方法 |
| `SetShader` | `public void SetShader(Shader shader)` | 方法 |
| `GetShader` | `public Shader GetShader()` | 方法 |
| `GetShaderFlags` | `public ulong GetShaderFlags()` | 方法 |
| `SetShaderFlags` | `public void SetShaderFlags(ulong flagEntry)` | 方法 |
| `SetMeshVectorArgument` | `public void SetMeshVectorArgument(float x, float y, float z, float w)` | 方法 |
| `SetTexture` | `public void SetTexture(Material.MBTextureType textureType, Texture texture)` | 方法 |
| `SetTextureAtSlot` | `public void SetTextureAtSlot(int textureSlot, Texture texture)` | 方法 |
| `SetAreaMapScale` | `public void SetAreaMapScale(float scale)` | 方法 |
| `SetEnableSkinning` | `public void SetEnableSkinning(bool enable)` | 方法 |
| `UsingSkinning` | `public bool UsingSkinning()` | 方法 |
| `GetTexture` | `public Texture GetTexture(Material.MBTextureType textureType)` | 方法 |
| `GetTextureWithSlot` | `public Texture GetTextureWithSlot(int textureSlot)` | 方法 |
| `Name` | `public string Name` | 属性 |
| `GetAlphaMaskTableauMaterial` | `public static Material GetAlphaMaskTableauMaterial()` | 方法 |
| `GetAlphaBlendMode` | `public Material.MBAlphaBlendMode GetAlphaBlendMode()` | 方法 |
| `SetAlphaBlendMode` | `public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)` | 方法 |
| `SetAlphaTestValue` | `public void SetAlphaTestValue(float alphaTestValue)` | 方法 |
| `GetAlphaTestValue` | `public float GetAlphaTestValue()` | 方法 |
| `AddMaterialShaderFlag` | `public void AddMaterialShaderFlag(string flagName, bool showErrors)` | 方法 |
| `RemoveMaterialShaderFlag` | `public void RemoveMaterialShaderFlag(string flagName)` | 方法 |
| `UsingSpecular` | `public bool UsingSpecular` | 属性 |
| `UsingSpecularMap` | `public bool UsingSpecularMap` | 属性 |
| `UsingEnvironmentMap` | `public bool UsingEnvironmentMap` | 属性 |
| `UsingSpecularAlpha` | `public bool UsingSpecularAlpha` | 属性 |
| `UsingDynamicLight` | `public bool UsingDynamicLight` | 属性 |
| `UsingSunLight` | `public bool UsingSunLight` | 属性 |
| `UsingFresnel` | `public bool UsingFresnel` | 属性 |
| `IsSunShadowReceiver` | `public bool IsSunShadowReceiver` | 属性 |
| `IsDynamicShadowReceiver` | `public bool IsDynamicShadowReceiver` | 属性 |
| `UsingDiffuseAlphaMap` | `public bool UsingDiffuseAlphaMap` | 属性 |
| `UsingParallaxMapping` | `public bool UsingParallaxMapping` | 属性 |
| `UsingParallaxOcclusion` | `public bool UsingParallaxOcclusion` | 属性 |
| `Flags` | `public MaterialFlags Flags` | 属性 |
| `MBTextureType` | `public enum MBTextureType` | 属性 |
| `byte` | `public enum MBAlphaBlendMode : byte` | 属性 |
| `MBTextureType` | `public enum MBTextureType` | 嵌套类型 |
| `byte` | `public enum MBAlphaBlendMode : byte` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 Resource](../Resource/)
- [同命名空间 AnimResult](../AnimResult/)
- [同命名空间 ApplicationHealthChecker](../ApplicationHealthChecker/)
- [同命名空间 AsyncTask](../AsyncTask/)
- [同命名空间 BillboardType](../BillboardType/)

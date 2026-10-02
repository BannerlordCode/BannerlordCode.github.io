---
title: "Material"
description: "Material 的自动生成类参考。"
---
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Material : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/Material.cs

## 概述

`Material` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/Material.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetDefaultMaterial
`public static Material GetDefaultMaterial() `

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh) `

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency) `

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler,object objectRef,Material sampleMaterial,int tableauSizeX,int tableauSizeY,bool continuousTableau = false) `

### CreateCopy
`public Material CreateCopy() `

### GetFromResource
`public static Material GetFromResource(string materialName) `

### SetShader
`public void SetShader(Shader shader) `

### GetShader
`public Shader GetShader() `

### GetShaderFlags
`public ulong GetShaderFlags() `

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry) `

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x,float y,float z,float w) `

### SetTexture
`public void SetTexture(Material.MBTextureType textureType,Texture texture) `

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot,Texture texture) `

### SetAreaMapScale
`public void SetAreaMapScale(float scale) `

### SetEnableSkinning
`public void SetEnableSkinning(bool enable) `

### UsingSkinning
`public bool UsingSkinning() `

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType) `

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot) `

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial() `

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode() `

### SetAlphaBlendMode
`public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode) `

### SetAlphaTestValue
`public void SetAlphaTestValue(float alphaTestValue) `

### GetAlphaTestValue
`public float GetAlphaTestValue() `

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName,bool showErrors) `

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName) `

## 参见

- [本区域目录](../)
- [API 参考](../../)

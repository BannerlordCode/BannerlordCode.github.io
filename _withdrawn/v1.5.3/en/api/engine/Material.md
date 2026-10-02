---
title: "Material"
description: "Auto-generated class reference for Material."
---
# Material

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class Material : Resource `
**Base:** Resource
**Source:** TaleWorlds.Engine/Material.cs

## Overview

Auto-generated stub for `Material`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetDefaultMaterial
`public static Material GetDefaultMaterial()`

### GetOutlineMaterial
`public static Material GetOutlineMaterial(Mesh mesh)`

### GetDefaultTableauSampleMaterial
`public static Material GetDefaultTableauSampleMaterial(bool transparency)`

### CreateTableauMaterial
`public static Material CreateTableauMaterial(RenderTargetComponent.TextureUpdateEventHandler eventHandler,object objectRef,Material sampleMaterial,int tableauSizeX,int tableauSizeY,bool continuousTableau = false)`

### CreateCopy
`public Material CreateCopy()`

### GetFromResource
`public static Material GetFromResource(string materialName)`

### SetShader
`public void SetShader(Shader shader)`

### GetShader
`public Shader GetShader()`

### GetShaderFlags
`public ulong GetShaderFlags()`

### SetShaderFlags
`public void SetShaderFlags(ulong flagEntry)`

### SetMeshVectorArgument
`public void SetMeshVectorArgument(float x,float y,float z,float w)`

### SetTexture
`public void SetTexture(Material.MBTextureType textureType,Texture texture)`

### SetTextureAtSlot
`public void SetTextureAtSlot(int textureSlot,Texture texture)`

### SetAreaMapScale
`public void SetAreaMapScale(float scale)`

### SetEnableSkinning
`public void SetEnableSkinning(bool enable)`

### UsingSkinning
`public bool UsingSkinning()`

### GetTexture
`public Texture GetTexture(Material.MBTextureType textureType)`

### GetTextureWithSlot
`public Texture GetTextureWithSlot(int textureSlot)`

### GetAlphaMaskTableauMaterial
`public static Material GetAlphaMaskTableauMaterial()`

### GetAlphaBlendMode
`public Material.MBAlphaBlendMode GetAlphaBlendMode()`

### SetAlphaBlendMode
`public void SetAlphaBlendMode(Material.MBAlphaBlendMode alphaBlendMode)`

### SetAlphaTestValue
`public void SetAlphaTestValue(float alphaTestValue)`

### GetAlphaTestValue
`public float GetAlphaTestValue()`

### AddMaterialShaderFlag
`public void AddMaterialShaderFlag(string flagName,bool showErrors)`

### RemoveMaterialShaderFlag
`public void RemoveMaterialShaderFlag(string flagName)`

## See Also

- [Section index](../)

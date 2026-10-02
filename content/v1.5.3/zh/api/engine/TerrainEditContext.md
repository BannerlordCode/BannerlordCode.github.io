---
title: "TerrainEditContext"
description: "TerrainEditContext 的自动生成类参考。"
---
# TerrainEditContext

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class TerrainEditContext `
**Base:** System.Object
**Source:** TaleWorlds.Engine/TerrainEditContext.cs

## 概述

`TerrainEditContext` 的自动生成类参考页面。声明来自 `TaleWorlds.Engine/TerrainEditContext.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetHeightData
`public void SetHeightData(int nodeX,int nodeY,float[] heights) `

### AddLayerFromMaterial
`public int AddLayerFromMaterial(string prefabName) `

### AddEmptyLayer
`public int AddEmptyLayer(string layerName = "") `

### SetLayerTexture
`public void SetLayerTexture(int layerIndex,TerrainEditContext.TextureSlot slot,string textureName) `

### SetLayerProperty
`public void SetLayerProperty(int layerIndex,TerrainEditContext.LayerProperty property,float value) `
`public void SetLayerProperty(int layerIndex,TerrainEditContext.LayerProperty property,string value) `

### SetLayerWeightData
`public void SetLayerWeightData(int nodeX,int nodeY,int layerIndex,float[] weights) `

### FinalizeEditing
`public void FinalizeEditing() `

### AddProceduralFlora
`public int AddProceduralFlora(int layerIndex,TerrainEditContext.FloraDefinition def) `

### AddPlacedFlora
`public void AddPlacedFlora(string floraKindName,ref MatrixFrame frame) `

### FinalizeFlora
`public void FinalizeFlora() `

## 参见

- [本区域目录](../)
- [API 参考](../../)

---
title: "PartyNavigationModel"
description: "PartyNavigationModel 的自动生成类参考。"
---
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel> `
**Base:** MBGameModel<PartyNavigationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs

## 概述

`PartyNavigationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CanPlayerNavigateToPosition
`public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2,out MobileParty.NavigationType navigationType)`

### GetEmbarkDisembarkThresholdDistance
`public abstract float GetEmbarkDisembarkThresholdDistance()`

### IsTerrainTypeValidForNavigationType
`public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType,MobileParty.NavigationType navigationType)`

### GetInvalidTerrainTypesForNavigationType
`public abstract int[] GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

### HasNavalNavigationCapability
`public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)`

## 参见

- [本区域目录](../)
- [API 参考](../../)

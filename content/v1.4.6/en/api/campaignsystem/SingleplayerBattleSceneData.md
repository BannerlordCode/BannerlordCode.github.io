---
title: "SingleplayerBattleSceneData"
description: "SingleplayerBattleSceneData: a public struct in TaleWorlds.CampaignSystem; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs."
---
# SingleplayerBattleSceneData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct SingleplayerBattleSceneData`
**File:** `TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs`

## Overview

SingleplayerBattleSceneData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs. It is a public struct; the inheritance chain is SingleplayerBattleSceneData. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SingleplayerBattleSceneData is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain SingleplayerBattleSceneData. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | property |
| `Terrain` | `public TerrainType Terrain` | property |
| `List` | `public List<TerrainType>TerrainTypes` | property |
| `ForestDensity` | `public ForestDensity ForestDensity` | property |
| `List` | `public List<int>MapIndices` | property |
| `IsNaval` | `public bool IsNaval` | property |
| `SingleplayerBattleSceneData` | `public SingleplayerBattleSceneData(string sceneID, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity, List<int>mapIndices, bool isNaval)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)

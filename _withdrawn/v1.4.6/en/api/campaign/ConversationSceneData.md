---
title: "ConversationSceneData"
description: "ConversationSceneData: a public struct in TaleWorlds.CampaignSystem; 5 exposed members (0 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/ConversationSceneData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationSceneData

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ConversationSceneData`
**File:** `TaleWorlds.CampaignSystem/ConversationSceneData.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ConversationSceneData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ConversationSceneData.cs. It is a public struct; the inheritance chain is ConversationSceneData. It exposes 5 public/protected members: 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationSceneData lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain ConversationSceneData. The surface is property-led (properties 4/5, methods 0/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ConversationSceneData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SceneID` | `public string SceneID` | property |
| `Terrain` | `public TerrainType Terrain` | property |
| `List` | `public List<TerrainType>TerrainTypes` | property |
| `ForestDensity` | `public ForestDensity ForestDensity` | property |
| `ConversationSceneData` | `public ConversationSceneData(string sceneID, TerrainType terrain, List<TerrainType>terrainTypes, ForestDensity forestDensity)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)

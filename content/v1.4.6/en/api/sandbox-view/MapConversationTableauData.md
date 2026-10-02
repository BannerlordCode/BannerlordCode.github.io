---
title: "MapConversationTableauData"
description: "MapConversationTableauData: a public class in SandBox.View; 10 exposed members (1 methods, 9 properties, 0 fields). Source: SandBox.View/Map/MapConversationTableauData.cs."
---
# MapConversationTableauData

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationTableauData`
**File:** `SandBox.View/Map/MapConversationTableauData.cs`

## Overview

MapConversationTableauData lives in the SandBox.View module, source file SandBox.View/Map/MapConversationTableauData.cs. It is a public class; the inheritance chain is MapConversationTableauData. It exposes 10 public/protected members: 1 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationTableauData is a top-level type in SandBox.View, namespace differing from (SandBox.View.Map) the module directory; inheritance chain MapConversationTableauData. The surface is property-led (properties 9/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Map/MapConversationTableauData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerCharacterData` | `public ConversationCharacterData PlayerCharacterData` | property |
| `ConversationPartnerData` | `public ConversationCharacterData ConversationPartnerData` | property |
| `ConversationTerrainType` | `public TerrainType ConversationTerrainType` | property |
| `TimeOfDay` | `public float TimeOfDay` | property |
| `IsCurrentTerrainUnderSnow` | `public bool IsCurrentTerrainUnderSnow` | property |
| `Settlement` | `public Settlement Settlement` | property |
| `LocationId` | `public string LocationId` | property |
| `IsSnowing` | `public bool IsSnowing` | property |
| `IsRaining` | `public bool IsRaining` | property |
| `CreateFrom` | `public static MapConversationTableauData CreateFrom(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, TerrainType terrainType, float timeOfDay, bool isCurrentTerrainUnderSnow, Settlement settlement, string locationId, bool isRaining, bool isSnowing)` | method |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSimulationMapView](../BattleSimulationMapView)
- [same namespace BlockadePositionScript](../BlockadePositionScript)
- [same namespace CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [same namespace DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)

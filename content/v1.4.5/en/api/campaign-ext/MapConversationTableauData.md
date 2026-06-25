---
title: "MapConversationTableauData"
description: "Auto-generated class reference for MapConversationTableauData."
---
# MapConversationTableauData

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableauData`
**Base:** none
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map/MapConversationTableauData.cs`

## Overview

`MapConversationTableauData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MapConversationTableauData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerCharacterData` | `public ConversationCharacterData PlayerCharacterData { get; }` |
| `ConversationPartnerData` | `public ConversationCharacterData ConversationPartnerData { get; }` |
| `ConversationTerrainType` | `public TerrainType ConversationTerrainType { get; }` |
| `TimeOfDay` | `public float TimeOfDay { get; }` |
| `IsCurrentTerrainUnderSnow` | `public bool IsCurrentTerrainUnderSnow { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `LocationId` | `public string LocationId { get; }` |
| `IsSnowing` | `public bool IsSnowing { get; }` |
| `IsRaining` | `public bool IsRaining { get; }` |

## Key Methods

### CreateFrom
`public static MapConversationTableauData CreateFrom(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData, TerrainType terrainType, float timeOfDay, bool isCurrentTerrainUnderSnow, Settlement settlement, string locationId, bool isRaining, bool isSnowing)`

**Purpose:** **Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
MapConversationTableauData.CreateFrom(playerCharacterData, conversationPartnerData, terrainType, 0, false, settlement, "example", false, false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MapConversationTableauData entry = ...;
```

## See Also

- [Area Index](../)
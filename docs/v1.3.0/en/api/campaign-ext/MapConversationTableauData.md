<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapConversationTableauData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapConversationTableauData

**Namespace:** SandBox.View.Map
**Module:** SandBox.View
**Type:** `public class MapConversationTableauData`
**Base:** none
**File:** `SandBox.View/Map/MapConversationTableauData.cs`

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

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var value = new MapConversationTableauData();
```

## See Also

- [Complete Class Catalog](../catalog)
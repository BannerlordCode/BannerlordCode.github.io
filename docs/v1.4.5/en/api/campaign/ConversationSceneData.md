<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationSceneData`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationSceneData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ConversationSceneData.cs`

## Overview

`ConversationSceneData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ConversationSceneData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |

## Usage Example

```csharp
var value = new ConversationSceneData();
```

## See Also

- [Complete Class Catalog](../catalog)
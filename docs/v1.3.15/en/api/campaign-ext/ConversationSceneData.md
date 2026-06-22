<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationSceneData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct ConversationSceneData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/ConversationSceneData.cs`

## Overview

`ConversationSceneData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |

## Usage Example

```csharp
// Typical usage of ConversationSceneData (Data)
new ConversationSceneData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleplayerBattleSceneData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleplayerBattleSceneData

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct SingleplayerBattleSceneData`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/SingleplayerBattleSceneData.cs`

## Overview

`SingleplayerBattleSceneData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

| Name | Signature |
|------|-----------|
| `SceneID` | `public string SceneID { get; }` |
| `Terrain` | `public TerrainType Terrain { get; }` |
| `TerrainTypes` | `public List<TerrainType> TerrainTypes { get; }` |
| `ForestDensity` | `public ForestDensity ForestDensity { get; }` |
| `MapIndices` | `public List<int> MapIndices { get; }` |
| `IsNaval` | `public bool IsNaval { get; }` |

## Usage Example

```csharp
// Typical usage of SingleplayerBattleSceneData (Data)
new SingleplayerBattleSceneData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
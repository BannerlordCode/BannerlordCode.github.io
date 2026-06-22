<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationCache`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NavigationCache` is a class in the `TaleWorlds.CampaignSystem.Map.DistanceCache` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements { get; }` |


## Key Methods

### GetNeighbors

```csharp
public MBReadOnlyList<T> GetNeighbors(T settlement)
```

### GetClosestSettlementToFaceIndex

```csharp
public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)
```

### GenerateCacheData

```csharp
public void GenerateCacheData()
```

### GetSceneXmlCrcValues

```csharp
public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)
```

### GetSettlementsDistanceCacheFileForCapability

```csharp
public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)
```

### Serialize

```csharp
public void Serialize(string path)
```

### Deserialize

```csharp
public void Deserialize(string path)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
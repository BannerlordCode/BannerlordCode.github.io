<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigationCache`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigationCache

**命名空间:** TaleWorlds.CampaignSystem.Map.DistanceCache
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NavigationCache` 是 `TaleWorlds.CampaignSystem.Map.DistanceCache` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
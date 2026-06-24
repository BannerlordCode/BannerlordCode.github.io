<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NavigationCache`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NavigationCache

**Namespace:** TaleWorlds.CampaignSystem.Map.DistanceCache
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class NavigationCache<T>`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map.DistanceCache/NavigationCache.cs`

## 概述

`NavigationCache` 位于 `TaleWorlds.CampaignSystem.Map.DistanceCache`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Map.DistanceCache` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MaximumDistanceBetweenTwoConnectedSettlements` | `public float MaximumDistanceBetweenTwoConnectedSettlements { get; }` |

## 主要方法

### GetNeighbors
`public MBReadOnlyList<T> GetNeighbors(T settlement)`

**用途 / Purpose:** 获取 `neighbors` 的当前值。

### GetClosestSettlementToFaceIndex
`public T GetClosestSettlementToFaceIndex(int faceId, out bool isAtSea)`

**用途 / Purpose:** 获取 `closest settlement to face index` 的当前值。

### GenerateCacheData
`public void GenerateCacheData()`

**用途 / Purpose:** 处理 `generate cache data` 相关逻辑。

### GetSceneXmlCrcValues
`public abstract void GetSceneXmlCrcValues(out uint sceneXmlCrc, out uint sceneNavigationMeshCrc)`

**用途 / Purpose:** 获取 `scene xml crc values` 的当前值。

### GetSettlementsDistanceCacheFileForCapability
`public bool GetSettlementsDistanceCacheFileForCapability(string moduleId, out string filePath)`

**用途 / Purpose:** 获取 `settlements distance cache file for capability` 的当前值。

### Serialize
`public void Serialize(string path)`

**用途 / Purpose:** 处理 `serialize` 相关逻辑。

### Deserialize
`public void Deserialize(string path)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomNavigationCache();
```

## 参见

- [完整类目录](../catalog)
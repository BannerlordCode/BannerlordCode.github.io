<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SiegeEnginesContainer`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeEnginesContainer

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEnginesContainer`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeEvent.cs`

## 概述

`SiegeEnginesContainer` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DeployedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> DeployedSiegeEngineTypesCount { get; }` |
| `ReservedSiegeEngineTypesCount` | `public MBReadOnlyDictionary<SiegeEngineType, int> ReservedSiegeEngineTypesCount { get; }` |

## 主要方法

### AllSiegeEngines
`public IEnumerable<SiegeEngineConstructionProgress> AllSiegeEngines()`

**用途 / Purpose:** 处理 `all siege engines` 相关逻辑。

### AddPrebuiltEngineToReserve
`public void AddPrebuiltEngineToReserve(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 向当前集合/状态中添加 `prebuilt engine to reserve`。

### DeploySiegeEngineAtIndex
`public void DeploySiegeEngineAtIndex(SiegeEngineConstructionProgress siegeEngine, int index)`

**用途 / Purpose:** 处理 `deploy siege engine at index` 相关逻辑。

### RemoveDeployedSiegeEngine
`public void RemoveDeployedSiegeEngine(int index, bool isRanged, bool moveToReserve)`

**用途 / Purpose:** 从当前集合/状态中移除 `deployed siege engine`。

### RemovedSiegeEngineFromReservedSiegeEngines
`public bool RemovedSiegeEngineFromReservedSiegeEngines(SiegeEngineConstructionProgress siegeEngine)`

**用途 / Purpose:** 从当前集合/状态中移除 `d siege engine from reserved siege engines`。

### FindDeploymentIndexOfDeployedEngine
`public int FindDeploymentIndexOfDeployedEngine(SiegeEngineConstructionProgress deployedEngine)`

**用途 / Purpose:** 处理 `find deployment index of deployed engine` 相关逻辑。

### ClearRemovedEnginesIfNecessary
`public bool ClearRemovedEnginesIfNecessary()`

**用途 / Purpose:** 处理 `clear removed engines if necessary` 相关逻辑。

## 使用示例

```csharp
var value = new SiegeEnginesContainer();
value.AllSiegeEngines();
```

## 参见

- [完整类目录](../catalog)
---
title: "CampaignObjectManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignObjectManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## 概述

`CampaignObjectManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `CampaignObjectManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Settlements` | `public MBReadOnlyList<Settlement> Settlements { get; }` |
| `MobileParties` | `public MBReadOnlyList<MobileParty> MobileParties { get; }` |
| `CaravanParties` | `public MBReadOnlyList<MobileParty> CaravanParties { get; }` |
| `PatrolParties` | `public MBReadOnlyList<MobileParty> PatrolParties { get; }` |
| `MilitiaParties` | `public MBReadOnlyList<MobileParty> MilitiaParties { get; }` |
| `GarrisonParties` | `public MBReadOnlyList<MobileParty> GarrisonParties { get; }` |
| `BanditParties` | `public MBReadOnlyList<MobileParty> BanditParties { get; }` |
| `VillagerParties` | `public MBReadOnlyList<MobileParty> VillagerParties { get; }` |
| `LordParties` | `public MBReadOnlyList<MobileParty> LordParties { get; }` |
| `CustomParties` | `public MBReadOnlyList<MobileParty> CustomParties { get; }` |
| `PartiesWithoutPartyComponent` | `public MBReadOnlyList<MobileParty> PartiesWithoutPartyComponent { get; }` |
| `AliveHeroes` | `public MBReadOnlyList<Hero> AliveHeroes { get; }` |
| `DeadOrDisabledHeroes` | `public MBReadOnlyList<Hero> DeadOrDisabledHeroes { get; }` |
| `Clans` | `public MBReadOnlyList<Clan> Clans { get; }` |
| `Kingdoms` | `public MBReadOnlyList<Kingdom> Kingdoms { get; }` |
| `Factions` | `public MBReadOnlyList<IFaction> Factions { get; }` |
| `MaxCreatedPostfixIndex` | `public uint MaxCreatedPostfixIndex { get; }` |

## 主要方法

### PreAfterLoad
`public void PreAfterLoad()`

**用途 / Purpose:** 处理 `pre after load` 相关逻辑。

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 处理 `after load` 相关逻辑。

### GetMaxObjectSubId
`public uint GetMaxObjectSubId()`

**用途 / Purpose:** 获取 `max object sub id` 的当前值。

### OnItemAdded
`public void OnItemAdded(T item)`

**用途 / Purpose:** 当 `item added` 事件触发时调用此方法。

### UnregisterItem
`public void UnregisterItem(T item)`

**用途 / Purpose:** 处理 `unregister item` 相关逻辑。

### Find
`public T Find(string id)`

**用途 / Purpose:** 处理 `find` 相关逻辑。

### FindFirst
`public T FindFirst(Predicate<T> predicate)`

**用途 / Purpose:** 处理 `find first` 相关逻辑。

### FindAll
`public MBReadOnlyList<T> FindAll(Predicate<T> predicate)`

**用途 / Purpose:** 处理 `find all` 相关逻辑。

### FindNextUniqueStringId
`public static string FindNextUniqueStringId(List<CampaignObjectManager.CampaignObjectType<T>> lists, string id)`

**用途 / Purpose:** 处理 `find next unique string id` 相关逻辑。

## 使用示例

```csharp
var manager = CampaignObjectManager.Current;
```

## 参见

- [完整类目录](../catalog)
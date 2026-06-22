<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignObjectManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## 概述

`CampaignObjectManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

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
```csharp
public void PreAfterLoad()
```

### AfterLoad
```csharp
public void AfterLoad()
```

### GetMaxObjectSubId
```csharp
public uint GetMaxObjectSubId()
```

### OnItemAdded
```csharp
public void OnItemAdded(T item)
```

### UnregisterItem
```csharp
public void UnregisterItem(T item)
```

### Find
```csharp
public T Find(string id)
```

### FindFirst
```csharp
public T FindFirst(Predicate<T> predicate)
```

### FindAll
```csharp
public MBReadOnlyList<T> FindAll(Predicate<T> predicate)
```

### FindNextUniqueStringId
```csharp
public static string FindNextUniqueStringId(List<CampaignObjectManager.CampaignObjectType<T>> lists, string id)
```

## 使用示例

```csharp
// CampaignObjectManager (Manager) 的典型用法
CampaignObjectManager.Current;
```

## 参见

- [完整类目录](../catalog)
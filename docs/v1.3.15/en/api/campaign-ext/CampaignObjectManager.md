<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CampaignObjectManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignObjectManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignObjectManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignObjectManager.cs`

## Overview

`CampaignObjectManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of CampaignObjectManager (Manager)
CampaignObjectManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)
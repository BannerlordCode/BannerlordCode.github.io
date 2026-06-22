<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TownMercenaryData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TownMercenaryData

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `TownMercenaryData` is a class in the `TaleWorlds.CampaignSystem.CampaignBehaviors` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `TroopType` | `public CharacterObject TroopType { get; }` |
| `Number` | `public int Number { get; }` |


## Key Methods

### RegisterEvents

```csharp
public override void RegisterEvents()
```

### SyncData

```csharp
public override void SyncData(IDataStore dataStore)
```

### GetMercenaryData

```csharp
public RecruitmentCampaignBehavior.TownMercenaryData GetMercenaryData(Town town)
```

### HourlyTickParty

```csharp
public void HourlyTickParty(MobileParty mobileParty)
```

### OnBeforeSettlementEntered

```csharp
public void OnBeforeSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)
```

### ChangeMercenaryType

```csharp
public void ChangeMercenaryType(CharacterObject troopType, int number)
```

### ChangeMercenaryCount

```csharp
public void ChangeMercenaryCount(int difference)
```

### HasAvailableMercenary

```csharp
public bool HasAvailableMercenary(Occupation occupation = Occupation.NotAssigned)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
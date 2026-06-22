<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Hideout`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Hideout

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Hideout` is a class in the `TaleWorlds.CampaignSystem.Settlements` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NextPossibleAttackTime` | `public CampaignTime NextPossibleAttackTime { get; }` |
| `All` | `public static MBReadOnlyList<Hideout> All { get; }` |
| `IsInfested` | `public bool IsInfested { get; }` |
| `MapFaction` | `public override IFaction MapFaction { get; }` |
| `IsSpotted` | `public bool IsSpotted { get; set; }` |


## Key Methods

### SetNextPossibleAttackTime

```csharp
public void SetNextPossibleAttackTime(CampaignTime hiddenDurationFromNow)
```

### GetDefenderParties

```csharp
public IEnumerable<PartyBase> GetDefenderParties(MapEvent.BattleTypes battleType)
```

### GetNextDefenderParty

```csharp
public PartyBase GetNextDefenderParty(ref int partyIndex, MapEvent.BattleTypes battleType)
```

### OnPartyEntered

```csharp
public override void OnPartyEntered(MobileParty mobileParty)
```

### OnPartyLeft

```csharp
public override void OnPartyLeft(MobileParty mobileParty)
```

### OnRelatedPartyRemoved

```csharp
public override void OnRelatedPartyRemoved(MobileParty mobileParty)
```

### OnInit

```csharp
public override void OnInit()
```

### Deserialize

```csharp
public override void Deserialize(MBObjectManager objectManager, XmlNode node)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
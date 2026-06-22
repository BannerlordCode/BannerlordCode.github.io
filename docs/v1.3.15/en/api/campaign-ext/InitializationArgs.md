<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitializationArgs`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InitializationArgs

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InitializationArgs` is a class in the `TaleWorlds.CampaignSystem.Party.PartyComponents` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |


## Key Methods

### CreateBanditParty

```csharp
public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToBanditParty

```csharp
public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)
```

### CreateLooterParty

```csharp
public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToLooterParty

```csharp
public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)
```

### SetHomeHideout

```csharp
public void SetHomeHideout(Hideout hideout)
```

### ClearCachedName

```csharp
public override void ClearCachedName()
```

### InitializeBanditOnCreation

```csharp
public void InitializeBanditOnCreation(MobileParty mobileParty)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
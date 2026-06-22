<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyGroupTroopSupplier`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyGroupTroopSupplier

**Namespace:** TaleWorlds.CampaignSystem.TroopSuppliers
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyGroupTroopSupplier` is a class in the `TaleWorlds.CampaignSystem.TroopSuppliers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `NumRemovedTroops` | `public int NumRemovedTroops { get; }` |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied { get; }` |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied { get; }` |


## Key Methods

### SupplyTroops

```csharp
public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)
```

### SupplyOneTroop

```csharp
public IAgentOriginBase SupplyOneTroop()
```

### GetAllTroops

```csharp
public IEnumerable<IAgentOriginBase> GetAllTroops()
```

### GetGeneralCharacter

```csharp
public BasicCharacterObject GetGeneralCharacter()
```

### GetNumberOfPlayerControllableTroops

```csharp
public int GetNumberOfPlayerControllableTroops()
```

### OnTroopWounded

```csharp
public void OnTroopWounded(UniqueTroopDescriptor troopDescriptor)
```

### OnTroopKilled

```csharp
public void OnTroopKilled(UniqueTroopDescriptor troopDescriptor)
```

### OnTroopRouted

```csharp
public void OnTroopRouted(UniqueTroopDescriptor troopDescriptor, bool isOrderRetreat)
```

### GetParty

```csharp
public PartyBase GetParty(UniqueTroopDescriptor troopDescriptor)
```

### OnTroopScoreHit

```csharp
public void OnTroopScoreHit(UniqueTroopDescriptor descriptor, BasicCharacterObject attackedCharacter, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
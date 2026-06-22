<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Ship`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Ship` is a class in the `TaleWorlds.CampaignSystem.Naval` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Figurehead` | `public Figurehead Figurehead { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; }` |
| `IsTradeable` | `public bool IsTradeable { get; }` |
| `IsUsedByQuest` | `public bool IsUsedByQuest { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `CustomSailPatternId` | `public string CustomSailPatternId { get; set; }` |
| `UnlockedUpgradePieces` | `public MBReadOnlyList<ShipUpgradePiece> UnlockedUpgradePieces { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `VersionNo` | `public uint VersionNo { get; }` |
| `Owner` | `public PartyBase Owner { get; set; }` |
| `HitPoints` | `public float HitPoints { get; set; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `MaxFireHitPoints` | `public float MaxFireHitPoints { get; set; }` |
| `SailHitPoints` | `public float SailHitPoints { get; set; }` |
| `TotalCrewCapacity` | `public int TotalCrewCapacity { get; }` |
| `MaxSailHitPoints` | `public float MaxSailHitPoints { get; }` |
| `SeaWorthiness` | `public int SeaWorthiness { get; }` |
| `FlagshipScore` | `public float FlagshipScore { get; }` |
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `InventoryCapacity` | `public float InventoryCapacity { get; }` |


## Key Methods

### ChangeFigurehead

```csharp
public void ChangeFigurehead(Figurehead figurehead)
```

### GetPieceAtSlot

```csharp
public ShipUpgradePiece GetPieceAtSlot(string slotTag)
```

### EquipUpgradePiece

```csharp
public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)
```

### HasSlot

```csharp
public bool HasSlot(string slotTag)
```

### SetName

```csharp
public void SetName(TextObject name)
```

### GetCampaignSpeed

```csharp
public float GetCampaignSpeed()
```

### GetSiegeEngines

```csharp
public MBList<SiegeEngineType> GetSiegeEngines()
```

### UpdateVersionNo

```csharp
public void UpdateVersionNo()
```

### GetCombatFactor

```csharp
public float GetCombatFactor()
```

### OnShipDamaged

```csharp
public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)
```

### GetShipVisualSlotInfos

```csharp
public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()
```

### GetShipSlotAndPieceNames

```csharp
public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
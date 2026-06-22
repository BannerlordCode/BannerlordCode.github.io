<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Ship`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Ship

**命名空间:** TaleWorlds.CampaignSystem.Naval
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Ship` 是 `TaleWorlds.CampaignSystem.Naval` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
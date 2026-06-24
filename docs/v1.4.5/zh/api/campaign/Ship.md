<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Ship`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Ship

**Namespace:** TaleWorlds.CampaignSystem.Naval
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Ship : IShipOrigin, IRandomOwner`
**Base:** `IShipOrigin`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Naval/Ship.cs`

## 概述

`Ship` 位于 `TaleWorlds.CampaignSystem.Naval`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Naval` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Figurehead` | `public Figurehead Figurehead { get; }` |
| `IsInvulnerable` | `public bool IsInvulnerable { get; }` |
| `IsTradeable` | `public bool IsTradeable { get; }` |
| `IsUsedByQuest` | `public bool IsUsedByQuest { get; }` |
| `RandomValue` | `public int RandomValue { get; }` |
| `CustomSailPatternId` | `public string CustomSailPatternId { get; set; }` |
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
| `MainDeckCrewCapacity` | `public int MainDeckCrewCapacity { get; }` |
| `InventoryCapacity` | `public float InventoryCapacity { get; }` |
| `RudderSurfaceAreaFactor` | `public float RudderSurfaceAreaFactor { get; }` |
| `MaxRudderForceFactor` | `public float MaxRudderForceFactor { get; }` |

## 主要方法

### ChangeFigurehead
`public void ChangeFigurehead(Figurehead figurehead)`

**用途 / Purpose:** 处理 `change figurehead` 相关逻辑。

### GetPieceAtSlot
`public ShipUpgradePiece GetPieceAtSlot(string slotTag)`

**用途 / Purpose:** 获取 `piece at slot` 的当前值。

### EquipUpgradePiece
`public void EquipUpgradePiece(string slotTag, ShipUpgradePiece newUpgradePiece)`

**用途 / Purpose:** 处理 `equip upgrade piece` 相关逻辑。

### HasSlot
`public bool HasSlot(string slotTag)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `slot`。

### SetName
`public void SetName(TextObject name)`

**用途 / Purpose:** 设置 `name` 的值或状态。

### GetCampaignSpeed
`public float GetCampaignSpeed()`

**用途 / Purpose:** 获取 `campaign speed` 的当前值。

### GetSiegeEngines
`public MBList<SiegeEngineType> GetSiegeEngines()`

**用途 / Purpose:** 获取 `siege engines` 的当前值。

### UpdateVersionNo
`public void UpdateVersionNo()`

**用途 / Purpose:** 更新 `version no` 的状态或数据。

### GetCombatFactor
`public float GetCombatFactor()`

**用途 / Purpose:** 获取 `combat factor` 的当前值。

### OnShipDamaged
`public void OnShipDamaged(float rawDamage, IShipOrigin rammingShip, out float modifiedDamage)`

**用途 / Purpose:** 当 `ship damaged` 事件触发时调用此方法。

### GetShipVisualSlotInfos
`public List<ShipVisualSlotInfo> GetShipVisualSlotInfos()`

**用途 / Purpose:** 获取 `ship visual slot infos` 的当前值。

### GetShipSlotAndPieceNames
`public List<ShipSlotAndPieceName> GetShipSlotAndPieceNames()`

**用途 / Purpose:** 获取 `ship slot and piece names` 的当前值。

### OnPlayerCharacterChanged
`public void OnPlayerCharacterChanged()`

**用途 / Purpose:** 当 `player character changed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new Ship();
value.ChangeFigurehead(figurehead);
```

## 参见

- [完整类目录](../catalog)
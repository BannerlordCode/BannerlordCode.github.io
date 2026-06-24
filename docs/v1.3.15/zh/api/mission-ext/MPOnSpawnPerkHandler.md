<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPOnSpawnPerkHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkHandler

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `class MPOnSpawnPerkHandler`
**领域:** mission-ext

## 概述

`MPOnSpawnPerkHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MPOnSpawnPerkHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `HasBannerBearer` | `public bool HasBannerBearer { get; }` |
| `GameModes` | `public List<string> GameModes { get; }` |
| `PerkListIndex` | `public int PerkListIndex { get; }` |
| `IconId` | `public string IconId { get; }` |
| `HeroIdleAnimOverride` | `public string HeroIdleAnimOverride { get; }` |
| `HeroMountIdleAnimOverride` | `public string HeroMountIdleAnimOverride { get; }` |
| `TroopIdleAnimOverride` | `public string TroopIdleAnimOverride { get; }` |
| `TroopMountIdleAnimOverride` | `public string TroopMountIdleAnimOverride { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |
| `IsWarmup` | `public bool IsWarmup { get; }` |

## 主要方法

### Clone
`public MPPerkObject Clone(MissionPeer peer)`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### GetExtraTroopCount
`public int GetExtraTroopCount(bool isWarmup)`

**用途 / Purpose:** 获取 `extra troop count` 的当前值。

### GetAlternativeEquipments
`public List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isWarmup, bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAllEquipments = false)`

**用途 / Purpose:** 获取 `alternative equipments` 的当前值。

### GetDrivenPropertyBonusOnSpawn
`public float GetDrivenPropertyBonusOnSpawn(bool isWarmup, bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus on spawn` 的当前值。

### GetHitpoints
`public float GetHitpoints(bool isWarmup, bool isPlayer)`

**用途 / Purpose:** 获取 `hitpoints` 的当前值。

### GetTroopCount
`public static int GetTroopCount(MultiplayerClassDivisions.MPHeroClass heroClass, int botsPerFormation, MPPerkObject.MPOnSpawnPerkHandler onSpawnPerkHandler)`

**用途 / Purpose:** 获取 `troop count` 的当前值。

### Deserialize
`public static IReadOnlyPerkObject Deserialize(XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(Agent agent)`

**用途 / Purpose:** 获取 `perk handler` 的当前值。

### GetPerkHandler
`public static MPPerkObject.MPPerkHandler GetPerkHandler(MissionPeer peer)`

**用途 / Purpose:** 获取 `perk handler` 的当前值。

### GetCombatPerkHandler
`public static MPPerkObject.MPCombatPerkHandler GetCombatPerkHandler(Agent attacker, Agent defender)`

**用途 / Purpose:** 获取 `combat perk handler` 的当前值。

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(MissionPeer peer)`

**用途 / Purpose:** 获取 `on spawn perk handler` 的当前值。

### GetOnSpawnPerkHandler
`public static MPPerkObject.MPOnSpawnPerkHandler GetOnSpawnPerkHandler(IEnumerable<IReadOnlyPerkObject> perks)`

**用途 / Purpose:** 获取 `on spawn perk handler` 的当前值。

### RaiseEventForAllPeers
`public static void RaiseEventForAllPeers(MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 处理 `raise event for all peers` 相关逻辑。

### RaiseEventForAllPeersOnTeam
`public static void RaiseEventForAllPeersOnTeam(Team side, MPPerkCondition.PerkEventFlags flags)`

**用途 / Purpose:** 处理 `raise event for all peers on team` 相关逻辑。

### TickAllPeerPerks
`public static void TickAllPeerPerks(int tickCount)`

**用途 / Purpose:** 处理 `tick all peer perks` 相关逻辑。

### RaiseEventForAllPeersCommand
`public static string RaiseEventForAllPeersCommand(List<string> strings)`

**用途 / Purpose:** 处理 `raise event for all peers command` 相关逻辑。

### TickAllPeerPerksCommand
`public static string TickAllPeerPerksCommand(List<string> strings)`

**用途 / Purpose:** 处理 `tick all peer perks command` 相关逻辑。

### GetExtraTroopCount
`public float GetExtraTroopCount()`

**用途 / Purpose:** 获取 `extra troop count` 的当前值。

### GetAlternativeEquipments
`public IEnumerable<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer)`

**用途 / Purpose:** 获取 `alternative equipments` 的当前值。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MPOnSpawnPerkHandler());
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)

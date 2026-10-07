---
title: "MapEventSide"
description: "一场地图遭遇战的「一方」：持有哪些队伍、分配了哪些士兵与船、伤亡与声望如何累积，以及结束时如何把战场结果结算回队伍。"
---

# MapEventSide

**Namespace:** `TaleWorlds.CampaignSystem.MapEvents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapEventSide`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs`

## 概述

一场地图遭遇战（`MapEvent`）被切成两半，一半一个 `MapEventSide`。它管的是「这一边」的全部事：**有哪些队伍参战**（`Parties`）、**这一边的总人数与总战力**（`TroopCount` / `RecalculateStrengthOfSide()`）、**哪些士兵已经进场、哪些还在待命队列里**（`_allocatedTroops` 与 `_readyTroopsPriorityList` 两张表）、**伤亡与奖励怎么记**（`CasualtyStrength` / `TroopCasualties` / `RenownValue` / `InfluenceValue`），以及**战斗结束时怎么把结果结算回队伍**（`HandleMapEventEnd`）。

它最容易被误解的一点是**兵力分配是它自己的事**。`MakeReadyForSimulation(priorTroops, sizeOfSide)` 会在这一边内部按优先级把士兵「分配」进场，`AllocateTroops(ref troopsList, numberToAllocate, customAllocationConditions)` 是唯一的入口，`_readyTroopsPriorityList` 是那张**按战力排好序的待命表**——分配就是从头扫，够条件就取走一个，不够就保留。`AllocateShips()` 与 `AllocateSiegeEngines()` 是同一套思路的船与攻城器械版本。`_troopAllocationsLocked` 这个标志决定这一切能不能重来。

第二个必须先知道的事实是**它不是 mission 侧的东西**。`MissionSide` 这个名字有误导性：它是 `BattleSideEnum`（`None=-1` / `Defender=0` / `Attacker=1`），与 mission 里的阵营不是同一套编号，只是恰好同名。[MapEvent](../MapEvent) 的 `_sides` 数组正是按这个枚举当下标：`GetMapEventSide(side) => _sides[(int)side]`，构造时 `_sides[0]` 是 Defender、`_sides[1]` 是 Attacker。所以 `OtherSide` 就是把枚举翻一下。

第三个必须知道的是**存档与缓存并存**。`LeaderParty`（id 4）、`MissionSide`（id 7）、`CasualtyStrength`（id 15）、`StrengthRatio`、`RenownValue`、`InfluenceValue`、`TroopCasualties`、`ShipCasualties`、`IsSurrendered`、`_battleParties`、`_mapEvent`、`_mapFaction` 等带 `[SaveableField]`；而 `_readyTroopsPriorityList` / `_allocatedTroops` / `_partyStrengthCache` / `SimulationShipList` 全带 `[CachedData]`——**读档后它们是空的，必须靠 `InvalidateSimulationSetup()` + `MakeReadyForSimulation()` 重建**。

## 心智模型

把它当成「**一边的账本 + 一边的抽签机**」。四组方法对应四种使用时机。

**战前查询组**全是只读、无副作用的：`TroopCount`（转发 `RecalculateMemberCountOfSide()`）、`RecalculateMemberCountOfSide()`、`RecalculateStrengthOfSide()`、`GetTotalHealthyTroopCountOfSide()`、`GetTotalHealthyHeroCountOfSide()`、`CountTroops(Func<FlattenedTroopRosterElement, bool>)`、`GetSideMorale()`、`IsMainPartyAmongParties()`、`HealthyTroopCountAtMapEventStart`、`HasReadyTroops`、`HasTroopLimit`。其中 `GetSideMorale()` 是**按战力加权的士气**（`partyStrength / 总战力 * party.Morale` 累加），并且有一条硬编码兜底：围城战里 Defenders 或已进领主厅时 **不低于 30**。

**分配组**是它最核心也最容易误用的部分。顺序是：`MakeReadyForSimulation` / `MakeReadyForMission` → 内部 `MakeReady(...)` 填 `_readyTroopsPriorityList` → `AllocateTroops` / `AllocateTroop` / `AllocateShips` / `AllocateSiegeEngines` 取走 → 每次取走都会 `BattleObserver.TroopNumberChanged(MissionSide, party, troop, 1)` 通知 UI 并 `TroopUpgradeTracker.AddTrackedTroop(...)`。**`AllocateTroops` 的 `customAllocationConditions` 是 `Func<UniqueTroopDescriptor, MapEventParty, bool>`，为 null 表示全都要。** 若本边存在任何 `HasTroopLimit` 的队伍，`MakeReadyForSimulation` 最后会对每个队伍调 `TrimRosterToAllocatedTroops(_allocatedTroops)` 并把 `_troopAllocationsLocked` 置真——**锁上之后 `MakeReadyForSimulation` 直接 return、`EndSimulation` 直接 return**，分配结果不可撤销。

**战况更新组**是单向通知：`OnTroopWounded` / `OnTroopKilled` / `OnTroopRouted` 三个都会把 `MilitaryPowerModel.GetTroopPower(...)` 累加进 `CasualtyStrength` 并 `TroopCasualties++`——**注意 routed 也算 casualty，只是战力只加 10%**（`troopPower * 0.1f`）。`OnTroopRouted` 还有一个额外条件：`!isOrderRetreat && (EventType != Siege || MissionSide == Attacker)` 才真正通知 `MapEventParty.OnTroopRouted`——**攻方在围城战里主动撤退不算「溃逃」**。`OnShipDamaged` 则把伤害值直接累加进 `ShipCasualties`。

**结算组**在战后按固定顺序跑：`Surrender()` / `Route()` → `CommitXpGains()` / `CommitRenownChanges()` / `CommitInfluenceChanges()` / `CommitMoraleChanges()` / `CommitGoldChanges()` → `HandleMapEventEnd()`。注意这五个 `Commit*` **都只是转发给 `MapEventParty` 上的同名方法**（注意 Party 侧是单数 `CommitXpGain` 而 Side 侧是复数 `CommitXpGains`），本类不参与任何数值计算。`HandleMapEventEnd()` 则是个 `while (Parties.Count > 0)` 循环，每轮挑一个「非移动队伍、或不是自己军队的统帅」优先处理，处理完队伍被移出 `Parties` 所以循环必然终止。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MissionSide` | `[SaveableProperty(7)] public BattleSideEnum MissionSide { get; private set; }` | 这一边是守方还是攻方。**名字有误导性**——它是 `BattleSideEnum`（`Defender=0` / `Attacker=1`），也是 `MapEvent._sides` 的下标。构造函数由 `MapEvent` 传入，`private set` 改不了。 |
| `OtherSide` | `public MapEventSide OtherSide => _mapEvent.GetMapEventSide((MissionSide == BattleSideEnum.Defender) ? BattleSideEnum.Attacker : BattleSideEnum.Defender)` | 对面那一边的对象。`HandleMapEventEndForPartyInternal` 用它取「对面的统帅英雄」当击杀者。**每次访问都走一次数组下标**，不是缓存字段。 |
| `Parties` | `public MBReadOnlyList<MapEventParty> Parties => _battleParties` | 本边的队伍列表，**只读视图**。增删只能走 `internal` 的 `AddPartyInternal` / `RemovePartyInternal`。`HandleMapEventEnd` 的 `while (Parties.Count > 0)` 依赖它随结算收缩。 |
| `LeaderParty` | `[SaveableProperty(4)] public PartyBase LeaderParty { get; internal set; }` | 本边的统帅队伍。**setter 是 `internal`**，且 `_mapFaction` 在构造时从 `leaderParty.MapFaction` 取过一次。`MapFaction` 属性是 `_mapFaction ?? LeaderParty.MapFaction` 的兜底。 |
| `TroopCount` | `public int TroopCount => RecalculateMemberCountOfSide()` | **每次访问都重算一遍**，遍历所有队伍累加 `Party.NumberOfHealthyMembers`。不是缓存字段，别在循环里当常量用。 |
| `RecalculateStrengthOfSide` | `public float RecalculateStrengthOfSide()` | 逐队伍 `party.Party.GetCustomStrength(party.Party.Side, MapEvent.SimulationContext)` 求和。`SimulationContext` 是从 `_mapEvent` 实时读的，所以同一场战斗在不同轮次的答案可能不同。 |
| `CalculateRenownAndInfluenceValuesOnPartyInvolved` | `public void CalculateRenownAndInfluenceValuesOnPartyInvolved(float[] strengthOfSide)` | 写入 `StrengthRatio` / `RenownValue` / `InfluenceValue` 三个字段的**唯一入口**。公式里 `StrengthRatio = (对面战力 * sqrt(自身优势系数) + 10) / (自身战力 * 对面优势系数 + 10)`，并且**被硬夹在 10 以内**；攻守优势系数来自 `CombatSimulationModel.GetSettlementAdvantage(settlement)`；还有一个战种系数 0.7 / 0.6 / 0.5（围城 / sally-out 或 raid 或有聚落 / 野战）。 |
| `GetSideMorale` | `public float GetSideMorale()` | 按战力加权的全边士气。它会顺手填 `_partyStrengthCache`。**围城战的 Defenders 或已进领主厅时强制不低于 30**（`MathF.Max(num2, 30f)`）。 |
| `HasReadyTroops` | `public bool HasReadyTroops` | 待命队列 `_readyTroopsPriorityList` 是否非 null 且非空。**只有在 `MakeReady*` 之后才有意义**。 |
| `NumRemainingSimulationTroops` / `NumRemainingSimulationShips` / `NumRemainingSimulationSiegeEngines` | `public int ...` | 三个「模拟侧还剩多少」的计数，全部是 `?.Count ?? 0` 的空安全写法——**列表为 null 时返回 0 而不是 NRE**。 |
| `AllocateTroops` | `public void AllocateTroops(ref List<UniqueTroopDescriptor> troopsList, int numberToAllocate, Func<UniqueTroopDescriptor, MapEventParty, bool> customAllocationConditions = null)` | **批量分配的入口**。`ref` 参数为 null 时新建、非 null 时先 `Clear()`。扫 `_readyTroopsPriorityList` 逐条判定，够条件就取走并记进 `_allocatedTroops`、通知 `BattleObserver.TroopNumberChanged(..., 1)`；不够条件的**原地保留**（用 `num` 游标压缩后 `RemoveRange`）。末尾置 `_requiresTroopCacheUpdate = true`。 |
| `AllocateTroop` | `internal bool AllocateTroop(Func<...> customAllocationConditions, out UniqueTroopDescriptor troopDescriptor)` | 单个分配。**`internal`，mod 调不到**。找不到时把 `troopDescriptor` 置为 `default` 并返回 false。 |
| `GetAllocatedTroop` / `GetReadyTroop` / `GetAllocatedTroopParty` / `GetReadyTroopParty` | `public CharacterObject ...` / `public PartyBase ...` | 四个「描述符 → 实体」的反查。前两个查 `_allocatedTroops`，后两个查 `_readyTroopsTemporaryCache`（后者会先调 `CheckReadyTroopsTemporaryCache()` 惰性重建）。**查不到一律返回 null**，调用方必须判空。 |
| `GetAllTroops` | `public void GetAllTroops(ref List<UniqueTroopDescriptor> troopsList)` | 「还没分配的 + 已分配的」全量导出，**待命的在前、已分配的在后**。`Route()` 就是用它遍历的。 |
| `GetTroops` | `public IReadOnlyList<UniqueTroopDescriptor> GetTroops()` | 直接返回 `_simulationTroopList`——**该字段在 `MakeReadyForSimulation` 之前是 null**，此时返回 null 而不是空列表。 |
| `OnTroopWounded` / `OnTroopKilled` | `public void OnTroopWounded(UniqueTroopDescriptor)` / `OnTroopKilled(...)` | 受伤/阵亡通知。两者都会 `_allocatedTroops[troopDesc]` 反查所属 `MapEventParty`（**字典索引器，描述符不在表里会抛 KeyNotFound**），调 Party 侧同名方法，然后把 `GetTroopPower(...)` 累加进 `CasualtyStrength` 并 `TroopCasualties++`。**伤与死在战功上同等计。** |
| `OnTroopRouted` | `public void OnTroopRouted(UniqueTroopDescriptor, bool isOrderRetreat)` | 溃逃通知。只有 `!isOrderRetreat && (EventType != Siege \|\| MissionSide == Attacker)` 才通知 Party 侧；但**无论条件成不成立，`CasualtyStrength += troopPower * 0.1f` 与 `TroopCasualties++` 都会执行**。 |
| `OnShipDamaged` | `public void OnShipDamaged(Ship struckShip, SiegeEngineType siegeEngine, int damage)` | 通知船主所属的 `MapEventParty`，并 `ShipCasualties += damage`。**注意累加的是伤害值不是船数**——`ShipCasualties` 是 int 伤害总量。 |
| `MakeReadyForSimulation` | `public void MakeReadyForSimulation(FlattenedTroopRoster priorTroops, int sizeOfSide)` | **模拟（后台）侧准备**。`_troopAllocationsLocked` 为真直接 return；否则 `MakeReady(false, sizeOfSide, priorTroops)` → `AllocateTroops` → `AllocateShips` → `AllocateSiegeEngines`；若本边存在 `HasTroopLimit` 的队伍，再对每个队伍 `TrimRosterToAllocatedTroops` 并**上锁**。 |
| `MakeReadyForMission` | `public void MakeReadyForMission(FlattenedTroopRoster priorTroops)` | **mission（玩家实际进场）侧准备**。先 `InvalidateSimulationSetup()` **解锁**，再 `MakeReady(includeHumanPlayers: true, sizeOfSide, priorTroops)`。**不分配**，只把待命表填好。 |
| `EndSimulation` | `public void EndSimulation()` | 清 `_simulationTroopList` / `_readyTroopsPriorityList` / `_allocatedTroops` / `SimulationShipList`。**`_troopAllocationsLocked` 为真时全部不执行**——也就是有兵力上限的战局结束模拟后数据仍在。 |
| `Surrender` | `public void Surrender()` | 投降：`SurrenderParty(LeaderParty)` 把统帅队伍里**所有非英雄**的存活数一次性清零（`AddToCountsAtIndex(i, 0, Number - WoundedNumber)`，即 wounded 也变 0），然后 `IsSurrendered = true`。**只处理统帅队伍，不处理其它参战队伍。** |
| `Route` | `public void Route()` | 溃逃：取全部士兵，对每个状态为 `RosterTroopState.Active` 的调 `OnTroopRouted(desc, false)` 并给 `BattleObserver.TroopNumberChanged(..., -1, 0, 0, 1)`。**已受伤/已死的条目会被跳过。** |
| `HandleMapEventEnd` | `public void HandleMapEventEnd()` | 战后的收尾循环。每轮优先挑「非移动队伍 或 队伍不属于任何军队 或 自己不是军队统帅」，否则退回最后一个；交给 `HandleMapEventEndForPartyInternal` 处理。**循环条件是 `Parties.Count > 0`，靠队伍被移出列表来终止。** |
| `HandleMapEventEndForPartyInternal` | `internal void HandleMapEventEndForPartyInternal(PartyBase party)` | 单个队伍的结算。它会把 `DeathMark == KillCharacterActionDetail.DiedInBattle` 的英雄用 `KillCharacterAction.ApplyByBattle(hero, OtherSide.LeaderParty.LeaderHero)` 补杀、把 `party.MapEventSide` 置 null、决定是否 `DestroyPartyAction.Apply`、给 `MemberRoster` 与 `PrisonRoster` 各调一次 `RemoveZeroCounts()`。**`internal`，mod 调不到。** |
| `CommitXpGains` / `CommitRenownChanges` / `CommitInfluenceChanges` / `CommitMoraleChanges` / `CommitGoldChanges` | `public void Commit*()` | **五个纯转发**，各自遍历 `Parties` 调 `MapEventParty` 上的同名方法（注意 Party 侧第一个是单数 `CommitXpGain`）。本类不参与任何数值计算。**它们不做去重也不做校验**——重复调会重复结算。 |
| `AddHeroDamage` | `public static void AddHeroDamage(Hero character, int damage)` | **唯一的 static 方法**，只做一件事 `character.HitPoints -= damage`。纯扣血，无任何战果结算。 |

## 死成员与陷阱

下面每一行都是同一形态：工具报「0 调用点」，而 `grep -o -w` 能查到活跃引用。没有一条是死成员，全是工具看不见的类内访问。

| 成员 | 声明位置 | override | 调用点 | 判定 | 说明 |
|---|---|---|---|---|---|
| `_allocatedTroops` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:31` | 0 | 18 次（18 行） | UNSUPPORTED | 类内无点前缀的访问，全页引用最密的一个。 |
| `_simulationTroopList` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:64` | 0 | 13 次（10 行） | UNSUPPORTED | **13 次只落在 10 行上**——`:930`、`:931` 两行各提到多次。声明只有 `:64` 一处；`:126` 的 `public int NumRemainingSimulationTroops => _simulationTroopList` 是**使用**而不是第二次声明（表达式体属性的 `=>` 很容易被声明位判定吃掉）。 |
| `SimulationShipList` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:88` | 0 | 10 次（10 行） | UNSUPPORTED | 类内无点前缀的访问。 |
| `_requiresTroopCacheUpdate` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:28` | 0 | 6 次（6 行） | UNSUPPORTED | 类内无点前缀的访问。 |
| `_troopAllocationsLocked` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:67` | 0 | 6 次（6 行） | UNSUPPORTED | 类内无点前缀的访问。 |
| `_readyTroopsTemporaryCache` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:25` | 0 | 5 次（5 行） | UNSUPPORTED | 类内无点前缀的访问。 |
| `_partyStrengthCache` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:34` | 0 | 3 次（3 行） | UNSUPPORTED | 类内无点前缀的访问。 |
| `WeightedShipCombatFactor` | `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventSide.cs:91` | 0 | 1 次（1 行） | UNSUPPORTED | 1 次类内访问；即便只有 1 次，它也不是「没人用」。 |

口径：源码树 `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`，8,583 个 `.cs`（含 `bin/`）。调用点数是**出现次数**（`grep -o -w`），不是命中行数。

## 真实示例

战前查询——全部无副作用，可以在任意时刻调用：

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent == null)
{
    Debug.Print("player is not in a map event", 0);
    return;
}

MapEventSide attacker = mapEvent.AttackerSide;
MapEventSide defender = mapEvent.DefenderSide;

Debug.Print("attacker troops=" + attacker.TroopCount
    + " strength=" + attacker.RecalculateStrengthOfSide(), 0);
Debug.Print("defender troops=" + defender.TroopCount
    + " morale=" + defender.GetSideMorale(), 0);
Debug.Print("healthy at start: " + attacker.HealthyTroopCountAtMapEventStart, 0);
Debug.Print("other side is the mirror: " + (attacker.OtherSide == defender), 0);
```

按条件数一数某一边的兵力构成（`CountTroops` 收的是 `Func<FlattenedTroopRosterElement, bool>`）：

```csharp
MapEventSide side = MapEvent.PlayerMapEvent.PlayerSide == BattleSideEnum.Attacker
    ? MapEvent.PlayerMapEvent.AttackerSide
    : MapEvent.PlayerMapEvent.DefenderSide;

int heroesOnSide = side.GetTotalHealthyHeroCountOfSide();
int healthyOnSide = side.GetTotalHealthyTroopCountOfSide();
int rangedOnly = side.CountTroops(element => element.Troop.IsRanged);

Debug.Print("heroes=" + heroesOnSide + " healthy=" + healthyOnSide + " ranged=" + rangedOnly, 0);
```

按战种算这一边的声望与影响力收益——注意 `float[] strengthOfSide` 是**双方各一个元素**：

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
float[] strength = mapEvent.StrengthOfSide;

mapEvent.PlayerSide == BattleSideEnum.Attacker
    ? mapEvent.AttackerSide.CalculateRenownAndInfluenceValuesOnPartyInvolved(strength)
    : mapEvent.DefenderSide.CalculateRenownAndInfluenceValuesOnPartyInvolved(strength);

MapEventSide mine = mapEvent.PlayerSide == BattleSideEnum.Attacker
    ? mapEvent.AttackerSide
    : mapEvent.DefenderSide;

Debug.Print("strength ratio=" + mine.StrengthRatio
    + " renown=" + mine.RenownValue
    + " influence=" + mine.InfluenceValue, 0);
```

分配一批士兵进场——注意 `AllocateTroops` 的 `ref` 参数与条件委托：

```csharp
public static void PushFrontLine(MapEventSide side, int count)
{
    List<UniqueTroopDescriptor> spawned = null;

    side.AllocateTroops(
        ref spawned,
        count,
        (descriptor, party) => party.Party == PartyBase.MainParty);

    Debug.Print("allocated " + (spawned == null ? 0 : spawned.Count), 0);

    foreach (UniqueTroopDescriptor descriptor in spawned)
    {
        // 四个反查方法查不到时返回 null，调用方必须判空
        CharacterObject troop = side.GetAllocatedTroop(descriptor);
        PartyBase owner = side.GetAllocatedTroopParty(descriptor);

        Debug.Print((troop == null ? "null" : troop.StringId) + " from " + owner, 0);
    }
}
```

战况上报——**这些方法的入参描述符必须已经 `Allocate` 过**，因为内部用 `_allocatedTroops[...]` 字典索引器：

```csharp
public static void ReportKilled(MapEventSide side, UniqueTroopDescriptor descriptor)
{
    int before = side.TroopCasualties;

    side.OnTroopKilled(descriptor);

    Debug.Print("casualties " + before + " -> " + side.TroopCasualties
        + ", casualty strength = " + side.CasualtyStrength, 0);
}
```

战后结算的固定顺序——五个 Commit 都在 Side 侧，数值都在 Party 侧：

```csharp
public static void SettleAfterBattle(MapEvent mapEvent, BattleSideEnum side)
{
    MapEventSide mapEventSide = mapEvent.GetMapEventSide(side);

    mapEventSide.CommitXpGains();
    mapEventSide.CommitRenownChanges();
    mapEventSide.CommitInfluenceChanges();
    mapEventSide.CommitMoraleChanges();
    mapEventSide.CommitGoldChanges();

    foreach (MapEventParty party in mapEventSide.Parties)
    {
        Debug.Print("renown=" + party.GainedRenown
            + " influence=" + party.GainedInfluence
            + " morale=" + party.GainedMorale
            + " plundered gold=" + party.PlunderedGold, 0);
    }

    mapEventSide.HandleMapEventEnd();
}
```

投降与溃逃的区别——`Surrender` 只清统帅队伍的非英雄，`Route` 只动 `Active` 状态的：

```csharp
public static void GiveUp(MapEventSide side)
{
    side.Surrender();
    Debug.Print("leader party is now empty of non-heroes", 0);
}

public static void BreakAndRun(MapEventSide side)
{
    side.Route();

    // 已受伤 / 已阵亡的条目不会被 Route 再次标记
    Debug.Print("remaining simulation troops = " + side.NumRemainingSimulationTroops, 0);
}
```

## 风险与边界

- **`MissionSide` 的名字有误导性。** 它是 `BattleSideEnum`（`Defender=0` / `Attacker=1`），也是 `MapEvent._sides` 的数组下标，与 mission 里的阵营编号不是同一套。
- **构造函数是 `internal`。** 只能由 `MapEvent` 在 `_sides[0] = new MapEventSide(this, Defender, defenderParty)` 处创建。
- **`AllocateTroop` / `AddPartyInternal` / `RemovePartyInternal` / `HandleMapEventEndForPartyInternal` / `InvalidateSimulationSetup` 都是 `internal`。** mod 能调的只有 `AllocateTroops`（批量版）与 `AllocateShips` / `AllocateSiegeEngines`。
- **`OnTroop*` 四个方法用字典索引器。** 描述符不在 `_allocatedTroops` 里会抛 `KeyNotFoundException`，没有 null 检查。
- **`GetTroops()` 可能返回 null。** `_simulationTroopList` 在 `MakeReadyForSimulation` 之前一直是 null。
- **`GetAllocatedTroop` / `GetReadyTroop` 等四个反查返回 null 而非抛异常。** 判空是调用方的责任。
- **`TroopCount` 每次访问都重算。** 在循环里读它等于 O(n²)。
- **`CalculateRenownAndInfluenceValuesOnPartyInvolved` 里的 `StrengthRatio` 被硬夹在 10 以内。** 悬殊的战力比不会反映在声望收益上。
- **`GetSideMorale` 有 30 的地板。** 围城战里 Defenders 或已进领主厅的一方士气不会低于 30——**读士气做 AI 判断时要记住这个下限**。
- **`StrengthRatio` / `RenownValue` / `InfluenceValue` 只由那一个方法写入。** 别的路径不会更新它们。
- **`AllocateTroops` 的 `ref` 参数会被 `Clear()`。** 传一个已经有内容的列表进去，内容会被清空重填。
- **`MakeReadyForMission` 会解锁。** 它第一步就是 `InvalidateSimulationSetup()`，所以 mission 侧准备**会把之前的模拟分配作废**。
- **`_troopAllocationsLocked` 一旦为真就很难解开。** `MakeReadyForSimulation` 与 `EndSimulation` 都直接 return，只有 `InvalidateSimulationSetup`（internal）和 `MakeReadyForMission` 会解开它。
- **`Commit*` 五个方法不做去重。** 重复调用会重复结算声望/影响力/士气/金币。
- **`Surrender` 只处理统帅队伍。** 其它参战队伍不会因为本边投降而被清空。
- **`HandleMapEventEnd` 的循环靠队伍移出列表终止。** 如果某条路径没能把队伍移出，这里会死循环。
- **`CasualtyStrength` 对 routed 只加 10%。** 但 `TroopCasualties` 照加，所以「伤亡数」与「伤亡战力」不是同一个口径。
- **`ShipCasualties` 累加的是伤害值不是船数。** 读它当「损失了几条船」是错的。
- **存档与缓存分离。** `[CachedData]` 的五张表读档后是空的，必须重建；`_battleParties` 走 `[SaveableField(30)]`。
- **`MapEvent.BattleObserver` 是 `internal`。** `AllocateTroops` 内部用它通知 UI，mod 无法替换这个观察者。

## 依赖关系

- 宿主事件：[MapEvent](../MapEvent) 的 `_sides` 数组、`GetMapEventSide(BattleSideEnum)`、`AttackerSide` / `DefenderSide`、`StrengthOfSide`、`SimulationContext`、`EventType`、`MapEventSettlement`、`BattleState`、`EndedByRetreat` 全部是本类的数据来源
- 队伍侧：[MapEventParty](../MapEventParty) 的 `Party` / `Troops` / `HealthyManCountAtStart` / `HasTroopLimit` / `ContributionToBattle` / `GainedRenown` / `GainedInfluence` / `GainedMorale` / `PlunderedGold` / `DiedInBattle` / `WoundedInBattle` / `RoutedInBattle`，以及 `CommitXpGain` / `CommitRenownChanges` / `CommitInfluenceChanges` / `CommitMoraleChanges` / `CommitGoldChanges` / `TrimRosterToAllocatedTroops`
- 战力模型：[MilitaryPowerModel](../../campaign/MilitaryPowerModel) 的 `GetTroopPower(troop, side, context, leaderModifier)` 是三个 `OnTroop*` 累加 `CasualtyStrength` 的唯一原语
- 战斗模拟模型：`CombatSimulationModel.GetSettlementAdvantage(settlement)` 决定围城攻守系数，是声望/影响力公式的输入
- 士兵描述符：[UniqueTroopDescriptor](../../core-extra/UniqueTroopDescriptor) 是 `_allocatedTroops` 与 `_readyTroopsTemporaryCache` 两张字典的键，也是所有 `OnTroop*` 的入参
- 士兵载体：[FlattenedTroopRoster](../FlattenedTroopRoster) 与 `FlattenedTroopRosterElement` 是 `CountTroops` 的委托入参与 `_readyTroopsPriorityList` 的元素类型
- 队伍基类：[PartyBase](../../campaign/PartyBase) 提供 `MemberRoster` / `NumberOfHealthyMembers` / `GetCustomStrength` / `SetVisualAsDirty`；`PartyBase.MainParty` 是 `IsMainPartyAmongParties` 与多个分配条件的参照
- 连带动作：`KillCharacterAction.ApplyByBattle(hero, killer)` 补杀战死英雄、`DestroyPartyAction.Apply(destroyer, destroyed)` 解散空队，均在 `HandleMapEventEndForPartyInternal` 里
- 围城上下文：[Settlement](../../campaign/Settlement) 的 `SiegeState`（领主厅判定）与 [SiegeEvent](../SiegeEvent) 的围城生命周期共同决定 `GetSideMorale` 的 30 点地板何时生效
- mission 侧对照：[CampaignSiegeStateHandler](../CampaignSiegeStateHandler) 是同一场围城战在 mission 侧的对应角色——它读 `PlayerEncounter.Battle` 的属性，而本页负责这些属性的计算与结算
- 桶首页：[campaign-ext API 分区](../)

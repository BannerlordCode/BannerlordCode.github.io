---
title: "Settlement"
description: "地图地点聚合体：城镇、城堡、村庄与藏身处，含所有者、守备军、城墙、攻城状态、绑定村庄与忙碌仲裁。"
---

# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## 概述

`Settlement` 是地图侧的地点对象。每一个有人居住的地方都由一个 `Settlement` 实例表示：一座 [Town](../Town)（城镇或城堡）、一个 [Village](../Village)，或一个藏身处。专门化的数据存放在多态的 `SettlementComponent` 中——`Town`、`Village`、`Hideout`——通过 `SettlementComponent` 访问。

一个聚落拥有：

- **身份与位置。** `Name`、`Position`、`GetPosition2D()`、`Culture`、`IsActive`。
- **政治。** `Owner`（一个 [Hero](../Hero)）、`OwnerClan`（一个 [Clan](../Clan)）、`MapFaction`、`InRebelliousState`。
- **武力。** `Party`（守备 [PartyBase](../PartyBase)）、`MilitiaPartyComponent`、民兵数值、`PatrolParty`、城墙耐久与 `SiegeEvent`。
- **经济。** `ItemRoster`、`Stash`、组件上的 `TradeTaxAccumulated` 以及组件上的 `MarketData`。
- **地理。** `BoundVillages`（城镇与城堡）、`LocationComplex`、`GatePosition`、`PortPosition`、`HasPort`。

它还提供一套小型仲裁服务：`IsSettlementBusy(asker)` / `GetSettlementBusynessPriority(asker)` 决定某个部队此刻能否在此聚落做某件事。

## 心智模型

`Settlement` 是把部队、英雄、氏族与地图场景连接起来的枢纽：

```
Settlement
 ├─ SettlementComponent ─► Town（城镇 / 城堡）或 Village 或 Hideout
 │      ├─ Prosperity / Loyalty / Security / Militia / Workshops（Town）
 │      └─ Hearth / VillageState / bound 与 trade-bound（Village）
 ├─ Party (PartyBase)  ── 守备名册，IsSettlement = true
 ├─ Owner (Hero) ──► Clan (OwnerClan) ──► Kingdom
 ├─ SiegeEvent / SiegeEngines / SiegeState / BattleSide
 ├─ BoundVillages（绑定到该封地的村庄）
 └─ Position ──► SettlementVisual（地图场景）
```

典型调用顺序：

```
MBSubModuleBase.OnCampaignStart
    Settlement.All 已填充；SettlementComponent.OnInit 已执行
CampaignBehaviorBase.RegisterEvents()
    CampaignEvents.SettlementEntered / DailyTickSettlementEvent / OnSiegeEventStartedEvent
DailyTick / HourlyTick
    读取 settlement.Party.MemberRoster、settlement.Owner、settlement.SiegeEvent
    通过 settlement.AddGarrisonParty() / settlement.OnPartyInteraction(party) 修改
    CampaignEvents.DailyTickSettlementEvent 会逐个聚落触发，对象直接传给你
```

实际开发中最容易踩的坑：

- **读取城镇 / 村庄字段前先确认组件类型。** 对村庄来说 `settlement.Town` 为 null，对封地来说 `settlement.Village` 为 null。用 `settlement.IsVillage` / `IsTown` / `IsFortification`，或者对 `SettlementComponent` 做分支。
- **`IsSettlementBusy` 不是锁。** 它报告当前在该聚落上被占用的最高优先级。先调用再立刻执行是竞态的；把它当作过滤器，而不是预约。
- **`Position` 是 `CampaignVec2`，不是 `Vec2`。** `Settlement.Position` 与 `GetPosition2D()` 类型不同，地图实体代码期望前者。混用会悄悄破坏距离计算。
- **`Owner` 是英雄而不是氏族。** `Owner` 是本地总督 / 军阀，`OwnerClan` 才是政治所有者。改其中一个不会连带改另一个。
- **`GarrisonWagePaymentLimit` 与 `SettlementHitPoints` 的 setter 受限。** 分别是 `private set` 与 `internal set`。请用 `SetGarrisonWagePaymentLimit` 与攻城模型。
- **战争迷雾属于视图层问题。** `IsVisible` 与 `IsInspected` 会随玩家视野变化；mod 若为一个未被侦察的聚落读取 `settlement.Party.MemberRoster`，就是在读玩家还没挣到的数据。

## 依赖关系

| 方向 | 类型 | 关系 |
|-----------|------|--------------|
| 存储 | `MBObjectBase` | 通过 `ISettlementDataHolder` 存档 |
| 组件 | `SettlementComponent` | `Town`、`Village`、`Hideout` 载荷 |
| 部队 | [PartyBase](../PartyBase)、[MobileParty](../MobileParty) | `Party` 守备军、`Parties`、巡逻、民兵 |
| 人物 | [Hero](../Hero) | `Owner`、`Notables`、`HeroesWithoutParty` |
| 政治 | [Clan](../Clan)、[Kingdom](../Kingdom) | `OwnerClan`、`MapFaction` |
| 攻城 | `SiegeEvent`、`SiegeEventManager` | `SiegeEvent`、`SiegeEngines`、`BattleSide`、`CurrentSiegeState` |
| 地图场景 | [SettlementVisual](../../campaign-ext/SettlementVisual) | 聚落的视觉对应物 |
| 事件 | [CampaignEvents](../CampaignEvents) | `SettlementEntered`、`DailyTickSettlementEvent`、`OnSiegeEventStartedEvent`、`SiegeCompletedEvent` |

## 主要成员

### 身份与位置

#### `public TextObject Name` / `public override TextObject GetName()`

本地化显示名。`GetName()` 是 `MBObjectBase` 的重写；两者返回同一个值。

#### `public CampaignVec2 Position` / `public Vec2 GetPosition2D()`

地图位置。`Position` 是战役层使用的战役空间类型；`GetPosition2D()` 为旧调用点返回普通 `Vec2`。

#### `public static Settlement CurrentSettlement`

玩家当前所在的聚落。在战役地图与菜单中为 `null`。

#### `public static MBReadOnlyList<Settlement> All`

全部聚落。活动视图，不是快照。

#### `public static Settlement Find(string idString)` / `FindFirst(Func<Settlement,bool>)` / `FindAll(Func<Settlement,bool>)`

查找辅助方法。`FindAll` 会遍历所有聚落——避免在逐 tick 循环里使用。

#### `public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`

空间查询的起点。返回一个不透明游标；反复喂给 `FindNextLocatable(ref data)` 直到不再产出。这是“不扫全表地查询某个位置附近有什么”的受支持方式。

### 类型判别

#### `public bool IsTown` / `IsCastle` / `IsFortification` / `IsVillage` / `IsHideout`

类型标志。`IsFortification` 对城镇和城堡都为真，是“有没有城墙”的正确判据。

#### `public SettlementComponent SettlementComponent { get; private set; }`

多态载荷。只有在 `OnInit` 失败的对象上才为 `null`。

#### `public Town Town` / `public Village Village` / `public Hideout Hideout`

类型化快捷方式。除非聚落就是该类型，否则各自为 `null`。

### 所有权与政治

#### `public Hero Owner`

在本地拥有该聚落的英雄。叛军控制下的聚落与藏身处为 `null`。

#### `public Clan OwnerClan`

拥有该聚落的氏族。AI 与王国政治使用的就是这个值。

#### `public IFaction MapFaction`

控制该聚落的派系——通常是 `OwnerClan`，但会经过叛乱状态解析。

#### `public bool InRebelliousState` / `public bool IsStarving` / `public bool IsRaided` / `public bool IsUnderRaid` / `public bool IsUnderSiege`

状态标志。`IsStarving` 由聚落的食物模型计算，其余是战役状态。

### 守备军与民兵

#### `public PartyBase Party { get; private set; }`

守备军。它上面 `IsSettlement` 为真，这正是通用部队代码区分守备队与机动部队的方式。

#### `public float Militia` / `public MilitiaPartyComponent MilitiaPartyComponent`

城镇民兵池。数值来自民兵模型，组件则是可生成的部队。

#### `public MBReadOnlyList<MobileParty> Parties` / `public PatrolPartyComponent PatrolParty`

当前位于该聚落的部队，以及聚落自身的巡逻队。

#### `public MBReadOnlyList<Hero> Notables` / `HeroesWithoutParty`

名士角色，以及没有部队的名士。

#### `public void AddGarrisonParty()`

按守备模型填充守备军。应在聚落创建后调用，或在你确实想重建守备军时调用——对已有守备军的聚落反复调用会让名册翻倍。

### 城墙、攻城与战斗

#### `public float SettlementHitPoints { get; internal set; }` / `public float SettlementTotalWallHitPoints` / `public int WallSectionCount`

城墙耐久。`internal set` 意味着 mod 不能直接写总值，请用 `SetWallSectionHitPointsRatioAtIndex`。

#### `public void SetWallSectionHitPointsRatioAtIndex(int index, float hitPointsRatio)`

破坏指定城墙段的唯一受支持方式。比值范围 0..1；越界索引会抛异常。

#### `public SiegeEvent SiegeEvent { get; set; }` / `public bool IsUnderSiege`

当前攻城。`SiegeEvent` 有公开 setter，但在攻城进行中赋值会绕过攻城管理器的记账——请通过攻城管理器发起攻城。

#### `public Settlement.SiegeState CurrentSiegeState` / `public void SetNextSiegeState()` / `public void ResetSiegeState()`

攻城阶段状态机（Outside、BeforeBattle、Ongoing、Completed、Broken……）。`SetNextSiegeState` 推进它；`ResetSiegeState` 回到空闲。

#### `public SiegeStrategy SiegeStrategy { get; private set; } / public void SetSiegeStrategy(SiegeStrategy strategy)`

AI 选定的攻城方案。读它可以预测行为，写它要走 setter。

#### `public BattleSideEnum BattleSide`

战斗中聚落守备军所属的阵营。

### 位置与忙碌仲裁

#### `public LocationComplex LocationComplex { get; private set; }`

进入聚落时在任务侧使用的位置图。

#### `public bool IsSettlementBusy(object asker)` / `IsSettlementBusy(object asker, int limitingPriority)` / `public int GetSettlementBusynessPriority(object asker)`

需要占用聚落的动作（休息、攻城、AI 对话）的优先级仲裁。常量见 `SettlementBusynessPriority`。

### 生命周期

#### `public void OnSessionStart()` / `public void OnGameCreated()` / `public void OnFinishLoadState()`

会话、战役创建与反序列化之后的钩子。官方会调用它们；手动创建聚落的 mod 必须按相同顺序调用，否则聚落将没有组件、没有名册、也没有价格模型。

#### `protected override void AfterLoad()`

存档修复钩子。手改聚落字段之所以只在重载后才出问题，就是因为它。

## 使用示例

### 示例 1：用正确的事件形状响应进入聚落

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public sealed class SettlementGreeterBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // IMbEvent<MobileParty, Settlement, Hero>
        CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEntered);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        if (settlement == null || !party.IsMainParty)
        {
            return;
        }

        PartyBase garrison = settlement.Party;
        InformationManager.DisplayMessage(
            new InformationMessage($"{settlement.Name}：守备军 {garrison.NumberOfAllMembers}"));
    }
}
```

### 示例 2：不必扫描 `Settlement.All` 也能遍历附近聚落

```csharp
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static int CountSettlementsNear(Vec2 position, float radius)
{
    LocatableSearchData<Settlement> data =
        Settlement.StartFindingLocatablesAroundPosition(position, radius);

    int found = 0;
    for (Settlement s = Settlement.FindNextLocatable(ref data);
         s != null;
         s = Settlement.FindNextLocatable(ref data))
    {
        found++;
        if (s.Village != null)
        {
            float hearth = s.Village.Hearth;
            _ = hearth;
        }
        else if (s.Town != null)
        {
            float prosperity = s.Town.Prosperity;
            _ = prosperity;
        }
    }

    return found;
}
```

### 示例 3：以受支持的方式破坏一段城墙

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static void BreachFirstWallSegment(Settlement settlement)
{
    if (settlement == null || !settlement.IsFortification || settlement.WallSectionCount <= 0)
    {
        return;
    }

    settlement.SetWallSectionHitPointsRatioAtIndex(0, 0f);
    InformationManager.DisplayMessage(
        new InformationMessage($"{settlement.Name} 城墙耐久：{settlement.SettlementTotalWallHitPoints:0}"));
}
```

### 示例 4：有意识地重建守备军

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public static void EnsureGarrison(Settlement settlement)
{
    if (settlement == null)
    {
        return;
    }

    PartyBase garrison = settlement.Party;
    if (garrison == null || !garrison.IsSettlement)
    {
        return;
    }

    if (garrison.NumberOfAllMembers > 0)
    {
        return;
    }

    // 只在守备军为空时调用；AddGarrisonParty 是追加而非重置。
    settlement.AddGarrisonParty();
}
```

## 风险与崩溃边界

1. **组件为 null。** `SettlementComponent`、`Town`、`Village` 在 `OnInit` 执行前为 null，在类型不匹配时也为 null。对村庄读 `settlement.Town.Prosperity` 会抛异常。
2. **手动构建聚落。** `new Settlement(name, locationComplex, pt)` 会跳过 `OnGameCreated`、`OnSessionStart` 与 `AfterLoad`，留下一个没有价格、没有民兵、没有名册的聚落。请走战役自身的聚落创建流程。
3. **`SetWallSectionHitPointsRatioAtIndex` 的边界。** `index` 超出 `0..WallSectionCount-1` 会抛异常；`hitPointsRatio` 超出 0..1 会破坏城墙计算。
4. **直接赋值 `SiegeEvent`。** setter 存在，但攻城管理器维护着自己的状态；手动赋值会让管理器、攻城阵营列表与城墙耐久三方不一致。
5. **`Owner` 与 `OwnerClan`。** 只改 `Owner` 不会改变王国政治；只改 `OwnerClan` 会让总督身份不一致。请走聚落易主动作。
6. **与存档耦合。** `IsActive`、`SettlementHitPoints`、`BribePaid`、`SiegeEvent` 引用与 `ItemRoster` 全部通过 `ISettlementDataHolder` 序列化。重新编号存档 id 会破坏已有存档，参见 [存档系统](../../../architecture/save-system)。
7. **对任务的跨域依赖。** `LocationComplex` 只在任务内部有效。在每日 tick 处理器里读它没问题，在那里创建任务对象则不行。
8. **可见性门控。** `IsVisible` / `IsInspected` 随玩家视野变化；通过通知泄露守备军规模等于绕过了游戏本就该有的战争迷雾模型。

## 跨版本提示

- 上面列出的 1.3.0 接口面与 1.3.x 一致。后续 1.3.x / 1.4.x 构建在港口路径上增加了海军相关属性，并为征服机制重做添加了额外状态标志，但 `Owner`、`OwnerClan`、`Party`、`SettlementComponent` 与城墙 API 形状不变。
- `SetWallSectionHitPointsRatioAtIndex` 与 `StartFindingLocatablesAroundPosition` 在 1.4.x 中未变，因此针对它们写的行为代码可以在新存档上加载。

## 参见

- [Town](../Town) — 含繁荣、忠诚与工坊的封地组件
- [Village](../Village) — 含火炉与状态的村庄组件
- [PartyBase](../PartyBase) — 守备名册对象
- [MobileParty](../MobileParty) — 造访聚落的部队
- [Clan](../Clan) — 政治所有者
- [Hero](../Hero) — `Owner` 与名士
- [FactionManager](../FactionManager) — `MapFaction` 背后的战争状态
- [SettlementVisual](../../campaign-ext/SettlementVisual) — 地图场景对象
- [存档系统](../../../architecture/save-system) — Saveable 属性纪律
- [战役基础](../../../guide/campaign-basics) — 以任务为导向的上手指南
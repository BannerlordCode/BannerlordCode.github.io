---
title: "Settlement"
description: "战役地图上的据点：城镇、城堡、村庄、强盗巢穴。"
---
# Settlement

**Namespace:** TaleWorlds.CampaignSystem.Settlements  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class Settlement : PartyBase, ILocatable`  
**Base:** `PartyBase`  
**File:** `TaleWorlds.CampaignSystem/Settlements/Settlement.cs`

## 概述

`Settlement` 是 Bannerlord 战役地图上**所有固定据点的统一抽象**：城镇（Town）、城堡（Castle）、村庄（Village）、强盗巢穴（Hideout）、弩炮战地等。它同时是一些静态地理实体，也是 `PartyBase`（驻军、民兵、物品 stash）。

主要作用：

- 表示地图上的固定地点：位置、名称、组件（Town/Village/Castle/Hideout）、所有权（Clan/Kingdom）。
- 管理驻军（Garrison）、民兵（Militia）、地牢囚犯、粮仓和 stash。
- 提供围攻状态、繁荣度、安全度、忠诚度等数据（具体在对应 `SettlementComponent` 中）。
- 是 `MobileParty` 移动、交易、任务的目标。

## 心智模型

把 `Settlement` 想成**“地点的入口对象”**：

- 先拿到 `Settlement`，再判断它具体是什么：`settlement.IsTown`、`settlement.IsCastle`、`settlement.IsVillage`、`settlement.IsHideout`。
- 具体数据在 `SettlementComponent` 里：`settlement.SettlementComponent` 可向下转型为 `Town`、`Village`、`Castle`、`Hideout`。
- `Settlement.Party` 是驻军部队（garrison），`MilitiaPartyComponent` 是民兵。
- 玩家当前所在据点：`Settlement.CurrentSettlement`。

## 如何获取 Settlement

```csharp
Settlement current = Settlement.CurrentSettlement;

Settlement town = Settlement.Find("town_A7"); // Khuzait 城镇示例

Settlement richTown = Settlement.FindFirst(s => s.IsTown && s.Town.Prosperity > 6000f);

foreach (Settlement s in Settlement.All)
{
    if (s.OwnerClan == Clan.PlayerClan)
    {
        // 玩家拥有的据点
    }
}
```

## 核心属性

| 属性 | 说明 |
|------|------|
| `All` | 所有据点。 |
| `CurrentSettlement` | 玩家当前所在据点。 |
| `SettlementComponent` | 底层组件（Town/Castle/Village/Hideout）。 |
| `OwnerClan` / `MapFaction` | 拥有者氏族 / 所属阵营。 |
| `Party` | 驻军 `PartyBase`。 |
| `GarrisonWagePaymentLimit` | 驻军工资上限。 |
| `GatePosition` / `PortPosition` | 城门 / 港口位置。 |
| `HasPort` | 是否有港口。 |
| `IsUnderSiege` / `CurrentSiegeState` | 围城状态。 |
| `SiegeEvent` | 当前围攻事件。 |
| `Stash` | 玩家在该据点的 stash（仅部分据点有）。 |
| `Alleys` | 小巷列表。 |
| `IsTown` / `IsCastle` / `IsVillage` / `IsHideout` | 据点类型判断。 |

## 主要方法

### `public static Settlement Find(string idString)`
按 string ID 查找据点。

```csharp
Settlement khuzaitTown = Settlement.Find("town_A7");
```

### `public static Settlement FindFirst(Func<Settlement, bool> predicate)`
按条件查找第一个据点。

```csharp
Settlement firstPlayerSettlement = Settlement.FindFirst(s => s.OwnerClan == Clan.PlayerClan);
```

### `public void AddGarrisonParty()`
为该据点生成/补充驻军。

```csharp
mySettlement.AddGarrisonParty();
```

### `public float GetValue(Hero hero = null, bool countAlsoBoundedSettlements = true)`
计算据点对该英雄/阵营的价值。

```csharp
float value = enemyTown.GetValue(Hero.MainHero);
```

### `public bool IsSettlementBusy(object asker)` / `IsSettlementBusy(object asker, int limitingPriority)`
判断据点当前是否忙于其他任务或场景。

```csharp
bool busy = town.IsSettlementBusy(this);
```

### `public void SetNextSiegeState()` / `public void ResetSiegeState()`
推进 / 重置围城阶段。

```csharp
if (town.IsUnderSiege) town.SetNextSiegeState();
```

### `public void SetSiegeStrategy(SiegeStrategy strategy)`
设置围城策略。

```csharp
town.SetSiegeStrategy(DefaultSiegeStrategies.PrepareCrossbows);
```

### `public static LocatableSearchData<Settlement> StartFindingLocatablesAroundPosition(Vec2 position, float radius)`
查询某半径内的据点。

```csharp
var data = Settlement.StartFindingLocatablesAroundPosition(center, 50f);
Settlement nearby = Settlement.FindNextLocatable(ref data);
```

### `public void OnPartyInteraction(MobileParty engagingParty)`
当一支部队与该据点交互时触发。

```csharp
public override void OnPartyInteraction(MobileParty engagingParty)
{
    base.OnPartyInteraction(engagingParty);
    if (engagingParty == MobileParty.MainParty)
    {
        InformationManager.DisplayMessage(new InformationMessage("部队抵达据点。"));
    }
}
```

## 典型用法示例

### 示例 1：给玩家所有城镇加繁荣度

```csharp
foreach (Settlement s in Settlement.All)
{
    if (s.IsTown && s.OwnerClan == Clan.PlayerClan)
    {
        s.Town.Prosperity += 1000f;
    }
}
```

### 示例 2：传送玩家部队到指定城镇门口

```csharp
Settlement target = Settlement.Find("town_A7");
MobileParty.MainParty.SetMoveGoToSettlement(target, NavigationType.Default, false);
MobileParty.MainParty.Position2D = target.GatePosition;
```

### 示例 3：检查村庄是否属于敌对王国

```csharp
bool IsEnemyVillage(Settlement settlement) =>
    settlement.IsVillage && settlement.MapFaction.IsAtWarWith(Hero.MainHero.MapFaction);
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 的 `Settlement` 核心查找与属性一致。
- v1.4.5 增加了更多港口与海军相关属性（`HasPort`、`PortPosition`）。
- 经济/忠诚度相关字段在各版本间位置相同，但部分属性名称可能略有调整。

## 参见

- [Town](../../campaign-ext/Town/) / [Village](../Village/) / [Castle](../../campaign-ext/CastleEncounter/) — 具体据点组件
- [MobileParty](../MobileParty/) — 在地图上移动并进入据点的部队
- [Clan](../Clan/) — 据点的拥有者
- [SiegeEvent](../../campaign-ext/SiegeEvent/) — 围攻逻辑
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 监听据点事件

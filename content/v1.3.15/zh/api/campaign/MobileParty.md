---
title: "MobileParty"
description: "战役地图上移动的部队：玩家部队、领主部队、商队、村民、强盗等。"
---
# MobileParty

**Namespace:** TaleWorlds.CampaignSystem.Party  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class MobileParty : PartyBase, ILocatable`  
**Base:** `PartyBase`  
**File:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## 概述

`MobileParty` 是 Bannerlord 战役地图上**所有移动部队的抽象**：玩家的军队、领主巡逻队、商队、村民队伍、强盗窝、驻军等。它是连接 `Hero`（领主）、`Settlement`（据点）、`Army`（军团）和 `ItemObject`（物品/贸易）的枢纽。

Core responsibilities:

- 在战役地图上移动、寻路、改变目标。
- 管理成员名册（`MemberRoster`）、囚犯（`PrisonerRoster`）、士气、食物、金币。
- 提供移动命令 API：`SetMoveEngageParty`、`SetMoveRaidSettlement`、`SetMovePatrolAroundSettlement` 等。
- 追踪 AI 目标与短期行为（`AiBehavior`、`ShortTermBehavior`）。

## 心智模型

把 `MobileParty` 看作**“地图上的一个可移动容器”**：

- `MobileParty.MainParty` 就是玩家自己。
- 每个 `MobileParty` 内部有一个 `PartyBase`（更底层的数据与名册）。
- 不要直接 `new MobileParty()`；通常用 `MobileParty.CreateParty(...)` 或让引擎从 `PartyTemplateObject` 生成。
- 改变位置用 `SetPositionAfterMapChange`；改变目标用 `SetMove*` 系列方法；改变 AI 用 `Ai` 属性。
- 部队状态由 `PartyComponent` 包装（领主、商队、强盗等），通过 `Component` 访问具体行为。

## 如何获取 MobileParty

```csharp
MobileParty main = MobileParty.MainParty;

foreach (MobileParty party in MobileParty.All)
{
    if (party.IsLordParty && party.MapFaction == Hero.MainHero.MapFaction)
    {
        // 我方领主部队
    }
}
```

## 核心属性

| 属性 | 说明 |
|------|------|
| `MainParty` | 玩家部队。 |
| `All` | 所有活跃部队。 |
| `AllCaravanParties` / `AllBanditParties` / `AllLordParties` / `AllVillagerParties` / `AllGarrisonParties` | 按类型分类的队伍集合。 |
| `Party` | 底层 `PartyBase`，包含名册、物品、金币。 |
| `Ai` | `MobilePartyAi`，控制 AI 目标与寻路。 |
| `LeaderHero` | 部队领主英雄。 |
| `Army` | 所属军团（若有）。 |
| `CurrentSettlement` | 当前所在的据点（如果在据点内）。 |
| `TargetSettlement` | AI 正在前往的据点。 |
| `IsActive` | 是否仍然活跃。 |
| `IsLordParty` / `IsCaravan` / `IsBandit` / `IsVillager` / `IsGarrison` / `IsCustomParty` | 部队类型判断。 |

## 主要方法

### `public static MobileParty CreateParty(string stringId, PartyComponent component)`
创建一支新部队。需要提供一个 `PartyComponent` 来决定部队类型与行为。

```csharp
var component = new LordPartyComponent(myHero, myHero.HomeSettlement);
MobileParty party = MobileParty.CreateParty("my_mod_party", component);
party.InitializeMobilePartyAtPosition(new CampaignVec2(500f, 800f));
```

### `public void SetMoveGoToSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingThePort)`
命令部队前往据点。

```csharp
party.SetMoveGoToSettlement(targetTown, NavigationType.Default, false);
```

### `public void SetMoveEngageParty(MobileParty party, NavigationType navigationType)`
追击并交战指定部队。

```csharp
MobileParty enemy = FindNearestEnemy(party);
party.SetMoveEngageParty(enemy, NavigationType.Default);
```

### `public void SetMoveRaidSettlement(Settlement settlement, NavigationType navigationType)`
设置劫掠据点。

```csharp
party.SetMoveRaidSettlement(enemyVillage, NavigationType.Default);
```

### `public void SetMovePatrolAroundSettlement(Settlement settlement, NavigationType navigationType, bool isTargetingPort)`
在据点周围巡逻。

```csharp
party.SetMovePatrolAroundSettlement(friendlyTown, NavigationType.Default, false);
```

### `public void SetMoveModeHold()`
停止移动，原地驻扎。

```csharp
party.SetMoveModeHold();
```

### `public void SetPositionAfterMapChange(CampaignVec2 newPosition)`
在切换地图场景（如从海战返回）后恢复位置。

```csharp
party.SetPositionAfterMapChange(new CampaignVec2(100f, 200f));
```

### `public void AddElementToMemberRoster(CharacterObject element, int numberToAdd, bool insertAtFront = false)`
向成员名册添加士兵。

```csharp
CharacterObject recruit = MBObjectManager.Instance.GetObject<CharacterObject>("imperial_recruit");
party.MemberRoster.AddToCounts(recruit, 10);
```

### `public void AddPrisoner(CharacterObject element, int numberToAdd)`
添加囚犯。

```csharp
party.PrisonerRoster.AddToCounts(enemyTroop.Character, 5);
```

### `public void SetPartyScout(Hero hero)` / `SetPartyQuartermaster(Hero hero)` / `SetPartyEngineer(Hero hero)` / `SetPartySurgeon(Hero hero)`
为部队分配角色英雄，影响侦察、医术、工程、军需等技能。

```csharp
party.SetPartySurgeon(mySurgeonHero);
```

### `public int GetNumDaysForFoodToLast()`
计算当前粮食还能支撑几天。

```csharp
int days = party.GetNumDaysForFoodToLast();
```

### `public bool ComputeIsWaiting()`
判断部队是否处于等待/休息状态。

```csharp
 bool waiting = party.ComputeIsWaiting();
```

### `public void IgnoreForHours(float hours)`
让部队在指定小时内不被 AI 打扰，常用于任务脚本控制。

```csharp
party.IgnoreForHours(12f);
```

## 典型用法示例

### 示例 1：创建一支跟随玩家的友军巡逻队

```csharp
var lordComponent = new LordPartyComponent(friendlyHero, friendlyHero.HomeSettlement);
MobileParty escort = MobileParty.CreateParty("my_mod_escort", lordComponent);
escort.InitializeMobilePartyAtPosition(MobileParty.MainParty.Position2D);
escort.Ai.SetMoveEscortParty(MobileParty.MainParty);
```

### 示例 2：给玩家部队加满食物

```csharp
ItemObject grain = MBObjectManager.Instance.GetObject<ItemObject>("grain");
MobileParty.MainParty.ItemRoster.AddToCounts(grain, 100);
```

### 示例 3：让一支部队立即传送到某城镇

```csharp
party.SetMoveGoToSettlement(targetTown, NavigationType.Default, false);
party.Position2D = targetTown.GatePosition;
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5 核心移动命令 API 一致。
- v1.4.5 对海军航行和海战的支持增强；注意 `IsNavalVisualDirty`、`SetSailAtPosition` 等方法在 v1.4.5 中更完整。
- `NavigationType` 在较新版本中可能有新枚举值。

## 参见

- [Settlement](../Settlement/) — 部队可以进入、防御或劫掠的地点
- [Army](../../campaign-ext/Army/) — 多支部队组成的军团
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 监听部队事件
- [Hero](../Hero/) — 部队领主
- [PartyBase](../PartyBase/) — 底层名册与物品
- [MobilePartyAi](../../campaign-ext/MobilePartyAi/) — AI 行为控制

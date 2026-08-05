---
title: "ShipHelper：舰船展示与突袭选择"
description: "ShipHelper 是 v1.4.5 中解析舰船旗帜、帆色，并选择玩家浅水海上突袭舰船的静态工具。"
---
# ShipHelper

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class ShipHelper`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## 一句话职责

它为展示读取舰船或队伍的旗帜与帆色，并为海上突袭判定返回当前主队中符合浅水条件的优先舰船。它只读取当前对象或生成一个临时选择列表，不负责转移舰船、分配船员、改变所有权或启动遭遇任务。

## 心智模型

`ShipHelper` 是读取和选择工具。旗帜、帆色 overload 遵循明确的视觉归属回退顺序：有英雄船长时优先使用船长，然后使用舰船所有者或军团领袖的派系视觉；没有有效队伍或不支持的来源时使用中性默认值。Helper 返回的是选中所有者已有的 `Banner` 引用，不会创建新的战役所有者，也不会自动复制旗帜。

突袭方法每次从 `MobileParty.MainParty.Ships` 得到一个新的当前快照，筛选 `Ship.ShipHull.CanNavigateShallowWater`，按 `MainDeckCrewCapacity` 降序排列，最多取三艘。遭遇菜单用它检查是否有浅吃水舰船和可用船员；它不是预留舰船、分配船员或启动任务的方法。

## 何时使用，何时不要使用

- 展示系统有真实的船来源和可选的代理船长时，使用 `IShipOrigin` overload；SandBox 民用港口生成路径就是这种调用方式。
- 港口或队伍展示应跟随队伍旗帜或军团领袖派系时，使用 `PartyBase` overload。
- 菜单或遭遇即将作出判定、需要当前合格列表时，使用 `GetOrderedNavalRaidShipsOfPlayerParty`；只有在同一判定逻辑中，才把返回舰船的 `MainDeckCrewCapacity` 作为容量总和。
- 不要把返回的旗帜当成临时副本。英雄或队伍所有者的结果是实际 `Banner` 引用，修改它可能改变战役展示状态。
- 不要把突袭列表当成海上突袭一定能开始的证明。调用方仍会把它与健康部队人数和 `Campaign.Current.Models.EncounterModel.MinimumNumberOfMenForAttackingVillageViaScene` 结合。
- 不要传入任意 `IShipOrigin` 实现后期待 Helper 自动找到所有者信息。源码只有在对象实际是带非空 Owner 的 `Ship` 时才进入所有者分支。

## 依赖关系与回退图

```text
英雄船长 -----------------------+
                                  v
Ship / IShipOrigin -> ShipHelper -> Banner 或帆色
        |                         ^
队伍 / 军团领袖 ------------------+

MobileParty.MainParty.Ships
        -> 浅水筛选
        -> 船员容量排序
        -> 前 3 艘
        -> 海上遭遇菜单判定
```

- 视觉值：[`Banner`](../../core-extra/Banner)、`Hero.ClanBanner`、`MapFaction.Banner`、`MapFaction.Color` 和 `MapFaction.Color2`。
- 舰船输入：[`Ship`](../../campaign/Ship) 实现了展示生成代码使用的 [`IShipOrigin`](../../core-extra/IShipOrigin) 契约。
- 队伍输入：[`PartyBase`](../../campaign/PartyBase)、[`MobileParty`](../../campaign/MobileParty) 和可选军团领袖决定派系回退来源。
- 消费者：[`MenuHelper`](../MenuHelper)、`EncounterGameMenuBehavior`、`VillageHostileActionCampaignBehavior` 与 SandBox 的 `CivilianPortShipSpawnMissionLogic`。
- 相邻流程：[`PortStateHelper`](../PortStateHelper) 负责打开港口 UI，但本 Helper 不打开或结束该状态。

## 公开成员与精确回退顺序

| 成员 | 源码确认的行为 |
|---|---|
| `NavalRaidMissionShipLimit` | 值为 `3` 的公开常量。选择方法内部也使用字面量 `Take(3)`，所以仅修改这个常量不会改变本源码中的方法上限。 |
| `GetShipBanner(IShipOrigin shipOrigin, IAgent captain = null)` | 船长 `Character` 是英雄时返回 `HeroObject.ClanBanner`；否则带所有者的 `Ship` 在属于军团时返回军团领袖队伍旗帜，否则返回舰船所有者旗帜；其他情况返回 `Banner.CreateOneColoredEmptyBanner(92)`。 |
| `GetSailColors(IShipOrigin shipOrigin, IAgent captain = null)` | 英雄船长返回英雄派系的 `Color` 和 `Color2`；否则带所有者的舰船使用军团领袖派系或所有者派系颜色；其他情况返回 `(4291609515u, 4291609515u)`。 |
| `GetShipBanner(PartyBase party = null)` | null 队伍返回同一个单色空旗帜。属于军团的移动队使用军团领袖队伍旗帜；其他非 null 队伍使用 `party.Banner`。 |
| `GetSailColors(PartyBase party = null)` | null 队伍返回默认颜色对。属于军团的移动队使用军团领袖派系颜色；否则源码读取 `party.Owner.MapFaction.Color` 和 `Color2`。 |
| `GetOrderedNavalRaidShipsOfPlayerParty()` | 读取 `MobileParty.MainParty.Ships`，只保留可在浅水航行的舰船，按 `MainDeckCrewCapacity` 降序排列，并在新建的 `List<Ship>` 中最多返回三艘。 |

两个输入族并不完全相同。`IShipOrigin` 族可以优先使用英雄船长，而队伍族没有船长参数。队伍旗帜 overload 读取 `party.Banner`，但非军团帆色 overload 读取 `party.Owner.MapFaction`；在所有队伍配置下不能假定两者来自同一个对象。

## 真实 C# 示例

可以从存活的主队读取队伍展示和突袭资格：

```csharp
using System.Collections.Generic;
using System.Linq;
using Helpers;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyBase mainParty = PartyBase.MainParty;
Banner partyBanner = ShipHelper.GetShipBanner(mainParty);
(uint sailColor1, uint sailColor2) = ShipHelper.GetSailColors(mainParty);

List<Ship> raidShips = ShipHelper.GetOrderedNavalRaidShipsOfPlayerParty();
int shallowShipCrew = raidShips.Sum(ship => ship.MainDeckCrewCapacity);
```

这与遭遇菜单读取的是同一个实时来源。`shallowShipCrew` 只是当前容量快照；启用敌对操作前，调用方仍需检查遭遇模型的最低人数和主队健康部队人数。

真实的舰船来源展示路径在 SandBox 民用港口任务中，先取得 `Ship`，再传给同一个 overload 族：

```csharp
private void SpawnShip(Ship ship)
{
    IShipOrigin origin = (IShipOrigin)ship;
    (uint sailColor1, uint sailColor2) = ShipHelper.GetSailColors(origin, null);
}
```

在该源码调用路径中，`ship` 是方法真实持有的 `Ship` 参数，得到的颜色会传给 `VisualShipFactory.CreateVisualShip`。Mod 应从自己的当前战役或 Mission 流程取得 `ship`，不要伪造来源对象。

## 风险与生命周期边界

- Helper 返回所有者持有的旗帜。通过它拿到的队伍或英雄旗帜如果被修改，可能直接修改底层战役展示状态；需要临时视觉时，应有意识地复制 `Banner` 或遵循所有者支持的更新路径。
- 英雄优先级要求存在一个 `Character` 为英雄 `CharacterObject` 的有效船长。非英雄代理不会覆盖舰船或队伍回退结果。
- 军团回退读取 `MobileParty.Army.LeaderParty.MapFaction`。队伍或军团缺少有效派系时，Helper 没有额外防御检查，下游属性访问可能失败。
- 默认旗帜是参数 `92` 的单色空旗帜，默认帆色是精确的无符号数对 `(4291609515u, 4291609515u)`。不要把任一默认值解释成所有者派系颜色。
- `GetOrderedNavalRaidShipsOfPlayerParty` 假定战役主队和舰船集合已经存在。舰船所有权变化或销毁 Action 之后应重新查询，不要把返回列表保存成持久状态。
- 三艘舰船按容量排序，而不是按所有者、耐久、总船员或视觉质量排序。Helper 不保证舰船已经满员，也不保证遭遇有足够健康部队。
- 展示消费者必须遵守 Mission 和场景生命周期。`GetSailColors` 只返回颜色；`CivilianPortShipSpawnMissionLogic` 仍负责创建并清理视觉实体。

## 版本注记

本页依据 v1.4.5 的 `ShipHelper.cs`、`IShipOrigin.cs` 和海上遭遇调用点。源码声明 `NavalRaidMissionShipLimit = 3`，同时在选择方法中使用 `Take(3)`，默认帆色也是无符号常量。面向其他 Bannerlord 版本时应重新核对这两点。

## 导航

- [↑ API 系统索引](../)
- [↔ PortStateHelper](../PortStateHelper)
- [↔ MenuHelper](../MenuHelper)
- [相关：Ship](../../campaign/Ship)
- [相关：PartyBase](../../campaign/PartyBase)
- [相关：MobileParty](../../campaign/MobileParty)
- [相关：IShipOrigin](../../core-extra/IShipOrigin)
- [相关：Banner](../../core-extra/Banner)

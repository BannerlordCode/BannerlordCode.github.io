---
title: "BanditDensityModel"
description: "强盗密度的可替换平衡模型：13 个抽象成员覆盖藏身处数量上限、藏身处驻军数、藏身处遭遇战兵力上下限、每派系强盗 / 掠夺者上限与海上安全区判定。唯一实现是 DefaultBanditDensityModel。"
---

# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**Base:** `MBGameModel<BanditDensityModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs`

## 概述

`BanditDensityModel` 是**强盗生态的全部数量与容量规则的抽象契约**。它回答三类问题：**藏身处能开多少个**（`NumberOfMaximumHideoutsAtEachBanditFaction` / `NumberOfInitialHideoutsAtEachBanditFaction`）、**每个藏身处能驻多少队伍与多少兵**（`NumberOfMaximumBanditPartiesInEachHideout` / `NumberOfMaximumBanditPartiesAroundEachHideout` / `NumberOfMinimumBanditPartiesInAHideoutToInfestIt`）、**藏身处遭遇战和掠夺者能有多少人**（`GetMinimumTroopCountForHideoutMission` / `GetMaximumTroopCountForHideoutMission` / `NumberOfMaximumTroopCountForFirstFightInHideout` / `NumberOfMaximumTroopCountForBossFightInHideout` / `SpawnPercentageForFirstFightInHideoutMission` / `GetMaxSupportedNumberOfLootersForClan`）。

在体系里它承担的是**「数量规则从行为里抽离出来」**这一环。真正在生成强盗、开藏身处、跑遭遇战的是 [BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior)、[HideoutCampaignBehavior](../HideoutCampaignBehavior)、`AiLandBanditPatrollingBehavior` 这些行为，但它们**没有一个把数字写死**——全树 30 处调用全部走 `Campaign.Current.Models.BanditDensityModel.*`。这就是为什么改强盗密度只需要换模型，而不需要改行为。

唯一实现是 `DefaultBanditDensityModel`。它的默认数值是：藏身处上限 9 个 / 初始 7 个，藏身处内最多 3 支队伍、周边最多 3 支，达到 2 支即视为「被 infestation」，藏身处遭遇战最少 10 人，第一阶段上限 `Floor(11 * (2 + PlayerProgress))`，Boss 战上限 `Floor(1 + 5 * (1 + PlayerProgress))`，第一阶段生成比例 0.8，掠夺者上限 270（`deserters` 派系 50，且 looters 的上限要减去 deserters 的 WarPartyComponents 数量）。`IsPositionInsideNavalSafeZone` 的默认实现**恒返回 false**——官方不设海上安全区。

## 心智模型

把它当成**「强盗世界的密度旋钮面板」**就对了。

- **它只返回数字，不做任何事。** 所有成员都是纯查询。调用方（行为）拿到数字后自己决定怎么用。**模型不做生成、不做检查、不做缓存。**
- **`MBGameModel<T>` 单泛型参数意味着「一个 Campaign 一个实例」。** 通过 `Campaign.Current.Models.BanditDensityModel` 读取。返回 null 会让所有调用点 NRE——行为里没有一个判空。
- **`NumberOfMinimumBanditPartiesInAHideoutToInfestIt` 是被用得最广的一个。** 它不只是「 infestation 阈值」，还同时被 `Hideout.IsInfested`（`Hideout.cs:25`）、`AiLandBanditPatrollingBehavior`（`AiLandBanditPatrollingBehavior.cs:20/34`）、`IncidentEffect`（`IncidentEffect.cs:693`）当成同一个开关用。调它会同时改这四处的行为。
- **两个「藏身处兵力上限」是分开的两件事。** `NumberOfMaximumBanditPartiesInEachHideout` 管**藏身处里**的队伍数，`NumberOfMaximumBanditPartiesAroundEachHideout` 管**藏身处周边**的队伍数。`BanditSpawnCampaignBehavior.cs:41` 把两者相加成一个 `_numberOfMaxBanditCountPerClanHideout` 上限。
- **`GetMaxSupportedNumberOfLootersForClan` 不是常数。** `DefaultBanditDensityModel.cs:53-64` 里 looters 的上限是 `270 - DeserterClan.WarPartyComponents.Count`，**随战场上的逃兵军团数量浮动**。deserters 自己被硬编码成 50。调用点在 `BanditSpawnCampaignBehavior.cs:505` 和 `DesertersCampaignBehavior.cs:107/165`。
- **遭遇战人数是两个不同的问题。** `NumberOfMaximumTroopCountForFirstFightInHideout` 是**全局固定上限**，`GetMaximumTroopCountForHideoutMission(party, isAssault)` 是**按具体队伍与是否强攻计算的上限**。`HideoutCampaignBehavior.cs:609` 把两个 boss 阶段上限相加作为总预算。两者不是一回事，别混用。
- **`IsAssault` 参数改变一切。** `GetMinimumTroopCountForHideoutMission(party, false)` 默认返回 25，`isAssault: true` 返回 8；上限侧默认 40 对 15。**同一个方法在「被追击」和「主动强攻」两种语境下差三倍以上。**

### 13 个成员的调用点速查

| 成员 | 谁在读 | 决定什么 |
| --- | --- | --- |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `BanditSpawnCampaignBehavior.cs:35` | 每派系藏身处硬上限 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `BanditSpawnCampaignBehavior.cs:37` | 新游戏开局建的藏身处数 |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `Hideout.cs:25` / `BanditSpawnCampaignBehavior.cs:31` / `AiLandBanditPatrollingBehavior.cs:20` / `IncidentEffect.cs:693` | 藏身处是否被 infestation |
| `NumberOfMaximumBanditPartiesInEachHideout` | `BanditSpawnCampaignBehavior.cs:39` / `AiLandBanditPatrollingBehavior.cs:35` | 藏身处内驻军队伍上限 |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `BanditSpawnCampaignBehavior.cs:33` / `AiVisitSettlementBehavior.cs:508` | 藏身处周边游荡队伍上限 |
| `GetMaxSupportedNumberOfLootersForClan` | `BanditSpawnCampaignBehavior.cs:505` / `DesertersCampaignBehavior.cs:107,165` | 每派系掠夺者数量上限 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `HideoutCampaignBehavior.cs:608` | 藏身处遭遇战总人数下界 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `HideoutCampaignBehavior.cs:609` / `MapEventHelper.cs:150` | 第一阶段固定上限 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `HideoutCampaignBehavior.cs:609` | Boss 阶段固定上限 |
| `SpawnPercentageForFirstFightInHideoutMission` | `MapEventHelper.cs:150` | 第一阶段人数占目标的百分比 |
| `GetMinimumTroopCountForHideoutMission` | `HideoutCampaignBehavior.cs:481/520/580` | 按 `isAssault` 分支的最小守军 |
| `GetMaximumTroopCountForHideoutMission` | 藏身处遭遇战组装 | 按队伍与 `isAssault` 的最大守军 |
| `IsPositionInsideNavalSafeZone` | `MobilePartyAi.cs:1327/1364` | AI 选点时是否落在海上安全区 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt { get; }` | 藏住处被算作「被 infestation」的队伍门槛，默认 **2**。**它被四处当作同一个开关用**：`Hideout.cs:25` 把它写进 `Hideout.IsInfested`，`AiLandBanditPatrollingBehavior.cs:20` 用它决定强盗是否巡逻，`IncidentEffect.cs:693` 用它算事件效果，`BanditSpawnCampaignBehavior.cs:31` 用它算生成密度。调这一个数字会同时改这四条路径。 |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout { get; }` | **藏住处内部**驻留的强盗队伍上限，默认 **3**。`BanditSpawnCampaignBehavior.cs:41` 把它和周边上限相加成 `_numberOfMaxBanditCountPerClanHideout`。 |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout { get; }` | **藏住处周边**游荡的队伍上限，默认 **3**。与上一条是两件事，不要当成同一个「藏身处容量」。 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction { get; }` | 每个强盗派系的藏住处硬上限，默认 **9**。`BanditSpawnCampaignBehavior.cs:208` 的 `DailyTick` 第一件事就是 `if (_numberOfMaxHideoutsAtEachBanditFaction > 0) AddNewHideouts();`——**设成 0 就完全禁用藏身处扩展**。 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction { get; }` | 开局每个派系建的藏住处数，默认 **7**。只被 `InitializeInitialHideouts` → `SpawnHideoutsAndBanditsPartiallyOnNewGame` 用一次（`BanditSpawnCampaignBehavior.cs:141-147`），**读档不会重建**。 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission { get; }` | 藏住处遭遇战的总人数下界，默认 **10**。`HideoutCampaignBehavior.cs:608` 拿它作为守军规模的下限参考。 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout { get; }` | 第一阶段遭遇战的**固定**人数上限，默认 `Floor(11 * (2 + PlayerProgress))`。**注意它随 `Campaign.PlayerProgress` 成长**，所以同一个存档早期和后期读到的值不同。 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout { get; }` | Boss 阶段的固定上限，默认 `Floor(1 + 5 * (1 + PlayerProgress))`。同样随 `PlayerProgress` 成长。`HideoutCampaignBehavior.cs:609` 把两个上限相加作为总预算。 |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission { get; }` | 第一阶段实际生成人数占总预算的百分比，默认 **0.8**。`MapEventHelper.cs:150` 用它乘上目标人数后再 `Min` 到第一阶段上限。 |
| `GetMaxSupportedNumberOfLootersForClan` | `public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | 每个派系能承载的掠夺者数量上限。**默认实现不是常数**：`deserters` 硬编码 50，`looters` 返回 `270 - DeserterClan.WarPartyComponents.Count`（随逃兵军团数量下降），其它派系 270。 |
| `GetMinimumTroopCountForHideoutMission` | `public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 按具体队伍与是否强攻给出的最小守军数。默认实现 **`isAssault: false` 返回 25，`isAssault: true` 返回 8**——同一个方法两种语境差三倍。 |
| `GetMaximumTroopCountForHideoutMission` | `public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 同形状的最大守军数。默认实现基准 `isAssault ? 15 : 40`，若 `party.HasPerk(DefaultPerks.Tactics.SmallUnitTactics)` 再加上该 perk 的 `PrimaryBonus`——**所以它依赖队伍身上的 perk，不是纯常数**。 |
| `IsPositionInsideNavalSafeZone` | `public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | AI 选点时判断位置是否落在海上安全区。**默认实现恒返回 `false`**，官方不设这个区域。只被 `MobilePartyAi.cs:1327/1364` 调用，后者还包在一个最多 100 次的重试循环里。 |

## 真实示例

读全量密度配置做一次诊断（走 `Campaign.Current.Models` 的真实路径）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string DumpBanditDensity()
{
    if (Campaign.Current == null)
    {
        return "";
    }

    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    Debug.Print("hideouts max/initial = " + model.NumberOfMaximumHideoutsAtEachBanditFaction
        + "/" + model.NumberOfInitialHideoutsAtEachBanditFaction, 0);
    Debug.Print("parties inside/around = " + model.NumberOfMaximumBanditPartiesInEachHideout
        + "/" + model.NumberOfMaximumBanditPartiesAroundEachHideout, 0);
    Debug.Print("infest threshold = " + model.NumberOfMinimumBanditPartiesInAHideoutToInfestIt, 0);
    return "ok";
}
```

按 `isAssault` 两种语境分别算守军区间（这是本模型最容易用错的一组）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static string HideoutGarrisonRange(MobileParty attacker, bool isAssault)
{
    BanditDensityModel model = Campaign.Current.Models.BanditDensityModel;
    int min = model.GetMinimumTroopCountForHideoutMission(attacker, isAssault);
    int max = model.GetMaximumTroopCountForHideoutMission(attacker, isAssault);
    return "isAssault=" + isAssault + " range=" + min + ".." + max;
}
```

判断某个藏住处当前是否算「被 infestation」（复刻 `Hideout.cs:25` 的判定形状）：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

public static bool IsHideoutInfested(Settlement hideoutSettlement)
{
    if (hideoutSettlement == null || Campaign.Current == null)
    {
        return false;
    }

    int threshold = Campaign.Current.Models.BanditDensityModel.NumberOfMinimumBanditPartiesInAHideoutToInfestIt;
    int bandits = hideoutSettlement.Parties.Count(party => party.IsBandit);
    return bandits >= threshold;
}
```

写一个自己的密度模型（把藏住处压到一半，掠夺者上限固定）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public class SparseBanditDensityModel : BanditDensityModel
{
    public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt => 2;

    public override int NumberOfMaximumBanditPartiesInEachHideout => 2;

    public override int NumberOfMaximumBanditPartiesAroundEachHideout => 2;

    public override int NumberOfMaximumHideoutsAtEachBanditFaction => 4;

    public override int NumberOfInitialHideoutsAtEachBanditFaction => 3;

    public override int NumberOfMinimumBanditTroopsInHideoutMission => 10;

    public override int NumberOfMaximumTroopCountForFirstFightInHideout => 20;

    public override int NumberOfMaximumTroopCountForBossFightInHideout => 25;

    public override float SpawnPercentageForFirstFightInHideoutMission => 0.8f;

    public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)
    {
        return 150;
    }

    public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)
    {
        return isAssault ? 8 : 25;
    }

    public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)
    {
        return isAssault ? 15 : 40;
    }

    public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)
    {
        return false;
    }
}
```

## 风险与边界

- **返回 null 就是全树 NRE。** 30 处调用点没有一个判 `Campaign.Current.Models.BanditDensityModel` 为空。自定义模型必须在 `OnGameModelCreation` 里注册，且不能抛异常。
- **`NumberOfMinimumBanditPartiesInAHideoutToInfestIt` 是一个被复用的开关。** 它同时控制 `Hideout.IsInfested`、强盗巡逻行为、事件效果和生成密度。调它会牵动四条路径，不是「只影响藏住处」。
- **`NumberOfMaximumHideoutsAtEachBanditFaction` 设为 0 会关掉藏身处扩展。** `BanditSpawnCampaignBehavior.cs:208` 的 `DailyTick` 直接以它做闸门。
- **`NumberOfInitialHideoutsAtEachBanditFaction` 只在开局生效。** 它只在 `InitializeInitialHideouts` 里被读，读档不重跑。改它只影响新开的存档。
- **两个遭遇战上限成员随 `PlayerProgress` 变化。** `NumberOfMaximumTroopCountForFirstFightInHideout` 和 `NumberOfMaximumTroopCountForBossFightInHideout` 的默认实现里都乘了 `Campaign.Current.PlayerProgress`，所以**它们不是存档无关的常数**。
- **`GetMaxSupportedNumberOfLootersForClan` 默认实现会浮动。** looters 的上限减去 `DeserterClan.WarPartyComponents.Count`，战斗进行中这个值会变。**用它做一次性配额计算会得到不稳定的结果。**
- **`GetMaximumTroopCountForHideoutMission` 依赖队伍身上的 perk。** `DefaultPerks.Tactics.SmallUnitTactics` 会在基准上加 `PrimaryBonus`。同一支队伍前后 perk 解锁会得到不同结果。
- **`IsPositionInsideNavalSafeZone` 默认恒 false。** 想加海上安全区必须自己实现并提供几何判定——官方实现在这里不做任何事。
- **抽象类，13 个成员全要实现。** 少实现一个就编译不过，这是好事；但注意官方模型里 `MinimumTroopCountForHideoutMission = 25` 这个 `private const` 与公开成员 `NumberOfMinimumBanditTroopsInHideoutMission = 10` **数值不同且各司其职**，别在自定义模型里把它们混成一个。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BanditDensityModel.cs` 是 33 行原始源码，13 个抽象成员（9 个属性 + 4 个方法）。跨版本比对的重点：13 个成员是否增删、签名是否变，以及 `DefaultBanditDensityModel` 的默认数值（2 / 3 / 3 / 9 / 7 / 10 / 0.8 / 25 / 8 / 40 / 15 / 270 / 50）。**`IsPositionInsideNavalSafeZone` 恒返回 false 这件事特别值得盯**——它看起来像「没实现的占位」，也可能在某个版本变成真的几何判定。

## 依赖关系

- 唯一实现：`DefaultBanditDensityModel`（`TaleWorlds.CampaignSystem.GameComponents/DefaultBanditDensityModel.cs`），继承本抽象类并给出全部默认值
- 读取入口：[Campaign](../Campaign) 的 `Models.BanditDensityModel`，在 Campaign 初始化时装配
- 生成侧消费者：[BanditSpawnCampaignBehavior](../BanditSpawnCampaignBehavior) 的 `DailyTick` / `AddNewHideouts` / `SpawnBanditsAroundHideout` / `GetCurrentLimitForLooters` 读全部容量类成员
- 藏身处侧消费者：`HideoutCampaignBehavior` 读遭遇战兵力四个成员；[Hideout](../Hideout) 的 `IsInfested` 读 infestation 阈值
- AI 侧消费者：`AiLandBanditPatrollingBehavior` 与 `AiVisitSettlementBehavior` 读藏身处容量；[MobileParty](../MobileParty) 的 `MobilePartyAi` 调 `IsPositionInsideNavalSafeZone`
- 遭遇战组装：`MapEventHelper.cs:150` 用 `SpawnPercentageForFirstFightInHideoutMission` 与 `NumberOfMaximumTroopCountForFirstFightInHideout`
- 掠夺者侧：`DesertersCampaignBehavior` 与 `BanditSpawnCampaignBehavior.GetCurrentLimitForLooters` 都读 `GetMaxSupportedNumberOfLootersForClan`
- 桶首页：[campaign API 分区](../)

---
title: "AlleyModel"
description: "战役层的小巷经济与人事模型：把小巷每日收入、玩家拥有小巷的驻兵上下限、每日经验与犯罪值、可领导成员筛选、战斗与招募兵员这些计算集中成一个可被 mod 通过 GameModels 聚合替换的抽象扩展点。"
---
# AlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`  
**Base:** `MBGameModel<AlleyModel>`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/AlleyModel.cs`

## 一句话职责

它是 Campaign 层关于「小巷（Alley）」的规则模型：集中计算小巷每日收入、玩家拥有小巷的驻兵上下限、主角与部族成员的每日经验/防守经验、每日犯罪值，并提供谁能领导小巷、战斗与招募兵员名册等查询，是 mod 用来替换或扩展小巷玩法的统一扩展点。

## 概述

`AlleyModel` 是一个**抽象基类**（`abstract class AlleyModel : MBGameModel<AlleyModel>`），它自己不计算任何东西，只是把小巷相关的所有「数值与名册查询」声明成一组抽象成员。真正的计算在默认实现 `DefaultAlleyModel`（位于 `TaleWorlds.CampaignSystem.GameComponents`）里。它和 `PartyWageModel`、`SettlementProsperityModel` 这类模型属于同一类东西：都是战役里「定义某套规则该如何计算」的可替换扩展点。

它的所有公开成员都围绕一个核心输入 `Alley` 展开——传入一条小巷，返回收入、兵员、可领导它的英雄列表等。它不持有状态、不修改 `Alley` 字段，纯读 `alley.Settlement.Town.Prosperity`、`alley.Owner` 的属性来算结果。因此「想改小巷收入」的正确做法是**替换模型**，而不是去碰 `Alley` 上的字段。

## 心智模型

### 它是什么

把 `AlleyModel` 当成**「小巷玩法的数值与名册查询器」**：一个无状态的计算服务，输入 `Alley`（及少量 `Hero` / `TroopRoster`），输出数字或 `TroopRoster`，自身不存数据、不触发事件。它继承 `MBGameModel<AlleyModel>`——这是 TaleWorlds 模型注册体系的基类，意味着它会被 `GameModels` 在初始化时统一解析和持有。

### 创建、注册与持有

1. `GameModels` 在游戏模型聚合初始化时执行 `AlleyModel = GetGameModel<AlleyModel>();`，把当前注册到的 `AlleyModel` 派生实例解析出来，并暴露为 `GameModels.AlleyModel` 属性（`private set`）。
2. 运行时拿到它走 `Campaign.Current.Models.AlleyModel`——`Campaign.Current.Models` 就是那个 `GameModels` 实例。
3. 你几乎不会、也不应该自己 `new AlleyModel()`。它是抽象的，本身无法实例化；自定义实现必须继承它并实现全部 17 个抽象成员。

### 与 Alley / Settlement / Clan 的关系

- 几乎所有方法都吃一个 `Alley`。模型内部顺着 `alley` 往下读：`GetDailyIncomeOfAlley` 读 `alley.Settlement.Town.Prosperity` 再除以 50；招募兵员与领导者筛选读 `alley.Owner` 的 `Power` / `Roguery` / `Mercy` 等；招募时按 `alley.Settlement.Culture` 选择对应的强盗家族（如 khuzait→steppe_bandits、aserai→desert_bandits）。
- 领导者候选来自 `Clan.PlayerClan` 的 `AliveLords` 与 `Companions`，相关强盗兵员来自 `Clan.BanditFactions`。
- 因此模型是 **Campaign 层**的计算节点，依赖 `Settlement`、`Clan`、`Hero` 提供的数据，但它不拥有这些数据。

### mod 如何替换 / 扩展

替换模型必须走 `GameModels` 的注册入口：实现一个 `AlleyModel` 派生类，在 `GameModels` 初始化时把它作为 `MBGameModel<AlleyModel>` 注册进去，引擎会把 `GameModels.AlleyModel` 指向你的实例。直接给 `Campaign.Current.Models.AlleyModel` 赋值是行不通的（属性是 `private set`）。更轻量的「扩展」方式是继承 `DefaultAlleyModel` 只重写你想改的几个方法。

## 如何获取 AlleyModel

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

// 通过 Campaign 的模型聚合拿到当前注册的小巷模型实例
AlleyModel alleyModel = Campaign.Current.Models.AlleyModel;
```

## 何时用 / 何时不要用

**用它：**
- 读取小巷经济数值：每日收入、每日犯罪值、玩家拥有小巷的驻兵上下限。
- 读取经验数值：主角每日经验、部族成员每日经验、防守成功经验。
- 筛选谁能领导小巷（`GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` + `GetDisabledReasonTextForHero`），或取得小巷战斗 / 招募用的 `TroopRoster`。

**别用它：**
- 不要直接修改 `Alley` 字段来「改收入」或「改驻兵上限」。收入由 `GetDailyIncomeOfAlley` 实时算，驻兵上限由 `Minimum/MaximumTroopCountInPlayerOwnedAlley` 决定——改规则应替换或继承模型。
- 不要 `new AlleyModel()` 或 `new DefaultAlleyModel()` 后自己塞进 `Campaign.Current.Models`——`Models.AlleyModel` 的 setter 是私有的，外部赋值无效。
- 不要在 `alley.Settlement.Town == null` 时调用 `GetDailyIncomeOfAlley`（见下风险段）。

## 依赖图

- 上游：[GameModels](../GameModels) 在初始化时通过 `GetGameModel<AlleyModel>()` 把当前注册的派生实例挂到 `AlleyModel` 属性；[Campaign](../Campaign) 持有 `Models` 这个模型聚合，`Campaign.Current.Models.AlleyModel` 是运行时唯一入口。
- 输入数据来源：[Alley](../Alley) 是几乎所有方法的入参；[Settlement](../Settlement) 提供 `Town.Prosperity`（收入）与 `Culture`（决定招募的强盗家族）；[Clan](../Clan) 提供 `PlayerClan` 成员列表（领导者候选）与 `BanditFactions`（招募兵员）；[Hero](../Hero) 作为 `assignedHero` / 领导者候选传入。
- 下游与调用方：被小巷相关行为（如 `IAlleyCampaignBehavior`）与小巷经济、任务系统读取；具体默认实现为 `DefaultAlleyModel`（位于 `TaleWorlds.CampaignSystem.GameComponents`，本系列尚未单独成页）。

## 风险

- **未注册或替换不完整导致 null：** 若没有任何 `MBGameModel<AlleyModel>` 被注册，`GameModels.AlleyModel` 会为 `null`。访问前判空：`if (Campaign.Current.Models.AlleyModel != null)`，或确保 mod 通过 `GameModels` 的注册入口提供了实现。
- **替换必须走 GameModels 聚合入口：** `GameModels.AlleyModel` 的 setter 是 `private`，外部无法直接赋值。替换 / 扩展只能通过在 `GameModels` 初始化时注册新的 `AlleyModel` 派生类完成。
- **`GetDailyIncomeOfAlley` 依赖据点有 Town：** 默认实现返回 `(int)(alley.Settlement.Town.Prosperity / 50f)`。如果小巷所在的据点不是 `Town`（例如某些 `Village`），`alley.Settlement.Town` 可能为 `null`，会抛 `NullReferenceException`。调用前先确认 `alley.Settlement.Town != null`。
- **自定义派生类必须实现全部抽象成员：** 抽象成员共 17 个（4 个属性 + 13 个方法），漏实现任何一个都会编译失败。继承 `DefaultAlleyModel` 只重写要改的方法，比从零实现更稳妥。
- **默认兵员来自私有角色模板：** `DefaultAlleyModel` 通过 `MBObjectManager` 取 `gangster_1/2/3` 作为小巷兵员，数值按 `owner.Power` 分级。自定义模型若不重写招募/战斗兵员方法，会沿用这套默认强盗模板。

## 成员说明

下面按 mod 实际关心的用途分组，而不是罗列整面签名表。所有成员都是纯查询，无副作用（不会修改 `Alley` 或世界状态），调用时机通常是「需要向 UI / 行为 / 任务结算提供小巷数值时」。

### 经济与常量属性

#### `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath { get; }`
小巷领导者死亡后，经过多少天该小巷被销毁。默认实现返回 `CampaignTime.Days(4f)`。读它来知道小巷在主人死亡后的存续窗口。

#### `public abstract int MinimumTroopCountInPlayerOwnedAlley { get; }`
玩家拥有小巷允许的最小驻兵数。默认 `5`。

#### `public abstract int MaximumTroopCountInPlayerOwnedAlley { get; }`
玩家拥有小巷允许的最大驻兵数。默认 `10`。UI 上分配驻军时按这两个值约束上下限。

#### `public abstract float GetDailyCrimeRatingOfAlley { get; }`
小巷每天累积的犯罪值。默认 `0.5f`。（注意它虽以 `Get` 开头，但声明为属性而非方法。）

### 经验与防守

#### `public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero)`
分配给小巷的部族成员每天获得的经验。默认 `200f`。`assignedHero` 是被派驻领导小巷的英雄。

#### `public abstract float GetDailyXpGainForMainHero()`
主角每天在小巷经营中获得的经验。默认 `40f`。

#### `public abstract float GetInitialXpGainForMainHero()`
主角**初次接管**小巷时一次性获得的初始经验。默认 `1500f`。

#### `public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()`
主角成功防守一次小巷后额外获得的经验。默认 `6000f`。

### 兵员与战斗 / 招募

#### `public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)`
返回 AI 拥有小巷的驻军名册。默认实现按 `alley.Owner.Power` 与 `owner.RandomValue` 从 `gangster_*` 模板里挑兵员数量。

#### `public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)`
返回小巷进入战斗任务时使用的兵员名册。默认实现在内部兵员基础上把每种兵数量翻倍（用于战斗遭遇）。

#### `public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)`
根据 `random`（0–1）决定从小巷可招募的兵员：包含相关强盗家族的基础兵与一级升级兵，概率越低兵越多。用于玩家在小巷招募界面。

### 领导者筛选与可用性

#### `public abstract List<(Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail)> GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)`
返回 `Clan.PlayerClan` 中所有存活领主与未死亡同伴，以及各自能否领导该小巷的枚举明细（`AlleyMemberAvailabilityDetail`）。UI 据此列出可派遣的人选。

#### `public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)`
给定某英雄与它的可用性明细，返回 UI 上「为什么不能领导这条小巷」的提示文本（如 `Roguery` 不足 30、英雄正在解决议题、是省长、在逃等）。配合上一个方法使用。

#### `public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)`
小巷遭攻击时援军响应的天数，基于兵员战力级数计算，默认实现落在 8–12 天之间。传入的是防御方的 `TroopRoster`。

## 真实调用示例

`GameModels` 在初始化时把当前注册的 `AlleyModel` 暴露为 `AlleyModel` 属性，运行时一律从 `Campaign.Current.Models.AlleyModel` 取实例再调用。注意 `GetDailyIncomeOfAlley` 依赖据点有 `Town`，因此先判空：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;

AlleyModel model = Campaign.Current.Models.AlleyModel;
if (model != null)
{
    // alley 通常从 Settlement.Alley 或 IAlleyCampaignBehavior 取得
    Alley alley = /* 玩家拥有的某条小巷，例如 settlement.Alley */;
    if (alley != null && alley.Settlement.Town != null)
    {
        int dailyIncome = model.GetDailyIncomeOfAlley(alley);
        float mainHeroXp = model.GetDailyXpGainForMainHero();
        TroopRoster battleTroops = model.GetTroopsOfAlleyForBattleMission(alley);
    }
}
```

自定义模型只改收入、其余沿用默认行为时，继承 `DefaultAlleyModel` 重写单个方法即可，无需从零实现全部 17 个抽象成员。

## 导航

- ↑ [GameModels](../GameModels) — 注册并持有 AlleyModel 的模型聚合入口
- ↔ 同类模型：[SettlementProsperityModel](../SettlementProsperityModel)（如存在）· 具体默认实现 `DefaultAlleyModel`（位于 `TaleWorlds.CampaignSystem.GameComponents`，本系列未单独成页）
- 相关类：[Alley](../Alley)（核心入参）· [Settlement](../Settlement)（收入来源 Town）· [Clan](../Clan)（领导者候选与强盗家族）· [Hero](../Hero)（经验与领导者对象）· [Campaign](../Campaign)（持有 Models 聚合）

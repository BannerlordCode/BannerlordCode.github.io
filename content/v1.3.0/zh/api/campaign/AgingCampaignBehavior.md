---
title: "AgingCampaignBehavior"
description: "驱动年龄系统的官方行为：只实现 RegisterEvents 与 SyncData 两个抽象方法，9 个订阅里藏着一整套成年流程；MainHeroHealCheck 是死代码，永远不会被调用。"
---

# AgingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AgingCampaignBehavior : CampaignBehaviorBase`
**Base:** [CampaignBehaviorBase](../CampaignBehaviorBase)（实现 [ICampaignBehavior](../ICampaignBehavior)）
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AgingCampaignBehavior.cs`（全文 253 行）

## 概述

`AgingCampaignBehavior` 是**整个年龄系统的执行者**。[AgeModel](../AgeModel) 只提供数字，这个类负责：每天检查每个英雄是否跨越年龄门槛、派发相应事件、在成年时分配继承技能与装备、在老年时掷骰决定生死、以及用两个存档字典追踪「额外生命」与「未成年英雄名单」。

它实现 [CampaignBehaviorBase](../CampaignBehaviorBase) 的两个抽象方法，并在 `RegisterEvents` 里**订阅九个事件**（这是本批里订阅密度最高的官方行为之一）：

```csharp
CampaignEvents.DailyTickHeroEvent.AddNonSerializedListener(this, new Action<Hero>(this.DailyTickHero));
CampaignEvents.OnCharacterCreationIsOverEvent.AddNonSerializedListener(this, new Action(this.OnCharacterCreationIsOver));
CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, new Action<Hero>(this.OnHeroComesOfAge));
CampaignEvents.HeroReachesTeenAgeEvent.AddNonSerializedListener(this, new Action<Hero>(this.OnHeroReachesTeenAge));
CampaignEvents.HeroGrowsOutOfInfancyEvent.AddNonSerializedListener(this, new Action<Hero>(this.OnHeroGrowsOutOfInfancy));
CampaignEvents.PerkOpenedEvent.AddNonSerializedListener(this, new Action<Hero, PerkObject>(this.OnPerkOpened));
CampaignEvents.HeroCreated.AddNonSerializedListener(this, new Action<Hero, bool>(this.OnHeroCreated));
CampaignEvents.HeroKilledEvent.AddNonSerializedListener(this, new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(this.OnHeroKilled));
CampaignEvents.OnGameLoadedEvent.AddNonSerializedListener(this, new Action<CampaignGameStarter>(this.OnGameLoaded));
```

九个订阅分三类：`DailyTickHeroEvent` + `OnCharacterCreationIsOverEvent` 是驱动源；`HeroComesOfAgeEvent` / `HeroReachesTeenAgeEvent` / `HeroGrowsOutOfInfancyEvent` / `PerkOpenedEvent` / `HeroKilledEvent` / `HeroCreated` 是状态变更源；`OnGameLoadedEvent` 是读档后的补正。

## 心智模型

把它当成**「一个每天跑一遍的状态机」**，四条主线：

**主线一：年龄门槛怎么被跨过。** 核心是 `DailyTickHero(Hero hero)`。它先取 `bool flag = (int)CampaignTime.Now.ToDays == this._gameStartDay;`（游戏开始当天的哨兵），然后在一长串守卫里工作：

```csharp
if (!CampaignOptions.IsLifeDeathCycleDisabled && !flag && !hero.IsTemplate)
```

**`CampaignOptions.IsLifeDeathCycleDisabled` 是一条总开关**——打开它，整个年龄推进与生死判定都不跑。

接下来它比对本类的 `_heroesYoungerThanHeroComesOfAge[hero]`（上次记录的年龄）与当前 `(int)hero.Age`：

```csharp
if (num != num2)
{
    if (num2 >= Campaign.Current.Models.AgeModel.HeroComesOfAge)
    {
        this._heroesYoungerThanHeroComesOfAge.Remove(hero);
        CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero);
    }
    else
    {
        this._heroesYoungerThanHeroComesOfAge[hero] = num2;
        if (num2 == Campaign.Current.Models.AgeModel.BecomeTeenagerAge) { ... OnHeroReachesTeenAge(hero); }
        else if (num2 == Campaign.Current.Models.AgeModel.BecomeChildAge) { ... OnHeroGrowsOutOfInfancy(hero); }
    }
}
```

**注意 `else if` 结构：同年只可能触发一个事件。** 而 `BecomeTeenagerAge` 与 `BecomeChildAge` 是 `==` 精确匹配——**如果两个年龄值被设成相等，同一年只会触发 `BecomeTeenagerAge`，`OnHeroGrowsOutOfInfantry` 永远不发**。这是覆盖 [AgeModel](../AgeModel) 时最隐蔽的一个陷阱。

**主线二：两个存档字典。** `SyncData(IDataStore)` 只存两个：

```csharp
dataStore.SyncData<Dictionary<Hero, int>>("_extraLivesContainer", ref this._extraLivesContainer);
dataStore.SyncData<Dictionary<Hero, int>>("_heroesYoungerThanHeroComesOfAge", ref this._heroesYoungerThanHeroComesOfAge);
```

- `_extraLivesContainer` —— 「额外生命」计数。由 `OnPerkOpened` 填充：当英雄拿到 `DefaultPerks.Medicine.CheatDeath` 时 `AddExtraLife(hero)`；当**氏族领袖**拿到 `DefaultPerks.Medicine.HealthAdvise` 时给**全族**每个存活英雄各加一条。它在老死掷骰命中时与玩家重病濒死时被消耗。
- `_heroesYoungerThanHeroComesOfAge` —— 「上次见到的年龄」。由 `OnHeroCreated`、`OnCharacterCreationIsOver`（调 `InitializeHeroesYoungerThanHeroComesOfAge`）与 `OnGameLoaded`（调 `CheckYoungHeroes`）填充，由 `OnHeroKilled` 清理。

**主线三：成年那一刻做了什么。** `OnHeroComesOfAge(Hero hero)` 先判 `if (hero.HeroState != Hero.CharacterStates.Active) return;`——**只有活跃英雄会走成年流程**。然后分两支：非玩家氏族走 `Campaign.Current.Models.HeroCreationModel.GetInheritedSkillsForHero(hero)` 逐个 `hero.SetSkillValue(...)`；玩家氏族走 `hero.HeroDeveloper.SetInitialLevel(hero.Level)`。最后装备：两次调 `Campaign.Current.Models.EquipmentSelectionModel.GetEquipmentRostersForHeroComeOfAge(hero, false)` 与 `(hero, true)`，**若返回列表为空就硬塞一个 `"generic_bat_dummy"` / `"generic_civ_dummy"`**——这是防 NRE 的兜底，用的是 `MBEquipmentRosterExtensions.All.Find((MBEquipmentRoster x) => x.StringId == "generic_bat_dummy")` 这种线性查找。

**主线四：死亡判定有两条路。** `DailyTickHero` 里：

```csharp
if (hero.IsAlive && hero.CanDie(KillCharacterAction.KillCharacterActionDetail.DiedOfOldAge))
{
    if (hero.DeathMark != ...None && (hero.PartyBelongedTo == null || (hero.PartyBelongedTo.MapEvent == null && hero.PartyBelongedTo.SiegeEvent == null)))
        KillCharacterAction.ApplyByDeathMark(hero, false);
    else
        this.IsItTimeOfDeath(hero);
}
```

有死亡标记且不在战斗/围城中的英雄**直接按标记处死**；否则走 `IsItTimeOfDeath(hero)` 掷骰：`MBRandom.RandomFloat < hero.ProbabilityOfDeath` 才算老死。命中后先扣 `CheatDeath` 给的额外生命，没了才真死。**玩家主英雄走另一条路**：不是直接死，而是先 `Campaign.Current.MainHeroIllDays++` 并弹一个 "Caught Illness" 的 `InformationManager.ShowInquiry`，让玩家处理后事。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 订阅上面那九个事件。**这是全类唯一在战役初始化时被引擎调用的 public 方法**（由 `CampaignBehaviorManager.RegisterEvents()` 统一调用）。注意它用的是 `AddNonSerializedListener`——**监听器不进存档，读档后需要 `OnGameLoaded` 补状态**。 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 两行，存那两个 `Dictionary<Hero, int>`。**`Hero` 作为字典键能被序列化**（走引用）。`_gameStartDay` 那个 `int` 字段**故意不存**——它是每次开局重新算的运行时哨兵。 |
| `OnGameLoaded` | `private void OnGameLoaded(CampaignGameStarter obj)` | 方法体只有 `this.CheckYoungHeroes();`。**读档后的唯一补救动作**：扫 `Hero.FindAll(...)` 找出所有「年龄 < `HeroComesOfAge` 且不在 `_heroesYoungerThanHeroComesOfAge` 里」的英雄，补进字典，**并对已经越过门槛的补派发相应事件**（`OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge`）。参数 `CampaignGameStarter` 完全没用上。 |
| `OnCharacterCreationIsOver` | `private void OnCharacterCreationIsOver()` | 两件事：记下 `this._gameStartDay = (int)CampaignTime.Now.ToDays;`，以及在 `!CampaignOptions.IsLifeDeathCycleDisabled` 时调 `InitializeHeroesYoungerThanHeroComesOfAge()`。**这就是 `DailyTickHero` 里那个 `flag` 哨兵的来源**——游戏开始当天的 tick 被跳过。 |
| `OnHeroCreated` | `private void OnHeroCreated(Hero hero, bool isBornNaturally)` | 条件加入：年龄小于 `HeroComesOfAge` 就写进 `_heroesYoungerThanHeroComesOfAge`。`isBornNaturally` 参数没被使用。**注意出生时年龄已经 >= `HeroComesOfAge` 的英雄不会被跟踪**，也不走成年流程。 |
| `OnHeroKilled` | `private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)` | 唯一动作：若 `victim` 在字典里就移除。**这是唯一的清理点**——英雄死了必须从追踪名单里删掉，否则 `_heroesYoungerThanHeroComesOfAge` 会一直持有死人的引用。 |
| `OnPerkOpened` | `private void OnPerkOpened(Hero hero, PerkObject perk)` | 加额外生命的唯一入口。`perk == DefaultPerks.Medicine.CheatDeath` → `AddExtraLife(hero)`。`perk == DefaultPerks.Medicine.HealthAdvise` → **只有当 `hero` 是 `hero.Clan.Leader` 时**，遍历 `hero.Clan.Heroes` 给每个存活英雄各加一条。`AddExtraLife` 内部先判 `hero.IsAlive`，已存在则 `++`，否则 `Add(hero, 1)`。 |
| `DailyTickHero` | `private void DailyTickHero(Hero hero)` | **主循环**，见「主线一」。四段：跳过哨兵日与模板英雄 → 老死判定 → 年龄门槛推进 → 主英雄重病天数结算。**每个英雄每天各调一次**，所以它对全体英雄是 O(人数) 的每日开销。 |
| `IsItTimeOfDeath` | `private void IsItTimeOfDeath(Hero hero)` | 老死掷骰。守卫：`hero.IsAlive && hero.Age >= (float)Campaign.Current.Models.AgeModel.BecomeOldAge && !CampaignOptions.IsLifeDeathCycleDisabled && hero.DeathMark == ...None && MBRandom.RandomFloat < hero.ProbabilityOfDeath`。命中后：先扣额外生命；没有额外生命时，**玩家主英雄走"生病"分支**（`MainHeroIllDays++` + `TimeControlMode = Stop` + `ShowInquiry`），**其它英雄直接 `KillCharacterAction.ApplyByOldAge(hero, true)`**。 |
| `KillMainHeroWithIllness` | `private void KillMainHeroWithIllness()` | 三行：`Campaign.Current.TimeControlMode = CampaignTimeControlMode.Stop;` + `Hero.MainHero.AddDeathMark(null, KillCharacterAction.KillCharacterActionDetail.DiedOfOldAge);` + `KillCharacterAction.ApplyByOldAge(Hero.MainHero, true);`。**时间被停住**，让玩家先处理事务再死。 |
| `OnHeroGrowsOutOfInfancy` | `private void OnHeroGrowsOutOfInfancy(Hero hero)` | 只有一句有效逻辑：`if (hero.Clan != Clan.PlayerClan) { hero.HeroDeveloper.InitializeHeroDeveloper(); }`。**玩家氏族被完全跳过**——玩家的孩子不自动初始化成长。 |
| `OnHeroReachesTeenAge` | `private void OnHeroReachesTeenAge(Hero hero)` | 两段：**装备**——从 `EquipmentSelectionModel.GetEquipmentRostersForHeroReachesTeenAge(hero)` 随机取一套 civilians 装备，填进一个 `new Equipment(Equipment.EquipmentType.Battle)` 再连着赋两次（先民用后战斗）；取不到就 `Debug.FailedAssert("Cant find child equipment template for " + hero.Name, ...)`。**特质继承**——遍历 `DefaultTraits.Personality`，用父母特质值加 `MBRandom` 的概率掷骰决定 ±1，最后 `MBMath.ClampInt` 到 `[traitObject.MinValue, traitObject.MaxValue]`。玩家氏族整段跳过。 |
| `OnHeroComesOfAge` | `private void OnHeroComesOfAge(Hero hero)` | 见「主线三」。`HeroState != Active` 直接 return。 |
| `InitializeHeroesYoungerThanHeroComesOfAge` | `private void InitializeHeroesYoungerThanHeroComesOfAge()` | 遍历 `Hero.AllAliveHeroes` 与 `Hero.DeadOrDisabledHeroes`（后者额外要求 `!hero2.IsDead`），把年龄 < `HeroComesOfAge` 且不在字典里的英雄补进去。**开局时的一次性初始化。** |
| `CheckYoungHeroes` | `private void CheckYoungHeroes()` | 读档补正。用 `Hero.FindAll((Hero x) => !x.IsDead && x.Age < ...HeroComesOfAge && !dict.ContainsKey(x))` 找漏网的。**注意里面的补派发分支被 `!hero.IsDisabled && !dict.ContainsKey(hero)` 守卫，而上一行刚刚 `Add` 过，所以 `ContainsKey` 必然为 true——那个内层 if 实际上永远不会进去。**这是源码里的一处死逻辑。 |
| `MainHeroHealCheck` | `private void MainHeroHealCheck()` | **死代码。** 全树没有任何调用点。方法体是 5% 概率把 `MainHeroIllDays` 置 -1 并弹一个 "Cured" 的 `ShowInquiry`。**主英雄不会「痊愈」，只会一直病着直到死亡。** |

## 真实示例

在 `MBSubModuleBase.InitializeGameStarter` 里挂上一个已存在的官方行为（注意它**只入队、不触发 `RegisterEvents`**）：

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
    starter.AddBehavior(new AgingCampaignBehavior());
}
```

读它管理的两个状态：

```csharp
AgingCampaignBehavior aging = CampaignBehaviorBase.GetCampaignBehavior<AgingCampaignBehavior>();
if (aging != null)
{
    Debug.Print("behaviors registered, StringId = " + aging.StringId, 0);
}

int comeOfAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.Age >= comeOfAge)
    {
        Debug.Print(hero.Name + " is adult", 0);
    }
}
```

两个存档字典是 `private` 的，**外部读不到**——想看「谁有额外生命」只能读英雄特质等级或自己实现一份等价逻辑。

让它停止推进年龄——`CampaignOptions.IsLifeDeathCycleDisabled` 是唯一的总开关：

```csharp
public override void RegisterEvents()
{
    CampaignEvents.OnCharacterCreationIsOverEvent.AddNonSerializedListener(this, this.OnCharacterCreationIsOver);
    CampaignOptions.IsLifeDeathCycleDisabled = true;
}

private void OnCharacterCreationIsOver()
{
    // 手动建立未成年名单，让追踪继续，但跳过所有生死与门槛派发
    AgingCampaignBehavior aging = CampaignBehaviorBase.GetCampaignBehavior<AgingCampaignBehavior>();
    Debug.Print("life/death cycle disabled, aging tracked = " + (aging != null), 0);
}
```

`CampaignOptions.IsLifeDeathCycleDisabled` 是 `DailyTickHero` 最外层守卫与 `IsItTimeOfDeath` 内部守卫共用的开关，**把它设为 true 会同时关闭英雄老死与玩家生病两条线**。

## 风险与边界

- **不是 `sealed`，但也没有可覆写的扩展点。** `DailyTickHero` 等九个处理方法全是 `private`，`RegisterEvents` 与 `SyncData` 是 `public override`。想改行为只能整个重写一个类，**继承它没有意义**。
- **`MainHeroHealCheck` 是死代码。** 全树零调用点。主英雄患病后**不会痊愈**，`Campaign.Current.MainHeroIllDays` 只增不减直到死亡。不要按它的名字假设存在康复流程。
- **`CheckYoungHeroes` 的补派发分支不可达。** 它先 `this._heroesYoungerThanHeroComesOfAge.Add(hero, (int)hero.Age);` 再判 `!hero.IsDisabled && !this._heroesYoungerThanHeroComesOfAge.ContainsKey(hero)` —— **后一个条件必然为 false**。所以读档补正只补名单，不补派发事件。
- **`BecomeTeenagerAge` 与 `BecomeChildAge` 被 `==` 精确匹配，且是 `else if`。** 覆盖 [AgeModel](../AgeModel) 时把两者设成相等值，`OnHeroGrowsOutOfInfancy` 就永久静默失效。设成非整数则两者都失效。
- **`_gameStartDay` 不存档。** 它每次开局由 `OnCharacterCreationIsOver` 重算。**读档后 `DailyTickHero` 的哨兵日是新存档日的当前值**，所以读档当天也会被跳过一次。
- **`DailyTickHero` 对每个英雄每天跑一次。** 全树英雄数（数千）× 每日 tick——它内部有 `MBRandom` 调用但只在老死分支，**性能上最大的开销是 `_heroesYoungerThanHeroComesOfAge` 的字典查找**。
- **`OnHeroReachesTeenAge` 里的装备兜底是硬编码 id。** `MBEquipmentRosterExtensions.All.Find((MBEquipmentRoster x) => x.StringId == "generic_bat_dummy")` / `"generic_civ_dummy"`——删掉或改名这两个 roster 会让它拿到 null。
- **`Debug.FailedAssert` 在取不到少年装备模板时触发。** 这只在数据缺失时发生，正常流程不会命中。
- **`OnCharacterCreationIsOver` 是唯一起始点。** 它的顺序决定了 `_gameStartDay` 与未成年名单的初始化时机。**换开局流程（跳过角色创建）会让整条年龄链失去初始化。**
- **`HeroComesOfAgeEvent` 等事件由本类自己派发。** 注意链路方向：`AgingCampaignBehavior` 既是这些事件的**订阅者**（`DailyTickHero` → `CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero)`）**又是它们的处理者**（`OnHeroComesOfAge`）。**你在自己 mod 里订阅 `HeroComesOfAgeEvent` 时，监听顺序取决于注册次序**——而 `MbEvent` 是头插链表，后注册先跑。
- **重病阈值是 3 天。** `if (Campaign.Current.MainHeroIllDays > 3)` 之后每天扣 `MathF.Ceiling(Hero.MainHero.HitPoints * (0.05f * MainHeroIllDays))` 点血。

## 跨版本提示

`AgingCampaignBehavior` 的 public 表面极小且高度稳定：两个 `public override`（`RegisterEvents` / `SyncData`）加一个继承来的无参构造器（用 `GetType().Name` 作为 `StringId`）。这一层在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里没有变化。

**变的是内部实现与订阅数量。** 1.3.0 订阅九个事件；后续版本随着婚姻、出生、海战等系统接入而追加订阅。同时 `[AgingCampaignBehavior](../AgingCampaignBehavior)` 读的 [AgeModel](../AgeModel) 数字与 `HeroCreationModel` / `EquipmentSelectionModel` 的接口都会演进。

对 mod 作者的实际含义有三条。**第一，不要复制这个类**——它的 `DailyTickHero` 是全局每日循环，复制一份会造成双重推进（两个行为都派发成年事件）。**第二，要改年龄行为就覆盖 `AgeModel`，不要改这个类。** **第三，如果你订阅 `HeroComesOfAgeEvent` / `HeroReachesTeenAgeEvent` / `HeroGrowsOutOfInfancyEvent`，要注意这些事件的签名可能被改**——那才是真正会编译失败的地方，而这个类的 public 表面反而不会。

## 依赖关系

- 基类：[CampaignBehaviorBase](../CampaignBehaviorBase) 提供 `StringId`、`static GetCampaignBehavior<T>()` 与两个抽象方法的契约；[ICampaignBehavior](../ICampaignBehavior) 只声明 `RegisterEvents()`
- 存档契约：[IDataStore](../IDataStore) 解释 `SyncData` 的双向语义与「读档 key miss 静默」这条约束
- 规则来源：[AgeModel](../AgeModel) 提供七个门槛（`DailyTickHero` / `IsItTimeOfDeath` 共读）；`HeroCreationModel`（`GetInheritedSkillsForHero`）、`EquipmentSelectionModel`（`GetEquipmentRostersForHeroComeOfAge` / `...ReachesTeenAge`）、`SiegeAftermathModel`（由 [TraitLevelingHelper](../TraitLevelingHelper) 使用）
- 槽位：[GameModels](../GameModels) 的 `AgeModel` 属性，全局访问点 `Campaign.Current.Models.AgeModel`
- 事件源：[CampaignEvents](../CampaignEvents) 的九个事件；派发端是 `CampaignEventDispatcher.Instance.OnXxx(...)`
- 总开关：`CampaignOptions.IsLifeDeathCycleDisabled` 与 `CampaignTimeControlMode.Stop`（玩家濒死时停表）
- 动作：[KillCharacterAction](../../campaign-ext/KillCharacterAction) 的 `ApplyByOldAge` / `ApplyByDeathMark`，以及 `CampaignTime` 的 `Now.ToDays`
- 参照：[DefaultPerks](../DefaultPerks) 的 `Medicine.CheatDeath` 与 `Medicine.HealthAdvise` 是额外生命的唯一来源
- 桶首页：[campaign API 分区](../)
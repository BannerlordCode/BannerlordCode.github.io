---
title: "AgingCampaignBehavior"
description: "年龄与生死行为：驱动英雄的生日推进、成年初始化、衰老死亡判定，以及玩家主角患病与续命（extra life）逻辑。"
---
# AgingCampaignBehavior

**命名空间：** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class AgingCampaignBehavior : CampaignBehaviorBase`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs`（349 行）

## 概述

`AgingCampaignBehavior` 是战役层负责「时间在英雄身上留下什么」的行为类：它把每天的 `DailyTickHeroEvent` 变成一次逐英雄的年龄推进与死亡判定，并在英雄跨过年龄门槛（脱离婴儿期、进入少年、成年）时派发对应事件、初始化技能与装备。它还负责玩家主角独有的「患病—垂死—续命」流程，以及医疗系特长带来的额外生命次数。它是引擎在战役初始化时自动注册的行为之一，mod 通常不直接实例化它，而是通过它派发的事件或 `Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>()` 与它交互。

## 心智模型

把它理解为「一个挂在战役时钟上的年龄推进器」，而不是一个可以被随意调用的工具类。它的生命周期由基类 `CampaignBehaviorBase` 决定，只有两个契约点：

1. **订阅（`RegisterEvents`）**——在战役启动时被调用一次，用 `CampaignEvents.*.AddNonSerializedListener(this, handler)` 把私有方法挂到事件总线上。`AddNonSerializedListener` 的含义是「监听器本身不写入存档」，因此注册必须发生在 `RegisterEvents` 里（引擎每次读档都会重新调用它），而不是构造函数里。
2. **存档（`SyncData`）**——引擎把 `IDataStore` 交给你，你只同步需要跨存档保留的字段。本类只同步两个 `Dictionary<Hero,int>`（额外生命数、未成年英雄的年龄快照），而 `_gameStartDay` 故意不同步——它在每次新游戏的角色创建结束时重算。

真正的逻辑发生在 `DailyTickHero`（`:91`）里，它对每个英雄每天执行三件事：**死亡判定**（`CanDie` + `DeathMark` + `IsItTimeOfDeath`，含额外生命抵扣与主角患病分支）、**生日门槛判定**（比较快照年龄与当前年龄，跨过 `BecomeChildAge` / `BecomeTeenagerAge` / `HeroComesOfAge` 就派发对应事件）、**主角病重结算**（`MainHeroIllDays > 3` 后按比例扣血）。`AgeModel` 提供所有门槛数值（`BecomeChildAge`、`BecomeTeenagerAge`、`BecomeOldAge`、`HeroComesOfAge`），所以想改年龄节奏，正道是替换 `AgeModel`，而不是改这个行为。

`_heroesYoungerThanHeroComesOfAge` 是一张「上次见到的整数年龄」快照表：因为 `DailyTickHero` 每天跑一次，只有整数年龄变化时才可能跨门槛，这张表让行为能在正确的那一天派发 `OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge` / `OnHeroComesOfAge`。`_extraLivesContainer` 是特长给的「免死次数」计数器：`CheatDeath` 给本人 +1，`HealthAdvise` 给玩家氏族所有在世成员 +1，每次死亡判定时先扣一次而不是直接死。

## 怎么用

### 怎么拿到

- **源树路径：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs`（349 行）
- **声明处：** `AgingCampaignBehavior.cs:13`（类声明）、`AgingCampaignBehavior.cs:21`（`RegisterEvents`）、`AgingCampaignBehavior.cs:34`（`SyncData`）
- **运行时入口：** 引擎自动创建并注册；mod 侧取实例用 `Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>()`。

```csharp
AgingCampaignBehavior aging = Campaign.Current.GetCampaignBehavior<AgingCampaignBehavior>();
// 通常你并不需要这个实例——真正有用的是它派发的事件：
CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, OnHeroComesOfAge);
```

### 典型用法

- **监听成年/少年/脱离婴儿期：** 订阅 `CampaignEvents.HeroComesOfAgeEvent`、`HeroReachesTeenAgeEvent`、`HeroGrowsOutOfInfancyEvent`，在回调里给新成年英雄补装备、加特长或写入自己的数据。这是替代直接改行为逻辑的推荐做法。
- **监听英雄出生与死亡：** `CampaignEvents.HeroCreated`（带 `isBornNaturally`）与 `HeroKilledEvent` 由本类在 `OnHeroCreated`（`:40`）/ `OnHeroKilled`（`:49`）里配合维护快照表，mod 也可订阅同样的事件做自己的簿记。
- **读取年龄门槛：** 用 `Campaign.Current.Models.AgeModel` 读 `BecomeChildAge` / `BecomeTeenagerAge` / `HeroComesOfAge` / `BecomeOldAge`，不要硬编码 18/20 这类数字。
- **观察生死循环开关：** `CampaignOptions.IsLifeDeathCycleDisabled` 会让死亡判定整体短路；这是全局战役选项，会影响所有英雄。
- **给英雄「续命」：** 参照 `OnPerkOpened`（`:72`）的做法——它监听 `CampaignEvents.PerkOpenedEvent`，当开出的特长是 `DefaultPerks.Medicine.CheatDeath` 或 `HealthAdvise` 时调用私有的 `AddExtraLife`（`:57`）累加次数。

### 坑

- **`RegisterEvents` 必须用 `AddNonSerializedListener`，且不能放构造函数。** 监听器不序列化，读档时引擎会重新调用 `RegisterEvents`；在构造函数里注册会随对象一起被丢弃或重复注册。
- **`_gameStartDay` 不同步。** 它在 `OnCharacterCreationIsOver`（`:179`）里被设为当前天数，`DailyTickHero` 用 `(int)CampaignTime.Now.ToDays == _gameStartDay` 跳过开局第一天的死亡判定，避免新档立刻死人。
- **`IsItTimeOfDeath`（`:286`）不是无条件杀人。** 它要求年龄 ≥ `BecomeOldAge`、未禁用生死循环、`DeathMark == None`，且 `MBRandom.RandomFloat < hero.ProbabilityOfDeath`；命中后还要看额外生命次数。
- **正在参战的英雄不会被衰老杀死。** `IsItTimeOfDeath` 对非主角的分支要求 `PartyBelongedTo == null` 或没有进行中的 `MapEvent`/`SiegeEvent`，否则跳过（避免战斗中途消失）。
- **主角患病是特殊路径。** 主角病重会先弹 `InformationManager.ShowInquiry` 询问，并走 `Campaign.Current.MainHeroIllDays`；`KillMainHeroWithIllness`（`:167`）会先 `AddDeathMark` 再 `ApplyByOldAge`。想改主角病重文案或节奏，看这里而不是通用死亡逻辑。
- **未成年英雄的成年初始化依赖两张表的一致性。** `OnHeroCreated`、`OnHeroKilled`、`InitializeHeroesYoungerThanHeroComesOfAge`（`:312`）、`CheckYoungHeroes`（`:331`）共同维护 `_heroesYoungerThanHeroComesOfAge`；如果 mod 直接增删英雄，务必让这些事件照常派发，否则会出现「成年了但没有初始化技能/装备」。

## 关键成员

### RegisterEvents
`public override void RegisterEvents()`（`AgingCampaignBehavior.cs:21`）

生命周期契约点之一：把 `DailyTickHero`、`OnCharacterCreationIsOver`、`OnHeroComesOfAge`、`OnHeroReachesTeenAge`、`OnHeroGrowsOutOfInfancy`、`OnPerkOpened`、`OnHeroCreated`、`OnHeroKilled`、`OnGameLoaded` 共 9 个处理器挂到 `CampaignEvents` 上，全部用 `AddNonSerializedListener`。

### SyncData
`public override void SyncData(IDataStore dataStore)`（`AgingCampaignBehavior.cs:34`）

生命周期契约点之二：只同步 `_extraLivesContainer` 与 `_heroesYoungerThanHeroComesOfAge` 两个字典；`_gameStartDay` 不同步。

### _extraLivesContainer
`private Dictionary<Hero, int>`（`AgingCampaignBehavior.cs:15`）

「额外生命」计数表：值 > 0 时，`IsItTimeOfDeath` 与主角病重结算会先扣 1 而不是直接死亡；由 `CheatDeath`（本人 +1）和 `HealthAdvise`（玩家氏族在世成员各 +1）填充。

### _heroesYoungerThanHeroComesOfAge
`private Dictionary<Hero, int>`（`AgingCampaignBehavior.cs:17`）

未成年英雄的「上次整数年龄」快照表，用于判断某一天是否恰好跨过 `BecomeChildAge` / `BecomeTeenagerAge` / `HeroComesOfAge`，从而只派发一次对应事件。

### _gameStartDay
`private int`（`AgingCampaignBehavior.cs:19`）

开局第一天的天数，用于跳过新档首日的死亡判定；不参与存档同步，每次角色创建结束时重算。

### OnHeroCreated
`private void OnHeroCreated(Hero hero, bool isBornNaturally)`（`AgingCampaignBehavior.cs:40`）

新英雄出生回调：若其整数年龄 < `HeroComesOfAge`，就加入快照表，保证之后能收到成年事件。

### OnHeroKilled
`private void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification)`（`AgingCampaignBehavior.cs:49`）

英雄死亡回调：把死者从快照表移除，避免对已死者继续做年龄推进。

### AddExtraLife
`private void AddExtraLife(Hero hero)`（`AgingCampaignBehavior.cs:57`）

给在世英雄的额外生命次数 +1（不存在则置 1）；只在英雄 `IsAlive` 时生效。由 `OnPerkOpened` 调用。

### OnPerkOpened
`private void OnPerkOpened(Hero hero, PerkObject perk)`（`AgingCampaignBehavior.cs:72`）

特长开启回调：`CheatDeath` 给开特长者加一次额外生命；`HealthAdvise` 且该英雄是氏族领袖时，给其氏族所有在世成员各加一次。

### DailyTickHero
`private void DailyTickHero(Hero hero)`（`AgingCampaignBehavior.cs:91`）

行为的主循环，每个英雄每天执行一次：先做死亡判定（死亡标记 / `IsItTimeOfDeath`），再做生日门槛判定并派发成年/少年/婴儿期事件，最后处理主角病重扣血与续命。

### KillMainHeroWithIllness
`private void KillMainHeroWithIllness()`（`AgingCampaignBehavior.cs:167`）

主角病重的收尾：停住时间（`CampaignTimeControlMode.Stop`）、打上 `DiedOfOldAge` 死亡标记，再走 `KillCharacterAction.ApplyByOldAge`。

### OnGameLoaded
`private void OnGameLoaded(CampaignGameStarter obj)`（`AgingCampaignBehavior.cs:174`）

读档回调：调用 `CheckYoungHeroes` 修补快照表，把旧存档里漏记的未成年英雄补进来并补发错过的门槛事件。

### OnCharacterCreationIsOver
`private void OnCharacterCreationIsOver()`（`AgingCampaignBehavior.cs:179`）

角色创建结束回调：记录 `_gameStartDay`，并在未禁用生死循环时调用 `InitializeHeroesYoungerThanHeroComesOfAge` 建立初始快照。

### OnHeroGrowsOutOfInfancy
`private void OnHeroGrowsOutOfInfancy(Hero hero)`（`AgingCampaignBehavior.cs:188`）

脱离婴儿期：对非玩家氏族英雄调用 `HeroDeveloper.InitializeHeroDeveloper()` 初始化开发者数据。

### OnHeroReachesTeenAge
`private void OnHeroReachesTeenAge(Hero hero)`（`AgingCampaignBehavior.cs:196`）

进入少年期：按 `EquipmentSelectionModel.GetEquipmentForHeroReachesTeenAge` 配装；对非玩家氏族英雄按父母与随机数重掷 `DefaultTraits.Personality` 的性格特质，然后初始化开发者数据。

### OnHeroComesOfAge
`private void OnHeroComesOfAge(Hero hero)`（`AgingCampaignBehavior.cs:252`）

成年：非玩家氏族英雄从 `HeroCreationModel.GetInheritedSkillsForHero` 继承技能，玩家氏族英雄用 `SetInitialLevel`；然后从 `EquipmentSelectionModel` 取战斗与民用装备并穿上（取不到时用 `generic_bat_dummy` / `generic_civ_dummy` 兜底并 `Debug.FailedAssert`）。

### IsItTimeOfDeath
`private void IsItTimeOfDeath(Hero hero)`（`AgingCampaignBehavior.cs:286`）

衰老死亡判定：年龄、生死循环开关、死亡标记、`ProbabilityOfDeath` 随机数全部满足才继续；命中后先扣额外生命，主角转入患病流程，其他英雄在非战斗状态下 `ApplyByOldAge`。

### InitializeHeroesYoungerThanHeroComesOfAge
`private void InitializeHeroesYoungerThanHeroComesOfAge()`（`AgingCampaignBehavior.cs:312`）

建立初始快照：遍历 `Hero.AllAliveHeroes` 与 `Hero.DeadOrDisabledHeroes`，把所有未成年且未记录的英雄写入 `_heroesYoungerThanHeroComesOfAge`。

### CheckYoungHeroes
`private void CheckYoungHeroes()`（`AgingCampaignBehavior.cs:331`）

读档修补：找出未死、未成年且不在快照表里的英雄补录，并按年龄补发 `OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge`，修正旧存档的状态。

## 真实示例

```csharp
// 监听「成年」，给新成年英雄一个自定义标记——不要直接改 AgingCampaignBehavior 的私有逻辑。
public class MyComingOfAgeBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, OnComingOfAge);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnComingOfAge(Hero hero)
    {
        int adultAge = Campaign.Current.Models.AgeModel.HeroComesOfAge;
        if (hero.Clan == Clan.PlayerClan && hero.Age >= adultAge)
        {
            InformationManager.DisplayMessage(new InformationMessage($"{hero.Name} 已成年"));
        }
    }
}
```

## 参见

- [CampaignBehaviorBase](../CampaignBehaviorBase)
- [CampaignEvents](../CampaignEvents)
- [IDataStore](../IDataStore)
- [AiArmyMemberBehavior](../AiArmyMemberBehavior)

## 导航

- [本区域目录](../)

---
title: "AgingCampaignBehavior"
description: "战役老化行为：每日逐英雄推进年龄阶段与衰老死亡，玩家生病倒计时与额外生命都靠它，同时是唯一给主角发年龄事件的源。"
---

# AgingCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AgingCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs`

## 概述

`AgingCampaignBehavior` 是战役里的**时间引擎**：它每天逐个英雄检查年龄，推进「脱离婴儿期 → 进入少年期 → 成年」三个阶段，派发对应事件，并按 `ProbabilityOfDeath` 掷骰决定谁老死。玩家主角另有一条独立的「病倒」路径：`Campaign.Current.MainHeroIllDays` 累加，第 4 天起每天扣 5%×天数的血，血尽则死亡。

它同时是**唯一给主角派发年龄事件的源**：`CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero)` / `OnHeroReachesTeenAge` / `OnHeroGrowsOutOfInfancy` 三处调用全在这一个文件里。年龄阈值本身不写在这里，全读 `Campaign.Current.Models.AgeModel`。

## 心智模型

把它当成**「一个每天被调用的状态机 + 两张自己的表」**。三张必须记住的东西：

1. **两个字典是本行为的私有状态，且都进存档。** `_heroesYoungerThanHeroComesOfAge` 记录「未成年的英雄 → 上次见到的整数年龄」，`_extraLivesContainer` 记录「额外生命次数」。`SyncData` 同步这两个：

   ```csharp
   dataStore.SyncData("_extraLivesContainer", ref _extraLivesContainer);
   dataStore.SyncData("_heroesYoungerThanHeroComesOfAge", ref _heroesYoungerThanHeroComesOfAge);
   ```

   **为什么需要第一张表？** 因为 `DailyTickHero` 靠「年龄变了没有」来判断阶段推进：

   ```csharp
   if (_heroesYoungerThanHeroComesOfAge.TryGetValue(hero, out var value))
   {
       int num = (int)hero.Age;
       if (value != num)
       {
           if (num >= Campaign.Current.Models.AgeModel.HeroComesOfAge) { ...; CampaignEventDispatcher.Instance.OnHeroComesOfAge(hero); }
           else if (num == Campaign.Current.Models.AgeModel.BecomeTeenagerAge) { CampaignEventDispatcher.Instance.OnHeroReachesTeenAge(hero); }
           else if (num == Campaign.Current.Models.AgeModel.BecomeChildAge) { CampaignEventDispatcher.Instance.OnHeroGrowsOutOfInfancy(hero); }
       }
   }
   ```

   **判定用的是 `==` 而不是 `>=`**，所以**只在年龄恰好等于阈值的那一天触发**。若某个 mod 把 `AgeModel.BecomeChildAge` 改到 18 岁，一个英雄可能在 18 岁那天直接跳过「脱离婴儿期」和「进入少年期」两个事件（因为 `HeroComesOfAge` 分支先命中并从字典移除）。这是本行为最脆的一条逻辑。

2. **额外生命只有两个来源。** `OnPerkOpened`：`DefaultPerks.Medicine.CheatDeath` 给本人 +1；`DefaultPerks.Medicine.HealthAdvise` 且是氏族领袖时**给氏族里每个存活英雄各 +1**。没有别的来源。

3. **玩家生病与 NPC 老死是两条独立路径。** NPC 走 `IsItTimeOfDeath(hero)`：`Age >= BecomeOldAge && MBRandom.RandomFloat < hero.ProbabilityOfDeath`，命中后若有额外生命就扣一次，否则 `KillCharacterAction.ApplyByOldAge`。玩家走 `DailyTickHero` 里的 `Hero.IsMainHeroIll` 分支——**玩家不会在 `IsItTimeOfDeath` 里被处死**，那里的 `hero == Hero.MainHero && !Hero.IsMainHeroIll` 分支只是第一次生病时弹 Inquiry 并把 `TimeControlMode` 设为 `Stop`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 订阅 **9 个**事件：`DailyTickHeroEvent`、`OnCharacterCreationIsOverEvent`、`HeroComesOfAgeEvent`、`HeroReachesTeenAgeEvent`、`HeroGrowsOutOfInfancyEvent`、`PerkOpenedEvent`、`HeroCreated`、`HeroKilledEvent`、`OnGameLoadedEvent`。注意后面三个年龄事件**它自己既是发送方也是接收方**——它监听自己的派发，用于初始化 `HeroDeveloper`。 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 只同步两个字典，**第三个字段 `_gameStartDay` 不进存档**。它在 `OnCharacterCreationIsOver` 里被赋值，用来在开局当天豁免全部死亡判定。 |
| `DailyTickHero` | `private void DailyTickHero(Hero hero)` | **本类型的心脏**，每个英雄每天调一次。依次做：开局豁免 → 已有死亡标记则 `KillCharacterAction.ApplyByDeathMark` → 阶段推进 → 玩家生病扣血与死亡。**开头三行是 `if (CampaignOptions.IsLifeDeathCycleDisabled || flag || hero.IsTemplate) return;`，其中 `flag` 是「今天 == `_gameStartDay`」。** |
| `IsItTimeOfDeath` | `private void IsItTimeOfDeath(Hero hero)` | NPC 老死判定：`Age >= BecomeOldAge && !IsLifeDeathCycleDisabled && DeathMark == None && MBRandom.RandomFloat < ProbabilityOfDeath`。命中后按「有额外生命 → 扣一次 / 是玩家且未生病 → 弹 Inquiry 并暂停 / 其他 → `ApplyByOldAge`」三分支。 |
| `OnHeroReachesTeenAge` | `private void OnHeroReachesTeenAge(Hero hero)` | 少年期装备分配 + **一整套性格特质掷骰继承**（按 `DefaultTraits.Personality` 逐个，用 `MBRandom.RandomFloat` 决定 20% 继承父亲 / 60% 继承母亲等分支），最后 `hero.HeroDeveloper.InitializeHeroDeveloper()`。**这是全类型最长的方法之一，且对玩家氏族直接 return（只给装备）。** |
| `OnHeroComesOfAge` | `private void OnHeroComesOfAge(Hero hero)` | 成年：NPC 走 `HeroCreationModel.GetInheritedSkillsForHero` 继承技能，玩家走 `HeroDeveloper.SetInitialLevel`。随后强制分配战斗与平民装备——**装备为 null 时走 `Debug.FailedAssert` 并回退到 `generic_bat_dummy` / `generic_civ_dummy`**，所以 mod 删掉这两个 id 会连锁崩。 |
| `KillMainHeroWithIllness` | `private void KillMainHeroWithIllness()` | 病死路径的三行：`TimeControlMode = CampaignTimeControlMode.Stop` → `Hero.MainHero.AddDeathMark(null, DiedOfOldAge)` → `KillCharacterAction.ApplyByOldAge(Hero.MainHero)`。**注意死亡标记写的是「老死」而不是「病死」。** |
| `OnGameLoaded` | `private void OnGameLoaded(CampaignGameStarter obj)` | 读档钩子，只调 `CheckYoungHeroes()`。**它是对 `_heroesYoungerThanHeroComesOfAge` 的补漏**——读档后把表里缺失的未成年英雄补进去，并补发已经越过的事件。 |
| `CheckYoungHeroes` | `private void CheckYoungHeroes()` | 补漏逻辑：`Age < HeroComesOfAge && !IsDead && 不在字典里` 的英雄入表；**已入表但 `!IsDisabled` 的，再按 `Age > BecomeChildAge` / `Age > BecomeTeenagerAge` 补发两个事件**。注意内层那个 `!ContainsKey` 检查在刚 `Add` 之后恒为 false——**所以补发分支实际上永远不进**，这是一处死代码。 |

## 真实示例

观察一个英雄的年龄阶段（阈值全读 `AgeModel`）：

```csharp
AgeModel age = Campaign.Current.Models.AgeModel;
foreach (Hero hero in Hero.AllAliveHeroes)
{
    if (hero.Age < age.HeroComesOfAge)
    {
        Debug.Print(hero.Name + " is a child, age=" + (int)hero.Age + " teenAt=" + age.BecomeTeenagerAge, 0);
    }
    else if (hero.Age >= age.BecomeOldAge)
    {
        Debug.Print(hero.Name + " is old, death chance=" + hero.ProbabilityOfDeath, 0);
    }
}
```

监听本行为派发的三个年龄事件（这才是 mod 该挂的地方）：

```csharp
public class MyAgeWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroComesOfAgeEvent.AddNonSerializedListener(this, OnComesOfAge);
        CampaignEvents.HeroGrowsOutOfInfancyEvent.AddNonSerializedListener(this, OnGrowsUp);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnComesOfAge(Hero hero)
    {
        Debug.Print(hero.Name + " reached adulthood", 0);
    }

    private void OnGrowsUp(Hero hero)
    {
        Debug.Print(hero.Name + " left infancy", 0);
    }
}
```

在关掉生命死亡循环的战役里，本行为整体退化为「只推年龄阶段」：

```csharp
Debug.Print("life/death cycle disabled = " + CampaignOptions.IsLifeDeathCycleDisabled, 0);
Debug.Print("main hero illness days = " + Campaign.Current.MainHeroIllDays, 0);
Hero hero = Hero.AllAliveHeroes.First();
if (!CampaignOptions.IsLifeDeathCycleDisabled && hero.Age >= Campaign.Current.Models.AgeModel.BecomeOldAge)
{
    Debug.Print("subject to old-age death: " + hero.ProbabilityOfDeath, 0);
}
```

## 风险与边界

- **阶段判定用 `==` 而非 `>=`。** `num == BecomeTeenagerAge` / `num == BecomeChildAge` 意味着**只在恰好等于阈值那天触发**。移动 `AgeModel` 阈值会让某些年龄的英雄**同时跳过多个事件**（`HeroComesOfAge` 分支先命中并从字典移除）。
- **`CheckYoungHeroes` 的补发分支是死代码。** `Add` 之后立刻 `!ContainsKey(item)` 恒为 false，所以读档补发 `OnHeroGrowsOutOfInfancy` / `OnHeroReachesTeenAge` 的那段**永远不会执行**。读档后越过阶段的事件**不会被补发**——依赖这些事件的 mod 必须在读档时自己补一遍。
- **`_gameStartDay` 不进存档。** 它只在 `OnCharacterCreationIsOver` 里赋值。读档后 `DailyTickHero` 的 `flag` 恒为 false，**开局当天的死亡豁免在读档后不成立**。
- **`OnHeroComesOfAge` 依赖两个硬编码 dummy id。** `generic_bat_dummy` 与 `generic_civ_dummy` 找不到时 `Debug.FailedAssert` 之后的回退代码自己也会 NRE（`MBEquipmentRosterExtensions.All.Find(...)` 返回 null 再 `.GetBattleEquipments()`）。
- **`OnHeroReachesTeenAge` 对玩家氏族提前 return。** 它先分配装备，然后 `if (hero.Clan == Clan.PlayerClan) return;`——**玩家家族的少年不掷性格特质、不调 `InitializeHeroDeveloper`**。
- **玩家的病死在 `DailyTickHero` 里，不在 `IsItTimeOfDeath` 里。** 扣血公式是 `MathF.Ceiling(HitPoints * (0.05f * MainHeroIllDays))`，从第 4 天起每天执行。**`MainHeroIllDays <= 3` 时直接 return。**
- **死亡标记统一写 `DiedOfOldAge`。** 病死路径的 `KillMainHeroWithIllness` 也写这个标记，所以**从日志/存档上看不出主角是病死的**。
- **额外生命只认两个 perk。** `DefaultPerks.Medicine.CheatDeath`（本人）与 `DefaultPerks.Medicine.HealthAdvise`（氏族领袖时全族）。`_extraLivesContainer` 计数归零即从字典移除。
- **`OnHeroKilled` 只做清理。** 它把死者从 `_heroesYoungerThanHeroComesOfAge` 移除，**不碰 `_extraLivesContainer`**——死者的额外生命条目会残留（无害，但会随存档累积）。
- **`OnHeroCreated` 可能抛异常。** `_heroesYoungerThanHeroComesOfAge.Add(hero, num)` 用的是 `Add` 而非索引赋值；若同一个 `Hero` 实例被 `HeroCreated` 触发两次，抛 `ArgumentException`。
- **模板英雄全程豁免。** `hero.IsTemplate` 直接 return。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/AgingCampaignBehavior.cs` 是 349 行、**公开表面只有 `RegisterEvents` 与 `SyncData` 两个 override**，其余 17 个成员（含 15 个 `private` 方法与两个字典字段）全是私有的。1.4.6 同名文件公开表面一致（行数略增）。

阈值本身在 [AgeModel](../AgeModel) 与官方实现 [DefaultAgeModel](../DefaultAgeModel) 里，**不在本文件**——本类型只读不定义。

## 依赖关系

- 基类：[CampaignBehaviorBase](../CampaignBehaviorBase)，提供 `RegisterEvents` / `SyncData` 两个 override 点；注册点 `SandBoxManager.cs:140` 的 `gameStarter.AddBehavior(new AgingCampaignBehavior())`
- 阈值来源：[AgeModel](../AgeModel) 的 `HeroComesOfAge` / `BecomeTeenagerAge` / `BecomeChildAge` / `BecomeOldAge` / `MiddleAdultHoodAge` / `MaxAge`，全部读 `Campaign.Current.Models.AgeModel`
- 英雄侧：[Hero](../Hero) 的 `Age` / `ProbabilityOfDeath` / `IsAlive` / `IsTemplate` / `DeathMark` / `HeroDeveloper`，以及 `Hero.MainHero` / `Hero.IsMainHeroIll` / `Hero.AllAliveHeroes` / `Hero.DeadOrDisabledHeroes` / `Hero.FindAll`
- 死亡执行：[KillCharacterAction](../../campaign-ext/KillCharacterAction).ApplyByOldAge / ApplyByDeathMark / `KillCharacterAction.KillCharacterActionDetail.DiedOfOldAge`
- 事件派发与订阅：[CampaignEvents](../CampaignEvents) 的 9 个入口与 [CampaignEventDispatcher](../CampaignEventDispatcher) 的三个 `On*` 出口（`OnHeroComesOfAge` / `OnHeroReachesTeenAge` / `OnHeroGrowsOutOfInfancy`）
- 开关：[CampaignOptions](../CampaignOptions).IsLifeDeathCycleDisabled 与 `Campaign.Current.MainHeroIllDays`
- 装备：[Equipment](../../core-extra/Equipment) / `EquipmentHelper.AssignHeroEquipmentFromEquipment` / `Campaign.Current.Models.EquipmentSelectionModel`
- 特质：[DefaultTraits](../DefaultTraits).Personality 族与 `Hero.GetTraitLevel` / `SetTraitLevel` / `CharacterObject.GetTraitLevel`
- 存档：[IDataStore](../IDataStore) 的 `SyncData(string, ref)`，两个字典都参与序列化

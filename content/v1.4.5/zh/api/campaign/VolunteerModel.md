---
title: "VolunteerModel"
description: "决定领主/要人（notable）每日能产出哪些志愿兵、志愿兵最高可升级到第几阶、玩家或驻军从一个要人处最多能招募到第几个招募槽位，以及某要人是否拥有可招募兵员的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.VolunteerModel 解析。"
---

# VolunteerModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** abstract class VolunteerModel : MBGameModel<VolunteerModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/VolunteerModel.cs

## 概述

该模型集中封装了“志愿兵（volunteer）”系统的全部判定规则：给定一名要人（如乡村名流、城镇显贵、行会头目、团伙头目等），决定其可提供的初始基础兵种、每日刷新更高阶志愿兵的概率、志愿兵可成长的最高阶数，以及一个招募方（玩家英雄或定居点驻军）最多能看到并招募到第几个招募位。它只做纯计算，不持有任何会被写进存档的世界状态——真正的兵员数组保存在 `Hero.VolunteerTypes` 上，由招募行为逐日刷新。

## 心智模型

VolunteerModel 是一个纯规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultVolunteerModel`）并持有，运行时统一用 `Campaign.Current.Models.VolunteerModel` 取得。它不参与存档序列化，也不会在每个 tick 被重新构造。每日结算时，`RecruitmentCampaignBehavior` 调用 `GetBasicVolunteer` 与 `GetDailyVolunteerProductionProbability` 刷新各要人的 `Hero.VolunteerTypes`，并借 `MaxVolunteerTier` 决定是否继续向上升级；招募菜单的 VM（`RecruitVolunteerTroopVM`）和招募行为再用 `MaximumIndexHeroCanRecruitFromHero` / `MaximumIndexGarrisonCanRecruitFromHero` 截断玩家或驻军可见的槽位数。要改规则就继承并注册替换实现，要读结果就走模型，绝不要直接改模型字段或手动改 `Hero.VolunteerTypes` 的写入路径。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“志愿兵如何生成/可招募到哪个槽位”的规则时，读取 `Campaign.Current.Models.VolunteerModel` 的返回值，或提供一个新的派生类覆盖各抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接给 `Hero.VolunteerTypes` 之外的模型字段赋值来操纵招募结果——模型是无状态纯函数，真正的状态在 [Hero](../Hero) 的 `VolunteerTypes` 数组上。要改世界状态应走 `RecruitmentCampaignBehavior` 等招募行为或对应 Action，而不是篡改模型；也不要在招募 UI 之外、未通过这两个上限方法去判断“玩家能招第几个”，否则会与界面可招槽位脱节。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<VolunteerModel>()` 解析并缓存实例。
- [DifficultyModel](../DifficultyModel) —— `DefaultVolunteerModel` 在 `MaximumIndexCanPartyRecruitFromHeroInternal` 中读取 `GetPlayerRecruitSlotBonus()` 以给玩家英雄额外的招募槽位加成。

下游与协同系统（调用方）：

- [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) —— 每夜刷新要人的 `Hero.VolunteerTypes`，调用 `GetBasicVolunteer`、`GetDailyVolunteerProductionProbability`、`MaxVolunteerTier`；玩家在招募菜单中招募时调用 `MaximumIndexHeroCanRecruitFromHero`。
- [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) —— 驻军自动招募时调用 `MaximumIndexGarrisonCanRecruitFromHero` 限制可招槽位。
- [Hero](../Hero) —— 暴露 `CanHaveRecruits` 属性，直接转发到 `VolunteerModel.CanHaveRecruits(this)`；其 `VolunteerTypes` 是被刷新的真实状态。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述两个招募行为均继承自它，是实际修改志愿兵数量的调用者。

共享/相关类型：

- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) —— 招募上下文化（要人所在定居点、附庸城镇）作为参数传入，并用于判定同阵营/交战惩罚。
- [CharacterObject](../CharacterObject) —— `GetBasicVolunteer` 的返回类型，也是 `Hero.VolunteerTypes` 的元素类型。
- [ExplainedNumber](../ExplainedNumber) —— `GetDailyVolunteerProductionProbability` 内部用其累积概率因子（Cantons 政策、骑兵战术专长等）。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.VolunteerModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了上限公式或概率，但真正把 `Hero.VolunteerTypes` 刷新的仍是 `RecruitmentCampaignBehavior`，真正执行招募的是招募菜单与各招募行为。只替换模型、却让调用方按旧假设处理槽位或兵种，会出现界面可招数与预测不一致。
- **误用 `useValueAsRelation` 默认哨兵值**：该参数默认 `-101`，传入小于 `-100` 时内部改用 `buyerHero.GetRelation(sellerHero)`，传入其它值则把它当作“关系度”直接使用。若你传入一个恰好小于 `-100` 的真实关系值（如 `-100` 以上负数），会被错误当作哨兵而改用真实关系，导致上限计算偏差。

## 成员说明

### 基础兵种与上限阶数

- **`MaxVolunteerTier`**（属性，`int`）
  - 用途：志愿兵可成长的最高阶数。默认实现 `DefaultVolunteerModel` 返回 `4`；`RecruitmentCampaignBehavior` 在升级 `Hero.VolunteerTypes[i]` 前用它拦截 `characterObject.Tier < MaxVolunteerTier`，避免越阶。
  - 副作用：无，纯计算。
  - 调用时机：每日刷新要人志愿兵、判断某兵种是否还能继续升级时读取。

- **`GetBasicVolunteer(Hero hero)`**
  - 用途：返回该要人初始提供的基础兵种。默认实现：若该要人是乡村名流且其所在村庄附庸于城堡（`Village.Bound.IsCastle`），返回 `hero.Culture.EliteBasicTroop`，否则返回 `hero.Culture.BasicTroop`。
  - 副作用：无，纯计算；真正的写入由调用方把结果赋给 `hero.VolunteerTypes[i]`。
  - 调用时机：仅当某个招募槽位为空（`VolunteerTypes[i] == null`）时由 `RecruitmentCampaignBehavior` 调用，用于填充新兵种。

- **`CanHaveRecruits(Hero hero)`**
  - 用途：判断该英雄是否拥有可招募的兵员。默认实现：职业为雇佣兵（`Occupation.Mercenary`）或某段范围内（`Occupation` 枚举 17~22，即各类 notable/团伙头目等）时返回 `true`。
  - 副作用：无。
  - 调用时机：`Hero.CanHaveRecruits` 属性直接转发；`RecruitmentCampaignBehavior` 在刷新某要人前先校验其是否为 `true` 且存活。

### 招募槽位上限

- **`MaximumIndexHeroCanRecruitFromHero(Hero buyerHero, Hero sellerHero, int useValueAsRelation = -101)`**
  - 用途：返回招募方英雄 `buyerHero` 从要人 `sellerHero` 处最多能看到并招募到的招募槽位下标（返回值即最大下标，可招数量为 `返回值 + 1`）。综合基础值、双方关系度（按阈值映射到 0~7）、同阵营（+1）、非玩家英雄（+1）、交战阵营（负值惩罚，且对小势力英雄豁免）、以及商人/领导力/魅力/工程等多条专长加成，最终 `MathF.Min(6, …)` 截断。
  - 副作用：无，纯计算。
  - 调用时机：玩家打开招募菜单（`RecruitVolunteerTroopVM`）与 `RecruitmentCampaignBehavior` 实际招募时调用；`HeroHelper` 的招募判定也复用它。

- **`MaximumIndexGarrisonCanRecruitFromHero(Settlement settlement, Hero sellerHero)`**
  - 用途：返回某定居点 `settlement` 的驻军从要人 `sellerHero` 处能自动招募到的槽位上限。默认实现转发到内部 `MaximumIndexCanPartyRecruitFromHeroInternal(settlement.Owner, sellerHero)`，依据定居点所有者、玩家招募槽位加成、团伙头目在己方定居点且总督具 `Roguery.OneOfTheFamily` 专长等条件计算，同样 `MathF.Min(6, …)` 截断。
  - 副作用：无，纯计算。
  - 调用时机：仅由 `GarrisonRecruitmentCampaignBehavior` 在驻军自动征兵时调用。

### 每日产出概率

- **`GetDailyVolunteerProductionProbability(Hero hero, int index, Settlement settlement)`**
  - 用途：返回要人 `hero` 在第 `index` 个招募槽位上当日刷新出（或升级出）志愿兵的概率（`0~1`）。基础公式 `0.75f * Pow(0.7 + 势力领地加成, index + 1)` 并 `Clamp(0,1)`；再叠加 Cantons 政策（`+0.2f` 因子）、以及该要人所处城镇具备 `Riding.CavalryTactics` 且当前槽位兵种为骑兵时的加成。
  - 副作用：无，纯计算；内部用 `ExplainedNumber` 累积因子但最终只返回 `ResultNumber`。
  - 调用时机：`RecruitmentCampaignBehavior` 每夜对每个要人的每个空槽位掷骰（`MBRandom.RandomFloat < 概率`）决定是否生成或升级志愿兵。

## 示例

查询玩家英雄能从某要人处招募的最高槽位：

```csharp
Settlement settlement = Settlement.CurrentSettlement;
Hero notable = settlement.Notables.GetRandomElement();
int maxIndex = Campaign.Current.Models.VolunteerModel
    .MaximumIndexHeroCanRecruitFromHero(Hero.MainHero, notable);
// 可招募的槽位数为 maxIndex + 1（下标从 0 起）
```

计算某要人第一个槽位今日的志愿兵产出概率：

```csharp
float probability = Campaign.Current.Models.VolunteerModel
    .GetDailyVolunteerProductionProbability(notable, index: 0, settlement);
CharacterObject basicTroop = Campaign.Current.Models.VolunteerModel.GetBasicVolunteer(notable);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [RecruitmentCampaignBehavior](../RecruitmentCampaignBehavior) · [GarrisonRecruitmentCampaignBehavior](../GarrisonRecruitmentCampaignBehavior) · [Hero](../Hero) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [CharacterObject](../CharacterObject) · [ExplainedNumber](../ExplainedNumber) · [DifficultyModel](../DifficultyModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)

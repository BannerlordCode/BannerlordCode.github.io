---
title: "MarriageModel"
description: "决定英雄婚配资格、婚后归属家族、结婚关系增量与 NPC 联姻概率的规则模型，由 Campaign 在启动时通过 Campaign.Current.Models.MarriageModel 解析，被求婚/求爱行为与 MarriageAction 在运行时调用。"
---

# MarriageModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class MarriageModel : MBGameModel<MarriageModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MarriageModel.cs

## 概述

该模型集中裁决“谁可以和谁结婚”：单对英雄是否适婚、单个英雄是否可作配偶、家族是否可参与联姻，并给出婚后英雄归属哪个 `Clan`、结婚带来的关系增量，以及一对 NPC 每日自动成婚的概率。它只做判定与纯计算，真正的结婚动作由 [MarriageAction](../../campaign-ext/MarriageAction) 完成，求爱/求婚流程则由 [RomanceCampaignBehavior](../RomanceCampaignBehavior) 与 [MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior) 驱动。

## 心智模型

MarriageModel 是一个纯裁决的 Model 型扩展点：`Campaign` 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出 `DefaultMarriageModel` 唯一实例并缓存，运行时统一用 `Campaign.Current.Models.MarriageModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。求爱行为 `RomanceCampaignBehavior` 在每日推进 NPC 婚姻时会调用 `NpcCoupleMarriageChance` 与 `ShouldNpcMarriageBetweenClansBeAllowed` 来评估是否撮合；而真正落定婚姻的 `[MarriageAction](../../campaign-ext/MarriageAction)` 在 `ApplyInternal` 里先用 `IsCoupleSuitableForMarriage` 守卫、再用 `GetEffectiveRelationIncrease` 与 `GetClanAfterMarriage` 来加关系并决定换族。要改婚配规则就继承并注册一个替换实现；要“执行”结婚必须走 `MarriageAction.Apply`，绝不要把模型当成写世界的入口或直接改 `Hero.Spouse`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“谁能结婚 / 婚后归属谁 / NPC 联姻概率如何计算”的规则时，读取 `Campaign.Current.Models.MarriageModel` 的返回值，或提供一个新的派生类覆盖其抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要用模型去“执行”结婚——它只会判定，真正改 `Hero.Spouse`、关系、`Clan` 归属的是 `[MarriageAction](../../campaign-ext/MarriageAction)`。不要亲自给 `Hero.Spouse` 或 `Hero.Clan` 赋值了事；也不要把模型返回值当作持久世界状态（它是无状态的纯函数）。发起求爱/求婚应走 `RomanceCampaignBehavior` 与 `RomanceModel`，而非直接调用本模型。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<MarriageModel>()` 解析并缓存实例。
- [AgeModel](../AgeModel) —— `NpcCoupleMarriageChance` 读取 `HeroComesOfAge` 计算年龄因子。
- [Romance](../Romance) —— `IsCoupleSuitableForMarriage` 调用 `GetCourtedHeroInOtherClan` 检查双方是否已有族内求爱对象。

下游与协同系统：

- [Hero](../Hero) —— 主要被判定对象；`Hero.IsSuitableForMarriage()` 在第 1942 行调用本模型的同名方法。
- [Clan](../Clan) —— `IsClanSuitableForMarriage` 与 `GetClanAfterMarriage` 操作家族；`NpcCoupleMarriageChance` 读取 `Clan.GetRelationWithClan` 与 `Clan.Kingdom`。
- [RomanceCampaignBehavior](../RomanceCampaignBehavior) —— 求爱每日推进时调用 `IsCoupleSuitableForMarriage`、`IsClanSuitableForMarriage`、`NpcCoupleMarriageChance`。
- [MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior) —— NPC 向玩家家族提亲时调用 `IsCoupleSuitableForMarriage`、`ShouldNpcMarriageBetweenClansBeAllowed`、`GetClanAfterMarriage`、`IsClanSuitableForMarriage`。
- [MarriageAction](../../campaign-ext/MarriageAction) —— 真正执行结婚，依赖 `IsCoupleSuitableForMarriage`（守卫）、`GetEffectiveRelationIncrease`、`GetClanAfterMarriage`。
- [PregnancyModel](../PregnancyModel) —— 同属家庭生命周期模型簇，婚后受孕由它裁决，常一起被派生替换。
- [ExplainedNumber](../ExplainedNumber) —— `GetEffectiveRelationIncrease` 内部用其累加魅力属性加成后再取整。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— `RomanceCampaignBehavior` / `MarriageOfferCampaignBehavior` 的基类，是实际驱动调用方。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.MarriageModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类放松了 `IsCoupleSuitableForMarriage`，但真正落定婚姻的是 `[MarriageAction](../../campaign-ext/MarriageAction)`，而求爱/提亲是由行为驱动的——只替换模型、却让行为按旧假设处理配偶与家族，会出现“判定通过却流程不推进”或关系/归属不一致。
- **`GetClanAfterMarriage` 的副作用经由 MarriageAction 放大**：`MarriageAction.ApplyInternal` 用该返回值决定哪个英雄换族，并进一步触发 `HandleClanChangeAfterMarriageForHero`——可能移除总督、解散军团/队伍、清理跨王国敌对行动。错误地覆盖此方法会悄然把英雄在家族/王国间迁移，引发意料之外的外交与队伍销毁。
- **`IsSuitableForMarriage` 依赖行为注册**：其默认实现会查询 `IMarriageOfferCampaignBehavior.IsHeroEngaged` 来判断是否已订婚；若该行为被替换或返回口径变化，单个英雄的“可婚”判定会随之改变，影响求婚对话与强行结婚作弊。

## 成员说明

### 婚姻资格判定

- **`IsCoupleSuitableForMarriage(Hero firstHero, Hero secondHero)`**
  - 用途：判断两名英雄是否可以结为夫妇。默认实现检查双方家族是否适婚、是否同时为各自家族领袖、是否同性、是否在三代血亲内（`AreHeroesRelated(..., 3)`）、是否已有指向“对方家族其他英雄”的求爱对象（`Romance.GetCourtedHeroInOtherClan`），以及双方 `CanMarry()`。
  - 副作用：无，纯判定；会读取 [Romance](../Romance) 的求爱状态。
  - 调用时机：`[MarriageAction](../../campaign-ext/MarriageAction).ApplyInternal` 在执行前先调用它做守卫；[RomanceCampaignBehavior](../RomanceCampaignBehavior)、[MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior)、`LordConversationsCampaignBehavior`、`MarriageOfferMapNotification`、`CampaignCheats` 以及 `Hero.IsSuitableForMarriage` 链路都调用。

- **`IsSuitableForMarriage(Hero maidenOrSuitor)`**
  - 用途：判断单个英雄当前是否可作为适婚对象——必须处于活跃、无配偶、是领主、非未成年派系英雄/名人/模板、不在队伍事件或军团中，且未订婚，并达到最低婚龄（`MinimumMarriageAgeMale`/`MinimumMarriageAgeFemale`）。
  - 副作用：会查询 `IMarriageOfferCampaignBehavior.IsHeroEngaged` 判断是否已订婚；无状态写入。
  - 调用时机：`Hero.cs` 第 1942 行的 `IsSuitableForMarriage()` 实例方法调用；`LordConversationsCampaignBehavior` 用它决定求婚对话选项；`CampaignCheats` 用它给主角强行结婚。

- **`IsClanSuitableForMarriage(Clan clan)`**
  - 用途：判断一个家族是否可参与婚姻（非匪帮、非叛军、未被消灭）。
  - 副作用：无。
  - 调用时机：`IsCoupleSuitableForMarriage` 内部调用；[MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior) 在评估是否向玩家家族提亲时调用。

### 婚姻结果与关系

- **`GetClanAfterMarriage(Hero firstHero, Hero secondHero)`**
  - 用途：决定婚后英雄归属于哪个 `Clan`——优先玩家角色所在家族，其次家族领袖所在家族，最后对非女性英雄取本家、女性英雄取对方家族。
  - 副作用：纯查询，但返回值被 `[MarriageAction](../../campaign-ext/MarriageAction)` 用于决定谁换族（进而触发移除总督、解散军团/队伍等）。
  - 调用时机：`[MarriageAction](../../campaign-ext/MarriageAction).ApplyInternal`、`MarriageBarterable`、`MarriageOfferCampaignBehavior` 调用。

- **`GetEffectiveRelationIncrease(Hero firstHero, Hero secondHero)`**
  - 用途：返回结婚时双方关系增量（基础 20，叠加魅力属性 `CharmRelationBonus` 对相应角色的角色加成，最后 `MathF.Round` 取整）。内部用 [ExplainedNumber](../ExplainedNumber) 累加。
  - 副作用：无。
  - 调用时机：仅 `[MarriageAction](../../campaign-ext/MarriageAction)` 在 `ApplyInternal` 里调用，作为 `ChangeRelationAction` 的增量参数。

### NPC 婚姻概率与家族策略

- **`NpcCoupleMarriageChance(Hero firstHero, Hero secondHero)`**
  - 用途：返回一对 NPC 英雄每日自动结婚的概率（默认基础 `0.002f`，随双方年龄相对成年 `AgeModel.HeroComesOfAge`、年龄差、跨王国折半、双方家族好感度 `Clan.GetRelationWithClan` 调整；不适婚则返回 `0f`）。
  - 副作用：无；会读取 [AgeModel](../AgeModel)。
  - 调用时机：[RomanceCampaignBehavior](../RomanceCampaignBehavior) 每日 tick 评估 NPC 是否成婚。

- **`ShouldNpcMarriageBetweenClansBeAllowed(Clan consideringClan, Clan targetClan)`**
  - 用途：判断两个家族之间是否允许 NPC 联姻（不能是同一家族、不能处于交战、双方关系 `>= -50`）。
  - 副作用：无。
  - 调用时机：[MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior) 在评估/刷新求婚提议时调用；[RomanceCampaignBehavior](../RomanceCampaignBehavior) 用它决定是否把求婚推进到提亲。

### 适龄子女与最低婚龄

- **`MinimumMarriageAgeMale`**（属性，返回 `int`）
  - 用途：男性英雄可结婚的最低年龄，默认实现返回 `18`。被 `IsSuitableForMarriage` 用于男性年龄门槛。
  - 副作用：无。调用时机：资格判定内部读取。

- **`MinimumMarriageAgeFemale`**（属性，返回 `int`）
  - 用途：女性英雄可结婚的最低年龄，默认实现返回 `18`。被 `IsSuitableForMarriage` 用于女性年龄门槛。
  - 副作用：无。调用时机：资格判定内部读取。

- **`GetAdultChildrenSuitableForMarriage(Hero hero)`**
  - 用途：返回该英雄所有“可结婚”的子女（`child.CanMarry()` 为真的子集）。返回 `List<Hero>`。
  - 副作用：无。
  - 调用时机：`LordConversationsCampaignBehavior` 在求婚对话中枚举可婚子女。

## 示例

在缔结婚姻前先用模型做一次资格守卫，真正的结婚动作交给 `MarriageAction`：

```csharp
Hero mainHero = Hero.MainHero;
Hero partner = Hero.OneToOneConversationHero; // 对话中的另一方英雄
if (partner != null &&
    Campaign.Current.Models.MarriageModel.IsCoupleSuitableForMarriage(mainHero, partner))
{
    // 模型只负责“能不能”，执行结婚请走 MarriageAction
    MarriageAction.Apply(mainHero, partner);
}
```

查询婚后归属家族与结婚带来的关系增量：

```csharp
Clan clanAfter = Campaign.Current.Models.MarriageModel
    .GetClanAfterMarriage(heroOne, heroTwo);
int relationGain = Campaign.Current.Models.MarriageModel
    .GetEffectiveRelationIncrease(heroOne, heroTwo);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Hero](../Hero) · [Clan](../Clan) · [RomanceCampaignBehavior](../RomanceCampaignBehavior) · [MarriageOfferCampaignBehavior](../MarriageOfferCampaignBehavior) · [MarriageAction](../../campaign-ext/MarriageAction) · [PregnancyModel](../PregnancyModel) · [AgeModel](../AgeModel) · [Romance](../Romance) · [ExplainedNumber](../ExplainedNumber) · [DefaultMarriageModel](../DefaultMarriageModel) · [CampaignBehaviorBase](../CampaignBehaviorBase)

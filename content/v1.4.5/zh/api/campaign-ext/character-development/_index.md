---
title: "Character Development 家族手册"
description: "说明技能、Perk、Trait、文化 Feat、英雄成长以及事件驱动技能经验的注册与运行边界。"
weight: 12
---

# Character Development 家族手册

**一句话职责：** 本命名空间把战役事件转换为技能经验、Perk 选择、Trait 和文化效果；它不取代决定规则的战役 Model。

## 心智模型

不要把这里的三十个类型当作三十个互不相关的工具。它们组成四层链路。

1. `DefaultPerks` 及其 `OneHanded`、`Bow`、`Medicine` 等嵌套技能组注册静态 `PerkObject` 图。每个 Perk 带有技能门槛、可选的替代分支、个人/队长/统治者等角色效果、增量类型和部队用途掩码。嵌套类是目录，不是每个英雄的运行时状态。
2. `DefaultTraits` 和 `DefaultCulturalFeats` 通过游戏对象管理器注册 `TraitObject` 与 `FeatObject` 定义。`TraitObject` 描述有界的性格或隐藏 Trait，`FeatObject` 描述加法或因子形式的文化效果；英雄或文化持有运行时值，定义类本身不持有。
3. `HeroDeveloper` 持有单个 `Hero` 的可变成长状态：技能 XP、专精点、属性点、总 XP、等级和已选 Perk。它把 XP 阈值和学习速率交给 `Campaign.Current.Models.CharacterDevelopmentModel`，再通过现有 setter 和战役事件更新英雄。
4. `SkillLevelingManager` 是静态转发入口，把调用交给当前战役持有的 `ISkillLevelingManager` 实例；`DefaultSkillLevelingManager` 将战斗、移动、交易、治疗、围城、招募等真实事件映射到对应技能。`TraitLevelingHelper` 是玩家 Trait 的对应路径：通过当前 Model 计算 XP 到等级的转换，更新主角，触发 Trait 变化事件，并在变化足够大时写入声望日志。

实用阅读顺序是 `Campaign.Current` -> `Hero.HeroDeveloper` 或 `SkillLevelingManager` 事件入口 -> `SkillObject` / `PerkObject` / `TraitObject` -> `CharacterDevelopmentModel`。XP 阈值、学习速率和升级判断看 [CharacterDevelopmentModel](../CharacterDevelopmentModel)；可替换计算看 [Models](../models/)；世界状态变更看 [Actions](../actions/)。Perk 目录不替代这两层。

## 依赖与边界

- **上游：** [Campaign](../../campaign/Campaign)、[Hero](../../campaign/Hero)、[MobileParty](../../campaign/MobileParty)、[Settlement](../../campaign/Settlement)、[SkillObject](../../core-extra/SkillObject) 和 [GameModels](../GameModels)。
- **下游：** 战役 Behavior、[CampaignEvents](../CampaignEvents)、说服、交易、战斗、围城、据点管理以及 [存档系统](../../save-system/)。
- **同级家族：** [Models](../models/)、[Actions](../actions/)、[Behaviors](../behaviors/)、[Party](../party/) 和 [Quests](../quests/)。
- **注册边界：** 默认类在战役/游戏对象管理器组装阶段创建 presumed object。运行中的战役不要再 `new` 一个 `PerkObject`、`TraitObject` 或 `FeatObject`，然后期待 `All`、Perk 检查或文化检查自动看到它。
- **计算边界：** `HeroDeveloper` 和默认技能管理器会调用当前的角色发展、战斗、外交、治疗、说服和围城 Model。需要跟随可替换规则时，不要在 UI 或 Behavior 中复制 XP 常量。
- **变更边界：** 必须从真实事件或战役入口进入。不要从渲染 tick 重复发 XP，不要直接写英雄技能字段，也不要从 Model 查询中修改关系或世界状态。

## 已注册的公共表面

表格使用完整限定名。这里的 `Crafting` 是战役角色发展中的 Perk 目录，与 Core 的 crafting 数据类型不同。每行描述业务职责和典型时机，而不是重复签名。

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.AdditionType | 选择 `FeatObject.Initialize` 保存文化效果时使用直接加法还是加法因子。 | 注册文化 Feat |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Athletics | 汇总 Athletics 的 `PerkObject` 分支及其个人、队长、队伍领袖或统治者效果。 | 默认 Perk 注册与选择 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Bow | 汇总 Bow 分支以及武器、远程部队和角色效果。 | 默认 Perk 注册与选择 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Charm | 汇总社交与说服 Perk，供关系、对话和据点 Behavior 消费。 | 默认 Perk 注册；说服与关系检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Crafting | 汇总锻造、冶炼、体力和 Smithing 相关 Perk。 | 默认 Perk 注册；锻造操作 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Crossbow | 汇总弩武器与弩兵 Perk，供围城和战斗计算消费。 | 默认 Perk 注册与战斗/围城检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultCulturalFeats | 创建并初始化 Aserai、Battania、帝国、Khuzait、Sturgia 和 Vlandia 的文化 `FeatObject` 定义。 | 战役启动与文化效果查询 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultPerks | 持有默认 Perk 目录、对象注册、等级成本、替代分支配对和全部技能分支初始化。 | 战役启动与英雄 Perk 选择 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultSkillLevelingManager | 实现 `ISkillLevelingManager`，把真实的战斗、移动、交易、治疗、围城、招募和战役事件转换为技能 XP。 | 运行中战役的事件回调 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.DefaultTraits | 创建性格、Persona、角色、帮派和其他隐藏 `TraitObject`，并把五个性格 Trait 暴露为 `Personality`。 | 战役启动与 Trait 读取 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Engineering | 汇总围城器械、围城营地、据点项目和工程师/统治者角色的 Engineering Perk。 | 默认 Perk 注册；围城与据点检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.FeatObject | 初始化后保存文化效果的名称、数值加成、加法模式和正负分类。 | 注册文化定义与效果计算 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.HeroDeveloper | 持有单个英雄可保存的技能 XP、专精点、属性点、总 XP、升级过程和 Perk 选择状态。 | 创建英雄、获得 XP、升级、读档和重置 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.ISkillLevelingManager | 定义战斗、移动、交易、说服、医疗、侦察、战术、工程及新战役活动的事件到 XP 合约。 | 战役服务注册与事件转发 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Leadership | 汇总招募、部队升级、士气、队伍上限和队伍领袖效果的 Leadership Perk。 | 默认 Perk 注册；队伍与招募检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Medicine | 汇总治疗、手术、伤兵恢复、据点治理和 Surgeon 效果使用的 Medicine Perk。 | 默认 Perk 注册；地图治疗与战后恢复 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.OneHanded | 汇总单手武器与盾牌分支，以及骑乘、步兵、队长和个人效果。 | 默认 Perk 注册与战斗检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.PerkObject | 保存 Perk 的技能、门槛、替代分支、角色加成、增量类型、部队掩码和本地化描述。 | 对象初始化与运行时 Perk 查询 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Polearm | 汇总骑乘/步战 Polearm 分支及编队效果。 | 默认 Perk 注册与战斗检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Riding | 汇总骑乘移动、坐骑、骑兵和骑马队伍相关 Perk。 | 默认 Perk 注册；移动与战斗检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Roguery | 汇总帮派招募、掠夺、越狱、巷道和非法战役行动消费的 Roguery Perk。 | 默认 Perk 注册；犯罪与遭遇流程 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Scouting | 汇总踪迹、藏身处、地形、队伍移动和 Scout 角色效果的 Scouting Perk。 | 默认 Perk 注册；地图移动与踪迹事件 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.SkillLevelingManager | 把静态事件 API 转发给 `Campaign.Current.SkillLevelingManager`，使调用者不依赖默认实现。 | 战役 tick 和结果的事件生产者 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Steward | 汇总 Quartermaster 与 Governor 在食物、工资、项目、载重和据点管理中的 Perk。 | 默认 Perk 注册；队伍与据点检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Tactics | 汇总 Tactics Perk，也是指挥官/军团战术 XP 的目标技能。 | 默认 Perk 注册；战斗模拟与军团流程 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Throwing | 汇总投掷武器和投掷兵相关 Perk。 | 默认 Perk 注册与战斗检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.Trade | 汇总交易利润、商队和交易效果相关的 Trade Perk。 | 默认 Perk 注册；交易与经济检查 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TraitLevelingHelper | 应用玩家 Trait XP，通过当前 Model 转成 Trait 等级，广播变化，并在变化足够大时写入声望日志。 | 任务、战斗、劫掠、说服、围城和事件结果 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TraitObject | 定义 Trait 的本地化身份、显隐和允许范围；不保存英雄当前的 Trait 数值。 | Trait 注册与英雄读取 |
| TaleWorlds.CampaignSystem.CharacterDevelopment | TaleWorlds.CampaignSystem.CharacterDevelopment.TwoHanded | 汇总双手武器 Perk 以及个人、步兵、队长、统治者和队伍领袖效果。 | 默认 Perk 注册与战斗检查 |

## 真实获取路径

`Hero` 持有自己的 developer 对象。下面代码读取真实战役对象，没有另建一套成长数据。`HeroDeveloper.GetFocus` 和 `GetSkillXpProgress` 是读取操作；功能确实要奖励经验时，应在正确的战役边界使用 `Hero.AddSkillXp` 或面向事件的管理器。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.Core;

Hero hero = Hero.MainHero;
if (hero != null && hero.HeroDeveloper != null)
{
    SkillObject scouting = DefaultSkills.Scouting;
    int focus = hero.HeroDeveloper.GetFocus(scouting);
    int progress = hero.HeroDeveloper.GetSkillXpProgress(scouting);
    bool knowsOratory = hero.GetPerkValue(DefaultPerks.Charm.Oratory);
    int honorLevel = hero.GetTraitLevel(DefaultTraits.Honor);
}
```

事件生产者应从静态门面进入，让战役注册的实现继续掌握规则。下面的 `tradeProfit` 必须来自真实完成交易流程，不能把 UI 预览值当成已发生的利润。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;

Hero trader = MobileParty.MainParty.LeaderHero;
if (trader != null)
{
    SkillLevelingManager.OnTradeProfitMade(trader, tradeProfit);
}
```

随后由 `DefaultSkillLevelingManager` 按 Model-aware 路径处理。例如正的交易利润进入 Trade XP，成功手术按 Surgeon 角色进入 Medicine XP，发现踪迹进入 Scouting XP，围城器械回调只有存在有效工程师时才进入 Engineering XP。调用方不应在门面旁边复制这些公式。

## 关键成员行为

- `PerkObject.Initialize` 创建主/次本地化描述，保存技能门槛、角色效果、增量类型和部队掩码，并把 `AlternativePerk` 双向连接。只设置一侧分支，或把 `PrimaryBonus` 一律当百分比，会改变下游消费者的结果。
- `FeatObject.Initialize` 保存 `EffectBonus`、`IncrementType` 和 `IsPositive`。`AdditionType.Add` 与 `AdditionType.AddFactor` 的消费方式不同，因子不能当普通整数加成。
- `HeroDeveloper.AddSkillXp` 依次应用通用 XP multiplier，并在启用时应用专精学习因子；它可能推进技能和英雄等级，触发 `OnHeroGainedSkill` / `OnHeroLevelledUp`，并更新可保存进度。`ChangeSkillLevel` 会把等级变化换算回 XP，不是裸 setter。
- `HeroDeveloper.AddFocus` 与 `AddAttribute` 默认消耗未使用点数。`RemoveFocus` 与 `RemoveAttribute` 不会自动把点数加回未使用池，重置流程必须显式处理这个不对称。
- `DefaultSkillLevelingManager` 会有意过滤事件：团队击杀不发战斗 XP，非正交易/关系/战术值不进入普通路径，医疗/侦察/工程路径要求对应角色或实体。这些检查就是规则的一部分。
- `TraitLevelingHelper` 的目标是 `Hero.MainHero`：它把 XP 加到玩家现有 Trait XP，调用 `CharacterDevelopmentModel.GetTraitLevelForTraitXp` 得到等级和余量，再发 Trait 事件。它不是任意 NPC 个性的通用 setter。
- `DefaultTraits.Personality` 恰好包含 Mercy、Valor、Honor、Generosity、Calculating 五个 Trait。Persona、角色、帮派和 Naval Trait 单独暴露；隐藏 Trait 使用 `0..20`，性格 Trait 使用 `-2..2`。

## 崩溃与存档边界

- `HeroDeveloper` 的 `_skillXps`、`_newFocuses`、`_totalXp`、点数池和 Hero 引用都进入存档字段/属性。删除字段、改变保存 ID 或替换 `PropertyOwner<SkillObject>` 形状都需要存档兼容性审查。
- 默认定义通过 `Game.Current.ObjectManager` 注册，并从 `PerkObject.All`、`TraitObject.All`、`FeatObject.All` 等战役集合读取。过早访问这些集合，或重复注册 presumed object，会造成查找缺失和不一致的 Perk 判断。
- `PerkObject.Initialize` 会修改成对的替代 Perk。技能分支只能在初始化阶段注册一次；在模块 tick 中重复初始化可能覆盖互相引用和本地化描述。
- 技能回调是事件边界，不是计时器。每帧调用 `SkillLevelingManager.OnTravelOnFoot`、`OnTradeProfitMade` 或战斗回调会放大成长速度，并使存档不再反映战役事件历史。
- Trait 和技能变化都经过 Model。绕过 `CharacterDevelopmentModel`、`Hero.AddSkillXp` 或 Trait helper，可能让等级、XP 余量、通知和日志互相不一致。
- 不要在回调结束后长期持有未经检查的 `Hero`、`MobileParty`、`Settlement`、`Track` 或 `SiegeEngineType`。默认管理器在正常战役推进中会收到已销毁队伍和已结束结果。

## 导航

- **上级：** [Campaign-Ext API](../)
- **同级：** [Models](../models/)、[Actions](../actions/)、[Behaviors](../behaviors/)、[Party](../party/)、[Quests](../quests/)
- **相关：** [CharacterDevelopmentModel](../CharacterDevelopmentModel)、[GameModels](../GameModels)、[CampaignEvents](../CampaignEvents)、[CampaignBehaviorBase](../CampaignBehaviorBase)、[ChangeRelationAction](../ChangeRelationAction) 和 [存档系统](../../save-system/)
- **路线图：** 本簇页先覆盖注册、运行时转发和边界。H3/H5 的 CharacterDevelopment 深页波次应优先拆出 `HeroDeveloper`、`PerkObject` 和 `DefaultSkillLevelingManager`；在那之前，本页作为完整限定名的覆盖入口。

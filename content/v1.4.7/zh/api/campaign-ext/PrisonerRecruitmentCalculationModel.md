---
title: "PrisonerRecruitmentCalculationModel"
description: "俘虏招募这条链路的抽象契约：顺从度阈值、每小时累积速度、招募士气代价、可招募判定、AI 招募开关以及一次能招几个。"
---
# PrisonerRecruitmentCalculationModel

**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public abstract class PrisonerRecruitmentCalculationModel : MBGameModel<PrisonerRecruitmentCalculationModel>`
**基类：** `MBGameModel<PrisonerRecruitmentCalculationModel>`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonerRecruitmentCalculationModel.cs`（声明见第 8 行）

## 概述

`PrisonerRecruitmentCalculationModel` 是「把敌人变成自己人」这条链路的抽象契约。它把俘虏招募拆成六个互相独立的问题：每个兵种要攒多少顺从度才肯入伙（`PrisonerRecruitmentCalculationModel.cs:11`）、队伍每小时能攒多少（`PrisonerRecruitmentCalculationModel.cs:14`）、招一个人要付多少士气代价（`PrisonerRecruitmentCalculationModel.cs:17`）、某个俘虏此刻到底能不能招（`PrisonerRecruitmentCalculationModel.cs:20`）、AI 队伍这一轮要不要做招募这件事（`PrisonerRecruitmentCalculationModel.cs:23`）、以及一次最多能招几个（`PrisonerRecruitmentCalculationModel.cs:26`）。

六个成员全是 `abstract`，所以它自己不提供任何数值：真正跑起来时，`Campaign.Current.Models.PrisonerRecruitmentCalculationModel` 指向的是本版本的默认实现，或者是 mod 注册的替代实现（`GameModels.cs:489`、`SandBoxManager.cs:329`）。这也是「改俘虏招募规则」最干净、最不需要碰调用方的切入口——因为所有调用点（AI 行为、队伍界面、`CharacterObject` 上的转发属性）都只认这个抽象类型。

## 心智模型

把它理解成**一个关于「顺从度水池」的纯查询接口，而不是一个状态容器**。它不保存任何俘虏的顺从度：水池本身是俘虏花名册里的元素 XP（`party.MobileParty.PrisonRoster.GetElementXp(character)`，见默认实现的 `DefaultPrisonerRecruitmentCalculationModel.cs:96`），模型只负责回答「池子每小时加多少」「加满需要多少」「现在满了没」「满了能舀几勺」「舀这一勺掉多少士气」。

因此调用顺序是分层的，先攒、再判、后取数：

1. **攒水**：每小时（或每个 tick）用 `GetConformityChangePerHour`（`PrisonerRecruitmentCalculationModel.cs:14`）拿到一个 `ExplainedNumber`，把它换算成整数后累加到该俘虏的花名册 XP 上。这一步是「水位增长」的唯一来源。
2. **量阈值**：`GetConformityNeededToRecruitPrisoner`（`PrisonerRecruitmentCalculationModel.cs:11`）给出这个兵种的水池容量。默认实现是按兵种等级平方增长，所以高级兵要攒得久得多。
3. **判定门槛**：`IsPrisonerRecruitable`（`PrisonerRecruitmentCalculationModel.cs:20`）做两件事——先做「结构上是否可招募」的过滤，再把当前水位与阈值比较，并通过 `out` 参数把阈值回传给调用方。
4. **取数量与代价**：`CalculateRecruitableNumber`（`PrisonerRecruitmentCalculationModel.cs:26`）回答「按当前水位最多能招几个」，`GetPrisonerRecruitmentMoraleEffect`（`PrisonerRecruitmentCalculationModel.cs:17`）回答「招这么多要掉多少士气」。
5. **AI 总开关**：`ShouldPartyRecruitPrisoners`（`PrisonerRecruitmentCalculationModel.cs:23`）是给 AI 队伍用的前置闸门，它不关心具体某个俘虏，只关心「这支队伍现在适不适合招募」。

关键推论有三条：

- **无状态 ⇒ 替换模型不会改变调用时机。** 所有随机性、存储与 UI 呈现都在调用方；替换实现只改变阈值公式、增长速率与代价系数。
- **顺从度是「XP」，不是「进度百分比」。** 池子的单位就是花名册 XP，所以阈值是绝对量而不是比例；改阈值公式会让存档里已有的水位表现出完全不同的含义。
- **`ExplainedNumber` 意味着「修正器链」。** `GetConformityChangePerHour` 返回的不是一个数，而是一个带若干 `Add` / `AddFactor` 修正的容器（默认实现的基础值是 10，再叠加领导技能与多项 perk）。模型内部已经把修正算完了，调用方只需要取整使用，**不要在模型外再乘一遍系数**。

## 怎么用

**替换方式。** 继承 `PrisonerRecruitmentCalculationModel` 并实现全部六个成员，然后在 `CampaignGameStarter` 阶段把自己的实例注册进模型集合，覆盖默认实现（默认实现就是在 `SandBoxManager.cs:329` 用 `AddModel<PrisonerRecruitmentCalculationModel>(...)` 注册进去的）。注册后通过 `Campaign.Current.Models.PrisonerRecruitmentCalculationModel` 取到的就是你的实现（`GameModels.cs:489`），不需要改任何调用方代码。

**作为消费者读取。** 只做查询时不要自己算阈值或数量：`CharacterObject` 上已经有一个转发属性，它内部就是调 `GetConformityNeededToRecruitPrisoner`（`CharacterObject.cs:601`）；AI 行为每小时的推水与招募判定也全部经由这个模型（`RecruitPrisonersCampaignBehavior.cs:103`）。绕过模型自己算，会让 mod 的数值和 UI 显示对不上。

**真实坑。**

- `GetConformityChangePerHour`（`PrisonerRecruitmentCalculationModel.cs:14`）返回 `ExplainedNumber`，它本身**不做取整**。而水位是花名册上的整数 XP，所以调用方必须先取整再乘以小时数——本版本的 AI 行为就是这么做的（`RecruitPrisonersCampaignBehavior.cs:103`）。直接把浮点结果累加进整数水池，会让「每小时加多少」在不同 tick 长度下出现不可复现的偏差。
- `IsPrisonerRecruitable`（`PrisonerRecruitmentCalculationModel.cs:20`）的 `out` 参数**在「结构上不可招募」时会返回 0**：默认实现在兵种不是常规兵、等级越界或文化为匪帮时，直接写 `conformityNeeded = 0` 然后返回 `false`（`DefaultPrisonerRecruitmentCalculationModel.cs:93`）。所以不要把「阈值为 0」当成「马上就能招」——它是「这个兵种根本不在招募系统里」的信号。
- `CalculateRecruitableNumber`（`PrisonerRecruitmentCalculationModel.cs:26`）返回的是**这一刻按水位能招的上限**，不等于最终会招这么多。队伍界面的调用方还会把它再夹一次到俘虏花名册数量与当前可招募数据之间（`PartyScreenLogic.cs:646`）。要预测实际招募量，必须同时看花名册库存。
- `ShouldPartyRecruitPrisoners`（`PrisonerRecruitmentCalculationModel.cs:23`）是**队伍级**闸门而不是俘虏级判定。默认实现要求队伍可移动、有编制空位、工资未超限、不是巡逻队，且士气高于阈值或持有对应 perk（`DefaultPrisonerRecruitmentCalculationModel.cs:104`）。玩家队伍在队伍界面上的手动招募走的是 `IsPrisonerRecruitable` / `CalculateRecruitableNumber` 这条路径，不要把这个开关当成「玩家能不能招」的判断。
- 模型是**无状态**的：它不缓存也不记录任何俘虏的水位。想让 mod 的数值真正生效，改完模型之后还要保证调用方在推水时走的是模型返回的增量，而不是硬编码常数。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `GetConformityNeededToRecruitPrisoner(CharacterObject character)` | 返回该兵种招募所需的顺从度阈值（绝对量，单位与花名册 XP 相同）（`PrisonerRecruitmentCalculationModel.cs:11`） |
| `GetConformityChangePerHour(PartyBase party, CharacterObject character)` | 返回该队伍对该俘虏每小时累积的顺从度，带修正器链的 `ExplainedNumber`（`PrisonerRecruitmentCalculationModel.cs:14`） |
| `GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)` | 返回招募 `num` 名该俘虏造成的士气变化量（通常为负，部分 perk 会归零）（`PrisonerRecruitmentCalculationModel.cs:17`） |
| `IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)` | 判定该俘虏此刻能否招募；`out` 参数回传阈值，结构上不可招募时回传 0（`PrisonerRecruitmentCalculationModel.cs:20`） |
| `ShouldPartyRecruitPrisoners(PartyBase party)` | 队伍级闸门：该队伍这一轮是否应当执行俘虏招募（`PrisonerRecruitmentCalculationModel.cs:23`） |
| `CalculateRecruitableNumber(PartyBase party, CharacterObject character)` | 按当前水位与花名册库存算出这一次最多能招几名（`PrisonerRecruitmentCalculationModel.cs:26`） |
| `AILordMinTierRequirementForRecruitPrisoners`（默认实现里的 private 常量） | 默认实现用来约束 AI 领主招募的最低兵种等级门槛，是解释默认行为的关键常量（`DefaultPrisonerRecruitmentCalculationModel.cs:121`） |

## 真实示例

```csharp
// 每小时 tick：给俘虏的顺从度水池加水，并判断这一轮能不能招募
PrisonerRecruitmentCalculationModel model = Campaign.Current.Models.PrisonerRecruitmentCalculationModel;

// ① 攒水：ExplainedNumber 带修正器链，本身不取整；水位是整数 XP，所以先取整再乘小时数
int conformityPerHour = model.GetConformityChangePerHour(party, troop).RoundedResultNumber;
int gainedThisTick = conformityPerHour * hours;

// ② 判定门槛：out 参数就是当前阈值；注意结构上不可招募时它会回传 0
int conformityNeeded;
bool recruitable = model.IsPrisonerRecruitable(party, troop, out conformityNeeded);

// ③ 取数量与代价：两者都以「人数」为口径，先算数量再算代价
int count = recruitable ? model.CalculateRecruitableNumber(party, troop) : 0;
int moraleEffect = model.GetPrisonerRecruitmentMoraleEffect(party, troop, count);

// ④ 队伍级闸门：为 false 时整条链路都不该被触发（玩家手动招募不走这里）
bool aiShouldRecruit = model.ShouldPartyRecruitPrisoners(party);

// ⑤ 只想显示阈值时，直接用同一个方法，不要自己复算公式
int threshold = model.GetConformityNeededToRecruitPrisoner(troop);

// gainedThisTick / conformityNeeded / count / moraleEffect / aiShouldRecruit / threshold
// 都交给调用方（AI 行为或队伍界面）去做花名册与士气结算
```

## 参见

- ↔ [CharacterObject](../../campaign/CharacterObject)：`ConformityNeededToRecruitPrisoner` 属性的转发目标，也是本契约几乎所有方法的兵种入参类型。
- ↔ [PartyBase](../../campaign/PartyBase)：契约方法的队伍入参类型，俘虏花名册与士气的宿主。
- ↔ [CampaignGameStarter](../../campaign/CampaignGameStarter)：`AddModel<T>` 的宿主，模型替换的注册入口。
- ↔ [PartyMoraleModel](../PartyMoraleModel)：招募产生的士气变化最终会落到士气体系上，两者对照着读更清楚代价的归属。

## 导航

- ↑ [campaign-ext 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)

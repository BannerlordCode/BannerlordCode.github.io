---
title: "PartyMoraleModel"
description: "计算部队（MobileParty / 民兵 / 驻军）综合士气，以及饥饿、欠饷、食物多样性、队伍超员、领导力与专长等增减项的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.PartyMoraleModel 解析，被 MobileParty 的士气属性、MapEvent 战斗结果和每日补给/发饷行为调用。"
---

# PartyMoraleModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyMoraleModel.cs

## 概述

该模型集中裁决“一支队伍当前的士气是多少、战斗与每日补给会带来多大士气波动”：它把近期事件、领导力技能、饥饿与欠饷惩罚、专长加成、食物多样性、队伍规模超限等因子累加成一个综合士气值，并给出战斗胜利/失败对应的士气增量。它只做纯计算，真正的士气增减写回由调用方（战斗结算与每日行为）完成；[MobileParty](../MobileParty) 的 `Morale` 与 `MoraleExplained` 属性就是直接透过它读取当前士气的。

## 心智模型

PartyMoraleModel 是一个纯计算的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例（`DefaultPartyMoraleModel`）并缓存，运行时统一用 `Campaign.Current.Models.PartyMoraleModel` 取得；它不参与存档序列化，也不在每个 tick 被重新构造。核心入口 `GetEffectivePartyMorale` 以固定基础值 `50` 起算，逐项累加近期事件士气（`MobileParty.RecentEventsMorale`）、领导力技能加成、饥饿/欠饷惩罚、各专长（PeasantLeader / SelfPromoter / Logistician）加成、食物多样性（`-2`~`+10`，受 WarriorsDiet / Gourmet 专长影响）以及超过队伍上限的人数惩罚（`-√超出`），最终得到一个 `ExplainedNumber`。战斗结果（胜利/失败）由 `MapEvent` 通过 `GetVictoryMoraleChange` / `GetDefeatMoraleChange` 把增量写回 `RecentEventsMorale`，而不是由模型本身改世界状态。要改士气规则就继承并注册替换实现；要读当前士气走模型，绝不要把模型当成写世界的入口或直接改 `RecentEventsMorale`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“部队综合士气如何计算、战斗/饥饿/欠饷分别造成多少士气变化”的规则时，读取 `Campaign.Current.Models.PartyMoraleModel` 的返回值，或提供一个新的派生类覆盖各抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接用模型去“施加”士气变化——模型只计算结果，真正把战斗增减写回 `MobileParty.RecentEventsMorale` 的是 [MapEvent](../MapEvent) 的战斗结算，每日饥饿/欠饷惩罚由 [FoodConsumptionBehavior](../FoodConsumptionBehavior) 与发饷逻辑调用模型后累加。不要亲自给 `RecentEventsMorale` 赋值了事；模型是无状态纯函数，没有需要持久化的字段。也不要在 `Mission` 或战场逻辑里取 `Campaign.Current.Models`，那是错误的访问层。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<PartyMoraleModel>()` 解析并缓存实例。
- [PartyBase](../PartyBase) / [MobileParty](../MobileParty) —— 主要输入参数类型，也是模型读取世界状态（是否饥饿、是否欠饷、食物多样性、队伍人数）的来源。

下游与协同系统（调用方）：

- [MobileParty](../MobileParty) —— `Morale` 属性（第 947 行）与 `MoraleExplained` 属性（第 991 行）调用 `GetEffectivePartyMorale` 读取综合士气。
- [MapEvent](../MapEvent) —— 战败分支（第 1935 行）调用 `GetDefeatMoraleChange`，把增量累加进 `party.MobileParty.RecentEventsMorale` 并强制刷新 AI 行为。
- [FoodConsumptionBehavior](../FoodConsumptionBehavior) —— 每日结算（第 200 行）调用 `GetDailyStarvationMoralePenalty`，把饥饿惩罚累加进 `RecentEventsMorale`。
- 发饷逻辑（`DefaultClanFinanceModel`）—— 第 965、968 行调用 `GetDailyNoWageMoralePenalty`，按欠饷量乘该值影响士气。
- [Settlement](../Settlement) —— 民兵/驻军的 `IsStarving` 判定作为模型输入，决定饥饿惩罚是否生效。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 上述日行为与战斗结算都派生于它，是实际驱动调用的载体。
- [DefaultPartyMoraleModel](../DefaultPartyMoraleModel) —— 默认实现，派生替换的基类。

相关/共享类型：

- [ExplainedNumber](../ExplainedNumber) —— `GetEffectivePartyMorale` 的返回类型，携带带说明项的士气分解（用于界面展开每项来源）。
- [Hero](../Hero) —— 队伍领袖，其领导力技能与各项专长经模型读取后影响士气，是多个因子的作用对象。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.PartyMoraleModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了胜利/失败增量或惩罚公式，但真正把结果写回 `MobileParty.RecentEventsMorale` 的是 `MapEvent`（战斗）与 `FoodConsumptionBehavior`（每日补给）。只替换模型、却让调用方按旧假设处理士气累积，会出现“判定变了但界面/AI 不跟进”的不一致。
- **改动 `HighMoraleValue` 影响阈值判断**：该属性（默认 `70`）并非仅供显示，UI 与 AI 行为把它当作“高士气”的判定阈值。派生类改小或改大它，会改变队伍被判定为高士气的频率，进而影响 AI 决策与士气相关提示，而不只是影响数值显示。
- **忽略 `RecentEventsMorale` 的累加语义**：`GetEffectivePartyMorale` 用的是 `MobileParty.RecentEventsMorale` 的当前值，该值由战斗与每日行为持续累加并会随时间衰减。替换实现若抛开它自行建模“事件士气”，会与 `MapEvent`/`FoodConsumptionBehavior` 的写入口径脱节，导致战斗士气加成被双倍计算或丢失。

## 成员说明

### 基础士气与阈值

- **`HighMoraleValue`**（属性，返回 `float`）
  - 用途：被视为“高士气”的阈值，默认实现返回 `70f`。被 UI 与 AI 行为用作判断一支队伍是否处于高士气状态的标尺。
  - 副作用：无，纯读取。
  - 调用时机：界面显示与 AI 决策在判断士气档位时读取；派生替换时应谨慎，因为它改变的是阈值而非显示值。

- **`GetStandardBaseMorale(PartyBase party)`**
  - 用途：返回计算综合士气时使用的基准士气值，默认实现返回 `50f`。它是 `GetEffectivePartyMorale` 起始累加点（基础值 `50`）的参考来源，区分“队伍基线”与“实时事件增减”。
  - 副作用：无，纯计算。
  - 调用时机：默认实现内部以常量 `50` 作为 `GetEffectivePartyMorale` 起点；替换实现可在派生类里复用此方法来保持基础值一致。

### 每日持续惩罚

- **`GetDailyStarvationMoralePenalty(PartyBase party)`**
  - 用途：返回一支队伍因**饥饿**而承担的每日持续士气惩罚，默认实现返回 `-5`。当部队连续处于饥饿状态时，调用方会把这个值持续累加进 `RecentEventsMorale`。
  - 副作用：无，纯计算；真正的写入由调用方完成。
  - 调用时机：[FoodConsumptionBehavior](../FoodConsumptionBehavior) 每日结算（第 200 行）在判定部队连续饥饿后调用，并把结果加到 `MobileParty.RecentEventsMorale`。

- **`GetDailyNoWageMoralePenalty(MobileParty party)`**
  - 用途：返回一支队伍因**欠饷**而承担的每日持续士气惩罚，默认实现返回 `-3`。发饷逻辑会按实际欠饷量乘以该值来推算士气损失。
  - 副作用：无，纯计算。
  - 调用时机：发饷逻辑（`DefaultClanFinanceModel` 第 965、968 行）在结算欠饷时调用，用 `HasUnpaidWages * GetDailyNoWageMoralePenalty` 估算士气惩罚。

### 战斗结果的士气增量

- **`GetVictoryMoraleChange(PartyBase party)`**
  - 用途：返回一支队伍**赢得战斗**后获得的士气增量，默认实现返回 `+20f`。与 `GetDefeatMoraleChange` 对称，用于把胜利写回队伍的近期事件士气。
  - 副作用：无，纯计算；真正的写回由战斗结算调用方完成。
  - 调用时机：战斗胜利结算（与 `MapEvent` 中战败分支对称的位置）调用，把增量累加进 `RecentEventsMorale`。

- **`GetDefeatMoraleChange(PartyBase party)`**
  - 用途：返回一支队伍**战败**后的士气变化，默认实现返回 `-20f`。它定义了战斗失败对士气的打击幅度。
  - 副作用：无，纯计算；调用方负责把返回值累加进 `RecentEventsMorale`。
  - 调用时机：[MapEvent](../MapEvent) 战败分支（第 1935 行）调用 `party.MobileParty.RecentEventsMorale += Campaign.Current.Models.PartyMoraleModel.GetDefeatMoraleChange(party)`，随后强制 AI 行为刷新。

### 综合士气结算

- **`GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)`**
  - 用途：核心入口，返回一支队伍的**综合士气明细**（`ExplainedNumber`）。默认实现以 `50` 为基础，依次累加：`RecentEventsMorale`（近期事件士气）、领导力技能 `Leadership` 的士气加成、饥饿惩罚（`IsStarving` 时 `-30`）、欠饷惩罚（`HasUnpaidWages` 乘以每日欠饷惩罚）、各专长加成（`PeasantLeader` 按低阶兵比例、`SelfPromoter` 围城时、`Logistician` 坐骑充足时）、食物多样性（按 `FoodVariety` 从 `-2` 到 `+10`，`WarriorsDiet` 抵消负值、`Gourmet` 再叠加且海上减半）、以及超过 `PartySizeLimit` 的人数惩罚（`-√超出`）。`includeDescription` 为 `true` 时各项携带可读说明。
  - 副作用：无，纯计算；不修改任何世界状态。
  - 调用时机：[MobileParty](../MobileParty) 的 `Morale` 属性（夹紧到 `0~100`）与 `MoraleExplained` 属性都调用它；界面在展示士气明细时传入 `includeDescription: true`。

## 示例

读取当前队伍的综合士气及其各项来源分解：

```csharp
MobileParty party = MobileParty.MainParty;
ExplainedNumber morale = Campaign.Current.Models.PartyMoraleModel
    .GetEffectivePartyMorale(party, includeDescription: true);
float currentMorale = morale.ResultNumber; // 界面显示用的、带明细的士气值
```

在战斗结算流程中获取战败应施加的士气惩罚（注意：模型只“算出”增量，写回 `RecentEventsMorale` 是 `MapEvent` 等调用方的职责）：

```csharp
float defeatDelta = Campaign.Current.Models.PartyMoraleModel
    .GetDefeatMoraleChange(party.Party);
// 由调用方把计算结果累加回近期事件士气，从而让综合士气在下一次读取时反映战败
party.RecentEventsMorale += defeatDelta;
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [MapEvent](../MapEvent) · [FoodConsumptionBehavior](../FoodConsumptionBehavior) · [Settlement](../Settlement) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [DefaultPartyMoraleModel](../DefaultPartyMoraleModel) · [ExplainedNumber](../ExplainedNumber) · [Hero](../Hero)

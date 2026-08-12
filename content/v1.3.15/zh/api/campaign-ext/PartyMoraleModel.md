---
title: "PartyMoraleModel"
description: "把近期战斗事件、领导力、饥饿、欠饷、Perk 与食物多样性合成为带可选解释的有效士气，供 MobileParty.Morale、逃兵模型与战斗演算消费的可替换战役模型。"
---
# PartyMoraleModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`  
**基类:** `MBGameModel<PartyMoraleModel>`  
**源文件:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`  
**默认实现:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 一句话职责

它回答“这支队伍此刻的士气应该是多少”，把近期战斗、领导力加成、饥饿、欠饷、Perk 与食物多样性合成为一个 0–100 之间、带可选解释的数值；它不写任何队伍状态，也不触发逃兵，只产出供 `MobileParty.Morale`、逃兵模型和战斗演算消费的计算结果。

## 心智模型

这是位于世界事件与“逃兵 / 战斗”之间的**士气计算层**，属于战役层（Campaign）的策略扩展点。实例由 `Campaign.Current.Models.PartyMoraleModel` 持有，默认实现是 `DefaultPartyMoraleModel`，在战役启动时经由模型注册表安装，并在整个战役生命周期内存活。

它的一切输入都来自 `MobileParty` / `PartyBase` 的**已有状态**，自身是纯计算、不修改世界：

```text
战斗 / 事件  ──► RecentEventsMorale（持久字段，夹在 [-100, 100]）
领袖领导力技能加成（SkillHelper + LeadershipMoraleBonus）
即时饥饿惩罚（IsStarving）、即时欠饷惩罚（HasUnpaidWages）
Perk：PeasantLeader / SelfPromoter / Logistician；食物多样性；超编惩罚
        │
        ▼
GetEffectivePartyMorale(party)  ──► ExplainedNumber（从 50 起算累加）
        │
        ▼
MobileParty.Morale（取 .ResultNumber，夹到 [0, 100]）
        │
        ▼
PartyDesertionModel / 战斗演算 / UI 解释行
```

关键点：

- **谁持有 / 谁创建**：由 `Campaign.Current.Models` 注册表持有。要改规则，就在战役系统开始查询之前注册你自己的 `PartyMoraleModel` 子类；运行时去改注册表字段或替换实例会破坏其他消费者的共享结果。
- **何时被查询**：每次读取 `MobileParty.Morale`（内部直接调用 `GetEffectivePartyMorale(this)` 并把结果夹到 `[0, 100]`）或 `MobileParty.MoraleExplained`（带 `includeDescription: true`）时触发。
- **士气如何流入逃兵 / 战斗**：`RecentEventsMorale` 由行为 / 事件写入（见下）；`DesertionCampaignBehavior` 通过 `PartyDesertionModel` 读取 `MobileParty.Morale` 决定逃兵；战场演算读取同一数值。模型本身不调用这些下游逻辑。
- **两个“惩罚”不是同一个东西**：`GetEffectivePartyMorale` 内部只应用**即时**饥饿 / 欠饷惩罚（默认 -30 / -20，乘以欠饷额），用来反映“现在正在挨饿 / 欠饷”。而 `GetDailyStarvationMoralePenalty`(-5) 与 `GetDailyNoWageMoralePenalty`(-3) 是**每日增量**，由 `FoodConsumptionBehavior` 和财务模型每天写进 `RecentEventsMorale`——它们是每日 tick 的输入，不是直接在 `GetEffectivePartyMorale` 里被调用的。
- **跨版本**：1.3.15 与 1.4.5 的公开抽象契约（`PartyMoraleModel`）完全一致；`DefaultPartyMoraleModel` 的算法在两版间也等价（仅 `HasPerk` 重载签名等内部写法差异）。

### 生命周期与注册

- 战役启动时，`IGameStarter.AddModel` 把默认实例（或你的覆盖实例）装进 `Campaign.Current.Models`，此后整个战役都从同一注册表读取，所有消费者看到同一套规则。
- 标题界面、模块加载早期、没有活动战役时，`Campaign.Current` 为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它。
- `GetEffectivePartyMorale` 每次读取都重算整套 `ExplainedNumber`（不做长缓存）；`RecentEventsMorale` 每天只衰减约 10%，短期内数值基本稳定，因此高频读取有性能成本但数值不会突变。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 通过 `Campaign.Current.Models.PartyMoraleModel` 持有并注册本模型，提供活动战役上下文。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供领袖、编制、`RecentEventsMorale`、欠饷、食物多样性等全部输入，并暴露 `Morale` / `MoraleExplained`。 |
| [`PartyBase`](../../campaign/PartyBase) | 提供 `IsStarving`、成员数等饥饿与规模上下文。 |
| [`ExplainedNumber`](../ExplainedNumber) | 承载有效士气结果以及可选的因素说明。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | `Morale` / `MoraleExplained` 直接调用 `GetEffectivePartyMorale`。 |
| [`PartyDesertionModel`](../PartyDesertionModel) | 逃兵模型读取 `MobileParty.Morale` 决定逃兵数量与阈值。 |
| [`PartyWageModel`](../PartyWageModel) | 财务 / 工资模型用 `GetDailyNoWageMoralePenalty` 估算欠饷带来的每日士气损失。 |
| [`MapEvent`](../../campaign/MapEvent) | 战败方通过 `GetDefeatMoraleChange` 把增量写进 `RecentEventsMorale`。 |
| [`PartyHealingModel`](../PartyHealingModel) | 相邻队伍规则模型；伤员比例进入士气计算，但不应在士气模型里隐式触发治疗。 |

### Action、事件与存档边界

模型结果本身没有存档字段，也不派发事件。真正的“事件→士气”写入走行为 / Action：`FoodConsumptionBehavior` 每天把 `GetDailyStarvationMoralePenalty` 累加进 `RecentEventsMorale`，`MapEvent` 结算把 `GetVictoryMoraleChange` / `GetDefeatMoraleChange` 累加进 `RecentEventsMorale`。自定义模型应在相同输入下保持确定性，避免士气缓存与重放的战役 tick 不一致。

## 成员契约

### 士气常量与基准

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `HighMoraleValue` (get) | 高士气阈值，默认 `70f`；UI / AI 用它判定“士气高昂”。 | 随时读取；无副作用。 |
| `GetStandardBaseMorale(PartyBase)` | 标准基础士气，默认 `50f`；作为合成起点的参考基准。 | 需要中性基准值时读取；无副作用。 |

### 事件型士气增量（一次性写入 RecentEventsMorale）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetVictoryMoraleChange(PartyBase)` | 胜利士气增量，默认 `+20f`。 | 战斗胜方结算时由调用方累加进 `RecentEventsMorale`；模型只返回值，不改状态。 |
| `GetDefeatMoraleChange(PartyBase)` | 战败士气增量，默认 `-20f`。 | `MapEvent` 战败方结算时 `RecentEventsMorale += GetDefeatMoraleChange(party)`；只返回值。 |

### 每日惩罚（每日 tick 的输入，不是直接 mutator）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetDailyStarvationMoralePenalty(PartyBase)` | 每日饥饿士气惩罚，默认 `-5`。 | `FoodConsumptionBehavior` 在队伍连续饥饿时累加进 `RecentEventsMorale`；模型只返回值。 |
| `GetDailyNoWageMoralePenalty(MobileParty)` | 每日欠饷士气惩罚，默认 `-3`。 | 财务 / 工资模型估算欠饷带来的每日士气损失；模型只返回值。 |

### 综合计算（核心）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetEffectivePartyMorale(MobileParty, bool includeDescription = false)` | 合成有效士气，返回 `ExplainedNumber`。默认从 `50f` 起算，依次累加：`RecentEventsMorale`、领导力技能加成、即时饥饿惩罚、即时欠饷惩罚、Perk 加成（PeasantLeader / SelfPromoter / Logistician）、食物多样性、超编惩罚。 | 任何读取 `MobileParty.Morale` / `MoraleExplained`、UI 解释行、AI 决策时；纯计算，不修改队伍状态。 |

默认实现的可观察因素包括：胜利 / 招募俘虏加正数，战败 / 饥饿加负数；领导力技能（LeadershipMoraleBonus）与 Perk 提供加成；食物多样性在 0–2 种时为负、3 种起转正并随种类上升；超编（`NumberOfAllMembers` 超过 `PartySizeLimit`）按 `sqrt(超出人数)` 扣减。海上相关规则属于较新版本默认实现的一部分，替换模型时不要只复制旧版本公式。

## 真实读取路径

以下代码只查询当前战役中已经注册的模型，顺序与 `MobileParty.Morale` / `MoraleExplained` 内部一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public ExplainedNumber ExplainPartyMorale(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return new ExplainedNumber(0f);
    }

    PartyMoraleModel model = Campaign.Current.Models.PartyMoraleModel;
    ExplainedNumber morale = model.GetEffectivePartyMorale(party, includeDescription: true);
    return morale;
}
```

这段结果适合调试或 UI 预览；普通逻辑应直接读取 `party.Morale`（已夹到 `[0, 100]`），不要自己再次把结果乘一遍。

下面的代码展示“饥饿 / 欠饷的每日惩罚如何喂给每日 tick”——注意它们只是**被读取并累加进 `RecentEventsMorale`**，而不是由 `GetEffectivePartyMorale` 直接调用，也不是你手动去改队伍状态：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;

public void EstimateDailyMoraleDecay(MobileParty party)
{
    if (Campaign.Current == null || party == null)
    {
        return;
    }

    PartyMoraleModel model = Campaign.Current.Models.PartyMoraleModel;

    // 这两个值由 FoodConsumptionBehavior / 财务模型每天写进 party.RecentEventsMorale，
    // 之后 GetEffectivePartyMorale 会在读取时把它纳入有效士气——你不应在这里直接改队伍状态。
    int dailyStarvation = model.GetDailyStarvationMoralePenalty(party.Party);
    int dailyNoWage = model.GetDailyNoWageMoralePenalty(party);

    // 之后由行为把惩罚累加进持久字段：
    // party.RecentEventsMorale += dailyStarvation;  // 已在 FoodConsumptionBehavior 内完成
}
```

想改变士气规则时，继承 `PartyMoraleModel` 并在模型注册阶段换掉默认实现；保留 vanilla 委托，避免把整套公式抄一遍而漏掉版本更新（如海上因素）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class GenerousMoraleModel : PartyMoraleModel
{
    private readonly DefaultPartyMoraleModel _vanilla = new DefaultPartyMoraleModel();

    public override float HighMoraleValue => 80f;
    public override int GetDailyStarvationMoralePenalty(PartyBase party) => -3;
    public override int GetDailyNoWageMoralePenalty(MobileParty party) => -1;
    public override float GetStandardBaseMorale(PartyBase party) => 60f;
    public override float GetVictoryMoraleChange(PartyBase party) => 25f;
    public override float GetDefeatMoraleChange(PartyBase party) => -10f;

    public override ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)
    {
        ExplainedNumber result = _vanilla.GetEffectivePartyMorale(party, includeDescription);
        result.Add(5f, new TextObject("自定义士气加成"));
        return result;
    }
}
```

实际注册时应在 `CampaignGameStarter` 的模型注册阶段保存 vanilla 委托；不要在模型已经替换后再次通过 `Campaign.Current.Models.PartyMoraleModel` 查找自己，否则会递归。

## 风险与调试顺序

1. **战役尚未存在：** `Campaign.Current` 在标题界面和早期模块加载阶段为空；延迟到战役启动钩子再获取模型，读取前先判空。
2. **误把每日惩罚当即时 mutator：** `GetDailyStarvationMoralePenalty` / `GetDailyNoWageMoralePenalty` 是每日 tick 的输入，由行为写进 `RecentEventsMorale`；不要在覆盖实现里直接拿它们去改 `MobileParty.Morale`——该字段没有 setter，是纯计算结果。
3. **在纯计算里改状态：** `GetEffectivePartyMorale` 应是无副作用的。若覆盖实现里改了 `RecentEventsMorale`、食物或编制，会污染输入、破坏存档一致性，并可能导致同一 tick 内数值漂移。
4. **NaN / 负值 / 越界：** 默认实现从 `50f` 起算再累加；若你返回 NaN 或极端值，`MobileParty.Morale` 的 `[0, 100]` 夹取虽能兜底，但 `RecentEventsMorale` 的 `[-100, 100]` 夹取依赖其 setter——直接写字段会越界，下游逃兵演算会失真。
5. **重复应用因素：** 不要先调 `GetEffectivePartyMorale` 再手动叠加同样的饥饿 / Perk 项，否则会被算两次。
6. **查询中修改世界：** 招募、逃兵、传送和金币转移必须在行为、Roster API 或 Action 中执行，不能放进计算回调。

## 版本与导航

v1.3.15 和 v1.4.5 的接口与默认实现都包含 `IsCurrentlyAtSea` 相关条件；跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [队伍模型目录](../)
- [父级：Campaign 扩展 API](../)
- [↔ PartySpeedModel](../PartySpeedModel)
- [↔ PartyWageModel](../PartyWageModel)
- [↔ PartyHealingModel](../PartyHealingModel)
- [↔ CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [MobileParty](../../campaign/MobileParty)
- [PartyBase](../../campaign/PartyBase)
- [MapEvent](../../campaign/MapEvent)
- [PartyDesertionModel](../PartyDesertionModel)
- [战役系统指南](../../../guide/campaign-system)
- [崩溃与存档边界](../../../architecture/crash-boundaries)

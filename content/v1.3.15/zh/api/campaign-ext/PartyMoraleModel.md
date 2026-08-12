---
title: "PartyMoraleModel"
description: "把队伍近期战斗事件、领袖领导力、饥饿、欠饷、Perk 与食物多样性等因素合成 0–100 有效士气的可替换战役模型，供 MobileParty.Morale、逃兵模型与战斗演算消费。"
---
# PartyMoraleModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`  
**Base:** `MBGameModel<PartyMoraleModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`  
**Default:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyMoraleModel.cs`

## 一句话职责

`PartyMoraleModel` 负责把一支 `MobileParty` 的近期战斗事件、`RecentEventsMorale`、领袖领导力加成、饥饿与欠饷惩罚、Perk/技能加成和食物多样性等离散因素，合成一个夹在 0–100 之间的“有效士气”数值；它本身不存储士气、也不直接触发逃兵，只产出供 `MobileParty.Morale`、逃兵模型与战斗演算消费的计算结果。

## 心智模型

这是位于世界事件与“逃兵/战斗”之间的**士气计算层**，属于战役层（Campaign）的策略扩展点。实例由 `Campaign.Current.Models.PartyMoraleModel` 持有，默认实现是 `DefaultPartyMoraleModel`，在战役启动时经由模型注册表安装，并在整个战役生命周期内存活。

它的输入全部来自 `MobileParty` / `PartyBase` 的**已有状态**，自身是纯计算、不写任何世界状态：

```text
战斗/事件  ──► RecentEventsMorale（持久字段，夹在 [-100,100]）
领袖领导力技能加成（SkillHelper + LeadershipMoraleBonus）
饥饿惩罚（IsStarving）/ 欠饷惩罚（HasUnpaidWages）
Perk：PeasantLeader / SelfPromoter / Logistician；食物多样性；超编惩罚
        │
        ▼
GetEffectivePartyMorale(party)  ──► ExplainedNumber（从 50 起算累加）
        │
        ▼
MobileParty.Morale（取 .ResultNumber，夹到 [0,100]）
        │
        ▼
PartyDesertionModel.GetTroopsToDesert / 战斗演算 / UI 解释行
```

关键点：

- **谁持有 / 谁创建**：由 `Campaign.Current.Models` 注册表持有。要改规则就在战役系统开始查询前注册你自己的 `PartyMoraleModel` 子类。
- **何时被查询**：每次有人读取 `MobileParty.Morale`（内部直接调用 `GetEffectivePartyMorale(this)` 并夹到 `[0,100]`）或 `MobileParty.MoraleExplained`（带 `includeDescription: true`）时触发。
- **士气如何流入逃兵/战斗**：`RecentEventsMorale` 由行为/事件写入（见下）；`DesertionCampaignBehavior` 通过 `PartyDesertionModel.GetTroopsToDesert` 读取 `MobileParty.Morale` 决定逃兵；战场演算读取同一数值。模型本身不调用这些下游逻辑。
- **跨版本**：1.3.15 与 1.4.5 的公开抽象契约（`PartyMoraleModel`）完全一致；`DefaultPartyMoraleModel` 的算法在两版间也等价（仅 `HasPerk` 重载签名等内部写法差异）。

### 谁往 RecentEventsMorale 里写

`GetEffectivePartyMorale` 不读“发生了什么事件”，只读已经累计好的 `RecentEventsMorale` 字段。真正写入它的地方包括：

- `MapEvent.ApplyMoraleAndBehaviorUpdatesOfDefeatedParties`：战败方 `RecentEventsMorale += GetDefeatMoraleChange(party)`（默认 -20）。
- `FoodConsumptionBehavior`：队伍连续饥饿时 `RecentEventsMorale += GetDailyStarvationMoralePenalty(party)`（默认 -5/天），主队还会弹“饥饿掉士气”提示。
- 胜利、招募俘虏、围城结果等行为通过各自的 `RecentEventsMorale +=` 累加正数。

## 何时用 / 何时不要用

**用：**

- 读取当前士气：通过 `Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale(party)` 拿到带解释的 `ExplainedNumber`，或用 `party.Morale` 拿夹好的标量。
- 改变规则：继承 `PartyMoraleModel` 并在模型注册阶段换掉默认实现（见 `## 示例`）。

**不要用：**

- 不要给 `MobileParty.Morale` 赋值——它没有 setter，是纯计算结果。
- 不要绕过行为直接改 `_moraleDueToEvents` / `RecentEventsMorale` 字段；要改就用其 setter（会自动夹到 `[-100,100]`）或通过对应的 Action / 行为钩子累加。
- 不要在 `GetEffectivePartyMorale` 的覆盖实现里修改输入（`RecentEventsMorale`、食物、编制）——它是被假定为纯函数的计算，改输入会污染状态并破坏存档一致性。
- 不要在标题界面、模块加载早期、`Campaign.Current == null` 时读取 `MobileParty.Morale`，否则 `GetEffectivePartyMorale` 会空引用崩溃。
- 不要复制整套公式去“自己算士气”，优先委托 `DefaultPartyMoraleModel` 再微调，避免漏掉版本更新（如海上因素）。

## 依赖图

### 上游（输入来源 / 持有者）

| Type | Relation |
| --- | --- |
| [`Campaign`](../../campaign/Campaign) | 通过 `Campaign.Current.Models.PartyMoraleModel` 持有并注册本模型，提供活动战役上下文。 |
| [`MobileParty`](../../campaign/MobileParty) | 提供领袖、编制、`RecentEventsMorale`、欠饷、食物多样性等全部输入。 |
| [`PartyBase`](../../campaign/PartyBase) | 提供 `IsStarving`、成员数等饥饿与规模上下文。 |
| [`Settlement`](../../campaign/Settlement) | 驻军/民兵饥饿经由 `SettlementHelper.IsGarrisonStarving` 影响士气计算。 |

### 下游（消费方）

| Type | Relation |
| --- | --- |
| [`MobileParty`](../../campaign/MobileParty) | `Morale` / `MoraleExplained` 直接调用 `GetEffectivePartyMorale`。 |
| [`MapEvent`](../../campaign/MapEvent) | 战败方通过 `GetDefeatMoraleChange` 写入 `RecentEventsMorale`。 |
| [`PartyDesertionModel`](../PartyDesertionModel) | 读取 `MobileParty.Morale` 决定逃兵数量。 |
| [`PartyWageModel`](../PartyWageModel) | `DefaultClanFinanceModel` 用 `GetDailyNoWageMoralePenalty` 估算欠饷士气损失。 |

## 风险

1. **`Campaign.Current` 为空**：标题界面、模块早期、未进入战役时读取 `MobileParty.Morale` 会触发 `GetEffectivePartyMorale` 进而空引用崩溃。读取前先判空。
2. **模型空替换 / 注册时机错误**：若在战役开始查询前没装好你的覆盖实现，会读到默认模型（或注册表尚未就绪）；覆盖实现必须走正规模型注册，不要运行时直接替换字段。
3. **在纯计算里改状态**：`GetEffectivePartyMorale` 应是无副作用的。若覆盖实现里改了 `RecentEventsMorale`、食物或编制，会污染输入、破坏存档一致性，并可能导致同一 tick 内数值漂移。
4. **NaN / 负值 / 越界**：默认实现从 `50f` 起算再累加；若你返回 NaN 或极端值，`MobileParty.Morale` 的 `[0,100]` 夹取虽能兜底，但 `RecentEventsMorale` 的 `[-100,100]` 夹取依赖其 setter——直接写字段会越界，下游逃兵演算会失真。
5. **缓存陈旧 / 高频重算**：`MobileParty.Morale` 不做长缓存，每次读取都重算整套 `ExplainedNumber`；在 tick 中高频调用有性能成本，且其输入 `RecentEventsMorale` 每天只衰减约 10%，短期内数值基本稳定。
6. **重复应用因素**：不要先调 `GetEffectivePartyMorale` 再手动叠加同样的饥饿/Perk 项，否则会被算两次。

## 成员（按主题分组）

### 士气常量与基准

| Member | 用途 | 调用时机 | 副作用 |
| --- | --- | --- | --- |
| `HighMoraleValue` (get) | 高士气阈值，默认 `70f`；UI/AI 用它判定“士气高昂”。 | 随时读取。 | 无。 |
| `GetStandardBaseMorale(PartyBase)` | 标准基础士气，默认 `50f`；作为合成起点的参考基准。 | 需要中性基准值时。 | 无。 |

### 事件型士气变化（一次性写入 RecentEventsMorale 的增量）

| Member | 用途 | 调用时机 | 副作用 |
| --- | --- | --- | --- |
| `GetVictoryMoraleChange(PartyBase)` | 胜利士气增量，默认 `+20f`。 | 战斗胜方结算、写入 `RecentEventsMorale` 时。 | 无（仅返回值；调用方负责累加）。 |
| `GetDefeatMoraleChange(PartyBase)` | 战败士气增量，默认 `-20f`。 | `MapEvent` 战败方结算时直接 `RecentEventsMorale += GetDefeatMoraleChange(party)`。 | 无（调用方负责累加）。 |

### 持续惩罚（每日累加）

| Member | 用途 | 调用时机 | 副作用 |
| --- | --- | --- | --- |
| `GetDailyStarvationMoralePenalty(PartyBase)` | 每日饥饿士气惩罚，默认 `-5`。 | `FoodConsumptionBehavior` 在队伍连续饥饿时累加进 `RecentEventsMorale`。 | 无（调用方负责累加）。 |
| `GetDailyNoWageMoralePenalty(MobileParty)` | 每日欠饷士气惩罚，默认 `-3`。 | `DefaultClanFinanceModel` 估算欠饷带来的士气损失。 | 无（调用方负责累加）。 |

### 综合计算（核心）

| Member | 用途 | 调用时机 | 副作用 |
| --- | --- | --- | --- |
| `GetEffectivePartyMorale(MobileParty, bool includeDescription = false)` | 合成有效士气，返回 `ExplainedNumber`。默认从 `50f` 起算，依次累加：`RecentEventsMorale`、领导力技能加成、饥饿惩罚、欠饷惩罚、Perk 加成（PeasantLeader/SelfPromoter/Logistician）、食物多样性、超编惩罚。 | 任何读取 `MobileParty.Morale` / `MoraleExplained`、UI 解释行、AI 决策时。 | 无（纯计算，不修改队伍状态）。 |

## 示例

### 1. 在战役进行中读取某支队伍的有效士气

完全复刻 `MobileParty.Morale` 的真实取值路径（`Campaign.Current.Models.PartyMoraleModel.GetEffectivePartyMorale` 后夹到 `[0,100]`）：

```csharp
if (Campaign.Current == null || mobileParty == null)
{
    return;
}

PartyMoraleModel moraleModel = Campaign.Current.Models.PartyMoraleModel;
float resultNumber = moraleModel.GetEffectivePartyMorale(mobileParty).ResultNumber;
float moraleValue = (resultNumber < 0f) ? 0f : ((resultNumber > 100f) ? 100f : resultNumber);

// moraleValue 现在就是队伍当前克制后的士气，等价于 mobileParty.Morale
```

### 2. 通过覆盖 PartyMoraleModel 改变士气规则

mod 最常见用法：继承模型、只重写你需要改的几项，再委托默认实现复用整套公式，避免在覆盖里重复实现（漏掉版本更新）。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class GenerousMoraleModel : PartyMoraleModel
{
    // 复用默认公式，避免把整套累加逻辑抄一遍
    private static readonly DefaultPartyMoraleModel _default = new DefaultPartyMoraleModel();

    public override float HighMoraleValue => 80f;
    public override int GetDailyStarvationMoralePenalty(PartyBase party) => -3;
    public override int GetDailyNoWageMoralePenalty(MobileParty party) => -1;
    public override float GetStandardBaseMorale(PartyBase party) => 60f;
    public override float GetVictoryMoraleChange(PartyBase party) => 25f;
    public override float GetDefeatMoraleChange(PartyBase party) => -10f;

    public override ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)
    {
        ExplainedNumber result = _default.GetEffectivePartyMorale(party, includeDescription);
        result.Add(5f, new TextObject("自定义士气加成"));
        return result;
    }
}
```

覆盖实现必须在战役模型注册阶段安装（经 `CampaignGameStarter` / 你的模型注册入口），且要保证 `GetEffectivePartyMorale` 仍是纯计算——不要在其中修改 `party` 的状态。

## 导航

- ↑ 父级：[campaign-ext 模型索引](../)
- ↔ 同级：[PartySpeedModel](../PartySpeedModel/) · [PartyHealingModel](../PartyHealingModel/) · [PartySizeLimitModel](../PartySizeLimitModel/) · [PartyWageModel](../PartyWageModel/) · [CharacterDevelopmentModel](../CharacterDevelopmentModel/)
- 相关：[MobileParty](../../campaign/MobileParty/) · [PartyBase](../../campaign/PartyBase/) · [MapEvent](../../campaign/MapEvent/) · [Settlement](../../campaign/Settlement/) · [Campaign](../../campaign/Campaign/) · [PartyDesertionModel](../PartyDesertionModel/)
- 指南：[战役系统指南](../../../guide/campaign-system/)

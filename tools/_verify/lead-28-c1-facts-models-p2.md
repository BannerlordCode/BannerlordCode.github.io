# lead-28 · c1 · 任务 `models-p2` 的事实包

先读 `tools/_verify/lead-28-c1-BRIEF.md`（骨架 / 链接深度 / 禁令 / 自检命令），再读本文件。

## 你要写的两页（只写这两个文件，leaf-only）

| 页面 | 桶 | 源码（相对 `C:/WorkSpace/Bannerlord/bannerlord-1.5.3`） |
|---|---|---|
| `content/v1.5.3/zh/api/campaign-ext/SettlementLoyaltyModel.md` | `campaign-ext` | `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`（103 行） |
| `content/v1.5.3/zh/api/campaign-ext/DefaultSettlementLoyaltyModel.md` | `campaign-ext` | `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`（488 行） |

两页是一对：**契约**（抽象基类）与**官方默认实现**。必须互相链接。

★ **必须亲自打开这两个 `.cs` 读完**。本文件的行号表只是**行号锚点**，用途/坑必须来自你读到的代码。
★ 同桶里已有 `content/v1.5.3/zh/api/campaign-ext/DefaultSettlementProsperityModel.md`（繁荣度模型），
它和忠诚度模型是**相邻的两条聚落曲线**，两页都要链到它 —— 这是本批「聚落经济」心智模型的关键一环。

---

## 页 1 · `SettlementLoyaltyModel`（campaign-ext）

```
**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementLoyaltyModel.cs`
```

★ 它是 **`public abstract class`**（继承 `MBGameModel<T>`），**不是** C# `interface`。

### 该文件逐字内容（103 行，已核对）

```csharp
using System;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.ComponentInterfaces
{
	public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>
	{
		public abstract int SettlementLoyaltyChangeDueToSecurityThreshold { get; }

		public abstract int MaximumLoyaltyInSettlement { get; }

		public abstract int LoyaltyDriftMedium { get; }

		public abstract float HighLoyaltyProsperityEffect { get; }

		public abstract int LowLoyaltyProsperityEffect { get; }

		public abstract int MilitiaBoostPercentage { get; }

		public abstract float HighSecurityLoyaltyEffect { get; }

		public abstract float LowSecurityLoyaltyEffect { get; }

		public abstract float SettlementOwnerDifferentCultureLoyaltyEffect { get; }

		public abstract int ThresholdForTaxBoost { get; }

		public abstract int RebellionStartLoyaltyThreshold { get; }

		public abstract int ThresholdForTaxCorruption { get; }

		public abstract int ThresholdForHigherTaxCorruption { get; }

		public abstract int ThresholdForProsperityBoost { get; }

		public abstract int ThresholdForProsperityPenalty { get; }

		public abstract int AdditionalStarvationPenaltyStartDay { get; }

		public abstract int AdditionalStarvationLoyaltyEffect { get; }

		public abstract int RebelliousStateStartLoyaltyThreshold { get; }

		public abstract int LoyaltyBoostAfterRebellionStartValue { get; }

		public abstract float ThresholdForNotableRelationBonus { get; }

		public abstract int DailyNotableRelationBonus { get; }

		public abstract ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false);

		public abstract void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber);

		public abstract void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber);
	}
}
```

### 行号锚点（`SettlementLoyaltyModel.cs`，逐条已与源码对过）

| 行 | 成员 |
|---:|---|
| 8 | `public abstract class SettlementLoyaltyModel : MBGameModel<SettlementLoyaltyModel>` |
| 12 | `SettlementLoyaltyChangeDueToSecurityThreshold { get; }` |
| 16 | `MaximumLoyaltyInSettlement { get; }` |
| 20 | `LoyaltyDriftMedium { get; }` |
| 24 | `HighLoyaltyProsperityEffect { get; }` |
| 28 | `LowLoyaltyProsperityEffect { get; }` |
| 32 | `MilitiaBoostPercentage { get; }` |
| 36 | `HighSecurityLoyaltyEffect { get; }` |
| 40 | `LowSecurityLoyaltyEffect { get; }` |
| 44 | `SettlementOwnerDifferentCultureLoyaltyEffect { get; }` |
| 48 | `ThresholdForTaxBoost { get; }` |
| 52 | `RebellionStartLoyaltyThreshold { get; }` |
| 56 | `ThresholdForTaxCorruption { get; }` |
| 60 | `ThresholdForHigherTaxCorruption { get; }` |
| 64 | `ThresholdForProsperityBoost { get; }` |
| 68 | `ThresholdForProsperityPenalty { get; }` |
| 72 | `AdditionalStarvationPenaltyStartDay { get; }` |
| 76 | `AdditionalStarvationLoyaltyEffect { get; }` |
| 80 | `RebelliousStateStartLoyaltyThreshold { get; }` |
| 84 | `LoyaltyBoostAfterRebellionStartValue { get; }` |
| 88 | `ThresholdForNotableRelationBonus { get; }` |
| 92 | `DailyNotableRelationBonus { get; }` |
| 95 | `CalculateLoyaltyChange(Town town, bool includeDescriptions = false)` |
| 98 | `CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)` |
| 101 | `CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)` |

★ 本页心智模型的核心：**21 个抽象属性其实是「一条忠诚度曲线 + 一组阈值」的参数表**，
`CalculateLoyaltyChange` 才是唯一每天被调用的入口。这个「属性是参数、方法是曲线」的结构要点出来。
★ `ref ExplainedNumber` 的用法（98/101 行）是**修改调用方传入的数值**，不是返回值 —— 典型的坑。

**「关键成员」至少覆盖上表全部 24 个成员**（≥12 个也行，但越全越好；每个都要真实用途）。

### 已实测存在的「参见」目标（`href` 只能从这 4 条里选，≥3 条）

| href | 为什么可以引 |
|---|---|
| `../DefaultSettlementLoyaltyModel` | 官方默认实现（同批同桶兄弟页） |
| `../DefaultSettlementProsperityModel` | 已有的繁荣度模型页：忠诚度 ↔ 繁荣度是一对相邻曲线 |
| `../../core-extra/GameModel` | 模型体系抽象根 |
| `../../core-extra/TownHelpers` | 城镇侧的工具页（食物/物价/可会见人物），忠诚度的上游数据源 |

---

## 页 2 · `DefaultSettlementLoyaltyModel`（campaign-ext）

```
**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementLoyaltyModel.cs`
```

### 行号锚点表（完整，来自 `tools/_verify/sig-c1/DefaultSettlementLoyaltyModel.sig.txt`，已与源码对过）

```
  16  public class DefaultSettlementLoyaltyModel : SettlementLoyaltyModel
  20  public override float HighLoyaltyProsperityEffect
  30  public override int LowLoyaltyProsperityEffect
  40  public override int ThresholdForTaxBoost
  50  public override int ThresholdForTaxCorruption
  60  public override int ThresholdForHigherTaxCorruption
  70  public override int ThresholdForProsperityBoost
  80  public override int ThresholdForProsperityPenalty
  90  public override int AdditionalStarvationPenaltyStartDay
 100  public override int AdditionalStarvationLoyaltyEffect
 110  public override int RebellionStartLoyaltyThreshold
 124  public override int RebelliousStateStartLoyaltyThreshold
 138  public override int LoyaltyBoostAfterRebellionStartValue
 148  public override int MilitiaBoostPercentage
 158  public override float ThresholdForNotableRelationBonus
 168  public override int DailyNotableRelationBonus
 178  public override int SettlementLoyaltyChangeDueToSecurityThreshold
 188  public override int MaximumLoyaltyInSettlement
 198  public override int LoyaltyDriftMedium
 208  public override float HighSecurityLoyaltyEffect
 218  public override float LowSecurityLoyaltyEffect
 228  public override float SettlementOwnerDifferentCultureLoyaltyEffect
 237  public override ExplainedNumber CalculateLoyaltyChange(Town town, bool includeDescriptions = false)
 243  public override void CalculateGoldGainDueToHighLoyalty(Town town, ref ExplainedNumber explainedNumber)
 250  public override void CalculateGoldCutDueToLowLoyalty(Town town, ref ExplainedNumber explainedNumber)
 257  private ExplainedNumber CalculateLoyaltyChangeInternal(Town town, bool includeDescriptions = false)
 281  private void GetSettlementLoyaltyChangeDueToGovernorPerks(Town town, ref ExplainedNumber explainedNumber)
 325  private void GetSettlementLoyaltyChangeDueToNotableRelations(Town town, ref ExplainedNumber explainedNumber)
 349  private void GetSettlementLoyaltyChangeDueToOwnerCulture(Town town, ref ExplainedNumber explainedNumber)
 358  private void GetSettlementLoyaltyChangeDueToPolicies(Town town, ref ExplainedNumber explainedNumber)
 413  private void GetSettlementLoyaltyChangeDueToFoodStocks(Town town, ref ExplainedNumber explainedNumber)
 427  private void GetSettlementLoyaltyChangeDueToSecurity(Town town, ref ExplainedNumber explainedNumber)
 434  private void GetSettlementLoyaltyChangeDueToProjects(Town town, ref ExplainedNumber explainedNumber)
 440  private void GetSettlementLoyaltyChangeDueToIssues(Town town, ref ExplainedNumber explainedNumber)
 446  private void GetSettlementLoyaltyChangeDueToLoyaltyDrift(Town town, ref ExplainedNumber explainedNumber)
 452  private const float StarvationLoyaltyEffect = -1f;
 455  private const int AdditionalStarvationLoyaltyEffectAfterDays = 14;
 458  private const float NotableSupportsOwnerLoyaltyEffect = 0.5f;
 461  private const float NotableSupportsEnemyLoyaltyEffect = -0.5f;
 464  private readonly TextObject StarvingText = GameTexts.FindText("str_starving", null);
 467  private static readonly TextObject CultureText = new TextObject("{=YjoXyFDX}Owner Culture", null);
 470  private readonly TextObject NotableText = GameTexts.FindText("str_notable_relations", null);
 473  private readonly TextObject SecurityText = GameTexts.FindText("str_security", null);
 476  private readonly TextObject LoyaltyText = GameTexts.FindText("str_loyalty", null);
 479  private readonly TextObject LoyaltyDriftText = GameTexts.FindText("str_loyalty_drift", null);
 482  private readonly TextObject CorruptionText = GameTexts.FindText("str_corruption", null);
 485  private readonly TextObject GovernorText = GameTexts.FindText("str_notable_governor", null);
```

★ 本页最值钱的是 **`CalculateLoyaltyChangeInternal`(257) 到 `GetSettlementLoyaltyChangeDueToLoyaltyDrift`(446) 这 9 个私有累加器**：
它们按固定顺序往同一个 `ref ExplainedNumber` 上加项。请**打开 257–451 行读完**，把「累加顺序」写成心智模型
（这是「为什么我改了政策但忠诚度没动」这类问题的答案）。
★ 452–461 的 4 个常量与 464–485 的 9 个 `TextObject` 是「解释行文本」的来源，可写进「关键成员」。

**「关键成员」至少覆盖这 12 个**：`HighLoyaltyProsperityEffect`(20) · `ThresholdForTaxBoost`(40) · `RebellionStartLoyaltyThreshold`(110) · `MilitiaBoostPercentage`(148) · `MaximumLoyaltyInSettlement`(188) · `LoyaltyDriftMedium`(198) · `SettlementOwnerDifferentCultureLoyaltyEffect`(228) · `CalculateLoyaltyChange`(237) · `CalculateGoldGainDueToHighLoyalty`(243) · `CalculateGoldCutDueToLowLoyalty`(250) · `CalculateLoyaltyChangeInternal`(257) · `GetSettlementLoyaltyChangeDueToGovernorPerks`(281)。
其余私有累加器（325/349/358/413/427/434/440/446）与常量强烈建议一并列 —— 它们才是这页的深度。

### 已实测存在的「参见」目标（`href` 只能从这 4 条里选，≥3 条）

| href | 为什么可以引 |
|---|---|
| `../SettlementLoyaltyModel` | 它实现的契约（同批同桶兄弟页） |
| `../DefaultSettlementProsperityModel` | 繁荣度模型：忠诚度的下游/上游邻居，且是「逐项累加 ExplainedNumber」的样板 |
| `../../core-extra/PerkHelper` | `GetSettlementLoyaltyChangeDueToGovernorPerks` 读的就是总督 perk |
| `../../core-extra/FeatHelper` | 文化特性加成（`SettlementOwnerDifferentCultureLoyaltyEffect` 相邻语境） |

---

## 完工自检（贴原始输出）

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/campaign-ext/SettlementLoyaltyModel.md content/v1.5.3/zh/api/campaign-ext/DefaultSettlementLoyaltyModel.md
```

期望：两行都 `PASS`，且各自 `J6=deep_pass`、`tier=handwritten_deep`、`J3 bad=0`、`J5R unresolved=0`、`J10 stray=0`。

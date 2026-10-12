# lead-28 · c1 · 任务 `models-p1` 的事实包

先读 `tools/_verify/lead-28-c1-BRIEF.md`（骨架 / 链接深度 / 禁令 / 自检命令），再读本文件。

## 你要写的两页（只写这两个文件，leaf-only）

| 页面 | 桶 | 源码（相对 `C:/WorkSpace/Bannerlord/bannerlord-1.5.3`） |
|---|---|---|
| `content/v1.5.3/zh/api/campaign-ext/PartySizeLimitModel.md` | `campaign-ext` | `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`（45 行） |
| `content/v1.5.3/zh/api/campaign-ext/DefaultPartySizeLimitModel.md` | `campaign-ext` | `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`（548 行） |

两页是一对：**契约**（`PartySizeLimitModel`，抽象基类）与**官方默认实现**（`DefaultPartySizeLimitModel`）。
必须互相链接（见下面「已实测存在的参见目标」），并且要把「mod 怎么替换它」这条路径写清。

★ **必须亲自打开这两个 `.cs` 读完**（判分器要求「心智模型 / 用途 / 坑」来自真实代码，不是来自本文件的签名表）。
本文件的行号表只是**行号锚点**。

---

## 页 1 · `PartySizeLimitModel`（campaign-ext）

```
**命名空间：** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Type:** `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>`
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartySizeLimitModel.cs`
```

★ 注意：它是 **`public abstract class`**（继承 `MBGameModel<T>`），**不是** C# `interface`。
不要写成 `public interface PartySizeLimitModel`（这是本线已知会犯的错）。

### 该文件逐字内容（45 行，已核对）

```csharp
using System;
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

namespace TaleWorlds.CampaignSystem.ComponentInterfaces
{
	public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>
	{
		public abstract ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false);

		public abstract ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false);

		public abstract ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false);

		public abstract int GetClanTierPartySizeEffectForHero(Hero hero);

		public abstract int GetNextClanTierPartySizeEffectChangeForHero(Hero hero);

		public abstract int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan);

		public abstract int MinimumNumberOfVillagersAtVillagerParty { get; }

		public abstract int GetIdealVillagerPartySize(Village village);

		public abstract TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);

		public abstract List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate);
	}
}
```

### 行号锚点（`PartySizeLimitModel.cs`，逐条已与源码对过）

| 行 | 成员 | 一句话 |
|---:|---|---|
| 12 | `public abstract class PartySizeLimitModel : MBGameModel<PartySizeLimitModel>` | 类声明 |
| 15 | `GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)` | 部队成员上限（含解释） |
| 18 | `GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)` | 战俘容量上限 |
| 21 | `CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)` | 驻军上限 |
| 24 | `GetClanTierPartySizeEffectForHero(Hero hero)` | 氏族等级带来的部队规模加成 |
| 27 | `GetNextClanTierPartySizeEffectChangeForHero(Hero hero)` | 升到下一氏族等级还会加多少 |
| 30 | `GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` | 领主部队的「假定规模」（AI 估算用） |
| 34 | `MinimumNumberOfVillagersAtVillagerParty { get; }` | 村民部队的最小人数 |
| 37 | `GetIdealVillagerPartySize(Village village)` | 某村庄理想的村民部队人数 |
| 40 | `FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 给新部队挑初始兵员名册 |
| 43 | `FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` | 给新部队挑初始船只 |

**「关键成员」至少覆盖上表全部 10 个 public 抽象成员**，每个都要写真实用途（不是抄签名）。

### 已实测存在的「参见」目标（`href` 只能从这 5 条里选，≥3 条）

| href | 为什么可以引 |
|---|---|
| `../DefaultPartySizeLimitModel` | 官方默认实现（同批同桶兄弟页） |
| `../../core-extra/MBGameModel` | 基类所在页，讲 `T` 与模型注册的契约 |
| `../../core-extra/GameModel` | 模型体系的抽象根 |
| `../../storymode/StoryModePartySizeLimitModel` | StoryMode 覆写的同族模型，是「替换」的真实样本 |
| `../../campaign/GameModels` | 门面聚合页，讲模型注册与取用路径 |

---

## 页 2 · `DefaultPartySizeLimitModel`（campaign-ext）

```
**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`
```

### 行号锚点表（完整，来自 `tools/_verify/sig-c1/DefaultPartySizeLimitModel.sig.txt`，已与源码对过）

```
  19  public class DefaultPartySizeLimitModel : PartySizeLimitModel
  23  public override int MinimumNumberOfVillagersAtVillagerParty
  32  public override ExplainedNumber GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)
  51  private ExplainedNumber CalculatePatrolPartySizeLimit(MobileParty mobileParty, bool includeDescriptions)
  65  private int GetPatrolPartySizeLimitFromGuardHouseLevel(int level)
  71  public override ExplainedNumber GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)
  81  private ExplainedNumber CalculateMobilePartyMemberSizeLimit(MobileParty party, bool includeDescriptions = false)
 128  public override ExplainedNumber CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)
 142  private ExplainedNumber CalculateSettlementPartyPrisonerSizeLimitInternal(Settlement settlement, bool includeDescriptions = false)
 154  private ExplainedNumber CalculateMobilePartyPrisonerSizeLimitInternal(PartyBase party, bool includeDescriptions = false)
 167  private void AddMobilePartyLeaderPrisonerSizePerkEffects(PartyBase party, ref ExplainedNumber result)
 176  private void AddGarrisonOwnerPerkEffects(Settlement currentSettlement, ref ExplainedNumber result)
 186  public override int GetNextClanTierPartySizeEffectChangeForHero(Hero hero)
 193  private int GetTierEffectInternal(int tier, bool isHeroClanLeader)
 207  public override int GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)
 219  public override int GetClanTierPartySizeEffectForHero(Hero hero)
 225  private void AddSettlementProjectBonuses(Settlement settlement, ref ExplainedNumber result)
 234  private void AddSettlementProjectPrisonerBonuses(Settlement settlement, ref ExplainedNumber result)
 243  private int GetCurrentPartySizeEffect(PartyBase party)
 249  private void CalculateBaseMemberSize(Hero partyLeader, IFaction partyMapFaction, Clan actualClan, ref ExplainedNumber result)
 308  private float GetPartySizeRatioForSize(PartyTemplateObject partyTemplate, int desiredSize)
 329  private float GetInitialPartySizeRatioForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
 362  public override int GetIdealVillagerPartySize(Village village)
 375  public override TroopRoster FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
 426  public override List<Ship> FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)
 459  private const int BaseMobilePartySize = 20;
 462  private const int BaseMobilePartyPrisonerSize = 10;
 465  private const int BaseSettlementPrisonerSize = 60;
 468  private const int BaseTownPrisonerSizeBonus = 40;
 471  private const int BaseGarrisonPartySize = 200;
 474  private const int BasePatrolPartySize = 10;
 477  private const int TownGarrisonSizeBonus = 200;
 480  private const int AdditionalPartySizeForCheat = 5000;
 483  private const int OneVillagerPerHearth = 40;
 486  private const int AdditionalPartySizeLimitPerTier = 15;
 489  private const int AdditionalPartySizeLimitForLeaderPerTier = 25;
 492  private readonly TextObject _leadershipSkillLevelBonusText = ...
 495  private readonly TextObject _leadershipPerkUltimateLeaderBonusText = ...
 498  private readonly TextObject _wallLevelBonusText = ...
 501  private readonly TextObject _baseSizeText = ...
 504  private readonly TextObject _clanTierText = ...
 507  private readonly TextObject _renownText = ...
 510  private readonly TextObject _clanLeaderText = ...
 513  private readonly TextObject _factionLeaderText = ...
 516  private readonly TextObject _leaderLevelText = ...
 519  private readonly TextObject _townBonusText = ...
 522  private readonly TextObject _minorFactionText = ...
 525  private readonly TextObject _currentPartySizeBonusText = ...
 528  private readonly TextObject _randomSizeBonusTemporary = ...
 531  private static bool _addAdditionalPartySizeAsCheat;
 534  private static bool _addAdditionalPrisonerSizeAsCheat;
 537  private enum LimitType
```

★ 这 11 个 `private const int`（459–489）是本页「坑」一节最硬的素材：它们就是「默认部队上限到底从哪来」的答案。
★ `_addAdditionalPartySizeAsCheat` / `_addAdditionalPrisonerSizeAsCheat`（531/534）与 `AdditionalPartySizeForCheat = 5000`（480）是一条真实副作用路径，值得写进「坑」。

**「关键成员」至少覆盖这 12 个**：`MinimumNumberOfVillagersAtVillagerParty`(23) · `GetPartyMemberSizeLimit`(32) · `GetPartyPrisonerSizeLimit`(71) · `CalculateGarrisonPartySizeLimit`(128) · `GetNextClanTierPartySizeEffectChangeForHero`(186) · `GetAssumedPartySizeForLordParty`(207) · `GetClanTierPartySizeEffectForHero`(219) · `CalculateBaseMemberSize(249)` · `GetPartySizeRatioForSize`(308) · `GetIdealVillagerPartySize`(362) · `FindAppropriateInitialRosterForMobileParty`(375) · `FindAppropriateInitialShipsForMobileParty`(426)。
其余成员（51/65/81/142/154/167/176/193/225/234/243/329 与常量）可另列，也欢迎多列 —— 越多越深越好，但每一行都要有真实用途。

### 已实测存在的「参见」目标（`href` 只能从这 4 条里选，≥3 条）

| href | 为什么可以引 |
|---|---|
| `../PartySizeLimitModel` | 它实现的契约（同批同桶兄弟页） |
| `../../core-extra/PartyBaseHelper` | 部队名册/规模的文本与排序工具，和本页数值是同一批消费者 |
| `../../core-extra/MobilePartyHelper` | 生成领主部队时直接吃本模型的 `FindAppropriateInitialRosterForMobileParty` |
| `../../storymode/StoryModePartySizeLimitModel` | 同族覆写样本 |

---

## 完工自检（两条命令，都要贴原始输出）

```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/lead-145zh-judge.mjs content/v1.5.3/zh/api/campaign-ext/PartySizeLimitModel.md content/v1.5.3/zh/api/campaign-ext/DefaultPartySizeLimitModel.md
```

期望：两行都 `PASS`，且各自 `J6=deep_pass`、`tier=handwritten_deep`、`J3 bad=0`、`J5R unresolved=0`、`J10 stray=0`。

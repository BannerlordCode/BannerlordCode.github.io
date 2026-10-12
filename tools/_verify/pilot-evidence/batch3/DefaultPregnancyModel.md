# Evidence: DefaultPregnancyModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`
- **Class declaration:** line 8 — `public class DefaultPregnancyModel : PregnancyModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `PregnancyModel` (abstract, `TaleWorlds.CampaignSystem/ComponentInterfaces/PregnancyModel.cs:7` — `public abstract class PregnancyModel : MBGameModel<PregnancyModel>`)
- **Constructor:** none (implicit default)
- **Grep command:** `grep -nE '^\s*(public|private|protected|internal)\s' TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`
- **Grep output:**
  ```
  8:	public class DefaultPregnancyModel : PregnancyModel
  12:		public override float PregnancyDurationInDays
  22:		public override float MaternalMortalityProbabilityInLabor
  32:		public override float StillbirthProbability
  42:		public override float DeliveringFemaleOffspringProbability
  52:		public override float DeliveringTwinsProbability
  61:		private bool IsHeroAgeSuitableForPregnancy(Hero hero)
  67:		public override float GetDailyChanceOfPregnancyForHero(Hero hero)
  84:		private const int MinPregnancyAge = 18;
  87:		private const int MaxPregnancyAge = 45;
  ```

## 2. Per-member inventory (all public members)

6 public members: 5 constant-valued `override` getters + 1 public method. (One private helper + two private constants listed for context.)

| # | Member | Signature | File:Line | What it does |
|---|--------|-----------|-----------|--------------|
| 1 | `PregnancyDurationInDays` | `public override float PregnancyDurationInDays { get; }` | DefaultPregnancyModel.cs:12 | Returns `36f` — a pregnancy lasts 36 in-game days. Used to schedule the due date (`CampaignTime.DaysFromNow(...)` in PregnancyCampaignBehavior.cs:133) and the log-entry deadlines. |
| 2 | `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor { get; }` | DefaultPregnancyModel.cs:22 | Returns `0.015f` — 1.5% chance the mother dies during childbirth (rolled only for non-main-hero mothers, see PregnancyCampaignBehavior.cs:123). |
| 3 | `StillbirthProbability` | `public override float StillbirthProbability { get; }` | DefaultPregnancyModel.cs:32 | Returns `0.01f` — 1% chance of stillbirth when the pregnancy completes. |
| 4 | `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability { get; }` | DefaultPregnancyModel.cs:42 | Returns `0.51f` — 51% chance the child is female (slight female bias). |
| 5 | `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability { get; }` | DefaultPregnancyModel.cs:52 | Returns `0.03f` — 3% chance of twins. |
| 6 | `GetDailyChanceOfPregnancyForHero` | `public override float GetDailyChanceOfPregnancyForHero(Hero hero)` | DefaultPregnancyModel.cs:67 | Computes the per-day conception probability for a hero. Base: `(1.2 - (age-18)*0.04) / (childrenCount+1)^2 * 0.12 * clanFactor`, where `clanFactor` scales with clan tier (`4 + 4*tier`) vs. number of alive lords, and is forced to `1f` if either spouse is the main hero. Returns `0` when the hero has no spouse or is outside age 18–45; then applies the `Charm.Virile` perk factor via `ExplainedNumber` and returns `ResultNumber`. |

Private members (not public API, kept for the mental model):
- `IsHeroAgeSuitableForPregnancy` (line 61): `hero.Age >= 18f && hero.Age <= 45f`.
- `MinPregnancyAge = 18` (line 84), `MaxPregnancyAge = 45` (line 87).

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | Daily conception roll | TaleWorlds.CampaignSystem/CampaignBehaviors/PregnancyCampaignBehavior.cs:58 | `if (this.CheckAreNearby(hero, hero.Spouse) && MBRandom.RandomFloat <= Campaign.Current.Models.PregnancyModel.GetDailyChanceOfPregnancyForHero(hero))` |
| 2 | Behavior caches the model for the delivery path | TaleWorlds.CampaignSystem/CampaignBehaviors/PregnancyCampaignBehavior.cs:96 | `PregnancyModel pregnancyModel = Campaign.Current.Models.PregnancyModel;` |
| 3 | Maternal mortality roll | TaleWorlds.CampaignSystem/CampaignBehaviors/PregnancyCampaignBehavior.cs:123 | `if (mother != Hero.MainHero && MBRandom.RandomFloat <= pregnancyModel.MaternalMortalityProbabilityInLabor)` |
| 4 | Due-date scheduling from duration | TaleWorlds.CampaignSystem/CampaignBehaviors/PregnancyCampaignBehavior.cs:133 | `this._heroPregnancies.Add(new PregnancyCampaignBehavior.Pregnancy(mother, mother.Spouse, CampaignTime.DaysFromNow(Campaign.Current.Models.PregnancyModel.PregnancyDurationInDays)));` |
| 5 | Log-entry expiry uses duration | TaleWorlds.CampaignSystem/LogEntries/PregnancyLogEntry.cs:59 | `return CampaignTime.Days(Campaign.Current.Models.PregnancyModel.PregnancyDurationInDays + (float)CampaignTime.DaysInWeek);` |
| 6 | Childbirth log expiry uses duration | TaleWorlds.CampaignSystem/LogEntries/ChildbirthLogEntry.cs:72 | `return CampaignTime.Days(Campaign.Current.Models.PregnancyModel.PregnancyDurationInDays * 2f);` |
| 7 | Model registration at game start | TaleWorlds.CampaignSystem/SandBoxManager.cs:317 | `gameStarter.AddModel<PregnancyModel>(new DefaultPregnancyModel());` |
| 8 | Model resolution | TaleWorlds.CampaignSystem/GameModels.cs:707 (property declared GameModels.cs:399) | `this.PregnancyModel = base.GetGameModel<PregnancyModel>();` / `public PregnancyModel PregnancyModel { get; private set; }` |

**Mod-relevant call pattern:** read via `Campaign.Current.Models.PregnancyModel`; replace with `Game.Current.ReplaceModel<PregnancyModel>(new MyPregnancyModel())`, or subclass `PregnancyModel` and override the five probability/duration getters and/or `GetDailyChanceOfPregnancyForHero`. The daily roll lives in `PregnancyCampaignBehavior`, so overriding the model is sufficient to change conception rate, gestation length, and mortality without touching the behavior.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultPregnancyModel.md`
- **Byte count:** 1879 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 5 properties, names + signatures only (no values) |
| 主要方法 (Methods) | ✅ | `GetDailyChanceOfPregnancyForHero` only, formulaic purpose "读取并返回当前对象中 daily chance of pregnancy for hero 的结果。" and placeholder example (`= ...;`) |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<DefaultPregnancyModel>(new MyDefaultPregnancyModel());` |
| 参见 (See Also) | ✅ | Single link `[本区域目录](../)` |

**Verdict:** 6/6 sections present but all template-generated. The public surface (5 getters + 1 method) is complete, but no numeric values are given (36 days, 1.5% mortality, 1% stillbirth, 51% female, 3% twins), and the conception formula (age curve, children-squared divisor, clan-tier/alive-lords factor, main-hero exemption, `Virile` perk) is entirely absent. Missing real call-site evidence (PregnancyCampaignBehavior.cs:58/96/123/133, PregnancyLogEntry.cs:59, ChildbirthLogEntry.cs:72).

# Evidence: DefaultMinorFactionsModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`
- **Class declaration:** line 12 — `public class DefaultMinorFactionsModel : MinorFactionsModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `MinorFactionsModel` (abstract, `TaleWorlds.CampaignSystem/ComponentInterfaces/MinorFactionsModel.cs:7` — `public abstract class MinorFactionsModel : MBGameModel<MinorFactionsModel>`)
- **Constructor:** none (implicit default)
- **Grep command:** `grep -nE '^\s*(public|private|protected|internal)\s' TaleWorlds.CampaignSystem/GameComponents/DefaultMinorFactionsModel.cs`
- **Grep output:**
  ```
  12:	public class DefaultMinorFactionsModel : MinorFactionsModel
  16:		public override float DailyMinorFactionHeroSpawnChance
  26:		public override int MinorFactionHeroLimit
  35:		public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)
  ```
  No private members, no fields — the class is 2 tuning getters + 1 method.

## 2. Per-member inventory (all public members)

3 public members total: 2 `override` getters + 1 `override` method.

| # | Member | Signature | File:Line | What it does |
|---|--------|-----------|-----------|--------------|
| 1 | `DailyMinorFactionHeroSpawnChance` | `public override float DailyMinorFactionHeroSpawnChance { get; }` | DefaultMinorFactionsModel.cs:16 | Returns `0.1f` — 10% daily chance per eligible minor-faction clan to spawn a new hero (rolled in `HeroSpawnCampaignBehavior`). |
| 2 | `MinorFactionHeroLimit` | `public override int MinorFactionHeroLimit { get; }` | DefaultMinorFactionsModel.cs:26 | Returns `4` — a minor-faction clan may hold at most 4 alive lords; spawning stops at this cap. |
| 3 | `GetMercenaryAwardFactorToJoinKingdom` | `public override int GetMercenaryAwardFactorToJoinKingdom(Clan mercenaryClan, Kingdom kingdom, bool neededAmountForClanToJoinCalculation = false)` | DefaultMinorFactionsModel.cs:35 | Returns the gold a mercenary clan demands to join a kingdom, in multiples of 10. It multiplies many factors: **power ratio to enemies** (`FactionHelper.GetPowerRatioToEnemies` → 0.5×…1.5×), **tribute-payment ratio** (`Sqrt(GetPowerRatioToTributePayedKingdoms)`), **clan tier** (`1 + tier*0.15`), **kingdom wealth** (avg leader gold + 50% of budget wallet, clamped/pow-scaled), **poor-clan penalty** (leaders under 30k gold), **small-kingdom bonus** (fewer than 10 clans / 25 fiefs), **existing mercenary count** (diminishing factor per already-hired clan), **the mercenary leader's own gold** (six descending 20k/10k/5k brackets subtract from a base of 20, or 22 for the player-kingdom case), and **leader relation** (only when `neededAmountForClanToJoinCalculation` is true). The `VlandianRenownMercenaryFeat` culture feat adds +15%. When `neededAmountForClanToJoinCalculation` is true it returns a smaller "amount needed" estimate (`num4 * num18 * num19 * 10`); otherwise the full clamped award (`Math.Clamp`-style min 1 / max 80, ×6 base, ×10, rounded). |

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | Mercenary-join barter applies the factor | TaleWorlds.CampaignSystem/BarterSystem/Barterables/MercenaryJoinKingdomBarterable.cs:81 | `ChangeKingdomAction.ApplyByJoinFactionAsMercenary(base.OriginalOwner.Clan, this._targetKingdom, default(CampaignTime), Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(base.OriginalOwner.Clan, this._targetKingdom, false), true);` |
| 2 | Clan-variables behavior stores the multiplier | TaleWorlds.CampaignSystem/CampaignBehaviors/ClanVariablesCampaignBehavior.cs:386 | `clan.MercenaryAwardMultiplier = Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(clan, clan.Kingdom, false);` |
| 3 | Hero-spawn cap read | TaleWorlds.CampaignSystem/CampaignBehaviors/HeroSpawnCampaignBehavior.cs:359 | `int num = Campaign.Current.Models.MinorFactionsModel.MinorFactionHeroLimit - clan.AliveLords.Count;` |
| 4 | Daily spawn roll | TaleWorlds.CampaignSystem/CampaignBehaviors/HeroSpawnCampaignBehavior.cs:381 | `if (MBRandom.RandomFloat < Campaign.Current.Models.MinorFactionsModel.DailyMinorFactionHeroSpawnChance)` |
| 5 | Dialogue shows the "amount needed" variant | TaleWorlds.CampaignSystem/CampaignBehaviors/LordConversationsCampaignBehavior.cs:3311 | `int mercenaryAwardFactorToJoinKingdom = Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(Hero.OneToOneConversationHero.Clan, (Kingdom)Hero.MainHero.MapFaction, true);` |
| 6 | Vassal/mercenary offer UI uses the estimate | TaleWorlds.CampaignSystem/CampaignBehaviors/VassalAndMercenaryOfferCampaignBehavior.cs:271 | `int mercenaryAwardFactorToJoinKingdom = Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(Clan.PlayerClan, kingdom, true);` |
| 7 | Diplomacy model reuses the award for the player | TaleWorlds.CampaignSystem/GameComponents/DefaultDiplomacyModel.cs:487 | `int mercenaryAwardFactorToJoinKingdom = Campaign.Current.Models.MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom(mercenaryClan, kingdom, true);` |
| 8 | Model registration at game start | TaleWorlds.CampaignSystem/SandBoxManager.cs:303 | `gameStarter.AddModel<MinorFactionsModel>(new DefaultMinorFactionsModel());` |
| 9 | Model resolution | TaleWorlds.CampaignSystem/GameModels.cs:660 (property declared GameModels.cs:139) | `this.MinorFactionsModel = base.GetGameModel<MinorFactionsModel>();` / `public MinorFactionsModel MinorFactionsModel { get; private set; }` |

**Mod-relevant call pattern:** read via `Campaign.Current.Models.MinorFactionsModel`; replace with `Game.Current.ReplaceModel<MinorFactionsModel>(new MyMinorFactionsModel())`, or subclass `MinorFactionsModel` and override `GetMercenaryAwardFactorToJoinKingdom` to rebalance mercenary prices, and/or the two getters to change hero-spawn rate/cap. Callers pass `neededAmountForClanToJoinCalculation: true` when they only want a UI/dialogue estimate and `false` when the actual contract is signed, so overrides should keep both branches consistent.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultMinorFactionsModel.md`
- **Byte count:** 1748 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | 2 properties, names + signatures only (no values) |
| 主要方法 (Methods) | ✅ | `GetMercenaryAwardFactorToJoinKingdom` only, formulaic purpose "读取并返回当前对象中 mercenary award factor to join kingdom 的结果。" and placeholder example (`= ...;`) |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<DefaultMinorFactionsModel>(new MyDefaultMinorFactionsModel());` |
| 参见 (See Also) | ✅ | Single link `[本区域目录](../)` |

**Verdict:** 6/6 sections present but all template-generated. The public surface (2 getters + 1 method) is complete, but no numeric tuning values (10% daily spawn, limit 4), and the very rich mercenary-price formula (power ratio, tribute ratio, clan tier, kingdom wealth, poor-clan penalties, small-kingdom bonus, mercenary count, leader-gold brackets, relation, Vlandian feat, the `true`/`false` branch split) is entirely absent. Missing real call-site evidence (MercenaryJoinKingdomBarterable.cs:81, ClanVariablesCampaignBehavior.cs:386, HeroSpawnCampaignBehavior.cs:359/381, LordConversationsCampaignBehavior.cs:3311, VassalAndMercenaryOfferCampaignBehavior.cs:271, DefaultDiplomacyModel.cs:487).

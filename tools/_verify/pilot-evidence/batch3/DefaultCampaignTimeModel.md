# Evidence: DefaultCampaignTimeModel

## 1. Source file & class declaration

- **Path:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`
- **Class declaration:** line 7 — `public class DefaultCampaignTimeModel : CampaignTimeModel`
- **Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
- **Base class:** `CampaignTimeModel` (abstract, `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs:7` — `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`)
- **Constructor:** none (implicit default)
- **Grep command:** `grep -nE '^\s*(public|private|protected|internal)\s' TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`
- **Grep output:**
  ```
  7:	public class DefaultCampaignTimeModel : CampaignTimeModel
  11:		public override CampaignTime CampaignStartTime
  21:		public override int SunRise
  31:		public override int SunSet
  41:		public override long TimeTicksPerMillisecond
  51:		public override int MillisecondInSecond
  61:		public override int SecondsInMinute
  71:		public override int MinutesInHour
  81:		public override int HoursInDay
  91:		public override int DaysInWeek
  101:		public override int WeeksInSeason
  111:		public override int SeasonsInYear
  ```

## 2. Per-member inventory (all public members)

All 11 public members are read-only `override` getters. There are **no public methods**, no private helpers, no fields in this class.

| # | Member | Signature | File:Line | What it does |
|---|--------|-----------|-----------|--------------|
| 1 | `CampaignStartTime` | `public override CampaignTime CampaignStartTime { get; }` | DefaultCampaignTimeModel.cs:11 | Returns the calendar origin of a campaign: `CampaignTime.Years(1084f) + CampaignTime.Weeks((float)CampaignTime.WeeksInSeason) + CampaignTime.Hours(9f)` — year 1084, first week of the season, 09:00. Used to convert "now" into elapsed game days/hours. |
| 2 | `SunRise` | `public override int SunRise { get; }` | DefaultCampaignTimeModel.cs:21 | Returns `2` — the hour (0–23) at which the map day starts / sunrise is applied. |
| 3 | `SunSet` | `public override int SunSet { get; }` | DefaultCampaignTimeModel.cs:31 | Returns `22` — the hour at which night begins. |
| 4 | `TimeTicksPerMillisecond` | `public override long TimeTicksPerMillisecond { get; }` | DefaultCampaignTimeModel.cs:41 | Returns `10L` — number of internal `CampaignTime` ticks in one real millisecond. Base unit for all `CampaignTime` arithmetic. |
| 5 | `MillisecondInSecond` | `public override int MillisecondInSecond { get; }` | DefaultCampaignTimeModel.cs:51 | Returns `1000`. |
| 6 | `SecondsInMinute` | `public override int SecondsInMinute { get; }` | DefaultCampaignTimeModel.cs:61 | Returns `60`. |
| 7 | `MinutesInHour` | `public override int MinutesInHour { get; }` | DefaultCampaignTimeModel.cs:71 | Returns `60`. |
| 8 | `HoursInDay` | `public override int HoursInDay { get; }` | DefaultCampaignTimeModel.cs:81 | Returns `24`. |
| 9 | `DaysInWeek` | `public override int DaysInWeek { get; }` | DefaultCampaignTimeModel.cs:91 | Returns `7`. |
| 10 | `WeeksInSeason` | `public override int WeeksInSeason { get; }` | DefaultCampaignTimeModel.cs:101 | Returns `3` — a season is 3 weeks (21 days). |
| 11 | `SeasonsInYear` | `public override int SeasonsInYear { get; }` | DefaultCampaignTimeModel.cs:111 | Returns `4` — a year is 4 seasons = 12 weeks = 84 days. |

**Mod hook:** every member is a virtual override point. A mod that wants a longer/shorter year or different sunrise/sunset overrides the relevant getter; `CampaignTime.Initialize()` copies all of them into static `CampaignTime` fields at campaign start (see call site 1).

## 3. Call example candidates (≥3)

| # | Call site | File:Line | Evidence |
|---|-----------|-----------|----------|
| 1 | `CampaignTime.Initialize()` copies every getter into static fields | TaleWorlds.CampaignSystem/CampaignTime.cs:54–62 | `CampaignTimeModel campaignTimeModel = Campaign.Current.Models.CampaignTimeModel;` then `CampaignTime.SunRise = campaignTimeModel.SunRise; CampaignTime.SunSet = campaignTimeModel.SunSet; CampaignTime.MillisecondInSecond = campaignTimeModel.MillisecondInSecond; CampaignTime.SecondsInMinute = campaignTimeModel.SecondsInMinute; CampaignTime.MinutesInHour = campaignTimeModel.MinutesInHour; CampaignTime.HoursInDay = campaignTimeModel.HoursInDay; CampaignTime.DaysInWeek = campaignTimeModel.DaysInWeek; CampaignTime.WeeksInSeason = campaignTimeModel.WeeksInSeason;` |
| 2 | Elapsed-days check on weekly tick | TaleWorlds.CampaignSystem/Campaign.cs:951 | `if ((int)this.Models.CampaignTimeModel.CampaignStartTime.ElapsedDaysUntilNow % CampaignTime.DaysInWeek == 0)` |
| 3 | Save-handler day counter | TaleWorlds.CampaignSystem/SaveHandler.cs:221 | `array[10] = new KeyValuePair<string, string>("DayLong", Campaign.Current.Models.CampaignTimeModel.CampaignStartTime.ElapsedDaysUntilNow.ToString(SaveHandler._invariantCulture));` |
| 4 | Map time tracker initialization | TaleWorlds.CampaignSystem/Campaign.cs:1915 | `this.MapTimeTracker = new MapTimeTracker(this.Models.CampaignTimeModel.CampaignStartTime);` |
| 5 | Day-boundary check in food consumption behavior | TaleWorlds.CampaignSystem/CampaignBehaviors/FoodConsumptionBehavior.cs:203 | `if ((int)Campaign.Current.Models.CampaignTimeModel.CampaignStartTime.ToDays != (int)CampaignTime.Now.ToDays)` |
| 6 | AI daily-window length | TaleWorlds.CampaignSystem/CampaignBehaviors/AiBehaviors/AiVisitSettlementBehavior.cs:47 | `return (float)Campaign.Current.Models.CampaignTimeModel.HoursInDay;` |
| 7 | Statistics elapsed-time | SandBox/CampaignBehaviors/StatisticsCampaignBehavior.cs:675 | `return CampaignTime.Now - Campaign.Current.Models.CampaignTimeModel.CampaignStartTime;` |
| 8 | Model registration at game start | TaleWorlds.CampaignSystem/SandBoxManager.cs:344 | `gameStarter.AddModel<CampaignTimeModel>(new DefaultCampaignTimeModel());` |
| 9 | Model resolution | TaleWorlds.CampaignSystem/GameModels.cs:741 (property declared GameModels.cs:569) | `this.CampaignTimeModel = base.GetGameModel<CampaignTimeModel>();` / `public CampaignTimeModel CampaignTimeModel { get; private set; }` |

**Mod-relevant call pattern:** read via `Campaign.Current.Models.CampaignTimeModel`; replace with `Game.Current.ReplaceModel<CampaignTimeModel>(new MyCampaignTimeModel())`, or subclass `CampaignTimeModel` and override individual getters. `CampaignTime.Initialize()` is the point where the model's values become the global static clock constants.

## 4. Current page status

- **Page path:** `content/v1.3.0/zh/api/campaign/DefaultCampaignTimeModel.md`
- **Byte count:** 1740 bytes
- **classifyPage result:** `stub` — reasons: `boilerplate-mental-model`, `weak-mental`, `weak-deps`
- **Six-section completeness:**

| Section | Present? | Notes |
|---------|----------|-------|
| 概述 (Overview) | ✅ | Boilerplate: "是一个规则模型，通常定义…" |
| 心智模型 (Mental Model) | ✅ | Boilerplate: "当作一个 Model 型扩展点来理解…" |
| 主要属性 (Properties) | ✅ | All 11 properties listed (names + signatures only) |
| 主要方法 (Methods) | ❌ | **Section missing** — the page has no 主要方法 heading (correct in the sense the class has no methods, but the reader is never told that) |
| 使用示例 (Examples) | ✅ | Generic `Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());` |
| 参见 (See Also) | ✅ | Single link `[本区域目录](../)` |

**Verdict:** 5/6 sections present, all template-generated. The 11-property table is complete but has no per-member descriptions (no values, no formulas). Missing: the calendar arithmetic (year 1084 + 1 week + 9h start, 7-day week, 3-week season, 4-season year, sunrise 2 / sunset 22, 10 ticks per ms), the `CampaignTime.Initialize()` static-propagation pattern, and real call-site evidence (Campaign.cs:951/1185/1915, SaveHandler.cs:221, FoodConsumptionBehavior.cs:203, AiVisitSettlementBehavior.cs:47).

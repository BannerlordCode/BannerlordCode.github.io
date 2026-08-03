---
title: "CampaignTime"
description: "The immutable tick-based representation of time and dates in the Bannerlord campaign world — a struct that models both moments (a year/season/day) and durations (30 days, 3 hours) with tick-precise arithmetic, calendar conversion, and localized date strings."
---

# CampaignTime

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct CampaignTime : IComparable<CampaignTime>`
**Base:** `IComparable<CampaignTime>`
**Source:** `TaleWorlds.CampaignSystem/CampaignTime.cs`

## Overview

`CampaignTime` is the **single unified representation of time** on the campaign map: it can be a *moment* (a specific year/season/day) or a *duration* (30 days, 3 hours). Internally it stores only one `readonly long _numTicks` — the integer tick count measured from the campaign start (`CampaignTimeModel.CampaignStartTime`). Every larger unit (milliseconds, seconds, minutes, hours, days, weeks, seasons, years) is derived through a set of static `TimeTicksPerXxx` constants. Because it stores a single integer, it is an **immutable struct**: any "add a day" or "three days later" operation returns a brand-new `CampaignTime` and never mutates the original. Almost everywhere the game needs to record a point in time or compare two moments (a hero's death day, an army's founding moment, a caravan contract cooldown, a quest deadline) it uses `CampaignTime` instead of `float`.

## Mental Model

Think of `CampaignTime` as the campaign world's **timestamp / stopwatch** — owned solely by the engine, read or constructed by mods but never advanced by them:

- **Who holds it:** The real clock lives in `Campaign.Current.MapTimeTracker` (`internal` singleton, advancing `_numTicks` every tick). `CampaignTime.Now` and `CampaignTime.DeltaTime` are just read-only snapshots of it. `CampaignTime` itself has no setter — you cannot change "global now".
- **Immutable:** `t + CampaignTime.Days(1)` returns a new value; the old `t` is unchanged. There is no `t.AddDays(...)` in-place method. To "update" a time, reassign: `next = now + CampaignTime.Days(1)`.
- **Do not compare time with raw `float`:** `Campaign.CurrentTime` is `(float)CampaignTime.Now.ToHours`, a float in *hours*. Using it for addition or `>`/`<` comparisons loses tick precision, is exposed to floating-point error, and may drift across versions. To compare or schedule, store a `CampaignTime` field and use its built-in comparison operators or `ElapsedDaysUntilNow`.
- **Tick ordering:** Within a **single campaign tick**, `CampaignTime.Now` is constant; time only advances after the next `MapTimeTracker.Tick` call. Logic that depends on "time having passed" will not observe any change until the following tick. `DeltaTime` is the step actually advanced on the **previous** tick (affected by the game-speed multiplier).
- Do not read `Now`/`DeltaTime` before the campaign is created (e.g. on the main menu, in early battle-scene setup, or during some module-load windows) — `Campaign.Current` is `null` there and doing so throws `NullReferenceException`.

## When to Use / When NOT to Use

**Use `CampaignTime` when:**
- You need to record a point in time (a hero died, a contract was signed, a cooldown started).
- You need to compare two moments or compute the duration between them, with exact integer precision.
- You need a calendar breakdown (year, season, day-of-season) or a localized date string.

**Do NOT use `CampaignTime` when:**
- You need per-frame real time inside a battle **Mission** — see [Risks](#risks). Use `Mission.Time` / `Mission.CurrentTime` (the Mission's own real-time clock) instead.
- You need a `float` hours value for engine-internal convenience. `Campaign.CurrentTime` exists for that, but never use it for comparison or scheduling — prefer storing `CampaignTime`.
- You want a mutable timer object you can `.AddDays(1)` in place. `CampaignTime` is immutable; reassign the result of arithmetic instead.

## Dependencies

`CampaignTime` is the leaf time primitive of the campaign layer; it depends on and is consumed by the following types (all resolve to existing EN pages):

- [Campaign](../../campaign/Campaign/) — `Campaign.Current`, `MapTimeTracker`, and `Campaign.CurrentTime` are the source of `Now`/`DeltaTime`/`CurrentTime`.
- [MobileParty](../../campaign/MobileParty/) — parties read `CampaignTime.Now` to schedule movement, encounter, and food-consumption logic on the campaign map.
- [Settlement](../../campaign/Settlement/) — settlements and their attached behaviors use `CampaignTime` to gate daily/weekly production, loyalty, and security ticks.
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — the typical place to read `CampaignTime.Now` inside `DailyTick` / `HourlyTick` callbacks.
- [Army](../../campaign-ext/Army/) — records `_creationTime` with `CampaignTime.Now` and computes army age by subtraction.
- [Hero](../../campaign/Hero/) — time-stamped fields such as `Hero.DeathDay` are `CampaignTime` values.
- [KillCharacterAction](../../campaign-ext/KillCharacterAction/) — writes the death `CampaignTime` and year into the kill log.

## The tick / season / year calendar model

The entire calendar is built from one integer — `_numTicks` — plus a fixed set of constants (all `static int`, populated by `Initialize()` from the `CampaignTimeModel`):

- `SunRise`, `SunSet` — hour-of-day boundaries that decide day vs. night.
- `MillisecondInSecond`, `SecondsInMinute`, `MinutesInHour`, `HoursInDay` — the sub-day scale.
- `DaysInWeek`, `WeeksInSeason`, `SeasonsInYear` — the week/season/year scale.
- Derived: `DaysInSeason => WeeksInSeason * DaysInWeek`, `DaysInYear => DaysInSeason * SeasonsInYear`.

A "moment" is just a tick count from the campaign start; a "duration" is a tick count from tick 0. Because both are the same underlying integer, the same arithmetic and comparison operators work for either — the *meaning* depends only on whether the operand is interpreted as a moment or a duration. The `Seasons` enum is `Spring` / `Summer` / `Autumn` / `Winter`.

The static sentinels are important conventions:
- `Zero` — tick 0, equal to the campaign start (`CampaignStartTime`).
- `Never` — `long.MaxValue`, the "no deadline / infinite future" sentinel. Never do arithmetic or `ElapsedXxx` on `Never`; it overflows.

## Key members

### Obtaining a `CampaignTime`

```csharp
// 1. Current campaign moment (most common): equivalent to Campaign.Current.MapTimeTracker.Now
CampaignTime now = CampaignTime.Now;

// 2. How far the previous tick advanced (affected by game speed; for smooth progression logic)
CampaignTime step = CampaignTime.DeltaTime;

// 3. Build a "duration" from a Duration (based at tick 0, NOT now)
CampaignTime thirtyDays = CampaignTime.Days(30f);
CampaignTime threeHours = CampaignTime.Hours(3f);

// 4. Offset from "now" to get a future moment
CampaignTime threeDaysLater = CampaignTime.DaysFromNow(3f);
CampaignTime oneHourLater  = CampaignTime.HoursFromNow(1f);

// 5. Anti-pattern: Campaign.CurrentTime is a float (hours), fine for quick internal reads,
//    NOT for time comparison / scheduling
float hoursFloat = Campaign.CurrentTime; // = (float)CampaignTime.Now.ToHours
```

> Convention: `CampaignTime.Zero` is the campaign start (equals `CampaignStartTime`); `CampaignTime.Never` is `long.MaxValue`, used for "no deadline / never". Do not do arithmetic or `ElapsedXxx` on `Never` — it overflows.

### Static properties

| Property | Type | Meaning |
|----------|------|---------|
| `Now` | `CampaignTime` | Current campaign moment; reads the current tick's `_numTicks` from `Campaign.Current.MapTimeTracker`. |
| `DeltaTime` | `CampaignTime` | Duration advanced from the previous tick to the current one (`MapTimeTracker.DeltaTimeInTicks` converted). |
| `Zero` | `CampaignTime` | Zero moment = campaign start. |
| `Never` | `CampaignTime` | "Infinite future" sentinel (`long.MaxValue`), for "no deadline" conventions. |
| `DaysInSeason` | `int` | Days per season = `WeeksInSeason * DaysInWeek`. |
| `DaysInYear` | `int` | Days per year = `DaysInSeason * SeasonsInYear`. |

### Instance properties (conversions relative to "now")

| Property | Type | Meaning |
|----------|------|---------|
| `IsFuture` / `IsPast` / `IsNow` | `bool` | Whether this moment is in the future / already past / exactly now. |
| `IsDayTime` / `IsNightTime` | `bool` | Whether the current hour falls in `[SunRise, SunSet)`; night is simply "not day". |
| `CurrentHourInDay` | `float` | Fractional hour within the day (0 .. `HoursInDay`). |
| `ElapsedMillisecondsUntilNow` … `ElapsedYearsUntilNow` | `float` | How much of the unit has elapsed **from this moment to "now"**. The earlier the moment, the larger the value. |
| `RemainingMillisecondsFromNow` … `RemainingYearsFromNow` | `float` | How much of the unit remains **from "now" to this moment** (positive when this moment is in the future). |
| `ToMilliseconds` … `ToYears` | `double` | Converts this moment's ticks **directly** into the unit (absolute amount, not relative to "now"). |
| `GetHourOfDay` / `GetDayOfWeek` / `GetDayOfSeason` / `GetDayOfYear` / `GetWeekOfSeason` | `int` | Index within the respective cycle (0-based). |
| `GetSeasonOfYear` | `CampaignTime.Seasons` | Current season enum: `Spring` / `Summer` / `Autumn` / `Winter`. |
| `GetYear` | `int` | Year index counted from the campaign start. |

> **`Elapsed...` vs `To...`:** `ElapsedDaysUntilNow` answers "how many days ago was this moment?" (relative to now), while `ToDays` answers "what is this moment's tick count expressed in days?" (absolute). Mixing them up is a common bug — use `ElapsedXxx` for "time since / until now" and `ToXxx` for "bucket this moment into an integer day/year index".

### Building durations and future moments

#### `public static CampaignTime Days(float)` / `Hours` / `Weeks` / `Years`
Build a `CampaignTime` representing a **duration** (based at tick 0). Commonly used in `+`/`-` arithmetic or `ElapsedXxx` comparisons.

```csharp
// A 30-day duration
CampaignTime cooldown = CampaignTime.Days(30f);
```

#### `public static CampaignTime DaysFromNow(float)` / `HoursFromNow` / `WeeksFromNow` / `YearsFromNow`
Offset from "now" to return a future **absolute moment**.

```csharp
// Four days from now (used by CompanionGrievanceBehavior to schedule the next grievance time)
CampaignTime nextGrievance = CampaignTime.DaysFromNow(4f);
```

#### `public static CampaignTime Seconds(long)` / `Minutes(long)` / `Milliseconds(long)` and their `*FromNow` variants
Finer-grained (milliseconds / seconds / minutes) construction; parameters are `long` to avoid float truncation.

```csharp
CampaignTime inFiveMinutes = CampaignTime.MinutesFromNow(5L);
```

### Arithmetic

#### `public static CampaignTime operator +(CampaignTime g1, CampaignTime g2)`
Adds two `CampaignTime` values and **returns a new value**. Semantics depend on the operands: moment + duration = new moment; duration + duration = longer duration.

```csharp
// Add a cooldown duration to the current moment to get the barter cooldown expiry (BarterManager)
CampaignTime expiry = CampaignTime.Now + CampaignTime.Days(
    (float)Campaign.Current.Models.BarterModel.BarterCooldownWithHeroInDays);
```

#### `public static CampaignTime operator -(CampaignTime g1, CampaignTime g2)`
Subtracts and **returns a new value**: moment − moment = duration; moment − duration = earlier moment.

```csharp
// Army computes its age as "now" minus its creation moment, then converts to days (Army.cs)
CampaignTime age = CampaignTime.Now - this._creationTime;
float ageInDays = age.ElapsedDaysUntilNow;
```

### Comparison

#### `==` / `!=` / `<` / `>` / `<=` / `>=`
Integer comparison on the internal `_numTicks` — exact, no floating-point error. Prefer these operators when comparing two moments.

```csharp
if (tournament.CreationTime < CampaignTime.Now - CampaignTime.Days(15f))
{
    // The tournament was created more than 15 days ago
}
```

#### `public int CompareTo(CampaignTime other)` / `public bool Equals(CampaignTime other)`
The `IComparable<CampaignTime>` implementation: two values are equal iff `_numTicks` are equal. `Equals` uses integer comparison and `GetHashCode` returns the hash of `_numTicks`, so `CampaignTime` is safe to use as a stable dictionary key.

### Conversion and formatting

#### `public double ToDays` / `ToHours` / `ToSeconds` / `ToMilliseconds` / `ToWeeks` / `ToSeasons` / `ToYears`
Converts this moment's ticks **directly** into the unit as a `double` (absolute amount). Commonly used to store a moment as an integer day/year index:

```csharp
// Kingdom records "the day the last army was created" as an integer day number (Kingdom.cs)
this.LastArmyCreationDay = (int)CampaignTime.Now.ToDays;

// JournalLog computes how many days apart two log entries are
int daysBetween = MathF.Ceiling(CampaignTime.Now.ToDays) - MathF.Ceiling(this.LogTime.ToDays);
```

#### `public override string ToString()`
Uses the localized text `str_date_format` to output a "season year day" form (e.g. `Spring, Year 5, Day 12`; exact wording follows the game language). It fills the `SEASON` / `YEAR` / `DAY` text variables internally.

```csharp
// KillCharacterAction writes the death year into the death log
textObject2.SetTextVariable("YEAR", CampaignTime.Now.GetYear.ToString());
InformationManager.DisplayMessage(new InformationMessage(CampaignTime.Now.ToString()));
```

> This version (v1.3.15 and v1.4.5) has **no** `ToDateString()` method — that was added in a later version. To get a date string, use `ToString()`.

#### `public bool StringSameAs(CampaignTime otherTime)`
Tells whether two moments fall on the **same day** (compares `_numTicks / TimeTicksPerDay`), ignoring intra-day hour differences.

```csharp
if (someTime.StringSameAs(CampaignTime.Now))
{
    // It is the same day
}
```

## Example

### Example 1: Check whether a hero died more than 40 days ago

`Hero.DeathDay` is set to `CampaignTime.Now` at death; afterwards `ElapsedDaysUntilNow` gives the days since, at any time (`CompanionsCampaignBehavior` style):

```csharp
if (hero.IsWanderer && hero.DeathDay.ElapsedDaysUntilNow >= 40f)
{
    // The wanderer has been dead for over 40 days; safe to trigger "recruit a new wanderer" logic
}
```

### Example 2: Schedule a cooldown expiry and check it each daily tick

Store a `CampaignTime` field on your behavior, set the next trigger time with `DaysFromNow`, then test it in `DailyTick` with `ElapsedDaysUntilNow` (`CompanionGrievanceBehavior` style):

```csharp
// Set the next grievance time to 4 days from now
value.NextGrievanceTime = CampaignTime.DaysFromNow(4f);

// In DailyTick: allow settlement once >= 56 days since the last one
if (value.NextGrievanceTime.ElapsedDaysUntilNow >= 56f)
{
    // Trigger the grievance logic
}
```

### Example 3: Compute the duration between two moments and compare order

`Army` records its founding moment, then computes its "age" by subtraction at any later time; `TournamentCampaignBehavior` uses `ElapsedDaysUntilNow` to decide when to remove a tournament:

```csharp
// Record at founding
this._creationTime = CampaignTime.Now;

// Any later moment: compute age in days
float ageInDays = (CampaignTime.Now - this._creationTime).ElapsedDaysUntilNow;

// Remove the tournament once it exceeds RemoveTournamentAfterDays
if (tournamentGame.CreationTime.ElapsedDaysUntilNow >= (float)tournamentGame.RemoveTournamentAfterDays)
{
    // Remove the tournament
}
```

## Risks

- **Assuming `CampaignTime` is mutable:** It is an immutable struct; every `+`/`-`/`*FromNow` returns a **new value**. There is no `t.AddDays(1)`-style method. Forgetting to capture the return value makes the logic "appear to do nothing".
- **Using `float` (`Campaign.CurrentTime`) for time comparison / scheduling:** `Campaign.CurrentTime` is `(float)CampaignTime.Now.ToHours`. Adding `30f * HoursInDay` to it or comparing two such values introduces floating-point error and cannot represent ticks exactly. A few engine internals (e.g. `StartMercenaryServiceAction`) do this as a compromise on internal fields, but mods should store a `CampaignTime` field and use the `>`/`<` operators or `ElapsedDaysUntilNow`.
- **Access before campaign initialization:** `Now` / `DeltaTime` / `CurrentTicks` all read `Campaign.Current.MapTimeTracker`. Calling them while `Campaign.Current` is `null` (main menu, early battle-scene setup, some module-load timings) throws `NullReferenceException`.
- **Misunderstanding tick ordering:** `Now` is constant within a single campaign tick; reading it repeatedly mid-tick never shows "time flowing". Logic that depends on time advancing (e.g. cooldown expiry) only takes effect on the next tick. `DeltaTime` is the previous tick's step and varies with the player's game-speed setting (pause / fast-forward).
- **Assuming campaign-time during a Mission (real-time vs campaign-time):** This is a frequent modder trap. During a battle **Mission**, the campaign map is paused, so `CampaignTime.Now` stays **frozen** for the entire mission while the Mission's own real-time clock (`Mission.Time` / `Mission.CurrentTime`, in float seconds) keeps advancing. Do **not** read `CampaignTime.Now` inside a Mission update loop expecting per-frame real-time progress, and do not schedule Mission-side effects against campaign time — use the Mission's clock for in-mission timing and only use `CampaignTime` for campaign-map logic that runs in campaign ticks.
- **Arithmetic on `Never` / `Zero`:** `Never` is `long.MaxValue`; doing `+` or `ElapsedXxx` on it overflows. Treat it only as a sentinel for comparison or assignment, never as an operand.
- **Conversion overflow and truncation:** `Days`/`Hours`/`Weeks`/`Years` use `(long)(value * TimeTicksPerXxx)` and truncate; very large values overflow `long`. `Seconds`/`Minutes`/`Milliseconds` take `long` but are still bounded by `long.MaxValue`. For a far-future sentinel use `Never`.

## Cross-version notes

- **v1.3.0 / v1.3.15:** All public APIs described here apply. `Now`, `DeltaTime`, `Zero`, `Never`, etc. are exposed as `get` accessor properties.
- **v1.4.5:** The public API and behavior are **identical**; only `Now`/`DeltaTime`/`Zero`/`Never` and similar read-only properties were rewritten as expression-bodied properties (`=> …`), which has no impact on callers — no code change needed.
- **`ToDateString()` does not exist in v1.3.15 or v1.4.5:** it was added in a later version. To obtain a localized date string now, use `ToString()`.
- `Campaign.CurrentTime` (returns `float` hours) exists in all the above versions as an engine-internal convenience entry point; still prefer `CampaignTime` itself for comparison and scheduling in mod code.

## See Also

- [Area index](../)
- [Campaign](../../campaign/Campaign/) — `Campaign.Current`, `MapTimeTracker`, and `Campaign.CurrentTime` source.
- [MobileParty](../../campaign/MobileParty/) — reads `CampaignTime.Now` to schedule map movement and encounter logic.
- [Settlement](../../campaign/Settlement/) — uses `CampaignTime` to gate daily/weekly production and prosperity ticks.
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — the typical place to read `CampaignTime.Now` in daily / hourly ticks.
- [Army](../../campaign-ext/Army/) — records `_creationTime` with `CampaignTime.Now` and computes age by subtraction.
- [Hero](../../campaign/Hero/) — time-stamped fields such as `Hero.DeathDay` are `CampaignTime` values.

---
title: "BannerlordConfig"
description: "Auto-generated class reference for BannerlordConfig."
---
# BannerlordConfig

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordConfig`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BannerlordConfig.cs`

## Overview

`BannerlordConfig` is the **runtime options store for the whole game** — battle size, corpse count, chat box dimensions, blood, crosshair, language, voice language, server-list filters. It is `public static class BannerlordConfig` (`BannerlordConfig.cs:11`), 650 lines, and it has **no constructor at all**: every option is a static auto-property or a static field, so there is nothing to instantiate and nothing to pass.

Its persistence is deliberately reflection-based. `Save()` (`:588`) does `typeof(BannerlordConfig).GetProperties()` (`:591`), keeps every property carrying a `[ConfigProperty]`-derived attribute (`:594`), and writes them as `Name=Value\n` lines (`:602`). `Initialize()` (`:497`) reverses that by splitting on `=` and calling `typeof(BannerlordConfig).GetProperty(array2[0])` (`:511`), then `property.SetValue(null, value)` per type (`:523`, `:529`). The three attribute types are **private nested classes** — `ConfigProperty` (`:17`), `ConfigPropertyInt` (`:21`), `ConfigPropertyUnbounded` (`:56`) — so a mod cannot author one; it can only set the properties that already carry one.

The file also owns the battle-size tables: `_battleSizes = { 200, 300, 400, 500, 600, 800, 1000 }` (`:60`), `_siegeBattleSizes = { 150, 230, 320, 425, 540, 625, 1000 }` (`:62`), `_sallyOutBattleSizes = { 150, 200, 240, 280, 320, 360, 400 }` (`:64`) and `_reinforcementWaveCounts = { 3, 4, 5, 0 }` (`:66`).

## Mental Model

Picture it as **a notice board in the lobby where every card is re-pinned the instant you change it**. Most options are plain `{ get; set; }` properties whose setter is the auto-property, so assigning is instant and takes effect immediately in whatever reads it next. That is why `ShowBlood` (`:292`), `EnableDeathIcon` (`:468`) and a hundred others need no call to apply them.

Three cards behave differently, and those are the ones worth knowing:

`Language` (`:209`) and `VoiceLanguage` (`:237`) have **hand-written setters that do the work and swallow failure**. Setting `Language` checks `MBTextManager.LanguageExistsInCurrentConfiguration(value, …)` and `MBTextManager.ChangeLanguage(value)` (`:219`); if either fails it retries with `"English"` (`:223`), and if *that* fails it calls `Debug.FailedAssert("Language cannot be set!", …)` (`:229`) — **and does not assign `_language`**. So the getter can return a value the setter never accepted.

`BattleSize` (`:304`) and friends are **indices, not values**. `GetRealBattleSize()` returns `_battleSizes[BattleSize]` (`:622`), so `BattleSize = 2` means 400 troops, not 2 troops. The bounds are exposed as `MinBattleSize => _battleSizes[0]` (`:198`) and `MaxBattleSize => _battleSizes[Length - 1]` (`:200`).

`Save()` and `Initialize()` are the only members that touch disk, and both are **all-or-nothing about unknown keys**. `Initialize()` sets `flag = true` and skips any key whose name does not resolve to a property (`:512`-`:515`), and calls `Save()` at the end if that happened (`:577`-`:580`) — **rewriting the config file, which is how a key from a removed mod version gets cleaned out**. That means writing a config key for a property you invented is self-erasing on next launch.

## How to use

**How to obtain it.** Static — reference the type, never an instance. `BannerlordConfig` has no ctor and no singleton accessor; every member is `static`. Read options directly, and call `Initialize()` **only** if you are sure the game has not already: it rewrites the config file when it finds a key it cannot resolve (`:577`-`:580`).

**A typical use.** A mod that scales the battlefield and turns off cosmetics reads the derived sizes and the boolean switches, using the `GetRealBattleSize*` helpers rather than the raw index:

```csharp
using TaleWorlds.MountAndBlade;

Debug.Print("field battle size = " + BannerlordConfig.GetRealBattleSize(), 0);
Debug.Print("siege battle size  = " + BannerlordConfig.GetRealBattleSizeForSiege(), 0);
Debug.Print("sally-out size     = " + BannerlordConfig.GetRealBattleSizeForSallyOut(), 0);
Debug.Print("reinforcement waves = " + BannerlordConfig.GetReinforcementWaveCount(), 0);
Debug.Print("corpse count = " + BannerlordConfig.NumberOfCorpses, 0);
Debug.Print("blood = " + BannerlordConfig.ShowBlood + ", death icon = " + BannerlordConfig.EnableDeathIcon, 0);
```

A mod that changes options must persist them through `Save()`, because assignment alone is lost at exit:

```csharp
using TaleWorlds.MountAndBlade;

BannerlordConfig.ShowBlood = false;
BannerlordConfig.EnableTutorialHints = false;
BannerlordConfig.Save();
Debug.Print("options saved", 0);
```

Clamp a value into the supported index range rather than trusting the file, since `GetRealBattleSize` indexes an array directly:

```csharp
using TaleWorlds.MountAndBlade;

int clamped = BannerlordConfig.BattleSize;
if (clamped < 0 || clamped > BannerlordConfig.MaxBattleSize - 1)
{
    clamped = 0;
}
Debug.Print("battle size index (clamped) = " + clamped
    + " -> " + BannerlordConfig.GetRealBattleSize() + " troops", 0);
```

**What to watch out for.** Reading `BattleSize` as if it were a troop count. The single most common mistake on this type is sizing a system from `BannerlordConfig.BattleSize` directly — which is an **index into a seven-element table** (`:60`), not a count. The consequence is a mod that believes the battle has 2 or 3 soldiers, computes reinforcement or formation logic from that, and produces numbers off by two orders of magnitude. Always go through `GetRealBattleSize()` (`:620`) or the `Min`/`Max` helpers (`:198`-`:204`).

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Initialize` | `public static void Initialize()` (`:497`) | Loads the config file: `Utilities.LoadBannerlordConfigFile()` (`:499`), and **writes a fresh default file if the text is null or empty** (`:500`-`:503`). Otherwise splits lines on `=`, resolves each key with `GetProperty` (`:511`) and sets it per type (`:523`, `:529`). **Any unresolvable key sets `flag` (`:514`) and triggers a rewrite at the end (`:577`-`:580`)** — so a key for a property that no longer exists is silently deleted. Finishes by applying the language (`:583`-`:585`). |
| `Save` | `public static void Save()` returning `SaveResult` (`:588`) | Persists every `[ConfigProperty]`-marked property as `Name=Value\n` (`:602`) via `Utilities.SaveConfigFile(text)` (`:604`), then calls `MBAPI.IMBBannerlordConfig.ValidateOptions()` (`:605`). **Note the signature mismatch to watch: the declaration at `:588` has no return type**, so the reflected `GetValue` at `:596` sees the property type, not this method — the value handed back is whatever `SaveResult` the config-file writer produced. Calling `Save()` is what makes a runtime assignment survive. |
| `ValidateOptions` (native) | `MBAPI.IMBBannerlordConfig.ValidateOptions()` at `:581` and `:605` | Both `Initialize()` and `Save()` end by asking the native layer to validate the option set. **Not a member of this class** — it is the [`IMBBannerlordConfig`](../../mission/IMBBannerlordConfig) bridge, whose sole member this is. |
| `BattleSize` | `public static int BattleSize { get; set; }` (`:304`) | **An index, not a count.** Default index `2` (`_battleSize = 2`, `:188`) means 400 troops. Spend it through `GetRealBattleSize()` (`:620`) and never read it as a number of soldiers. |
| `GetRealBattleSize` | `public static int GetRealBattleSize()` (`:620`) | `_battleSizes[BattleSize]` (`:622`) — field battle troop count, from `{200, 300, 400, 500, 600, 800, 1000}` (`:60`). |
| `GetRealBattleSizeForSiege` | `public static int GetRealBattleSizeForSiege()` (`:625`) | `_siegeBattleSizes[BattleSize]` (`:627`) from `{150, 230, 320, 425, 540, 625, 1000}` (`:62`) — **a different table, lower numbers at every index except the last.** |
| `GetRealBattleSizeForNaval` | `public static int GetRealBattleSizeForNaval()` (`:630`) | `_battleSizes[BattleSize]` (`:632`) — **byte-for-byte the same expression as `GetRealBattleSize`**. Naval battles reuse the field table; there is no naval-specific sizing. |
| `GetRealBattleSizeForSallyOut` | `public static int GetRealBattleSizeForSallyOut()` (`:640`) | `_sallyOutBattleSizes[BattleSize]` (`:642`) from `{150, 200, 240, 280, 320, 360, 400}` (`:64`) — **caps at 400**, half the field table's ceiling. |
| `GetReinforcementWaveCount` | `public static int GetReinforcementWaveCount()` (`:635`) | `_reinforcementWaveCounts[ReinforcementWaveCount]` (`:637`) from `{3, 4, 5, 0}` (`:66`). **Index 3 is `0`, meaning "no reinforcement", and `MinReinforcementWaveCount => _reinforcementWaveCounts[0]` (`:202`) reports 3 — so the reported minimum is not the smallest value in the table.** |
| `MinBattleSize` / `MaxBattleSize` | `public static int MinBattleSize => _battleSizes[0];` (`:198`), `public static int MaxBattleSize => _battleSizes[_battleSizes.Length - 1];` (`:200`) | Bounds **as troop counts** (200 and 1000) — *not* as the index range. Note this is the one place the two senses are mixed: the values are counts, so `MaxBattleSize` is 1000, and using it as an index bound is out of range. |
| `MinReinforcementWaveCount` / `MaxReinforcementWaveCount` | `public static int MinReinforcementWaveCount => _reinforcementWaveCounts[0];` (`:202`), `…Max…` (`:204`) | Read as `3` and `0` from `{3, 4, 5, 0}` (`:66`). **`Min > Max`** — the "max" entry is the sentinel for "unlimited", so do not use these two to build a range. |
| `SiegeBattleSizeMultiplier` | `public static double SiegeBattleSizeMultiplier = 0.8;` (`:70`) | The only `public static` **field** that is not `const`. A `double`, unlike the `float` defaults elsewhere. Multiply your own siege budget by it rather than hard-coding `0.8`. |
| `MaxCorpseCount` | `public const int MaxCorpseCount = 1021;` (`:68`) | Compile-time ceiling for corpse counts. A `const`, so it is inlined into your assembly — if a later version changes it, **your compiled mod keeps the old value**. |
| `NumberOfCorpses` | `public static int NumberOfCorpses { … }` (`:279`) | Backing field `_numberOfCorpses = 3` (`:186`), `DefaultNumberOfCorpses = 3` (`:82`). A hand-written property, unlike the plain auto-properties — read it before assuming a plain get/set. |
| `CivilianAgentCount` | `public static float CivilianAgentCount => (float)GetRealBattleSize() * 0.5f;` (`:319`) | Half the field battle size, as a `float`, recomputed on every access. **Derived, not stored** — so it tracks `BattleSize` immediately. |
| `GetDamageToPlayerMultiplier` | `public static float GetDamageToPlayerMultiplier()` (`:609`) | Switch over `PlayerReceivedDamageDifficulty` returning `0.25f` / `0.5f` / `1f` for `0` / `1` / `2` (`:613`-`:615`), with a `_ => 1f` catch-all (`:616`). **The catch-all is `1f` (full damage), so an out-of-range difficulty means the player takes MORE damage than the hardest setting, silently.** |
| `Language` | `[ConfigPropertyUnbounded] public static string Language { get; set; }` (`:208`-`:209`) | UI language. The setter only applies when `MBTextManager.LanguageExistsInCurrentConfiguration(value, NativeConfig.IsDevelopmentMode)` **and** `MBTextManager.ChangeLanguage(value)` both succeed (`:219`); otherwise it falls back to `"English"` (`:223`), and if that fails calls `Debug.FailedAssert("Language cannot be set!", …)` (`:229`) **without assigning**. **Reading back a value the setter rejected is possible.** |
| `VoiceLanguage` | `[ConfigPropertyUnbounded] public static string VoiceLanguage { get; set; }` (`:236`-`:237`) | Voice-over language, with the same three-step fallback using `MBTextManager.TryChangeVoiceLanguage` (`:247`, `:251`) and `Debug.FailedAssert("Voice Language cannot be set!", …)` (`:257`). Independent of `Language` — the two can disagree. |
| `DefaultLanguage` | `public static string DefaultLanguage => GetDefaultLanguage();` (`:206`) | `LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode(Utilities.GetSystemLanguage())` (`:647`). **Computed from the OS on every access**, so it is not a constant and not cached. |
| `LatestSaveGameName` | `public static string LatestSaveGameName { get; set; } = string.Empty;` (`:486`) | The only option that is *about* saves rather than *in* the config, and it defaults to empty. |
| `IAPNoticeConfirmed` | `public static bool IAPNoticeConfirmed { get; set; } = false;` (`:495`) | Whether the in-app-purchase notice has been dismissed. Carries no `Default*` const, unlike its neighbours. |
| `AutoSaveInterval` | `public static int AutoSaveInterval { … }` (`:346`) | Backing `_autoSaveInterval = 30` (`:190`), `DefaultAutoSaveInterval = 30` (`:108`). Minutes. |
| `StopGameOnFocusLost` | `public static bool StopGameOnFocusLost { … }` (`:387`) | Backing `_stopGameOnFocusLost = true` (`:192`). A hand-written property — the file uses the explicit backing-field form for exactly six options (`:186`, `:188`, `:190`, `:192`, `:194`, `:196`). |
| `OrderType` / `OrderLayoutType` | `public static int OrderType { … }` (`:439`), `OrderLayoutType` (`:452`) | Battle order bar configuration. Backed by `_orderType` (`:194`) and `_orderLayoutType` (`:196`); defaults `DefaultOrderType = 0` (`:178`), `DefaultOrderLayoutType = 0` (`:172`). `OrderType` is also the one option inside `Formation`-adjacent behaviour, so AI that reads it changes shape with the HUD setting. |
| Server-list filters | `HideFullServers` (`:421`), `HideEmptyServers` (`:424`), `HidePasswordProtectedServers` (`:427`), `HideUnofficialServers` (`:430`), `HideModuleIncompatibleServers` (`:433`), `ShowOnlyFavoriteServers` (`:436`) | Six `bool` filters applied to the multiplayer browser. **`HideModuleIncompatibleServers` (`:433`) is the one that interacts with mods** — enabling it hides servers whose module set does not match yours. |
| `ChatBoxSizeX` / `ChatBoxSizeY` | `public static float ChatBoxSizeX { get; set; } = 495f;` (`:480`), `ChatBoxSizeY = 340f` (`:483`) | Chat box dimensions in pixels, `float`. Defaults `DefaultChatBoxSizeX = 495f` (`:150`), `DefaultChatBoxSizeY = 340f` (`:152`). Screen-space, so they are not resolution-independent. |
| `UIScale` | `public static float UIScale { get; set; } = 1f;` (`:325`) | Global UI multiplier, default `1f` (`:100`). A `float` on a screen-space value — **mod UI that assumes `UIScale == 1` will be mis-sized for every player who changed it.** |
| `Default*` constants | 56 `public const` members spanning `:72`-`:180` | The shipped defaults, e.g. `DefaultBattleSize = 2` (`:92`), `DefaultFirstPersonFov = 65f` (`:98`), `DefaultNumberOfCorpses = 3` (`:82`). Useful for resetting an option: assign the `Default*` constant, not a literal. They are `const`, so they inline — see `MaxCorpseCount`. |
| `ConfigPropertyInt` (private) | `private sealed class ConfigPropertyInt : ConfigProperty` (`:21`) | The validating attribute: holds `int[] _possibleValues` and `bool _isRange` (`:23`-`:25`), and `IsValidValue(int)` (`:34`) either bounds-checks against `_possibleValues[0..1]` (`:38`-`:40`) or scans for membership (`:44`-`:52`). **Private and unsealed-from-outside: a mod cannot declare its own config property, only use the ones already attributed.** |

## Examples

Read the battlefield sizes through the helpers, never through the index:

```csharp
using TaleWorlds.MountAndBlade;

Debug.Print("field    = " + BannerlordConfig.GetRealBattleSize(), 0);
Debug.Print("siege    = " + BannerlordConfig.GetRealBattleSizeForSiege(), 0);
Debug.Print("sallyout = " + BannerlordConfig.GetRealBattleSizeForSallyOut(), 0);
Debug.Print("civilians= " + BannerlordConfig.CivilianAgentCount, 0);
Debug.Print("waves    = " + BannerlordConfig.GetReinforcementWaveCount(), 0);
```

Apply a change and persist it — assignment alone dies at exit:

```csharp
using TaleWorlds.MountAndBlade;

BannerlordConfig.ShowBlood = false;
BannerlordConfig.EnableTutorialHints = false;
BannerlordConfig.EnableDeathIcon = false;
BannerlordConfig.Save();
Debug.Print("options saved", 0);
```

Reset an option to its shipped default using the constant rather than a copied literal:

```csharp
using TaleWorlds.MountAndBlade;

BannerlordConfig.UIScale = BannerlordConfig.DefaultUIScale;
BannerlordConfig.FirstPersonFov = BannerlordConfig.DefaultFirstPersonFov;
Debug.Print("reset to defaults", 0);
```

Clamp an option into range before using it as an array index, and read the damage multiplier through its helper:

```csharp
using TaleWorlds.MountAndBlade;

int index = BannerlordConfig.BattleSize;
if (index < 0 || index > BannerlordConfig.MaxBattleSize - 1)
{
    index = 0;
}
Debug.Print("battle index " + index + " -> " + BannerlordConfig.GetRealBattleSize() + " troops", 0);
Debug.Print("damage multiplier = " + BannerlordConfig.GetDamageToPlayerMultiplier(), 0);
```

Check the language actually took, rather than trusting the assignment:

```csharp
using TaleWorlds.MountAndBlade;

BannerlordConfig.Language = "Türkçe";
Debug.Print("language now = " + BannerlordConfig.Language
    + " (the setter falls back to English and never assigns on failure)", 0);
```

## Risks and crash boundaries

- **`BattleSize` and friends are indices, not counts.** (`:304`, `:622`, `:627`, `:642`) Reading one as a troop count yields a number two orders of magnitude too small.
- **`GetRealBattleSizeForNaval` is a duplicate of `GetRealBattleSize`.** Both return `_battleSizes[BattleSize]` (`:622`, `:632`). There is no naval-specific table, so a mod that assumes naval scales differently is wrong.
- **`MinReinforcementWaveCount` (3) is greater than `MaxReinforcementWaveCount` (0).** (`:202`, `:204`, `:66`) Do not build a range from them; index `3` is the "no reinforcement" sentinel.
- **`MinBattleSize` / `MaxBattleSize` are counts, not indices.** (`:198`, `:200`) They read 200 and 1000; using them as index bounds is an out-of-range array access.
- **`GetDamageToPlayerMultiplier` defaults an unknown difficulty to `1f`.** (`:616`) That is full damage — the most punishing setting — not a safe fallback.
- **`Language` and `VoiceLanguage` setters can silently not assign.** (`:229`, `:257`) After `Debug.FailedAssert`, `_language` keeps its old value while you may believe the change succeeded. Always read back.
- **`Save()` and `Initialize()` rewrite the config file.** `Initialize()` calls `Save()` when any key fails to resolve (`:577`-`:580`), so an unknown key — including one a mod wrote for a property that does not exist — is deleted on next launch. **Never write your own keys into this file**; there is no extension point, because `ConfigProperty` and its subclasses are `private` (`:17`, `:21`, `:56`).
- **`Initialize()` splits on `=` with no `Length` guard.** (`:510`-`:517`) A malformed line without `=` yields `array2[1]`, which is caught by the surrounding `try`/`catch` (`:518`, `:572`-`:575`) rather than by a check.
- **`const` members inline at compile time.** `MaxCorpseCount = 1021` (`:68`) and the 56 `Default*` constants are baked into your assembly. A later version that changes them will not change what your mod uses.
- **`SiegeBattleSizeMultiplier` is the only mutable public static field** (`:70`) and is a `double`, unlike the `float` options — mixing it into a `float` expression is fine but the asymmetry is a hint that it came from a different code path.
- **The explicit backing-field properties are only six.** `_numberOfCorpses` (`:186`), `_battleSize` (`:188`), `_autoSaveInterval` (`:190`), `_stopGameOnFocusLost` (`:192`), `_orderType` (`:194`), `_orderLayoutType` (`:196`). For those, the property body may do more than store; for the rest, assignment is immediate.
- **`UIScale` and `ChatBoxSizeX/Y` are screen-space floats.** (`:325`, `:480`, `:483`) Mod UI that assumes the default is mis-sized for anyone who changed them.
- **`Save()`'s declared signature and its reflection behaviour differ.** The method returns `SaveResult` (`:588`) but the `Save()` call at `:502` is used as a statement, and the property loop at `:596` reads *properties*, not this method. Do not assume `Save()` participates in the property set it writes.
- **Not a save-game participant.** This is the options file, not a campaign save.

## Cross-Version Notes

The v1.4.5 file is 650 lines: four private size arrays (`:60`-`:66`), ~56 `Default*` constants plus `MaxCorpseCount` (`:68`-`:180`), six explicit backing fields (`:182`-`:196`), roughly 80 public static members, and `Initialize` / `Save` (`:497`, `:588`). The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout keeps the same `Name=Value` reflection format and the same `[ConfigProperty]`-derived attribute design, and `bannerlord-1.5.3` retains the shape. **The `Debug.FailedAssert` messages embed a build-machine path** (`C:\\BuildAgent\\work\\mb3\\Source\\Bannerlord\\TaleWorlds.MountAndBlade\\BannerlordConfig.cs`, `:229`) — a decompilation artifact from the shipped build, not a path on your machine.

## Dependencies

- The native validator both entry points call: [`IMBBannerlordConfig`](../../mission/IMBBannerlordConfig), whose `ValidateOptions` is invoked at `BannerlordConfig.cs:581` and `:605`.
- Persistence plumbing: `Utilities.LoadBannerlordConfigFile()` (`:499`), `Utilities.SaveConfigFile(text)` (`:604`) and `Utilities.GetSystemLanguage()` (`:647`) in `TaleWorlds.Library`.
- Language application: `MBTextManager.LanguageExistsInCurrentConfiguration` / `ChangeLanguage` / `TryChangeVoiceLanguage` (`:219`, `:223`, `:247`, `:251`) and `MBTextManager.LocalizationDebugMode` (`:231`, `:585`).
- Default-language derivation: `LocalizedTextManager.GetLocalizationCodeOfISOLanguageCode` (`:647`) in `TaleWorlds.Localization`.
- Asserts on failed language assignment: `Debug.FailedAssert` (`:229`, `:257`) in `TaleWorlds.Library`.
- The options the engine reads: [`Mission`](../../mission/Mission) and [`Formation`](../../mission/Formation), which size themselves from `GetRealBattleSize*` and `GetReinforcementWaveCount`.
- Client and session options in the same bucket: [`GameNetwork`](../GameNetwork), which owns the transport rather than these presentation settings.
- Bucket index: [mission-ext API](../)

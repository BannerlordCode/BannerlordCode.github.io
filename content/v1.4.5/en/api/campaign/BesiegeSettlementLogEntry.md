---
title: "BesiegeSettlementLogEntry"
description: "Auto-generated class reference for BesiegeSettlementLogEntry."
---
# BesiegeSettlementLogEntry

**Namespace:** TaleWorlds.CampaignSystem.LogEntries
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BesiegeSettlementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/BesiegeSettlementLogEntry.cs`

## Overview

`BesiegeSettlementLogEntry` is the **campaign-journal record of "a settlement began being besieged"**. It is `public class BesiegeSettlementLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog` (`BesiegeSettlementLogEntry.cs:12`) in a 129-line file. The type's whole purpose is to be **one immutable snapshot**, and it implements three separate consumer interfaces at once because the same fact appears in three different places in the UI.

The three interfaces are what make the shape non-obvious. As an [`IEncyclopediaLog`](../IEncyclopediaLog) it appears on the settlement's and hero's encyclopedia pages, gated by `IsVisibleInEncyclopediaPageOf<T>` (`:111`). As an [`IChatNotification`](../IChatNotification) it appears as a chat line, and `IsVisibleNotification` (`:29`) is the hard-coded `=> true` that turns it on unconditionally. As an [`IWarLog`](../IWarLog) it is filtered by war state, and that filter is the most interesting member on the class: `IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)` (`:86`).

All five of its data fields are `readonly` and set once in a two-argument constructor (`:72`-`:79`): `BesiegerHero` (`:15`), `Settlement` (`:18`), `BesiegerFaction` (`:21`), the private `_isBesiegerArmy` (`:24`) and `_ownerClanBeforeBesiege` (`:27`). Each carries a `[SaveableField]` id — 50, 51, 53, 54, 55 (`:14`, `:17`, `:20`, `:23`, `:26`) — **note that 52 is skipped**, which means some earlier version had a field at that id.

## Mental Model

Picture it as **a dated entry in a ship's log, written once and never amended** — except that this entry records the *state before* the event as well as the event itself, because the log outlives the situation it describes. That is what `_ownerClanBeforeBesiege` (`:27`) is for: captured at construction from `settlement.OwnerClan` (`:78`), and exposed as `OwnerClanBeforeBesiege` (`:31`) so that a reader can still show who held the place *before*, even after ownership changes.

The second thing the model has to carry is the **army-versus-party distinction**. `_isBesiegerArmy` is set from `besiegerParty.Army != null` (`:76`) and it selects between **two different encyclopedia strings** (`:122`): `str_army_besieging_news_with_link` when true, `str_party_besieging_news_with_link` when false. A mod that ignores it and hard-codes one string will tell the player an army besieged a castle when in fact a lone war party did.

The boundary that trips people is `IsRelatedToWar`. It is not a simple comparison: it takes a `StanceLink` (`:86`) and writes **two `out` parameters, `effector` and `effected`, unconditionally before it decides anything** (`:90`-`:91`). Then it runs three cases: exact match returns `true` (`:100`); swapped factions return whether the settlement's faction is the other party (`:94`-`:97`); anything else returns `false` (`:98`). **A caller that reads `effector`/`effected` from a call that returned `false` is reading values that were never checked against the stance** — they are simply the entry's own factions.

## How to use

**How to obtain it.** Construct it at the moment the siege starts, from the besieging party and the target. The constructor is `public BesiegeSettlementLogEntry(MobileParty besiegerParty, Settlement settlement)` (`:72`) and it reads everything it needs from those two arguments — there is no other entry point and no factory.

**A typical use.** Recording a siege as the campaign journal does, and rendering the encyclopedia line with the correct army/party wording:

```csharp
using TaleWorlds.CampaignSystem.LogEntries;

BesiegeSettlementLogEntry entry = new BesiegeSettlementLogEntry(besiegerParty, targetSettlement);
entry.ToString();
```

**What to watch out for.** Reading the `out` parameters of `IsRelatedToWar` when it returned `false`. The single most common mistake is writing `if (entry.IsRelatedToWar(stance, out IFactor effector, out IFaction effected)) { ShowWarLog(effector, effected); }` and then also using `effector`/`effected` outside the branch — or, worse, assuming the method mutates them to mean "no relation". The consequence is that a war-log filter for an unrelated stance displays the besieger and the settlement anyway, because the outs were filled at `:90`-`:91` before the first `if`.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BesiegeSettlementLogEntry` (constructor) | `public BesiegeSettlementLogEntry(MobileParty besiegerParty, Settlement settlement)` (`:72`) | The only way to make one. Captures `besiegerParty.Party.Owner` (`:74`), `settlement` (`:75`), `besiegerParty.Army != null` (`:76`), `besiegerParty.MapFaction` (`:77`) and `settlement.OwnerClan` (`:78`). **There is no overload without the army/party distinction** — `_isBesiegerArmy` is decided here and cannot be set afterwards. |
| `BesiegerHero` | `[SaveableField(50)] public readonly Hero BesiegerHero;` (`:14`-`:15`) | The hero who owns the besieging party, **not** necessarily the besieging force's commander. Read-only, so a siege by a vassal's party records the vassal's liege. |
| `Settlement` | `[SaveableField(51)] public readonly Settlement Settlement;` (`:17`-`:18`) | The target. Used by both text methods (`:106`, `:123`) and by the encyclopedia visibility test (`:115`). |
| `BesiegerFaction` | `[SaveableField(53)] public readonly IFaction BesiegerFaction;` (`:20`-`:21`) | Taken from `besiegerParty.MapFaction` (`:77`), so it is the **map** faction, not necessarily the clan's liege faction. Typed as `IFaction`, not `Kingdom`. |
| `_isBesiegerArmy` | `[SaveableField(54)] private readonly bool _isBesiegerArmy;` (`:23`-`:24`) | **Private**, with a generated accessor `AutoGeneratedGetMemberValue_isBesiegerArmy(object)` (`:62`). Its only consumer is the encyclopedia string choice at `:122` — it is not exposed as a property, so external code cannot branch on it without re-deriving `besiegerParty.Army != null`. |
| `_ownerClanBeforeBesiege` | `[SaveableField(55)] private readonly Clan _ownerClanBeforeBesiege;` (`:26`-`:27`) | The pre-siege owner, exposed through `OwnerClanBeforeBesiege` (`:31`). This is the field that makes the entry survive an ownership change. |
| `OwnerClanBeforeBesiege` | `public Clan OwnerClanBeforeBesiege => _ownerClanBeforeBesiege;` (`:31`) | The read-only door onto the pre-siege clan. **Null when the settlement had no clan at the time**, which is the normal case for a royal town. |
| `IsVisibleNotification` | `public bool IsVisibleNotification => true;` (`:29`) | The `IChatNotification` gate, **hard-coded true**. Unlike the encyclopedia gate this is not a filter — every siege produces a chat line, with no way to suppress it from this class. |
| `IsRelatedToWar` | `public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)` (`:86`) | The `IWarLog` filter. Assigns `effector = BesiegerFaction` and `effected = Settlement.MapFaction` **unconditionally** (`:90`-`:91`), then returns `true` on an exact faction pair (`:92`, `:100`), `true` on a swapped pair only if the settlement's faction is the other party (`:94`-`:97`), and `false` otherwise (`:98`). **The outs are meaningless when the return is `false`.** |
| `IsVisibleInEncyclopediaPageOf<T>` | `public bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase` (`:111`) | The `IEncyclopediaLog` gate: true when `obj` is `BesiegerHero` (`:115`) or `Settlement` (`:117`). **The check is `(object)obj != BesiegerHero` then `== Settlement`**, so when a hero and a settlement are both involved the hero branch returns first. |
| `GetNotificationText` | `public TextObject GetNotificationText()` (`:103`) | The chat line: `"{=E20BBKYo}{TOWN_NAME} has been besieged by {FACTION_NAME}."` (`:105`) with both variables bound to `EncyclopediaLinkWithName` (`:106`-`:107`). **This one is always the same wording** — it does *not* vary on `_isBesiegerArmy`, unlike the encyclopedia text. |
| `GetEncyclopediaText` | `public TextObject GetEncyclopediaText()` (`:120`) | The encyclopedia line. **Picks one of two localization keys on `_isBesiegerArmy`** (`:122`), binds the same two variables, and additionally sets a `LORD` variable from `BesiegerHero.CharacterObject` via `StringHelpers.SetCharacterProperties` (`:125`) — so the encyclopedia entry names the lord while the chat line does not. |
| `ToString` | `public override string ToString()` (`:81`) | Returns `GetEncyclopediaText().ToString()` (`:83`). **Logging this type produces the encyclopedia wording, not a debug dump** — a real trap when writing `Debug.Print(entry)`. |
| `AutoGeneratedInstanceCollectObjects` | `protected override void AutoGeneratedInstanceCollectObjects(List<object> collectedObjects)` (`:38`) | Save-system graph collection: adds the base, then `BesiegerHero`, `Settlement`, `BesiegerFaction` and `_ownerClanBeforeBesiege` (`:40`-`:44`). This is what keeps those four objects alive across a save/load. |
| `AutoGeneratedStaticCollectObjectsBesiegeSettlementLogEntry` | `internal static void AutoGeneratedStaticCollectObjectsBesiegeSettlementLogEntry(object o, List<object> collectedObjects)` (`:33`) | The static half of the same registration, called by the generated save machinery. **`internal`** — not a mod API, but it is why the field ids 50/51/53/54/55 must not be renumbered. |
| `AutoGeneratedGetMemberValue*` | five `internal static object AutoGeneratedGetMemberValue…(object o)` at `:47`, `:52`, `:57`, `:62`, `:67` | One per saved field, for the save reader. **`internal`, generated, and named after the backing field** — `_isBesiegerArmy` appears in the method name with its underscore (`:62`) while the others do not. |

## Examples

Record a siege and render the encyclopedia line, which is also what `ToString` gives you:

```csharp
using TaleWorlds.CampaignSystem.LogEntries;

BesiegeSettlementLogEntry entry = new BesiegeSettlementLogEntry(besiegerParty, targetSettlement);
Debug.Print("encyclopedia line: " + entry.GetEncyclopediaText(), 0);
Debug.Print("chat line:        " + entry.GetNotificationText(), 0);
```

Use the `out` parameters only inside a true branch:

```csharp
using TaleWorlds.CampaignSystem.LogEntries;

BesiegeSettlementLogEntry entry = new BesiegeSettlementLogEntry(besiegerParty, targetSettlement);
if (entry.IsRelatedToWar(currentStance, out IFaction effector, out IFaction effected))
{
    Debug.Print("relevant to " + effector + " vs " + effected, 0);
}
// outside the branch, effector/effected are NOT a relation test.
```

Decide whether to show the entry on a given encyclopedia page:

```csharp
using TaleWorlds.CampaignSystem.LogEntries;

BesiegeSettlementLogEntry entry = new BesiegeSettlementLogEntry(besiegerParty, targetSettlement);
Debug.Print("on hero page     = " + entry.IsVisibleInEncyclopediaPageOf(entry.BesiegerHero), 0);
Debug.Print("on settlement page = " + entry.IsVisibleInEncyclopediaPageOf(entry.Settlement), 0);
```

## Risks and crash boundaries

- **`IsRelatedToWar` fills its `out` parameters before deciding.** (`:90`-`:91`) **When it returns `false`, `effector` and `effected` are still the entry's own factions** — using them outside a true branch produces a war-log entry for a stance that has nothing to do with this siege.
- **`ToString()` is not a debug dump.** (`:81`-`:83`) It returns the encyclopedia sentence, so `Debug.Print(entry)` produces localized prose, and the **army/party variant** selected at `:122`.
- **`_isBesiegerArmy` is private with no public property.** (`:24`) External code cannot branch on it except by re-deriving `besiegerParty.Army != null`, which is a different party and may disagree after the fact.
- **The two text methods disagree in content.** `GetNotificationText` (`:103`) is one fixed string; `GetEncyclopediaText` (`:120`) is one of two strings **and** adds a `LORD` variable (`:125`). Assuming they are interchangeable loses both the army/party distinction and the lord's name.
- **`OwnerClanBeforeBesiege` can be null.** It is captured from `settlement.OwnerClan` (`:78`), which is null for a crown-held settlement. A mod formatting it must null-check.
- **`BesiegerFaction` is the *map* faction** (`:77`), not the clan's liege faction, so it will not match a `StanceLink` built from `Kingdom` objects.
- **`IsVisibleNotification` is unconditionally `true`** (`:29`) with no override hook — every siege writes a chat line.
- **`BesiegerHero` is the party owner, not the siege leader** (`:74`). Reading it as "who is attacking" gives the liege when a vassal attacks.
- **`SaveableField` ids skip 52.** 50, 51, 53, 54, 55 are used (`:14`, `:17`, `:20`, `:23`, `:26`). **Renumbering any of them breaks save compatibility**, and the gap means an id was retired rather than never used.
- **Five fields are `readonly`.** (`:15`, `:18`, `:21`, `:24`, `:27`) There is no way to correct a mis-recorded siege except by discarding the entry.
- **Not enumerable.** The class exposes no list of entries; journal traversal is the campaign log manager's job.

## Cross-Version Notes

The v1.4.5 file is 129 lines with five `[SaveableField]`-annotated fields, one two-argument constructor and three interface implementations. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/` layout keeps the same shape, and `bannerlord-1.5.3` retains it. **`SaveableField` ids are the cross-version risk**: they are positional and shared with the rest of the log-entry family, so any reordering in a later build silently re-points saved data at the wrong field.

## Dependencies

- Base class: [`LogEntry`](../LogEntry) in `TaleWorlds.CampaignSystem`, whose `AutoGeneratedInstanceCollectObjects` this type extends at `:38`.
- The three consumer interfaces, which decide where the entry appears: [`IEncyclopediaLog`](../IEncyclopediaLog) (`:111`), [`IChatNotification`](../IChatNotification) (`:29`, `:103`) and [`IWarLog`](../IWarLog) (`:86`).
- Recorded participants: [`Hero`](../Hero) (`:74`), [`Settlement`](../Settlement) (`:75`, `:78`), [`Clan`](../Clan) (`:31`, `:78`) and [`MobileParty`](../MobileParty) (`:72`, `:76`, `:77`).
- The army distinction: [`Army`](../Army), tested only as `besiegerParty.Army != null` (`:76`).
- Faction typing: [`IFaction`](../IFaction), and the concrete [`Army`](../Army)/`Kingdom` implementations it can hold.
- The war-state filter input: [`StanceLink`](../StanceLink), supplying `Faction1` and `Faction2` (`:88`-`:89`).
- Localization: `GameTexts.FindText` (`:122`) and `StringHelpers.SetCharacterProperties` (`:125`), both from `TaleWorlds.Core` / `Helpers`.
- Save system: `TaleWorlds.SaveSystem`, which drives the generated collect/get members at `:33`-`:70`.
- Bucket index: [campaign API](../)
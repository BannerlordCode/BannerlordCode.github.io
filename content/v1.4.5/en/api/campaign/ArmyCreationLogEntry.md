---
title: "ArmyCreationLogEntry"
description: "Log entry recording that a lord raised an army, fanned out to three consumers at once: campaign log, encyclopedia page, and war log."
---

# ArmyCreationLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyCreationLogEntry : LogEntry, IEncyclopediaLog, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyCreationLogEntry.cs`

## Overview

`ArmyCreationLogEntry` records the single fact "so-and-so raised an army", and by implementing `IEncyclopediaLog` and `IWarLog` at the same time it makes **one record** readable by three unrelated consumers: the campaign log list, a character's encyclopedia event feed, and the war log filtered by [StanceLink](../StanceLink).

It stores exactly one thing: `[SaveableField(20)] private readonly CharacterObject _armyLeader`, snapshotted in the constructor from `army.LeaderParty.LeaderHero.CharacterObject`. Note it stores a `CharacterObject`, not a [Hero](../Hero) — the encyclopedia visibility check dereferences `_armyLeader.HeroObject` to get back to the hero. The text is the hard-coded `new TextObject("{=aXhPvVud}{HERO.LINK} created an army.")`: no GameText key to override, and no `IsVisibleNotification` — it does **not** feed the chat bar (compare [ArmyDispersionLogEntry](../ArmyDispersionLogEntry), which implements `IChatNotification`).

## Mental Model

Treat it as **a finished, immutable record**: the constructor explodes the `Army` into a `CharacterObject` snapshot, and every method afterwards derives text and visibility from that snapshot rather than re-reading the `Army`. Three consequences:

1. **Construct it before the army disperses.** The only call site is `DefaultLogsCampaignBehavior.OnArmyCreated` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/DefaultLogsCampaignBehavior.cs:119`):

   ```csharp
   ArmyCreationLogEntry armyCreationLogEntry = new ArmyCreationLogEntry(army);
   LogEntry.AddLogEntry(armyCreationLogEntry);
   if (army.LeaderParty.MapFaction == MobileParty.MainParty.MapFaction && army.LeaderParty != MobileParty.MainParty)
   {
       Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(new ArmyCreationMapNotification(army, armyCreationLogEntry.GetEncyclopediaText()));
   }
   ```

   Notice the map notice reuses `armyCreationLogEntry.GetEncyclopediaText()` — the **same text object** feeds both the log and the popup. That reuse is the point of the design.

2. **`GetEncyclopediaText()` allocates a fresh `TextObject` per call.** It is not a cached field; each invocation does `new` and then `StringHelpers.SetCharacterProperties("HERO", _armyLeader, textObject)`. If you need the same instance twice, store it yourself.

3. **War-log filtering is single-sided faction matching.** `IsRelatedToWar(stance, out effector, out effected)` takes `stance.Faction1` / `stance.Faction2`, sets `effector` to the leader's `MapFaction`, leaves `effected` at `null`, then returns `leaderFaction == faction2` if it differs from `faction1`, otherwise `true`. In other words **the entry counts as "related to this war" as soon as the leader belongs to either side of the StanceLink** — it never asks whether the army actually fought. `effected` is always null, so callers must null-check it.

Expiry comes from `KeepInHistoryTime => CampaignTime.Days(7f)`, which is identical to the `LogEntry` base default, so this override is an explicit restatement rather than special configuration.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `_armyLeader` | `[SaveableField(20)] private readonly CharacterObject _armyLeader` | The only saved field. Snapshots `army.LeaderParty.LeaderHero.CharacterObject` at construction. Storing a `CharacterObject` rather than a `Hero` lets the same value drive both the encyclopedia link text and the `HeroObject` reverse lookup in `IsVisibleInEncyclopediaPageOf`. **`readonly`, constructor-assigned, no setter.** |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime => CampaignTime.Days(7f)` | How long the entry stays in the history list. The value equals the `LogEntry` base default, so it is redundant by design; extend it by deriving and overriding, since the base property is `virtual`. |
| `ToString` | `public override string ToString()` | Returns `GetEncyclopediaText().ToString()`. This is the family's convention — debug prints and some UI fallbacks go through it, so the `{HERO.LINK}` variable must already be populated or you get a fragment. |
| `IsRelatedToWar` | `public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)` | The `IWarLog` implementation. `effector` = leader's `MapFaction`, `effected` always null; the verdict only asks whether the leader's faction equals `stance.Faction1` or `stance.Faction2`. **It does not consult army participation or `IsAtWarWith`.** |
| `IsVisibleInEncyclopediaPageOf<T>` | `public bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase` | Encyclopedia ownership test: `(object)obj == _armyLeader.HeroObject`. **It dereferences `HeroObject` on every call**, so a snapshot whose `CharacterObject` is no longer hero-backed would NRE — which does not happen in a normal save. |
| `GetEncyclopediaText` | `public TextObject GetEncyclopediaText()` | Builds `"{HERO.LINK} created an army."`. A new `TextObject` per call with the `HERO` variable filled in. **No `includeReason`-style branching and no GameText override hook.** |

## Examples

Write the log and the map notice in the same frame as army creation — the only official shape:

```csharp
ArmyCreationLogEntry entry = new ArmyCreationLogEntry(army);
LogEntry.AddLogEntry(entry);
if (army.LeaderParty.MapFaction == MobileParty.MainParty.MapFaction && army.LeaderParty != MobileParty.MainParty)
{
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new ArmyCreationMapNotification(army, entry.GetEncyclopediaText()));
}
```

Query the army-creation records related to a given war — `GetLogsForWar` lives on [DiplomacyHelper](../../system/DiplomacyHelper), not on [LogEntry](../LogEntry):

```csharp
foreach ((LogEntry entry, IFaction effector, IFaction effected) in DiplomacyHelper.GetLogsForWar(stance))
{
    if (entry is ArmyCreationLogEntry)
    {
        Debug.Print(entry.ToString() + " effector=" + effector.Name + " effected=" + (effected == null ? "null" : effected.Name), 0);
    }
}
```

Find which army-creation records show up on a hero's encyclopedia page — the page walks `Campaign.Current.LogEntryHistory.GameActionLogs`:

```csharp
MBReadOnlyList<LogEntry> logs = Campaign.Current.LogEntryHistory.GameActionLogs;
foreach (LogEntry entry in logs)
{
    if (entry is ArmyCreationLogEntry armyLog && armyLog.IsVisibleInEncyclopediaPageOf(Hero.MainHero))
    {
        Debug.Print("at " + armyLog.GameTime + ": " + armyLog.GetEncyclopediaText(), 0);
    }
}
```

## Risks and crash boundaries

- **The constructor dereferences three levels.** `army.LeaderParty` → `.LeaderHero` → `.CharacterObject`. Passing an [Army](../Army) whose `LeaderParty` is null (or a leader with null `LeaderHero`, such as a leaderless gathering) NREs immediately; there is no guard branch.
- **Snapshot, not a live view.** If the leader's [Clan](../Clan) or `MapFaction` changes later, `_armyLeader` does not follow. `IsRelatedToWar` re-reads `_armyLeader.HeroObject.MapFaction` on each call, so **the filter result drifts over time while the text stays put**.
- **`effected` is always null.** `IsRelatedToWar` hard-writes `effected = null`; any caller that dereferences it without a null check will crash.
- **`IsVisibleInEncyclopediaPageOf` dereferences `HeroObject`.** A snapshot pointing at a non-hero `CharacterObject` (which should not occur) would NRE.
- **No `IChatNotification`.** There is no `IsVisibleNotification` and no `NotificationType` override, so the chat bar never fires for this entry. Use the [ArmyDispersionLogEntry](../ArmyDispersionLogEntry) route if you need chat notification control.
- **`GetEncyclopediaText()` allocates per call.** Calling it in a loop produces many short-lived `TextObject` instances; do not rely on reference equality.
- **No GameText override point.** The translation key `{=aXhPvVud}` is baked into the method body; a mod wanting different wording has to derive and reimplement.
- **The 7-day lifetime is fixed by the override.** Changing it requires deriving — `KeepInHistoryTime` is `virtual` on the base — and note that entries already in a save are aged against the new value.
- **It is serialized.** `[SaveableField(20)]` plus `AutoGeneratedInstanceCollectObjects` collects `_armyLeader`; on load it is rebuilt by `SaveableCampaignTypeDefiner` and `AutoGeneratedSaveManager`. If you add fields, keep the SaveManager id mapping in sync.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyCreationLogEntry.cs` is 66 lines with 6 public members (including the two interface implementations) and `SaveableField` id 20. The 1.4.6 file of the same name exposes an identical public surface; 1.3.15 has no file of that name, so army-creation logging is a comparatively recent entry type.

## Dependencies

- Base: [LogEntry](../LogEntry) supplies `Id` / `GameTime` / `KeepInHistoryTime` / `NotificationType` plus the `MilitaryNotification` / `DiplomaticNotification` `ChatNotificationType` helpers.
- Interfaces: [IEncyclopediaLog](../IEncyclopediaLog) for the encyclopedia feed and [IWarLog](../IWarLog) for the [StanceLink](../StanceLink)-filtered war log.
- Sole construction site: [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior).OnArmyCreated, which also hands `GetEncyclopediaText()` to [ArmyCreationMapNotification](../ArmyCreationMapNotification).
- Data source: [Army](../Army).LeaderParty, then [MobileParty](../MobileParty).LeaderHero, then [CharacterObject](../CharacterObject).
- Filtering: [StanceLink](../StanceLink) provides `Faction1` / `Faction2`; [IFaction](../IFaction) carries `IsEliminated` / `IsAtWarWith` for sibling predicates.
- Archival: the static `AddLogEntry` on [LogEntry](../LogEntry) funnels into `Campaign.Current.LogEntryHistory.AddActionLog` and the `LogEntryHistory.GameActionLogs` list; [DiplomacyHelper](../../system/DiplomacyHelper).GetLogsForWar and `EncyclopediaHeroPageVM` are the two read paths. Save registration lives in `SaveableCampaignTypeDefiner` and `AutoGeneratedSaveManager`.
- Text variable: [StringHelpers](../../system/StringHelpers).SetCharacterProperties binds `{HERO.LINK}` to the character.

---
title: "ArmyDispersionLogEntry"
description: "Log entry recording why an army disbanded, fanned out to encyclopedia, chat bar and war log, with per-reason wording."
---

# ArmyDispersionLogEntry

**Namespace:** `TaleWorlds.CampaignSystem.LogEntries`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArmyDispersionLogEntry : LogEntry, IEncyclopediaLog, IChatNotification, IWarLog`
**Base:** `LogEntry`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyDispersionLogEntry.cs`

## Overview

`ArmyDispersionLogEntry` is the full record of "why did that army fall apart". Compared with [ArmyCreationLogEntry](../ArmyCreationLogEntry) it implements **four** members (one more: `IChatNotification`), stores **four** fields, and its real value is the `DispersionReason` `switch` inside `GetEncyclopediaText()` — every reason that gets explicit wording gets its own sentence, from "disbanded since cohesion has been depleted" to "they no longer have any ships to carry the men, and the survivors are heading to shore on makeshift rafts".

It is also the text source for [ArmyDispersionMapNotification](../ArmyDispersionMapNotification); the official call site feeds one `GetEncyclopediaText()` result into both the log and the map notice.

One easily miscounted detail: `Army.ArmyDispersionReason` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Army.cs:31`) has **16** members in 1.4.5, but `GetEncyclopediaText()` only writes **12 explicit cases** (`Unknown` shares its wording with the `_` fallback). `FoodProblem`, `NotEnoughTroop`, `NoActiveWar` and `Inactivity` have no dedicated sentence and fall through to "has been disbanded".

## Mental Model

Like `ArmyCreationLogEntry` this is an **immutable record that stops changing after construction**, but the centre of gravity shifts to visibility:

1. **The constructor decides whether it ever bothers the player.** The decisive field among the four is `_isVisibleNotification`:

   ```csharp
   _isVisibleNotification = army.LeaderParty.MapFaction == Hero.MainHero.MapFaction && army.Parties.IndexOf(MobileParty.MainParty) >= 0;
   ```

   **Both conditions are required**: the army leader shares the player's `MapFaction`, **and** the player's main party is actually inside `army.Parties`. The second matters more than it looks — a bystander from the same faction whose army is gathering next door gets `IndexOf == -1`, so the chat bar stays silent. The map notice uses a **different** condition (see below); the two do not overlap.

2. **`NotificationType` goes down the diplomatic channel, not the military one.** `=> DiplomaticNotification(_armyLeader.HeroObject?.Clan ?? null, null)`. Note the `?.`: `HeroObject` may be null and `Clan` may be null. `DiplomaticNotification(IFaction, IFaction)` only tests `faction1 == Clan.PlayerClan || faction2 == Clan.PlayerClan`, and the second argument is always null, so in practice it asks "is the leader's clan the player's clan?". Contrast [ArmyCreationLogEntry](../ArmyCreationLogEntry), which never overrides `NotificationType` and therefore uses the base default `ChatNotificationType.Default`.

3. **The wording table covers 12 of the 16 enum values.** Each gets its own sentence; the remaining four land on `_`. `Unknown` and `_` share `"{=5CJOMH90}{ARMY} has been disbanded."`. The `{ARMY}` slot is not a bare name: it first builds `"{=nbmctMLk}{LEADER_NAME}{.o} Army"`, calls `SetTextVariable("LEADER_NAME", _armyLeader.Name)`, then substitutes the whole thing into `{ARMY}` — **that nesting is how the encyclopedia link is made clickable**.

4. **War-log filtering is structurally identical to the creation entry.** `IsRelatedToWar` is character-for-character the same as `ArmyCreationLogEntry`'s: it only asks whether the leader's `MapFaction` equals `stance.Faction1` or `Faction2`, and leaves `effected` null.

## How to use

**How to obtain it.** **You construct it and add it.** Use `new ArmyDispersionLogEntry(...)` followed by `LogEntry.AddLogEntry(...)`; it also satisfies `IChatNotification` and `IEncyclopediaLog`, so the same object feeds the encyclopedia and the chat feed.

```csharp
ArmyDispersionLogEntry entry = new ArmyDispersionLogEntry(army);
LogEntry.AddLogEntry(entry);
Debug.Print("log entry added, encyclopedia = " + entry.GetEncyclopediaText(), 0);
```

**The most common pitfall.** **`NotificationType` can NRE.** It reads `_armyLeader.HeroObject?.Clan`, so the `?.` protects only what follows `HeroObject` — a **null `_armyLeader` throws immediately**.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `DispersionReason` | `[SaveableField(30)] public readonly Army.ArmyDispersionReason DispersionReason` | Why the army broke up. A **public readonly field**, not a property. It is the discriminant of the `switch` in `GetEncyclopediaText()` and the main thing a mod reads off the log. [ArmyDispersionMapNotification](../ArmyDispersionMapNotification) stores the same value as `SaveableProperty(2)` and pairs it with the enum compatibility resolver. |
| `_isVisibleNotification` | `[SaveableField(32)] private readonly bool _isVisibleNotification` | Computed once at construction: leader shares the player's `MapFaction` **and** the main party is in `army.Parties`. **Read-only and never re-evaluated** — joining or leaving the army afterwards does not change it. |
| `_armyLeader` | `[SaveableField(33)] private readonly CharacterObject _armyLeader` | Snapshots `army.ArmyOwner.CharacterObject`. Note the creation entry stores `LeaderParty.LeaderHero.CharacterObject` while this one stores **`ArmyOwner`** — usually the same person, but a different concept: `ArmyOwner` is the clan leader who owns the army. |
| `_encyclopediaLinkWithName` | `[SaveableField(34)] private readonly TextObject _encyclopediaLinkWithName` | Snapshots `army.EncyclopediaLinkWithName`. **It is saved and collected in `AutoGeneratedInstanceCollectObjects`, yet no method on this type reads it** — it is a reserved field, only useful in a derived class you write yourself. |
| `IsVisibleNotification` | `public bool IsVisibleNotification => _isVisibleNotification` | The `IChatNotification` visibility gate; a straight forward to the field. |
| `NotificationType` | `public override ChatNotificationType NotificationType => DiplomaticNotification(_armyLeader.HeroObject?.Clan ?? null, null)` | Overrides the base `Default`. The `?.` guards what comes **after** `HeroObject`; **`_armyLeader` itself being null NREs** — see the risk section. |
| `KeepInHistoryTime` | `public override CampaignTime KeepInHistoryTime => CampaignTime.Days(7f)` | Seven days, identical to the base default, so this override is redundant by design. |
| `ToString` | `public override string ToString()` | Returns `GetEncyclopediaText().ToString()`. Every call allocates the whole two-level text tree including the inner `{LEADER_NAME}` object, which is expensive inside a UI list loop. |
| `IsRelatedToWar` | `public bool IsRelatedToWar(StanceLink stance, out IFaction effector, out IFaction effected)` | `effector` = leader's `MapFaction`, `effected` always null; the verdict only compares against `Faction1` / `Faction2`. **Character-for-character identical to `ArmyCreationLogEntry`'s**, and equally blind to whether the army actually fought. |
| `GetNotificationText` | `public TextObject GetNotificationText()` | `return GetEncyclopediaText()` directly. The chat bar and the encyclopedia share one sentence with no shortening. |
| `IsVisibleInEncyclopediaPageOf<T>` | `public bool IsVisibleInEncyclopediaPageOf<T>(T obj) where T : MBObjectBase` | **The only one of the three that null-checks**: `if (_armyLeader != null) return (object)obj == _armyLeader.HeroObject;` otherwise false. |
| `GetEncyclopediaText` | `public TextObject GetEncyclopediaText()` | A 12-branch `switch` producing the reason sentence, then wrapped in a `"{LEADER_NAME}{.o} Army"` object substituted into `{ARMY}`. **The heaviest member in the type**, and the object officially handed to the map notice. |

## Examples

The only official construction shape, copied from [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior).OnArmyDispersed:

```csharp
ArmyDispersionLogEntry entry = new ArmyDispersionLogEntry(army, reason);
LogEntry.AddLogEntry(entry);
if (army.LeaderParty.MapFaction == Hero.MainHero.MapFaction && army.Parties.IndexOf(MobileParty.MainParty) < 0)
{
    Campaign.Current.CampaignInformationManager.NewMapNoticeAdded(
        new ArmyDispersionMapNotification(army, reason, entry.GetEncyclopediaText()));
}
```

Enumerate the dispersions the player personally witnessed, grouped by reason — enumerate through `LogEntryHistory`, **not** a static method on `LogEntry`:

```csharp
foreach (LogEntry log in Campaign.Current.LogEntryHistory.GameActionLogs)
{
    if (log is ArmyDispersionLogEntry dispersion && dispersion.IsVisibleNotification)
    {
        Debug.Print(dispersion.GameTime + " reason=" + dispersion.DispersionReason + " text=" + dispersion.GetEncyclopediaText(), 0);
    }
}
```

Filter dispersion records by war — `GetLogsForWar` lives on [DiplomacyHelper](../../system/DiplomacyHelper):

```csharp
foreach ((LogEntry entry, IFaction effector, IFaction effected) in DiplomacyHelper.GetLogsForWar(stance))
{
    if (entry is ArmyDispersionLogEntry dispersion)
    {
        Debug.Print(dispersion.ToString() + " effector=" + effector.Name + " effected=" + (effected == null ? "null" : effected.Name), 0);
    }
}
```

## Risks and crash boundaries

- **`NotificationType` can NRE.** It reads `_armyLeader.HeroObject?.Clan`; the `?.` protects only what follows `HeroObject`, so a **null `_armyLeader` throws immediately**. Notably `IsVisibleInEncyclopediaPageOf` in the same type *does* check `_armyLeader != null` — the two methods disagree about the same field's nullability, which tells you the author assumed it non-null without guarding it. The constructor produces a null snapshot whenever `army.ArmyOwner` is null.
- **`_isVisibleNotification` is a snapshot.** If the player joins the army after the log was written, `IsVisibleNotification` stays false, and vice versa.
- **`effected` is always null.** Same as `ArmyCreationLogEntry`.
- **`_encyclopediaLinkWithName` is saved but never read.** It enters the save graph and object collection yet no method here touches it; do not expect it to hand you an army name.
- **`ToString()` and `GetNotificationText()` allocate two `TextObject`s per call.** The inner `"{LEADER_NAME}{.o} Army"` and the outer 12-branch result are both fresh objects. Calling them per row in a UI list is not free.
- **The `switch` covers 12 of 16 enum values; the rest share the `Unknown` key `{=5CJOMH90}`.** Completing the table means overriding the whole method, not appending a branch.
- **Save ids skip a number.** The field ids are 30, 32, 33 and 34 — **31 is unused**. Do not fill 31 when you add a field.
- **The constructor dereferences two levels.** `army.ArmyOwner` → `.CharacterObject`, plus `army.EncyclopediaLinkWithName` on the same level. A null `army` NREs with no validation.
- **Chat bar and map notice use mutually exclusive conditions.** Chat requires the player *in* the army (`IndexOf >= 0`); the map notice requires the player *out* of it (`IndexOf < 0`) and sharing the `MapFaction`. They are not the same test.
- **The 7-day lifetime is fixed by the override.** Like the creation entry it is redundant; changing it requires deriving.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/ArmyDispersionLogEntry.cs` is 124 lines with 12 public members and `SaveableField` ids 30/32/33/34 (31 unused). The 1.4.6 file of the same name exposes an identical public surface; 1.3.15 has no file of that name.

Because renaming or adding an `Army.ArmyDispersionReason` member would silently drop that value into the `_` fallback, 1.4.5 also ships [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver) to migrate old saves (`"LowPartySizeRatio"` → `NotEnoughTroop`).

## Dependencies

- Base: [LogEntry](../LogEntry) supplies `Id` / `GameTime` / `KeepInHistoryTime` / the default `NotificationType`, plus the `DiplomaticNotification` and `MilitaryNotification` `ChatNotificationType` helpers.
- Interfaces: [IEncyclopediaLog](../IEncyclopediaLog), [IChatNotification](../IChatNotification) and [IWarLog](../IWarLog) — three outlets.
- Sole construction site: [DefaultLogsCampaignBehavior](../DefaultLogsCampaignBehavior).OnArmyDispersed at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/DefaultLogsCampaignBehavior.cs:100`, which also hands `GetEncyclopediaText()` to [ArmyDispersionMapNotification](../ArmyDispersionMapNotification).
- Reason enum: [Army](../Army).ArmyDispersionReason (16 members) is the discriminant behind the 12 branches.
- Data source: [Army](../Army).ArmyOwner / LeaderParty / Parties / EncyclopediaLinkWithName, through [MobileParty](../MobileParty) and [Hero](../Hero) to [CharacterObject](../CharacterObject).
- Save migration: [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver), mounted at `SaveableCampaignTypeDefiner.AddEnumDefinition(typeof(Army.ArmyDispersionReason), 2023, new ArmyDispersionReasonEnumResolver())`.
- Read paths: [DiplomacyHelper](../../system/DiplomacyHelper).GetLogsForWar for the war log, and `Campaign.Current.LogEntryHistory.GameActionLogs` for the encyclopedia and achievements.

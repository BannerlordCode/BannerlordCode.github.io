---
title: "ActionNotes"
description: "Reason-code enum: 28 members tagging what the player just did, consumed by log entries and companion comments, and serialized under save id 2030."
---

# ActionNotes

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public enum ActionNotes`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ActionNotes.cs`

## Overview

`ActionNotes` is a **plain enum, 28 members, zero members in the body**. Its only job is to tag "the player just did something that moves reputation" with a serializable classification, so downstream code can look it up.

Two consumers determine its entire shape:

- [PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry) stores `_note` as `[SaveableField(412)]` and uses it in `GetConversationScoreAndComment` to decide what a companion says (`QuestSuccess` / `QuestBetrayal` / `PartyTakenCareOf` each have a dedicated line).
- [CharacterInsultedLogEntry](../CharacterInsultedLogEntry) stores `_gameActionNote`, and its `GetEncyclopediaText()` has 12 `case` arms with individual GameTexts; **everything else falls through** to `str_game_action_note` + `_gameActionNote.ToString()`.

In other words: **the enum member name is itself part of the final wording**, because `ToString()` goes straight into a text variable. Renaming a member changes what the encyclopedia page displays.

## Mental Model

Treat it as **a reason-code table**: writing a log forces you to pick an `ActionNotes`, which then decides how the entry renders and who comments on it. Four things to hold on to:

1. **It is serialized, under a dedicated id.** One line in `SaveableCampaignTypeDefiner.cs:316`: `AddEnumDefinition(typeof(ActionNotes), 2030);` — **enum id 2030, no resolver** (compare `Army.ArmyDispersionReason` at 2023, which does carry an [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver)). No resolver means 1.4.5 asserts these names have never been renamed, and renaming them silently corrupts log text in old saves.

2. **The 28 members are grouped by event type, not by moral valence.** Roughly: twelve `*Quarrel` values (each individually worded by `CharacterInsultedLogEntry`), three `Quest*` values, `BattleValor` / `HostileAction` / `SacrificedTroops`, `PartyHungry` / `PartyTakenCareOf`, `VillageRaid` / `NPCFreed`, plus the two neutral `NoQuarrel` and `DefaultNote`.

3. **There is exactly one write path, and it has a threshold.** `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry` (`Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitLevelingHelper.cs:158`):

   ```csharp
   if (TaleWorlds.Library.MathF.Abs(xpValue) >= 10)
   {
       LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(trait, referenceHero, context));
   }
   ```

   **Reputation swings below 10 XP write no log at all**, so no `ActionNotes` is recorded. "This note never showed up in the log" may simply mean the XP was too small, not that the event did not happen.

4. **Who passes a note decides who reads it.** The same `ActionNotes` value means different things under different `LogEntry` subclasses. `ActionNotes.DishonestBusinessQuarrel` is written from two places: `TraitLevelingHelper.OnAllianceBrokenThroughHostility()` with `-1000` Honor ("dishonest business"), while `BackstoryCampaignBehavior` writes `VengeanceQuarrel` for backstory logs. **The same value in a different caller carries a different meaning.**

A third trap deserves its own line: **there is no `Invalid` / `Unknown` sentinel**. `DefaultNote` (value 0) is a real "generic event" semantic, not "unset". So a `[SaveableField(412)] private readonly ActionNotes _note` read as 0 from an old save cannot be distinguished from "this field was never written".

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `DefaultNote` | `DefaultNote = 0` | The generic fallback. `TraitLevelingHelper.OnIncidentResolved(trait, xpValue)` hard-codes it (passing `referenceHero: Hero.MainHero`). Also the default when read from a save — **with no separate "unset" sentinel you cannot tell an explicit value from a missing field.** |
| `NoQuarrel` | `NoQuarrel = 1` | The one non-`*Quarrel` "no quarrel" marker. **No write site anywhere in the tree**, so it is a reserved semantic slot for mods and scripted scenarios. |
| `CourtshipQuarrel` … `FiefQuarrel` | twelve `*Quarrel` members | Each is given its own GameText by the `switch` in `CharacterInsultedLogEntry.GetEncyclopediaText()` starting at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.LogEntries/CharacterInsultedLogEntry.cs:147` (`str_insult_news_courtship`, `str_insult_news_vengeance`, and so on). Every quarrel value outside that dozen falls to the generic `"{=v7sfiv5m}{INSULT_NEWS} {GAME_ACTION_NOTES}"`. |
| `QuestBetrayal` / `QuestSuccess` / `QuestFailed` | the three quest members | `QuestSuccess` and `QuestBetrayal` each have a dedicated companion comment in `PlayerReputationChangesLogEntry.GetConversationScoreAndComment` (`str_comment_companion_on_honor_for_quest_success` / `..._betrayal`, `ImportanceEnum.SomewhatImportant`). `QuestFailed` has no dedicated comment and takes the generic path. |
| `PartyTakenCareOf` / `PartyHungry` | the two party-attitude members | `PartyTakenCareOf` triggers `str_comment_companion_on_generosity_for_party_morale` (a companion praising your generosity); `PartyHungry` only moves Generosity by 20 points and **has no dedicated comment**. |
| `VillageRaid` / `NPCFreed` | the two acts-against-civilians members | `VillageRaid` books Mercy `-30`; `NPCFreed` books Calculating `+20`. Neither has a dedicated companion comment. |
| `BattleValor` / `HostileAction` / `SacrificedTroops` | the three combat members | Numeric effects: `BattleValor` grants Valor XP, `HostileAction` moves both Honor and Mercy, `SacrificedTroops` applies Valor `-30` or Honor `-1000` depending on context. **No dedicated comments.** |
| Enum save registration | `AddEnumDefinition(typeof(ActionNotes), 2030)` | In `SaveableCampaignTypeDefiner` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:316`. **The omitted third parameter means no `IEnumResolver`** — the engine is asserting these names have not changed. |

## Examples

The official write path, copied from `TraitLevelingHelper.AddPlayerTraitXPAndLogEntry` (mind the XP threshold):

```csharp
int traitLevel = Hero.MainHero.GetTraitLevel(trait);
AddTraitXp(trait, xpValue);
if (traitLevel != Hero.MainHero.GetTraitLevel(trait))
{
    CampaignEventDispatcher.Instance.OnPlayerTraitChanged(trait, traitLevel);
}
if (MathF.Abs(xpValue) >= 10)
{
    LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(trait, referenceHero, ActionNotes.HostileAction));
}
```

Write your own reputation log — the correct shape when a mod introduces a new event:

```csharp
int xp = 25;
LogEntry.AddLogEntry(new PlayerReputationChangesLogEntry(
    DefaultTraits.Honor, Hero.MainHero.CharacterObject.HeroObject, ActionNotes.QuestSuccess));
Debug.Print("logged note=" + ActionNotes.QuestSuccess + " xp=" + xp, 0);
```

Write a quarrel log so the encyclopedia picks up the dedicated wording:

```csharp
Hero insultee = Hero.MainHero;
Hero insulter = Hero.AllAliveHeroes.First((Hero h) => h != Hero.MainHero && h.IsLord);
CharacterObject overWhat = insulter.CharacterObject;
LogEntry.AddLogEntry(new CharacterInsultedLogEntry(insultee, insulter, overWhat, ActionNotes.VengeanceQuarrel));
```

## Risks and crash boundaries

- **The enum name is part of the displayed text.** The fallback in `CharacterInsultedLogEntry.GetEncyclopediaText()` runs `SetTextVariable("GAME_ACTION_NOTES", GameTexts.FindText("str_game_action_note", _gameActionNote.ToString()))`. **Renaming is renaming what players read on the encyclopedia page**, and the `str_game_action_note` translation table only knows the old names.
- **Save id 2030 carries no resolver.** Unlike `Army.ArmyDispersionReason` (2023, with [ArmyDispersionReasonEnumResolver](../ArmyDispersionReasonEnumResolver)), `ActionNotes` has no rename compatibility layer. **Renaming a member silently corrupts log text in old saves** — no crash, just a bare English identifier or a missing translation.
- **Only twelve quarrel values have dedicated wording.** The `switch` in `CharacterInsultedLogEntry` covers twelve `*Quarrel` cases. `CorruptGangLeaderQuarrel` and `CompetingGangLeaderQuarrel` have **no GameText** and fall to the generic line.
- **|XP| below 10 writes no log.** The threshold in `AddPlayerTraitXPAndLogEntry` means small reputation changes leave no note at all. Counting note frequencies under-reports minor events.
- **No `Invalid` sentinel.** `DefaultNote = 0` doubles as "generic event" and "default value"; a 0 read from a save cannot be told apart from an unwritten field.
- **`NoQuarrel` has no write site.** It exists in the enum but nothing constructs it; it is a placeholder.
- **The same value means different things per log entry.** Reading a log correctly requires the entry type *and* the note; the note alone misleads.
- **You cannot trace a note back to its origin.** The enum records no "who wrote it" or "because of what". For provenance you must read `PlayerReputationChangesLogEntry._trait` and `_referenceHero`.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/ActionNotes.cs` is 33 lines with **28 enum members and zero methods**. Member-by-member comparison against the 1.4.6 and 1.3.15 files of the same name shows an identical public surface — no additions, no removals, no reordering. **Order is value, so inserting a new member shifts every later value; append instead.**

On the save side, 1.4.5 registers `AddEnumDefinition(typeof(ActionNotes), 2030)` with no resolver, matching 1.4.6.

## Dependencies

- Producer: [TraitLevelingHelper](../TraitLevelingHelper).AddPlayerTraitXPAndLogEntry at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterDevelopment/TraitLevelingHelper.cs:158` is the only entry point that writes `PlayerReputationChangesLogEntry`; `BackstoryCampaignBehavior` writes `CharacterInsultedLogEntry` directly with `ActionNotes.ValorStrategyQuarrel` / `VengeanceQuarrel`.
- Consumer one: [PlayerReputationChangesLogEntry](../PlayerReputationChangesLogEntry)._note (`[SaveableField(412)]`), which drives companion comments in `GetConversationScoreAndComment`.
- Consumer two: [CharacterInsultedLogEntry](../CharacterInsultedLogEntry)._gameActionNote (`[SaveableField(113)]`), with its 12-arm switch plus generic fallback in `GetEncyclopediaText()`.
- Numeric source: [DefaultTraits](../DefaultTraits) (Valor / Honor / Mercy / Generosity / Calculating) and [Hero](../Hero).SetTraitLevel / GetTraitLevel.
- The enum's own home: the flat `TaleWorlds.CampaignSystem` root namespace — one of the few campaign-bucket types with no sub-namespace.
- Save registration: `AddEnumDefinition(typeof(ActionNotes), 2030)` in `SaveableCampaignTypeDefiner` at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/SaveableCampaignTypeDefiner.cs:316`.
- Text: [StringHelpers](../../system/StringHelpers) and [GameTexts](../../core-extra/GameTexts) provide the `str_game_action_note` lookups.

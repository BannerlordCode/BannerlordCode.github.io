---
title: "AntiEmpireConspiracyBeginsSceneNotificationItem"
description: "Anti-empire conspiracy cutscene notice: overrides only TitleText, filling faction names, formal date and year into the shared empire-conspiracy GameText."
---

# AntiEmpireConspiracyBeginsSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AntiEmpireConspiracyBeginsSceneNotificationItem : EmpireConspiracySupportsSceneNotificationItemBase`
**Base:** `EmpireConspiracySupportsSceneNotificationItemBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/AntiEmpireConspiracyBeginsSceneNotificationItem.cs`

## Overview

This is one of the two branches of the **imperial conspiracy** storyline: the version for the side opposing the Empire. It derives from [EmpireConspiracySupportsSceneNotificationItemBase](../EmpireConspiracySupportsSceneNotificationItemBase), which in turn derives from `TaleWorlds.Core.SceneNotificationData`, and it **overrides exactly one member** — `TitleText`.

Everything else is inherited and left alone: the cutscene id `scn_empire_conspiracy_supports_notification`, the `str_ok` confirm key, two copies of the king's banner, and a full cast of cutscene characters (the king himself, three `villager_battania` conspirators and two culture bodyguards). So the entire information content of this type is how it assembles the three text variables in its title.

## Mental Model

Read it as **a title generator bolted onto a ready-made cutscene template**. Three things:

1. **It has no official construction site.** `new AntiEmpireConspiracyBeginsSceneNotificationItem(` returns **0 hits** tree-wide (positive control: `new ClanMemberWarDeathSceneNotificationItem(` hits at `DeathNotificationItemVM.cs:28`, so the "new XxxSceneNotificationItem(" probe works). Every `EmpireConspiracy` reference lives inside the four files of `SceneInformationPopupTypes/` itself, while `SceneNotificationData` itself is used widely (`LordConversationsCampaignBehavior.cs:3086`, `DeathNotificationItemVM.cs:28`, `HeirComeOfAgeNotificationItemVM.cs:22`), proving the type family is alive. **Conclusion: nothing in 1.4.5's campaign system raises this cutscene notice** — a mod or story mod must construct it and hand it to `MBInformationManager.ShowSceneNotification(...)`.

2. **The title is three assembled variables, recomputed on every read.** `TitleText` is a get-only override whose body is:

   ```csharp
   List<TextObject> list = new List<TextObject>();
   foreach (Kingdom antiEmpireFaction in _antiEmpireFactions)
   {
       list.Add(antiEmpireFaction.InformalName);
   }
   TextObject textObject = GameTexts.FindText("str_empire_conspiracy_supports_antiempire");
   textObject.SetTextVariable("FACTION_NAMES", GameTexts.GameTextHelper.MergeTextObjectsWithComma(list, includeAnd: true));
   textObject.SetTextVariable("DAY_OF_YEAR", CampaignSceneNotificationHelper.GetFormalDayAndSeasonText(CampaignTime.Now));
   textObject.SetTextVariable("YEAR", CampaignTime.Now.GetYear);
   return textObject;
   ```

   **Three variables: `FACTION_NAMES` (comma-joined anti-empire kingdom names, with "and"), `DAY_OF_YEAR` (formal day-plus-season text) and `YEAR` (current year).** Note that the object returned by `GameTexts.FindText` is **mutated in place** via `SetTextVariable` — if the translation table caches instances, repeated reads of `TitleText` can contaminate the same object. That contrasts with the "allocate a fresh `TextObject` every time" style used by other notices in this bucket.

3. **The only difference from the ProEmpire version is the title.** `ProEmpireConspiracyBeginsSceneNotificationItem` takes **only `kingHero`**, has no faction list, and uses `str_empire_conspiracy_supports_proempire`. This type takes `(Hero kingHero, List<Kingdom> antiEmpireFactions)`, uses `str_empire_conspiracy_supports_antiempire`, and fills `FACTION_NAMES`. **Everything else is 100% inherited.** The two are interchangeable in exactly one place.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `_antiEmpireFactions` | `private readonly List<Kingdom> _antiEmpireFactions` | The only field. The constructor stores the caller's `List<Kingdom>` **by reference — no copy, no null check, no snapshot.** `TitleText` reads only `InformalName` from it in a `foreach`. **It carries no `[SaveableField]`: cutscene notices are not serialized.** |
| `TitleText` | `public override TextObject TitleText { get; }` | The single override in the type. Fetches `str_empire_conspiracy_supports_antiempire` and fills `FACTION_NAMES` (`MergeTextObjectsWithComma(list, includeAnd: true)`), `DAY_OF_YEAR` (`GetFormalDayAndSeasonText(CampaignTime.Now)`) and `YEAR` (`CampaignTime.Now.GetYear`). **The whole assembly runs again on every read.** |
| Constructor | `public AntiEmpireConspiracyBeginsSceneNotificationItem(Hero kingHero, List<Kingdom> antiEmpireFactions) : base(kingHero)` | Calls `base(kingHero)` then stores the faction list reference. **Neither argument is validated**: a null `kingHero` crashes inside the base class's `GetBanners()`, and a null `antiEmpireFactions` NREs on the `foreach` in `TitleText`. |
| `King` (inherited) | `public Hero King { get; }` | Held by the base. `GetBanners()` reads `King.MapFaction.Banner` twice, and `GetSceneNotificationCharacters()` uses `King.CivilianEquipment` and `King.MapFaction.Culture` to build six characters. **Every base member breaks on a null king.** |
| `SceneID` (inherited) | `public override string SceneID => "scn_empire_conspiracy_supports_notification"` | Hard-coded on the base and **shared by both the ProEmpire and AntiEmpire branches**. A missing scene asset stops both branches from playing. |
| `GetSceneNotificationCharacters` (inherited) | `public override SceneNotificationCharacter[] GetSceneNotificationCharacters()` | Base implementation: pulls `villager_battania` and `conspirator_cutscene_template` from `MBObjectManager`, clones the equipment, strips weapons, randomizes body properties, and returns king + 3 conspirators + 2 bodyguards = six. **It calls `MBRandom.RandomInt(100)`, so consecutive calls differ.** |

## Examples

Raise the cutscene notice by hand (1.4.5 never does):

```csharp
List<Kingdom> againstEmpire = new List<Kingdom>();
Kingdom sturgia = Kingdom.All.Find((Kingdom k) => k.StringId == "sturgia");
if (sturgia != null)
{
    againstEmpire.Add(sturgia);
    SceneNotificationData data = new AntiEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero, againstEmpire);
    MBInformationManager.ShowSceneNotification(data);
    Debug.Print("scene=" + data.SceneID + " title=" + data.TitleText, 0);
}
```

Compare against the ProEmpire branch — same base, same scene, only constructor arguments and translation key differ:

```csharp
SceneNotificationData proData = new ProEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero);
SceneNotificationData antiData = new AntiEmpireConspiracyBeginsSceneNotificationItem(
    Hero.MainHero, new List<Kingdom> { Kingdom.All[0] });
Debug.Print("pro scene=" + proData.SceneID + " anti scene=" + antiData.SceneID, 0);
Debug.Print("same scene? " + (proData.SceneID == antiData.SceneID), 0);
```

Read only the title, without playing the cutscene — useful for logging or debugging:

```csharp
List<Kingdom> factions = new List<Kingdom>();
foreach (Kingdom kingdom in Kingdom.All)
{
    if (kingdom.StringId == "sturgia" || kingdom.StringId == "aserai")
    {
        factions.Add(kingdom);
    }
}
AntiEmpireConspiracyBeginsSceneNotificationItem item =
    new AntiEmpireConspiracyBeginsSceneNotificationItem(Hero.MainHero, factions);
Debug.Print("title=" + item.TitleText, 0);
```

## Risks and crash boundaries

- **No official construction site exists in 1.4.5.** `new AntiEmpireConspiracyBeginsSceneNotificationItem(` is 0 hits tree-wide (positive control: `new ClanMemberWarDeathSceneNotificationItem(` hits at `DeathNotificationItemVM.cs:28`). Every `EmpireConspiracy` reference stays inside `SceneInformationPopupTypes/`. **Only a mod can construct it and call `MBInformationManager.ShowSceneNotification`.**
- **Neither constructor argument is validated.** A null `kingHero` breaks `GetBanners()` on `King.MapFaction.Banner` immediately; a null `antiEmpireFactions` NREs on the `foreach` in `TitleText`. **This is the most common crash source in the type.**
- **`_antiEmpireFactions` is a reference, not a copy.** Mutating the list after construction changes the title output; conversely, dropping the local list to null leaves the title empty.
- **Not serialized.** `_antiEmpireFactions` carries no `[SaveableField]`, and `SceneNotificationData` is not in `SaveableCampaignTypeDefiner` at all. **Cutscene notices are one-shot UI and must be rebuilt after a load.**
- **The `GameTexts.FindText` result is mutated in place.** `TitleText` sets three variables on the object returned for that key. **If the translation table returns the same instance per key, repeated reads overwrite the previous result** — this type has none of the "fresh object every time" safety other notices in this bucket enjoy.
- **The cutscene cast is randomized per call.** `GetSceneNotificationCharacters()` uses `MBRandom.RandomInt(100)` for `BodyProperties`, so **two consecutive reads give different body parameters**. Cache the result before using it for a deterministic screenshot or assertion.
- **The scene id is shared with ProEmpire.** `scn_empire_conspiracy_supports_notification` serves both branches, so a missing asset **breaks both at once** with no fallback path.
- **Hard-coded `MBObjectManager` ids.** The base pulls the fixed StringIds `"villager_battania"` and `"conspirator_cutscene_template"`; **either one missing causes an NRE** — there is no null check.
- **Depends on a running campaign.** `CampaignSceneNotificationHelper.GetFormalDayAndSeasonText` and `CampaignTime.Now` both need a live campaign, so reading `TitleText` outside one NREs.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/AntiEmpireConspiracyBeginsSceneNotificationItem.cs` is 33 lines with 2 public members (the `TitleText` override and the constructor); its only field `_antiEmpireFactions` carries no save attribute. The 1.4.6 file of the same name exposes an identical public surface.

The base `EmpireConspiracySupportsSceneNotificationItemBase.cs` is 46 lines, identical in 1.4.5 and 1.4.6. Its sibling `ProEmpireConspiracyBeginsSceneNotificationItem.cs` is 23 lines — **ten lines shorter than this type, and the difference is exactly the faction-list assembly.**

## Dependencies

- Base: [EmpireConspiracySupportsSceneNotificationItemBase](../EmpireConspiracySupportsSceneNotificationItemBase) supplies `King`, the hard-coded `SceneID`, the duplicated banner and the six-character cutscene cast.
- One level up: `TaleWorlds.Core.SceneNotificationData` at `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/SceneNotificationData.cs`, which provides the `SceneNotificationCharacter` / `SceneNotificationShip` nested structs and the full set of `virtual` defaults.
- Payload: `List<Kingdom>.InformalName`, plus `Hero kingHero` (the base's `King`).
- Wording: [GameTexts](../../core-extra/GameTexts).FindText("str_empire_conspiracy_supports_antiempire") and `GameTexts.GameTextHelper.MergeTextObjectsWithComma(list, includeAnd: true)` — the same shape appears at `PartyBaseHelper.cs:337`.
- Date: [CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper).GetFormalDayAndSeasonText at `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs:149`, plus `CampaignTime.Now.GetYear`.
- Character data: the `villager_battania` `CharacterObject` and the `conspirator_cutscene_template` `MBEquipmentRoster` in `MBObjectManager`.
- Presentation entry: `MBInformationManager.ShowSceneNotification(SceneNotificationData)` at `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBInformationManager.cs:81`; a sibling usage is `LordConversationsCampaignBehavior.cs:3086`.
- Sibling branch: [ProEmpireConspiracyBeginsSceneNotificationItem](../ProEmpireConspiracyBeginsSceneNotificationItem) — same base, same scene, different title text only.

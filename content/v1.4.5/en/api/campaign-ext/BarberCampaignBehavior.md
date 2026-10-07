---
title: "BarberCampaignBehavior"
description: "Adds the barber to every settlement as a location character, wires the haircut conversation, and pushes a BarberState game state with a culture-constrained face-generator filter — the facegen filter is also this behaviour's other public obligation."
---

# BarberCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox.CampaignBehaviors`
**Type:** `public class BarberCampaignBehavior : CampaignBehaviorBase, IFacegenCampaignBehavior, ICampaignBehavior`
**Base:** `TaleWorlds.CampaignSystem.CampaignBehaviorBase`
**File:** `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs`

## Overview

This behaviour buys you a haircut. It registers the settlement barber as a location character, adds a twelve-line conversation tree that leads into the barber's face-generator screen, and charges a flat 100 gold. It also implements `IFacegenCampaignBehavior`, which is the less obvious half of its job: `GetFaceGenFilter()` is called by the game's own face generator — not just by this barber — and constrains which hairstyles and facial-hair meshes are offered, based on the player's race, gender, age, and the current settlement's culture.

Two private fields carry the state that makes the conversation work. `_previousBodyProperties` snapshots the player's static body properties when the conversation opens, so `DidPlayerHaveAHaircut()` can later compare against them and the barber knows whether to charge. `_isOpenedFromBarberDialogue` is a one-shot flag: it is set `true` for the duration of `GivePlayerAHaircut` and reset to `false` immediately after the `BarberState` is constructed, and it flips the filter's `useDefaultStages` flag so that the barber screen offers the full seven-stage face generator instead of the single reduced stage.

## Mental Model

Read the flow as four hooks and one public service.

**`RegisterEvents`** subscribes to two campaign events. `OnSessionLaunchedEvent` leads to `AddDialogs`. `LocationCharactersAreReadyToSpawnEvent` leads to `LocationCharactersAreReadyToSpawn`, which is where the barber is actually injected: it looks up `Settlement.CurrentSettlement.LocationComplex.GetLocationWithId("center")`, and only if that location is the one `CampaignMission.Current.Location` is currently using, it is daytime, and the settlement still has an unused `sp_merchant_notary` spawn point does it call `location.AddLocationCharacters(CreateBarber, culture, CharacterRelations, 1)`. Those four conditions together are why a barber can fail to appear and why adding one manually from a mod is fiddly.

**`CreateBarber(CultureObject, CharacterRelations)`** builds the NPC. It takes `culture.Barber`, asks `Campaign.Current.Models.AgeModel.GetAgeLimitForLocation(barber, out min, out max, "Barber")` for a plausible age band, constructs an `AgentData` from a `SimpleAgentOrigin` with a randomised age and a `_settlement_slow` monster suffix, and hands it to a `LocationCharacter` whose `AddBehaviorsDelegate` is `SandBoxManager.Instance.AgentBehaviorManager.AddWandererBehaviors` and whose spawn tag is the literal `"sp_barber"`.

**`GetFaceGenFilter()`** is the part that outlives the barber. If there is a `Settlement.CurrentSettlement`, it asks `BodyPropertiesModel` for the hair and beard indices valid for the player's race, `IsFemale ? 1 : 0` as the gender argument, and the *current settlement's* culture, unions them, and returns a `BarberFaceGeneratorCustomFilter`. With no current settlement it iterates every `CultureObject` from `MBObjectManager.Instance.GetObjectTypeList<CultureObject>()` and unions across all of them — the map screen case. Both branches `Distinct()` before returning. The nested private filter class is trivial: three fields, three getters, and `GetAvailableStages()` returning either the seven-stage array or a single-element `{ FaceGeneratorStage 5 }` array depending on `_defaultStages`.

**The conversation** is a linear token chain. `barber_start_talk` → `barber_question1` → `start_cut_token` → `finish_cut_token` → `finish_barber` → close. `GivePlayerAHaircutCondition` sets the `GOLD_COST` text variable and returns `true` unconditionally; `DoesPlayerHaveEnoughGold` is the clickable guard, rejecting below 100 with a "Not Enough Gold" explanation. `ChargeThePlayer` calls `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, 100, false)`. There is a second entry point, `barber_start_talk_beggar`, which only appears when the player is disguised.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetFaceGenFilter` | `public IFaceGeneratorCustomFilter GetFaceGenFilter()` | The public obligation this behaviour owes the game, not just the barber: it builds the constraint list for the face generator. Uses `BodyPropertiesModel.GetHairIndicesForCulture` / `GetBeardIndicesForCulture` keyed on the player's race, `IsFemale ? 1 : 0`, age, and — when a settlement is current — that settlement's culture; otherwise it unions across every `CultureObject` in the object manager. `Distinct()` is applied to both lists. This is the method to override if you want different hair available anywhere in the game. |
| `RegisterEvents` | `public override void RegisterEvents()` | Subscribes to `CampaignEvents.OnSessionLaunchedEvent` (→ `AddDialogs`) and `CampaignEvents.LocationCharactersAreReadyToSpawnEvent` (→ `LocationCharactersAreReadyToSpawn`). Both use `AddNonSerializedListener`, so neither survives a save — correct, since both must re-run on every load. Nothing is added to the campaign starter here; that happens in the session-launched handler. |
| `SyncData` | `public override void SyncData(IDataStore store)` | **Empty.** The behaviour persists nothing. `_previousBodyProperties` and `_isOpenedFromBarberDialogue` are conversation-scoped scratch state, and both are live only between a dialogue opening and a haircut. |
| `LocationCharactersAreReadyToSpawn` | `private void LocationCharactersAreReadyToSpawn(Dictionary<string, int> unusedUsablePointCount)` | The barber-injection point, gated on four conditions: the `center` location complex is the one the campaign mission is currently using, it is daytime, the settlement is current, and `unusedUsablePointCount` still has a spare `sp_merchant_notary` entry. Failing any one of them means no barber, with no diagnostic. |
| `CreateBarber` | `private LocationCharacter CreateBarber(CultureObject culture, CharacterRelations relation)` | Builds the barber NPC: `culture.Barber`, a randomised age inside the model's limits for that location type, an `AgentData` on a `_settlement_slow` monster, and a `LocationCharacter` with the `"sp_barber"` spawn tag wired to `AgentBehaviorManager.AddWandererBehaviors`. |
| `GivePlayerAHaircut` | `private void GivePlayerAHaircut()` | Pushes the barber game state. Sets `_isOpenedFromBarberDialogue = true`, constructs a `BarberState` from `Hero.MainHero.CharacterObject` and `GetFaceGenFilter()` via `Game.Current.GameStateManager.CreateState`, resets the flag, then `GameStateManager.Current.PushState`. The flag is only true for the duration of the construction, which is what makes the constructed filter use the full seven-stage face generator. |
| `DidPlayerHaveAHaircut` | `private bool DidPlayerHaveAHaircut()` | Compares `Hero.MainHero.BodyProperties.StaticProperties` against the `_previousBodyProperties` snapshot taken in `InitializeBarberConversation`. This is the whole basis for charging: the player is only billed if the face actually changed. |

## Dead members and traps

All ten rows below are the same shape: a static tool reports **0 call sites**, but `grep -o -w` finds live references. They are **not dead members** — they are members the tool cannot see. None of them is an override.

| Member | Declared at | override | Call sites | Verdict | Note |
|---|---|---|---|---|---|
| `GivePlayerAHaircut` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:175` | 0 | 2 times (2 lines) | UNSUPPORTED | Passed as `new OnConsequenceDelegate(GivePlayerAHaircut)` at `:109` and `:113`. A **method-group reference**: no dot prefix and no following `(`, so both the dot-access rule and the bare-call rule miss it. |
| `GivePlayerAHaircutCondition` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:169` | 0 | 2 times (2 lines) | UNSUPPORTED | Same form: `new OnConditionDelegate(...)` at `:109` / `:113`. |
| `DoesPlayerHaveEnoughGold` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:130` | 0 | 2 times (2 lines) | UNSUPPORTED | `new OnClickableConditionDelegate(...)` at `:109` / `:113`. |
| `InitializeBarberConversation` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:187` | 0 | 2 times (2 lines) | UNSUPPORTED | `new OnConsequenceDelegate(...)` at `:107`. |
| `InDisguiseSpeakingToBarber` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:121` | 0 | 1 time (1 line) | UNSUPPORTED | `new OnConditionDelegate(...)` at `:107`. |
| `ChargeThePlayer` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:143` | 0 | 1 time (1 line) | UNSUPPORTED | Method-group reference. |
| `CreateBarber` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:197` | 0 | 1 time (1 line) | UNSUPPORTED | Method-group reference. |
| `DidPlayerNotHaveAHaircut` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:148` | 0 | 1 time (1 line) | UNSUPPORTED | Method-group reference. |
| `_isOpenedFromBarberDialogue` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:60` | 0 | 3 times (3 lines) | UNSUPPORTED | Class-internal access with no dot prefix. |
| `_previousBodyProperties` | `Modules.SandBox/SandBox/SandBox.CampaignBehaviors/BarberCampaignBehavior.cs:62` | 0 | 2 times (2 lines) | UNSUPPORTED | Class-internal access with no dot prefix. |

Counts: source tree `bannerlord-1.4.5` HEAD `ccbc3d40f88905765a1484492d41b7000e7249fa`, 8,583 `.cs` files including `bin/`. Call-site counts are **occurrence counts** (`grep -o -w`), not matching-line counts. `UNSUPPORTED` rows are recorded because the tool's own number cannot be trusted — they are not conclusions, and they are not modder traps.

## Real Example

Read the filter the behaviour hands to the face generator, which is the part other systems consume:

```csharp
IFaceGeneratorCustomFilter filter = new BarberCampaignBehavior().GetFaceGenFilter();
FaceGeneratorStage[] stages = filter.GetAvailableStages();
Debug.Print("stages offered = " + stages.Length, 0);
```

Reproduce the culture-scoped hair lookup the behaviour performs, so you can see what a given settlement allows:

```csharp
Settlement current = Settlement.CurrentSettlement;
if (current != null)
{
    int race = Hero.MainHero.CharacterObject.Race;
    int gender = Hero.MainHero.IsFemale ? 1 : 0;
    int[] hair = Campaign.Current.Models.BodyPropertiesModel
        .GetHairIndicesForCulture(race, gender, Hero.MainHero.Age, current.Culture);
    Debug.Print("hair options in this culture = " + hair.Length, 0);
}
```

Check the spawn conditions the barber injection depends on, before concluding the barber is missing:

```csharp
Location center = Settlement.CurrentSettlement.LocationComplex.GetLocationWithId("center");
Debug.Print("mission location matches = " + (CampaignMission.Current.Location == center), 0);
Debug.Print("is day = " + Campaign.Current.IsDay, 0);
```

Track whether a haircut actually changed anything, using the same comparison the dialogue uses:

```csharp
BodyProperties before = Hero.MainHero.BodyProperties;
Debug.Print("static props before = " + before.StaticProperties, 0);
ChangePlayerCharacterAction.Apply(Hero.MainHero);
Debug.Print("changed = " + (before.StaticProperties != Hero.MainHero.BodyProperties.StaticProperties), 0);
```

## Risks and Boundaries

- **`SyncData` is empty and `_previousBodyProperties` is unsaved.** If the game saves mid-conversation, the snapshot is lost and `DidPlayerHaveAHaircut` will compare against a stale or default value.
- **`GetFaceGenFilter` affects the whole game's face generator, not only the barber.** It is reachable through `IFacegenCampaignBehavior`, so replacing or overriding it changes hair and beard options everywhere, including character creation.
- **The no-settlement branch unions across every `CultureObject`.** On the campaign map, `MBObjectManager.Instance.GetObjectTypeList<CultureObject>()` can return a large list, and the filter is built by concatenating all of it — the most expensive call in the class.
- **`LocationCharactersAreReadyToSpawn` has four independent gates** and fails silently on any of them. A barber that "does not exist" is usually one of these conditions being false, not a missing registration.
- **`"center"`, `"sp_barber"`, and `"sp_merchant_notary"` are hard-coded literals**, as is the `"Barber"` label passed to `GetAgeLimitForLocation`.
- **`GetFaceGenFilter` uses `Settlement.CurrentSettlement` twice** — once to branch, once for the culture — so a settlement that changes between the two reads would produce an inconsistent filter.
- **The price is a hard-coded `100`** in two places: the private `BarberCost` constant and the literal `100` inside `DoesPlayerHaveEnoughGold`. They are not linked, so changing the constant alone does not change the gate.
- **`GivePlayerAHaircutCondition` always returns `true`.** The affordability check lives entirely in the separate clickable condition, so a conversation consumer that ignores clickable conditions would let a broke player reach the barber screen.
- **The flag `_isOpenedFromBarberDialogue` is only true during construction.** It flips back immediately, so a filter obtained later from a non-dialogue context gets the reduced single-stage face generator.
- **`AddDialogLine`/`AddPlayerLine` are called once per session.** Calling `RegisterEvents` twice, or adding the behavior twice, duplicates every conversation id and the game has no de-duplication here.

## Cross-version note

The v1.4.5 file is 248 lines. The four-condition spawn gate, the two-branch `GetFaceGenFilter`, the empty `SyncData`, and the duplicated `100` price literal are all present here.

## Dependencies

- Contract: `IFaceGeneratorCustomFilter` is what `GetFaceGenFilter` returns and what the game's face generator consumes; `IFacegenCampaignBehavior` is how the behavior is discovered.
- Base class: [CampaignBehaviorBase](../CampaignBehaviorBase) supplies `RegisterEvents` / `SyncData` and the behavior registration pipeline.
- Injection point: `Location`, `LocationCharacter`, and `CampaignEvents.LocationCharactersAreReadyToSpawnEvent` are what actually put the barber on the map.
- Data models: [BodyPropertiesModel](../../campaign/BodyPropertiesModel) supplies the culture-scoped hair and beard index lists; [AgeModel](../../campaign/AgeModel) supplies the age band for the spawned NPC.
- Game state: `BarberState` is pushed via `GameStateManager`, and `Game.Current.GameStateManager.CreateState` constructs it from the hero's `CharacterObject` plus the filter.
- Money: [GiveGoldAction](../GiveGoldAction) is what `ChargeThePlayer` uses to take the flat 100.
- Bucket index: [campaign-ext API section](../)

---
title: "AgentData"
description: "The agent spawn parameter bundle: a pure fluent builder. Sixteen private-set properties behind sixteen this-returning configuration methods, relayed layer by layer by AgentBuildData and LocationCharacter. It carries two real source defects: Race() wrongly sets GenderOverriden, and OwnerParty/AgentOwnerParty has zero callers anywhere in 1.4.5."
---

# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/AgentData.cs`

## Overview

`AgentData` is **a pure data container plus a fluent builder**: sixteen read-only properties with private setters, sixteen configuration methods returning `this`, and zero query methods, zero lifecycle hooks, zero state machine. It answers "**what is the agent about to be spawned going to look like**" — which character, which race, which monster body, which equipment, which random seed, what age, what clothing colour, horses yes or no, weapons yes or no.

The role it plays is **parameter transfer between the campaign layer and the mission layer**. `SimpleAgentOrigin` / `PartyAgentOrigin` describe "where this unit came from"; `AgentData` describes "how this unit's appearance and equipment are decided"; and the actual spawning is carried out by [AgentBuildData](../../mission-ext/AgentBuildData) (which forwards every method verbatim to an internal `AgentData`) and `Mission.CreateAgentInternal`. **The governing constraint is that every property is `private set`**, so once constructed the object can only be changed through the fluent methods — which makes the whole type a **build-once** construct: you may keep editing it, and nothing anywhere will ever tell you that it is too late.

## Mental Model

Think of it as **a "character appearance work order" handed to the Mission**, not as a living object. It has no behaviour; the only intelligence in it lies in **the pairing between configuration methods and properties** — and that is exactly what this page is about.

**The core of the mental model is the "three pairs of value + overridden flag".** `AgentData` contains three such pairs: `AgentAge` / `AgeOverriden`, `AgentBodyProperties` / `BodyPropertiesOverriden`, and `AgentIsFemale` / `GenderOverriden`. Consumers look at the **flag**, not the value — see `Mission.cs:4089`: `float num = (agentBuildData.AgeOverriden ? ((float)agentBuildData.AgentAge) : agentCharacter.Age);`, i.e. "if not overridden, fall back to the character's own age". So calling `Age(20)` is useful not because `AgentAge` became 20, but because `AgeOverriden` became true. **Setting the value without the flag is impossible** (all three methods write both), and **reading the flag without the value tells you nothing**.

Five conclusions follow, and they are the ones worth memorising. First, **`Race(int)` carries a real source defect.** Its body at `AgentData.cs:185-190` is `AgentRace = race; GenderOverriden = true; return this;` — **it sets `GenderOverriden` to true instead of any race-overridden flag.** The consequence: as soon as you call `.Race(x)`, the agent is flagged "gender has been overridden" while `AgentIsFemale` remains `default(bool)` = false, so the mission side will use "male" rather than the gender implied by the race data. **This is the single most important thing to remember about the type.** Second, **`Character(...)` only rewrites `AgentCharacter` and does not refresh derived data**: `AgentData.cs:76-80` is nothing but `AgentCharacter = characterObject; return this;`. The constructor (`:57-74`), by contrast, also computes `AgentRace = characterObject.Race` and `AgentMonster = FaceGen.GetBaseMonsterFromRace(AgentRace)`. So **construct first and then call `.Character()` leaves behind a race and monster body that no longer match the new character.** Third, **`OwnerParty` and `AgentOwnerParty` are dead members in 1.4.5**: a tree-wide search for `OwnerParty(` hits only the definition at `AgentData.cs:88`, and reads of `AgentOwnerParty` appear nowhere beyond its own declaration and assignment. `AgentBuildData` does not forward the method at all. **It is a public API that nobody uses.** Fourth, **`TroopOrigin(...)` updates the seed conditionally**: `AgentData.cs:171-174` calls `EquipmentSeed(troopOrigin.Seed)` only when `troopOrigin?.Troop != null && !troopOrigin.Troop.IsHero`, so **a hero never picks up the origin's seed**. Fifth, **the default sentinel for `ClothingColor1/2` is `uint.MaxValue`** (`:70-71`), not 0. Testing "was a colour specified" against `!= 0` conflates "explicitly pure black" with "not specified".

## Key Members

| Member | Signature | What this member is for |
| --- | --- | --- |
| `AgentData(IAgentOriginBase)` | `public AgentData(IAgentOriginBase agentOrigin)` | **The constructor to prefer.** It chains to `this(agentOrigin.Troop)` and then additionally writes `AgentOrigin`, `AgentCharacter`, and `AgentEquipmentSeed = agentOrigin.Seed`. `HeroAgentSpawnCampaignBehavior.cs:106-116` goes through this path exclusively. |
| `AgentData(BasicCharacterObject)` | `public AgentData(BasicCharacterObject characterObject)` | The bare-character constructor. Besides assigning `AgentCharacter` it computes `AgentRace` and `AgentMonster = FaceGen.GetBaseMonsterFromRace(AgentRace)` (`:61`), and sets both colours to `uint.MaxValue`. **`AgentOrigin` stays null** — that is the path used at `AgentBuildData.cs:141`. |
| `Character` / `Monster` | `public AgentData Character(BasicCharacterObject)` / `public AgentData Monster(Monster)` | Override the character and the monster body. **`Character` is the trap**: it rewrites only `AgentCharacter` and never recomputes `AgentRace` / `AgentMonster`, so "construct, then swap the character" leaves stale race data. `Monster`, by contrast, is heavily used — `NotableHelperCharacterCampaignBehavior.cs:76` and friends swap the look to a `_with_suffix` variant. |
| `Age` / `AgeOverriden` | `public AgentData Age(int age)` / `public bool AgeOverriden { get; private set; }` | Override the age. **Consumers only look at the flag** (`Mission.cs:4089`). `NotableHelperCharacterCampaignBehavior.cs:76` uses `.Age(MBRandom.RandomInt(minimumAge, maximumAge))` to produce a village with both young and old residents. |
| `IsFemale` / `GenderOverriden` | `public AgentData IsFemale(bool isFemale)` / `public bool GenderOverriden { get; private set; }` | Override the gender. **Note that `Race(int)` also wrongly sets `GenderOverriden = true`** (a source defect, see the Mental Model). Normal callers sit around `LocationCharacter.cs:66` and in `AgentBuildData`. |
| `BodyProperties` / `BodyPropertiesOverriden` | `public AgentData BodyProperties(BodyProperties)` / `public bool BodyPropertiesOverriden { get; private set; }` | Override body and face properties. `LocationCharacter.cs:66` calls this automatically from inside its own constructor (via `Character.GetBodyProperties(Character.Equipment, seed)`), so **this value is frequently already set without you noticing**. |
| `Race` | `public AgentData Race(int race)` | Sets `AgentRace`. **It carries a real defect: the body writes `GenderOverriden = true;`**, which is equivalent to also declaring the gender overridden while `AgentIsFemale` stays false. Its only forwarder is `AgentBuildData.cs:336`. |
| `NoHorses` / `NoWeapons` / `NoArmor` / `FixedEquipment` / `CivilianEquipment` | five `public AgentData Xxx(bool)` methods | A group of "equipment supply" switches. `NoHorses` is called 4 times tree-wide (all for campaign-map NPCs); `NoWeapons` and `NoArmor` are **called only from the forwarders at `AgentBuildData.cs:258/264` and nowhere else on the managed side** — so reaching them requires going through `AgentBuildData`. `FixedEquipment` and `CivilianEquipment` are set at spawn time by `Mission.cs:4188/4192`. |
| `OwnerParty` / `AgentOwnerParty` | `public AgentData OwnerParty(IBattleCombatant owner)` / `public IBattleCombatant AgentOwnerParty { get; private set; }` | **Dead members in 1.4.5.** A tree-wide `OwnerParty(` search hits only the definition line, `AgentOwnerParty` has no reader at all, and `AgentBuildData` does not forward it. Writing it will not throw — and it will also have no effect whatsoever. |
| `Equipment` / `EquipmentSeed` / `PrepareImmediately` | `public AgentData Equipment(Equipment)` / `EquipmentSeed(int)` / `SetPrepareImmediately()` | Override equipment, pin the random seed, and demand that visuals be prepared immediately. `PrepareImmediately` is the most-read flag on the whole type (10 sites); both `Mission` and `AgentBuildData` consult it to decide when visuals are generated. |
| `ClothingColor1` / `ClothingColor2` | `public AgentData ClothingColor1(uint color)` / `ClothingColor2(uint)` | Override clothing colours. **The default is `uint.MaxValue` (`:70-71`), not 0** — use `uint.MaxValue` as the "unspecified" sentinel when testing. `HeroAgentSpawnCampaignBehavior.cs:95` sets both in one go. |
| `TroopOrigin` / `MountKey` / `AgentOrigin` | `public AgentData TroopOrigin(IAgentOriginBase)` / `MountKey(string)` / `public IAgentOriginBase AgentOrigin { get; private set; }` | Fill in the origin and the mount key. `TroopOrigin` **writes `EquipmentSeed` only when the troop is non-null and not a hero** (`:171-174`), so heroes never receive the origin's seed. `MountKey` pairs with `Mission.cs:4459`'s `MountCreationKey.GetRandomMountKeyString`. |

## Real Example

The two commonest construction paths — the origin-based one (campaign-map NPCs) and the bare-character one (battlefield):

```csharp
// Path 1: from an origin. HeroAgentSpawnCampaignBehavior.cs:106-116 shape.
Hero wanderer = Hero.MainHero;
AgentData fromOrigin = new AgentData(new SimpleAgentOrigin(wanderer.CharacterObject))
    .ClothingColor1(0x7F7F7Fu)
    .ClothingColor2(0x202020u);

// Path 2: from a bare character, then override the look.
AgentData fromCharacter = new AgentData(wanderer.CharacterObject)
    .Monster(monsterWithSuffix)
    .NoHorses(noHorses: true)
    .Age(MBRandom.RandomInt(18, 65));

Debug.Print("race = " + fromCharacter.AgentRace, 0);
Debug.Print("monster = " + fromCharacter.AgentMonster, 0);
```

Handing the parameters over through `AgentBuildData` — the only correct route in battle, because `Mission.SpawnAgent` consumes an `AgentBuildData`:

```csharp
AgentBuildData buildData = new AgentBuildData(new AgentData(new SimpleAgentOrigin(shopWorker)))
    .Team(Mission.Current.AttackerTeam)
    .Controller(AgentControllerType.AI)
    .InitialFrameFromSpawnPointEntity(spawnEntity);

Agent spawned = Mission.Current.SpawnAgent(buildData);
Debug.Print("spawned agent index = " + spawned.Index, 0);
```

The three traps that matter most on this page, demonstrated:

<!-- xml-id-unverifiable: v1.4.5 -->
> ⚠️ Unverifiable: every string id on this page (in the code examples below) cannot be checked against the v1.4.5 source tree, because that version ships no XML corpus.
```csharp
BasicCharacterObject worker = MBObjectManager.Instance.GetObject<BasicCharacterObject>("artisan");
Monster orc = MBObjectManager.Instance.GetObject<Monster>("orc");

// Trap 1: Race() silently flips GenderOverriden -- see AgentData, line 188.
AgentData withRace = new AgentData(worker).Race(worker.Race);
Debug.Print("after Race(): AgentRace=" + withRace.AgentRace
    + " GenderOverriden=" + withRace.GenderOverriden, 0);

// Trap 2: Character() does NOT refresh AgentRace / AgentMonster, so the race
// and monster set above are now stale relative to the swapped-in character.
AgentData swapped = new AgentData(worker).Monster(orc).Character(worker);
Debug.Print("stale race still = " + swapped.AgentRace, 0);

// Trap 3: the colour sentinel is uint.MaxValue, not 0.
AgentData plain = new AgentData(worker);
bool colourWasSpecified = plain.AgentClothingColor1 != uint.MaxValue;
Debug.Print("colour specified = " + colourWasSpecified, 0);
```

## Risks and Boundaries

- **`Race(int)` has a genuine defect.** The body at `AgentData.cs:185-190` is `AgentRace = race; GenderOverriden = true;`, which also marks the gender as overridden while `AgentIsFemale` stays `false`. **Calling `.Race()` is effectively a declaration that the unit is male.** That is original-source behaviour, not a documentation typo.
- **`Character()` does not recompute derived data.** The constructor computes `AgentRace` and `AgentMonster`; `Character()` does not. So "construct, then `.Character(other)`" leaves a race and monster body that no longer match. **If you need to change the character, construct a new `AgentData`.**
- **`OwnerParty` / `AgentOwnerParty` have no caller anywhere in 1.4.5.** A tree-wide `OwnerParty(` search hits only the definition, `AgentOwnerParty` has no reader, and `AgentBuildData` does not forward it. It is a public but unwired API — depending on it means depending on a contract that never takes effect.
- **`TroopOrigin()` writes no seed for heroes.** The condition at `:171-174` is `troopOrigin?.Troop != null && !troopOrigin.Troop.IsHero`, so **a hero's appearance randomness always comes from the `BasicCharacterObject` itself**.
- **The colour sentinel is `uint.MaxValue`.** `:70-71` initialises both colours to `uint.MaxValue`. Testing "was a colour specified" against `!= 0` conflates "unspecified" with "explicitly pure black".
- **Every setter is `private`.** The only configuration entry points are the sixteen fluent methods, and **there is no "committed" flag anywhere**. You may keep mutating the `AgentData` after spawning, but whether `Mission` re-reads it is up to `Mission` — **no mechanism tells you it is too late.**
- **The three override flags are consumed on the `Mission` side, with no managed-side validation.** When `AgeOverriden` / `BodyPropertiesOverriden` / `GenderOverriden` are false, consumers fall back to the `agentCharacter`'s own data, so "value set but flag false" is structurally impossible — **unless you go and change those `private set` properties yourself, which you cannot.**
- **`AgentData(BasicCharacterObject)` leaves `AgentOrigin` null.** On that path `AgentOrigin` is null, so anything downstream that needs `IAgentOriginBase` data (traits, `Troop`) gets nothing. Only the `PartyAgentOrigin` / `SimpleAgentOrigin` paths populate it.
- **`NoWeapons` / `NoArmor` have zero managed callers.** Their only use is the forwarding at `AgentBuildData.cs:258/264`. **Enabling them requires going through `AgentBuildData`**; calling them directly on `AgentData` is dead code in this version.
- **It is not saved.** Nothing anywhere in the tree registers it with `SaveableTypeDefiner` the way [AgentSaveData](../AgentSaveData) is — spawn parameters are transient, and loading a save replays the whole procedure.

## Cross-Version Notes

`AgentData.cs` is 197 lines in 1.4.5 with 16 properties and 18 methods (counting the two constructors), in that version's original-source form. Later 1.4.x releases split `AgentData` into `AgentData` and `AgentVisualData`, moving the visual parameters (`BodyProperties`, `ClothingColor*`, `Age`) into the latter — **and that is the trap when migrating across versions: the same `.BodyProperties(...)` call may no longer return something chainable as an `AgentData`**. The cross-version checklist therefore has three items: whether the fluent methods still return `this` in a type that stays chainable (`AgentBuildData` depends on that); whether the `Race()` / `GenderOverriden` defect has been fixed (the change in line count is a decent hint); and whether `OwnerParty` / `AgentOwnerParty` finally gained a reader.

## Dependencies

- Wrapper: [AgentBuildData](../../mission-ext/AgentBuildData) holds an `AgentData` and forwards each fluent method verbatim (`AgentBuildData.cs:126-142` for the constructors, `:150-342` for the forwarding block)
- Consumer: `Mission.CreateAgentInternal` / `Mission.SpawnAgent` (`Mission.cs:4074`) generate the agent from these parameters; `Mission.cs:4089` reads `AgeOverriden`
- Origin objects: the [IAgentOriginBase](../IAgentOriginBase) implementations `SimpleAgentOrigin`, `PartyAgentOrigin` (both under `../../campaign/`) and `BasicBattleAgentOrigin`
- Carried data: [Monster](../Monster) (body), [BodyProperties](../BodyProperties) (physique), [Equipment](../Equipment) (gear), [BasicCharacterObject](../BasicCharacterObject) (the character itself)
- Campaign landing site: [LocationCharacter](../../campaign/LocationCharacter)'s constructor calls `AgentData.BodyProperties(...)` on its own (`LocationCharacter.cs:66`)
- Control and capability: [AgentControllerType](../AgentControllerType) and [AgentFlag](../AgentFlag) are decided by `Agent.Build` at spawn time
- Random source: `MBRandom.RandomInt` supplies values such as age (see `NotableHelperCharacterCampaignBehavior.cs:76`)
- Bucket index: [core-extra API section](../)
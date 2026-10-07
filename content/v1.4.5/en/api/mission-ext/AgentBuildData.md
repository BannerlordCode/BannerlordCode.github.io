---
title: "AgentBuildData"
description: "The write-only spawn ticket handed to Mission.SpawnAgent: a fluent, 40-call description of who is about to exist, on which side, in which formation, with what gear."
---

# AgentBuildData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentBuildData`
**Base:** `object`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentBuildData.cs`

## One-line responsibility

It is the *builder* half of the spawn pipeline: everything an `Agent` will need to exist is written into this object before `Mission.SpawnAgent` consumes it, and after that call every meaningful field is read-only to everyone except the engine.

## Mental model

Hold three ideas at once and the class stops being confusing.

**First, it is a fluent ticket, not an entity.** Forty-three methods named `Character`, `Controller`, `Team`, `Equipment`, `Banner`, `Race`, `Age`… all return `this`. They are setters with a builder's spelling, so `agentBuildData.Equipment(e)` reads like a factory step rather than an assignment. The consequence that matters: **every one of those fluent setters is `public` and none of them is `readonly`, but every plain property is `{ get; private set; }` or `{ get; }`**. So once you have a ticket, the only supported edits are further fluent calls. There is no `buildData.Team = x` — the `Team` property has no setter, only the `Team(team)` method. Mixing the two styles is the classic compile error here, and it is the type doing you a favour: the read-only property is the one that ends up on the spawned `Agent`.

**Second, half of the class is a pass-through to `AgentData`.** Properties written with `=>` — `AgentCharacter`, `AgentMonster`, `AgentOverridenSpawnEquipment`, `AgentEquipmentSeed`, `AgentNoHorses`, `AgentMountKey`, `AgentNoWeapons`, `AgentNoArmor`, `AgentFixedEquipment`, `AgentCivilianEquipment`, `AgentClothingColor1/2`, `AgentBodyProperties`, `AgentAge`, `AgentRace`, `AgentOrigin`, `BodyPropertiesOverriden`, `AgeOverriden`, `GenderOverriden`, `AgentIsFemale`, `PrepareImmediately` — do not store anything locally. They forward to the single `AgentData` field (declared at `AgentBuildData.cs:9`, type `TaleWorlds.Core.AgentData`), and it is the fluent method of the matching name that writes through. `Character(BasicCharacterObject)` calls `AgentData.Character(...)`; `Equipment(Equipment)` and the `ClothingColor*`/`Age`/`Race`/`BodyProperties` setters likewise. So `AgentData` is the real storage for "what does this agent look like", and `AgentBuildData` is the storage for "where does it go" (`Team`, `Formation`, `Index`, `AgentController`, `MissionPeer`, the spawn-index counters).

**Third, there is no public parameterless constructor.** The private one at `AgentBuildData.cs:115` sets the only sane defaults (`AgentController = AI`, `AgentTeam = Team.Invalid`, `AgentFormation = null`, `AgentMissionPeer = null`, `AgentFormationTroopSpawnIndex = -1`, `UseFaceCache = false`, `FaceCacheId = 0`), and the three public constructors all chain into it — from an `AgentData`, from an `IAgentOriginBase`, or from a `BasicCharacterObject`. Pick the origin-based ones for reinforcement-style spawns, the character one when you are placing a specific person. `new AgentBuildData()` from a mod does not compile, and that is intentional: an `AgentData`-less ticket has no character to build.

The `RandomizeColors` property is the one computed member and it encodes a design decision: it returns `true` only for a **non-hero** character with **no mission peer**. A hero always keeps their authored colours; a network-owned agent keeps its synchronised ones. Do not "fix" this by writing `AgentClothingColor1` unconditionally.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AgentData` | `public AgentData AgentData { get; private set; }` | The backing store for everything visual. Assigned in exactly three places — the three constructors — and never reassigned afterwards. The fluent `Character`/`Equipment`/`Age`/`Race`/`ClothingColor*`/`BodyProperties` methods write *through* it, which is why those `=>` properties and those methods always agree. |
| `UseFaceCache` / `FaceCacheId` | `public bool UseFaceCache { get; set; }` / `public int FaceCacheId { get; set; }` | The only two plain `{ get; set; }` properties in the class, and the only two defaulted by the private constructor. They opt the spawn into the shared face mesh cache — a real frame-time win when spawning hundreds of soldiers, and the reason `FaceCacheId` must be stable across a formation or two agents will share a face. |
| `RandomizeColors` | `public bool RandomizeColors { get; }` | Computed, not stored: `AgentCharacter != null && !AgentCharacter.IsHero && AgentMissionPeer == null`. Read it to learn whether the engine will jitter cloth colours; writing colours yourself while this is `true` produces a fight between your value and the randomiser. |
| `Character` | `public AgentBuildData Character(BasicCharacterObject characterObject)` | Writes through to `AgentData`. Replaces who the agent *is*. Call it early — most other `AgentData`-backed reads (`AgentCharacter`, `RandomizeColors`) are meaningless until it has run. |
| `Controller` | `public AgentBuildData Controller(AgentControllerType controller)` | Who drives the agent: `AgentControllerType.AI`, `Player`, or `Agent`. Defaults to `AI`. This is the single most consequential call on the ticket — it decides whether AI components get attached and whether `OnAgentControllerChanged` fires later. |
| `Team` | `public AgentBuildData Team(Team team)` | Assigns the side. Defaults to `Team.Invalid`, which produces an agent no formation will accept and no morale system will count. |
| `Formation` / `FormationTroopSpawnCount` / `FormationTroopSpawnIndex` | `public AgentBuildData Formation(Formation)` / `FormationTroopSpawnCount(int)` / `FormationTroopSpawnIndex(int)` | Placement *inside* the formation. `FormationTroopSpawnIndex` defaults to `-1`, meaning "let the formation pick"; a non-negative value pins the agent to a specific index and is what ordered reinforcement spawns rely on. `Formation` defaults to `null`. |
| `Index` / `MountIndex` / `VisualsIndex` | `public AgentBuildData Index(int)` / `MountIndex(int)` / `VisualsIndex(int)` | Explicit identity overrides. `Index` is the `Mission`-wide agent slot (what `FindAgentWithIndex` resolves against); leaving it unset lets the mission allocate. Setting it to a value already in use is a silent collision, not an exception. |
| `InitialPosition` / `InitialDirection` / `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialPosition(in Vec3)` / `InitialDirection(in Vec2)` / `InitialFrameFromSpawnPointEntity(GameEntity)` and `(WeakGameEntity)` | Overrides where the agent appears. Both nullable (`Vec3?` / `Vec2?` on the read side) — `null` means "derive from the formation frame". The `InitialFrameFromSpawnPointEntity` overloads read the frame straight off a scene spawn point, which is how battle deployment places agents. |
| `Equipment` / `MissionEquipment` | `public AgentBuildData Equipment(Equipment)` / `MissionEquipment(MissionEquipment)` | Two different gear channels. `Equipment` is the authored template; `MissionEquipment` is the live mission copy. Setting one does not set the other — set `Equipment` when spawning and let the mission build its `MissionEquipment` from it. |
| `IsReinforcement` | `public AgentBuildData IsReinforcement(bool)` | Routes the agent into the reinforcement path rather than the initial deployment path, which changes which spawn logic and which formation slot the mission honours. |
| `MissionPeer` / `OwningMissionPeer` | `public AgentBuildData MissionPeer(MissionPeer)` / `OwningMissionPeer(MissionPeer)` | Network identity. `MissionPeer` marks the agent as *being* that peer; `OwningMissionPeer` marks it as belonging to that peer's side. In single-player both are left `null`, which is exactly the condition `RandomizeColors` keys on. |
| `Banner` / `BannerItem` / `BannerReplacementWeaponItem` | `public AgentBuildData Banner(Banner)` / `BannerItem(ItemObject)` / `BannerReplacementWeaponItem(ItemObject)` | Three separate banner channels: the visual `Banner`, the item definition, and the item used when the banner-bearing slot is drawn as a weapon. Overriding only `BannerItem` and leaving `Banner` null gives you the item with no visual. |
| `SpawnsIntoOwnFormation` / `SpawnsUsingOwnTroopClass` | `public AgentBuildData SpawnsIntoOwnFormation(bool)` / `SpawnsUsingOwnTroopClass(bool)` | Placement policy for heterogeneous spawns: whether a lone hero agent uses the troop's own formation and its own troop class rather than the army's. Both default to `false`, which means "slot me like everyone else". |
| `Monster` / `NoHorses` / `MountKey` | `public AgentBuildData Monster(Monster)` / `NoHorses(bool)` / `MountKey(string)` | Mount selection, three ways: force a `Monster`, forbid a mount outright, or pick by string key resolved against the character tree. `NoHorses(true)` beats `Monster(...)` — it short-circuits before the monster is ever looked at. |
| `Team`, `Formation`, `AgentTeam` (property) | `public Team AgentTeam { get; private set; }` | Note the naming split: the *property* is `AgentTeam`, the *builder method* is `Team(Team)`. Same for `AgentFormation` / `Formation(...)`, `AgentCharacter` / `Character(...)`. Reading uses the `Agent*` name; writing uses the short fluent name. |

## Dead members and traps

One fluent setter in the builder is never called. Its siblings are.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `SpawnsIntoOwnFormation` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentBuildData.cs:168 | 0 | 0 times (0 lines, re-verified) | MEASURED | Fluent setter returning `this` for chaining. Declared but never called anywhere in the tree, so putting it in a chain has no effect. Same-family control: `IsReinforcement` (:162) is called at Mission.cs:4436 and `InitialPosition` shows 48 occurrences — this builder chain is live, this one link is not. |

## Real example

Placing a specific hero at a specific point, then reading the ticket back before spawning:

```csharp
AgentBuildData ticket = new AgentBuildData(hero.CharacterObject)
    .Controller(AgentControllerType.Player)
    .Team(Mission.Current.MainAgent.Team)
    .IsReinforcement(false)
    .InitialPosition(new Vec3(120f, 40f, 0f))
    .InitialDirection(new Vec2(0f, 1f))
    .FixedEquipment(true)
    .NoHorses(true);

Debug.Print("controller = " + ticket.AgentController, 0);
Debug.Print("character  = " + ticket.AgentCharacter.Name.ToString(), 0);

Agent spawned = Mission.Current.SpawnAgent(ticket);
if (spawned == null)
{
    Debug.Print("spawn refused: index " + ticket.AgentIndex + " was already taken", 0);
    return;
}

Debug.Print("spawned index " + spawned.Index + " team " + spawned.Team.TeamIndex, 0);
```

Reinforcement wave that lands at a scene spawn point and keeps its slot:

```csharp
AgentBuildData reinforcement = new AgentBuildData(troopOrigin)
    .Controller(AgentControllerType.AI)
    .Team(enemyTeam)
    .IsReinforcement(true)
    .SpawnsIntoOwnFormation(true)
    .FormationTroopSpawnIndex(slotIndex)
    .EquipmentSeed(reinforcementSeed);

// Resolve the frame AFTER the fluent chain: the builder needs the entity up front,
// so the lookup cannot sit inside it.
WeakGameEntity spawnPointEntity = Mission.Current.Scene.FindWeakEntityWithTag("reinforce_point");
reinforcement = reinforcement.InitialFrameFromSpawnPointEntity(spawnPointEntity);

Agent spawnedReinforcement = Mission.Current.SpawnAgent(reinforcement);
if (spawnedReinforcement != null)
{
    Debug.Print("slot " + slotIndex + " now holds agent " + spawnedReinforcement.Index, 0);
}
```

Riding a mission peer, which is also the switch that turns off colour randomisation:

```csharp
AgentBuildData peerAgent = new AgentBuildData(characterObject)
    .MissionPeer(peer)
    .OwningMissionPeer(peer)
    .Team(peer.ControlledAgent.Team)
    .Controller(AgentControllerType.Agent)
    .EquipmentSeed(peerControlledAgent.EquipmentSeed);

Debug.Print("randomize colours = " + peerAgent.RandomizeColors, 0);
```

## Risks and boundaries

1. **No public parameterless constructor.** Three overloads only: `AgentData`, `IAgentOriginBase`, `BasicCharacterObject`. Reaching for `new AgentBuildData()` does not compile.
2. **Builders and properties have different names.** `Team` is the method, `AgentTeam` is the property. Same for `Character`/`AgentCharacter`, `Formation`/`AgentFormation`, `Equipment`/`AgentOverridenSpawnEquipment`. Getting them backwards is a compile error, not a silent no-op.
3. **Properties are write-once from outside.** Every `{ get; private set; }` member is filled by a fluent call or by `SpawnAgent` internals. Re-reading a ticket after spawning gives you the values the engine committed, which is occasionally *not* what you asked for (index allocation, formation resolution).
4. **Explicit `Index` collisions are silent.** `Mission.SpawnAgent` returns `null` rather than throwing. Always check the return value; the caller of `SpawnAgent` has no other way to know.
5. **Two gear channels.** `Equipment` and `MissionEquipment` are independent. Writing only `MissionEquipment` on a ticket that will also spawn from `Equipment` produces equipment that is instantly overwritten.
6. **`Team.Invalid` is the default and it is a trap.** Every formation, morale, and friendly-fire check downstream keys on a valid team. A ticket that never calls `Team(...)` spawns an agent that the game cannot account for.
7. **`UseFaceCache` / `FaceCacheId` are opt-in and sticky.** `FaceCacheId` is a plain setter with no uniqueness check. Two spawned agents sharing an id share a face mesh — visible as duplicated faces in a formation, with no error.
8. **`NoHorses` beats `Monster`.** Setting both is not a conflict resolution, it is dead configuration.
9. **Not saved.** The ticket is a construction-time artefact consumed by `SpawnAgent`. It is not a savegame object and there is no `SyncData`-shaped surface on it; network state travels through `MissionPeer`, not through the ticket.
10. **43 fluent methods all return `this`.** Chaining is fine, but there is no `Clone`. If you need two agents from one ticket, keep the source data (the `BasicCharacterObject` or `IAgentOriginBase`) and build twice — mutating a spent ticket does not retroactively affect the agent already spawned from it, but it does silently change any *later* spawn that reuses it.

## Dependencies

- **Consumer:** [`Mission`](../../mission/Mission) `SpawnAgent(AgentBuildData, bool)` is the single public entry point that turns a ticket into an `Agent`.
- **Backing store:** [`AgentData`](../../core-extra/AgentData) holds everything the `=>` pass-through properties read; it is constructed by this type's three constructors.
- **Result:** [`Agent`](../../mission/Agent) exposes the committed values afterwards — `Index`, `Team`, `Controller`, `Formation`.
- **Placement:** [`Formation`](../../mission/Formation), [`Team`](../Team), and the `WeakGameEntity` spawn points that [`Scene`](../../engine/Scene) `FindWeakEntityWithTag` hands back decide where the agent lands.
- **Identity:** [`MissionPeer`](../MissionPeer) and [`MissionControllerType`](../../core-extra/AgentControllerType) drive the network-side writes.
- **Gear:** [`Equipment`](../../core-extra/Equipment) and [`MissionEquipment`](../MissionEquipment) are the two gear channels this ticket writes.
- **Visuals input:** `AgentBuildData` (this type) feeds straight into [`AgentVisualsData`](../AgentVisualsData) when the agent's mesh is built.
- Bucket home: [mission-ext API section](../)
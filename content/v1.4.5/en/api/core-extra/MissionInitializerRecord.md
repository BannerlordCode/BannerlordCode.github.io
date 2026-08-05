---
title: "MissionInitializerRecord"
description: "The scene, campaign-mode, map-patch, and rendering initialization record passed when a Mission is opened; it configures creation rather than representing a running Mission."
---

# MissionInitializerRecord

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public struct MissionInitializerRecord(string name)`  
**Base:** `ISerializableObject` (explicit implementation)  
**Source:** `bin/TaleWorlds.Core/TaleWorlds.Core/MissionInitializerRecord.cs`

## Responsibility

It packages the scene name and opening parameters passed to `MissionState.OpenNew`, telling the engine which scene, levels, and mission environment to initialize.

## Mental model

This is a **pre-Mission initialization value**, not the runtime state of a `Mission`. An opening factory normally constructs it, and `MissionState` passes it into native mission initialization. Once the mission is running, mod code should use `Mission.Current` and `MissionBehavior` for runtime objects rather than treating this record as a scene handle.

The usual entry is `new MissionInitializerRecord(scene)` followed by an object initializer for the fields relevant to that scene. The `MissionState.OpenNew` delegate creates the behavior array; this record does not create Agents, Teams, or MissionBehaviors. Campaign code also receives it in `Campaign.OnMissionIsStarting(string, MissionInitializerRecord)` and can use `PlayingInCampaignMode` to distinguish campaign missions.

## When to use it

Use it when opening a scene-backed Mission through `MissionState.OpenNew` or a `CampaignMission` entry point, especially when the scene needs explicit levels, terrain, map-patch, campaign-atmosphere, corpse, or loading-screen settings.

Do not use it to find Agents, Teams, or the current Mission; use `Mission.Current`. Do not use it as a save-game DTO: its explicit `SerializeTo` writes only the subset and order defined by the source. Public fields are not automatically equivalent to persistent mod data. Setting the record also does not mean that Agents have finished loading; behavior callbacks must still respect the Mission lifecycle.

## Fields and side effects

| Field | Purpose and boundary |
|---|---|
| `SceneName` | Scene name supplied to the engine. |
| `SceneLevels` | Scene level/layer string; it must match the scene and factory convention. |
| `TerrainType` | Terrain input; do not guess integer values without the engine/scene contract. |
| `NeedsRandomTerrain` / `RandomTerrainSeed` | Requests random terrain and its seed where the Mission supports it. |
| `DamageToFriendsMultiplier` / `DamageFromPlayerToFriendsMultiplier` | Opening damage parameters, not a runtime replacement for battle damage logic. |
| `PlayingInCampaignMode` | Campaign marker consumed by Campaign mission-start handling. |
| `EnableSceneRecording` | Requests scene recording and may affect engine-side work/output. |
| `SceneUpgradeLevel` | Scene upgrade level expected by the scene/module. |
| `SceneHasMapPatch` / `PatchCoordinates` / `PatchEncounterDir` | Map-patch presence, coordinates, and encounter direction; set them together only for a map-patch mission. |
| `DoNotUseLoadingScreen` | Requests no loading screen; it does not prove that scene loading is complete. |
| `DisableDynamicPointlightShadows` / `DisableCorpseFadeOut` | Rendering and corpse-cleanup switches; they do not decide the battle result. |
| `DecalAtlasGroup` | Decal atlas group used by the scene; follow the concrete mission factory. |
| `AtmosphereOnCampaign` | Campaign atmosphere information; it is serialized only when `IsValid` is true. |

The explicit `ISerializableObject.SerializeTo` and `DeserializeFrom` implementations define an engine boundary. In 1.4.5 they are not a symmetric copy of every public field: serialization writes `SceneName`, `SceneLevels`, a fixed `6f`, random-terrain settings, recording and upgrade settings, campaign/loading/rendering flags, `DecalAtlasGroup`, and an optional valid atmosphere payload. Deserialization reads the names, consumes and discards the float, reads only the corresponding subset of flags, and does not read `DecalAtlasGroup`, terrain/damage fields, or map-patch fields. Treat this as a version-specific engine/wire contract, not as a round-trippable save DTO.

## Handoff into the engine

There are three layers in the opening path:

1. A campaign caller can use [`CampaignMission`](../../campaign/CampaignMission) or its [`ICampaignMission`](../../campaign/ICampaignMission) manager. For example, `CampaignMission.OpenBattleMission(rec)` delegates to `Campaign.Current.CampaignMissionManager.OpenBattleMission(rec)` and returns an `IMission`.
2. A direct mission caller uses [`MissionState`](../../campaign-ext/MissionState). `MissionState.OpenNew` first invokes `Game.Current.OnMissionIsStarting`, creates a `MissionState`, constructs the [`Mission`](../../mission/Mission), attaches the behavior list, and pushes the state.
3. During `Mission.Initialize`, the managed mission passes its native pointer and the record by reference to the internal [`IMBMission`](../../mission/IMBMission) bridge: `MBAPI.IMBMission.InitializeMission(Pointer, ref rec)`. This is the point where the scene and native initialization options leave the managed `Mission` layer; mod code should configure the record before this call rather than trying to change its initialization fields after loading.

The campaign callback reads `PlayingInCampaignMode` in `Campaign.OnMissionIsStarting(string, MissionInitializerRecord)`. It is an early notification, not ownership of a long-lived record.

## Dependencies

- **Creation:** [`Mission`](../../mission/Mission) is hosted by the state created through `MissionState.OpenNew`; campaign entry points may go through `CampaignMission` first.
- **Parallel input:** the factory's `InitializeMissionBehaviorsDelegate` returns [`MissionBehavior`](../../mission/MissionBehavior) objects; the record does not register them.
- **Downstream consumer:** `Campaign.OnMissionIsStarting` reads the record; after initialization, behaviors use [`Mission.Current`](../../mission/Mission) for runtime state.
- **Related result flow:** [`MissionLogic`](../../mission-ext/MissionLogic) and [`MissionResult`](../MissionResult) handle outcomes; this record does not produce a result.

## Real example

This follows the real `BannerlordMissions.OpenCustomBattleMission` entry shape: construct the record from a scene name, then pass it to `MissionState.OpenNew`. An empty behavior array is a valid minimal shape; a real mission normally returns its own `MissionBehavior` instances.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static Mission OpenMission(string scene)
{
    return MissionState.OpenNew(
        "CustomBattle",
        new MissionInitializerRecord(scene)
        {
            PlayingInCampaignMode = false,
            SceneLevels = ""
        },
        (Mission mission) => new MissionBehavior[0]);
}
```

The real campaign consumption point is `Campaign.OnMissionIsStarting`: it receives the same record and raises campaign mission-start handling when `rec.PlayingInCampaignMode` is true. After `MissionState.OpenNew` creates the mission, `Mission.Initialize` forwards the record by reference to `MBAPI.IMBMission.InitializeMission`; that native handoff is why later edits to a local copy do not reconfigure the already-created scene. The callback is for mission-start processing, not for retaining the record across missions.

## Risks

1. A `SceneName`, `SceneLevels`, or map-patch combination that does not match the resources fails at the scene-initialization boundary; a later tick callback cannot repair it.
2. `DoNotUseLoadingScreen` changes presentation only. Reading incomplete Agents or Teams during `Initializing` is still unsafe.
3. The explicit record serializer is not Campaign behavior `SyncData` and is not `[SaveableField]`. Because the 1.4.5 read and write paths cover different fields, using it as a mod save container can silently lose settings or misalign a consumer that assumes a complete round trip.
4. Fixed-length strings and native-layout fields cross the managed/native boundary. Do not put arbitrary long text or unsupported objects in the record.

## Navigation

- Parent: [core-extra index](../)
- Siblings: [`MissionMode`](../MissionMode) · [`MissionResult`](../MissionResult)
- Related entry points: [`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../../mission-ext/MissionLogic)
- Architecture: [developer roadmap](../../../architecture/developer-roadmap) · [documentation contract](../../../architecture/doc-contract)

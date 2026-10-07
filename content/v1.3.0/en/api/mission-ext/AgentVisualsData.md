---
title: "AgentVisualsData"
description: "Auto-generated class reference for AgentVisualsData."
---
# AgentVisualsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## Overview

`AgentVisualsData` is the argument object that every agent-visual creation path in the engine goes through. You build one, chain the fluent setters, and hand the finished chain to `AgentVisuals.Create` (`AgentVisuals.cs:306`) or to the `IAgentVisualCreator` the mission exposes as `Mission.Current.AgentVisualCreator` (`AgentVisualsCreator.cs:9`). One instance describes one character that is about to be instantiated into a scene: skeleton, action set, body properties, equipment, which equipment slots are held in which hand, and rendering switches such as translucency and tesselation. The class itself is declared as a plain public class with no base type (`AgentVisualsData.cs:9`) and owns no engine resource — it carries one plain public field, `MBAgentVisuals AgentVisuals` (`AgentVisualsData.cs:427`), which the creator fills in after the fact. Instances are short-lived: every call site in the engine news one up inline and drops it as soon as `Create` returns, and the thing that outlives it is the `IAgentVisual` produced from it, never this data.

## Mental Model

Read it as a write-once builder. Every setter assigns exactly one field and returns `this` (`AgentVisualsData.cs:208`), so the whole description reads as a single statement and is complete before anyone consumes it. Nothing validates the combination: `Create` reads the fields in whatever state you left them, so an object you forgot to finish renders a subtly wrong agent rather than throwing.

Three boundaries matter. First, every property setter is private (`AgentVisualsData.cs:14`), so once constructed the object is read-only from outside the class. The copy constructor `new AgentVisualsData(existing)` (`AgentVisualsData.cs:162`) is the only supported way to fork a description — and it is a flat field copy, so a fork shares the same `Scene`, `Equipment` and `GameEntity` references as the original.

Second, the constructor defaults are sentinels, not neutral values. `ScaleData` defaults to `0f` (`AgentVisualsData.cs:204`), not `1f`. Both cloth colours default to `uint.MaxValue` (`AgentVisualsData.cs:200`), which is the same "nothing overrides this" value `AgentVisualHolder.GetClothingColors` returns when there is no override at all (`AgentVisualHolder.cs:97`) — so the default means *the engine decides*, not *white*. Both wielded-item indices default to `-1` (`AgentVisualsData.cs:202`), and `ActionCodeData` is pre-seeded to `ActionIndexCache.act_none` (`AgentVisualsData.cs:134`).

Third, `GetCachedWeaponEntity` reads out of a fixed five-field cache through a `switch` whose `default` arm returns `null` (`AgentVisualsData.cs:321`). A non-weapon `EquipmentIndex` does not throw — it yields `null`, and that null is forwarded straight into `AgentVisuals.AddWeaponToAgentEntity` (`AgentVisuals.cs:342`).

## How to use

**Getting one.** There is no static factory and no registry. The only constructors are the parameterless `AgentVisualsData()` (`AgentVisualsData.cs:198`) and the copy constructor (`AgentVisualsData.cs:162`), so you construct it yourself, at a point where a `Scene` already exists, and pass the completed chain to one of two entry points:

- `AgentVisuals.Create(data, name, isRandomProgress, needBatchedVersionForWeaponMeshes, forceUseFaceCache)` — the static form (`AgentVisuals.cs:306`).
- `Mission.Current.AgentVisualCreator.Create(data, name, needBatchedVersionForWeaponMeshes, forceUseFaceCache)` — the mission-scoped form, which is what a `MissionBehavior` should use (`MultiplayerMissionAgentVisualSpawnComponent.cs:129`).

A typical use, modelled on the engine's own multiplayer agent-spawn path:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.View;

ActionIndexCache action = ActionIndexCache.act_idle;
Monster baseMonsterFromRace = MBGlobals.GetMonsterFromRace(characterObject.Race);

// Build the whole description in one fluent chain...
AgentVisualsData data = new AgentVisualsData()
    .UseMorphAnims(true)
    .Equipment(characterObject.Equipment)
    .BodyProperties(characterObject.GetBodyProperties(characterObject.Equipment, -1))
    .SkeletonType(characterObject.IsFemale ? SkeletonType.Female : SkeletonType.Male)
    .Race(characterObject.Race)
    .Frame(MatrixFrame.Identity)
    .ActionSet(MBGlobals.GetActionSetWithSuffix(baseMonsterFromRace, characterObject.IsFemale, "_facegen"))
    .ActionCode(action)
    .Scene(Mission.Current.Scene)
    .Monster(baseMonsterFromRace)
    .PrepareImmediately(false)
    .RightWieldedItemIndex(0)
    .LeftWieldedItemIndex(1)
    .ClothColor1(teamColor1)
    .ClothColor2(teamColor2);

// ...then hand it to the creator exactly once and keep the IAgentVisual, not the data.
IAgentVisual visual = Mission.Current.AgentVisualCreator.Create(
    data, "MyMod::SpawnAgentVisuals", true, false);
```

Note that `ActionCode` takes its argument `in` (`AgentVisualsData.cs:371`), so you may pass a value expression but you cannot assign `data.ActionCodeData` yourself — the setter is private.

**The most common mistake** is treating `CachedWeaponEntity` as a general-purpose map. Its setter is a `switch` over five enum values with **no `default` arm** (`AgentVisualsData.cs:328`): pass an index that is not one of the five weapon slots — `EquipmentIndex.Head`, say — and the method falls straight through to `return this`, silently storing nothing while the return value still looks like success. The engine itself falls into this shape at `MobilePartyVisual.cs:922`, which passes the raw literal `4` instead of `EquipmentIndex.ExtraWeaponSlot`; that happens to be correct only because `WeaponItemBeginSlot` and `Weapon0` are both `0` (`EquipmentIndex.cs:13`) and `ExtraWeaponSlot` lands on `4` (`EquipmentIndex.cs:21`). Write the enum member, not the number, and nothing is silently dropped.

## Key Properties

| Name | Signature |
|------|-----------|
| `ActionSetData` | `public MBActionSet ActionSetData { get; }` |
| `FrameData` | `public MatrixFrame FrameData { get; }` |
| `BodyPropertiesData` | `public BodyProperties BodyPropertiesData { get; }` |
| `EquipmentData` | `public Equipment EquipmentData { get; }` |
| `RightWieldedItemIndexData` | `public int RightWieldedItemIndexData { get; }` |
| `LeftWieldedItemIndexData` | `public int LeftWieldedItemIndexData { get; }` |
| `SkeletonTypeData` | `public SkeletonType SkeletonTypeData { get; }` |
| `BannerData` | `public Banner BannerData { get; }` |
| `CachedWeaponSlot0Entity` | `public GameEntity CachedWeaponSlot0Entity { get; }` |
| `CachedWeaponSlot1Entity` | `public GameEntity CachedWeaponSlot1Entity { get; }` |
| `CachedWeaponSlot2Entity` | `public GameEntity CachedWeaponSlot2Entity { get; }` |
| `CachedWeaponSlot3Entity` | `public GameEntity CachedWeaponSlot3Entity { get; }` |
| `CachedWeaponSlot4Entity` | `public GameEntity CachedWeaponSlot4Entity { get; }` |
| `SceneData` | `public Scene SceneData { get; }` |
| `MonsterData` | `public Monster MonsterData { get; }` |
| `PrepareImmediatelyData` | `public bool PrepareImmediatelyData { get; }` |
| `UseScaledWeaponsData` | `public bool UseScaledWeaponsData { get; }` |
| `UseTranslucencyData` | `public bool UseTranslucencyData { get; }` |
| `UseTesselationData` | `public bool UseTesselationData { get; }` |
| `UseMorphAnimsData` | `public bool UseMorphAnimsData { get; }` |
| `ClothColor1Data` | `public uint ClothColor1Data { get; }` |
| `ClothColor2Data` | `public uint ClothColor2Data { get; }` |
| `ScaleData` | `public float ScaleData { get; }` |
| `CharacterObjectStringIdData` | `public string CharacterObjectStringIdData { get; }` |
| `ActionCodeData` | `public ActionIndexCache ActionCodeData { get; }` |
| `EntityData` | `public GameEntity EntityData { get; }` |
| `HasClippingPlaneData` | `public bool HasClippingPlaneData { get; }` |
| `MountCreationKeyData` | `public string MountCreationKeyData { get; }` |
| `AddColorRandomnessData` | `public bool AddColorRandomnessData { get; }` |
| `RaceData` | `public int RaceData { get; }` |

## Key Methods

### Equipment
`public AgentVisualsData Equipment(Equipment equipment)`

**Purpose:** Executes the Equipment logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Equipment(equipment);
```

### BodyProperties
`public AgentVisualsData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Executes the BodyProperties logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.BodyProperties(bodyProperties);
```

### Frame
`public AgentVisualsData Frame(MatrixFrame frame)`

**Purpose:** Executes the Frame logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Frame(frame);
```

### ActionSet
`public AgentVisualsData ActionSet(MBActionSet actionSet)`

**Purpose:** Executes the ActionSet logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionSet(actionSet);
```

### Scene
`public AgentVisualsData Scene(Scene scene)`

**Purpose:** Executes the Scene logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scene(scene);
```

### Monster
`public AgentVisualsData Monster(Monster monster)`

**Purpose:** Executes the Monster logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Monster(monster);
```

### PrepareImmediately
`public AgentVisualsData PrepareImmediately(bool prepareImmediately)`

**Purpose:** Finishes prerequisite setup for the upcoming immediately operation.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.PrepareImmediately(false);
```

### UseScaledWeapons
`public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)`

**Purpose:** Executes the UseScaledWeapons logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseScaledWeapons(false);
```

### SkeletonType
`public AgentVisualsData SkeletonType(SkeletonType skeletonType)`

**Purpose:** Executes the SkeletonType logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.SkeletonType(skeletonType);
```

### UseMorphAnims
`public AgentVisualsData UseMorphAnims(bool useMorphAnims)`

**Purpose:** Executes the UseMorphAnims logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseMorphAnims(false);
```

### ClothColor1
`public AgentVisualsData ClothColor1(uint clothColor1)`

**Purpose:** Executes the ClothColor1 logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor1(0);
```

### ClothColor2
`public AgentVisualsData ClothColor2(uint clothColor2)`

**Purpose:** Executes the ClothColor2 logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor2(0);
```

### Banner
`public AgentVisualsData Banner(Banner banner)`

**Purpose:** Executes the Banner logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Banner(banner);
```

### Race
`public AgentVisualsData Race(int race)`

**Purpose:** Executes the Race logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Race(0);
```

### GetCachedWeaponEntity
`public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)`

**Purpose:** Reads and returns the cached weapon entity value held by the this instance.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.GetCachedWeaponEntity(slotIndex);
```

### CachedWeaponEntity
`public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)`

**Purpose:** Executes the CachedWeaponEntity logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CachedWeaponEntity(slotIndex, cachedWeaponEntity);
```

### Entity
`public AgentVisualsData Entity(GameEntity entity)`

**Purpose:** Executes the Entity logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Entity(entity);
```

### UseTranslucency
`public AgentVisualsData UseTranslucency(bool useTranslucency)`

**Purpose:** Executes the UseTranslucency logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTranslucency(false);
```

### UseTesselation
`public AgentVisualsData UseTesselation(bool useTesselation)`

**Purpose:** Executes the UseTesselation logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTesselation(false);
```

### ActionCode
`public AgentVisualsData ActionCode(in ActionIndexCache actionCode)`

**Purpose:** Executes the ActionCode logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionCode(actionCode);
```

### RightWieldedItemIndex
`public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)`

**Purpose:** Executes the RightWieldedItemIndex logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.RightWieldedItemIndex(0);
```

### LeftWieldedItemIndex
`public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)`

**Purpose:** Executes the LeftWieldedItemIndex logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.LeftWieldedItemIndex(0);
```

### Scale
`public AgentVisualsData Scale(float scale)`

**Purpose:** Executes the Scale logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scale(0);
```

### CharacterObjectStringId
`public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)`

**Purpose:** Executes the CharacterObjectStringId logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CharacterObjectStringId("example");
```

### HasClippingPlane
`public AgentVisualsData HasClippingPlane(bool hasClippingPlane)`

**Purpose:** Determines whether the this instance already holds clipping plane.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.HasClippingPlane(false);
```

### MountCreationKey
`public AgentVisualsData MountCreationKey(string mountCreationKey)`

**Purpose:** Executes the MountCreationKey logic.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.MountCreationKey("example");
```

### AddColorRandomness
`public AgentVisualsData AddColorRandomness(bool addColorRandomness)`

**Purpose:** Adds color randomness to the current collection or state.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.AddColorRandomness(false);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
AgentVisualsData entry = ...;
```

## See Also

- [Area Index](../)
- [AgentVisuals](../AgentVisuals) — the consumer that turns this data into a rendered agent
- [AgentVisualsCreator](../AgentVisualsCreator) — the `IAgentVisualCreator` implementation that accepts it
- [AgentVisualHolder](../AgentVisualHolder) — base holder whose `Refresh` and `GetCopyAgentVisualsData` take it
- [AgentBuildData](../AgentBuildData) — the per-agent spawn descriptor built just before this one
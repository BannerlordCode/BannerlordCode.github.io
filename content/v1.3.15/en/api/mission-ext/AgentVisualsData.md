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

`AgentVisualsData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `AgentVisualsData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Equipment(equipment);
```

### BodyProperties
`public AgentVisualsData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.BodyProperties(bodyProperties);
```

### Frame
`public AgentVisualsData Frame(MatrixFrame frame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Frame(frame);
```

### ActionSet
`public AgentVisualsData ActionSet(MBActionSet actionSet)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionSet(actionSet);
```

### Scene
`public AgentVisualsData Scene(Scene scene)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scene(scene);
```

### Monster
`public AgentVisualsData Monster(Monster monster)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Monster(monster);
```

### PrepareImmediately
`public AgentVisualsData PrepareImmediately(bool prepareImmediately)`

**Purpose:** Finishes prerequisite setup for the upcoming `immediately` operation.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.PrepareImmediately(false);
```

### UseScaledWeapons
`public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseScaledWeapons(false);
```

### SkeletonType
`public AgentVisualsData SkeletonType(SkeletonType skeletonType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.SkeletonType(skeletonType);
```

### UseMorphAnims
`public AgentVisualsData UseMorphAnims(bool useMorphAnims)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseMorphAnims(false);
```

### ClothColor1
`public AgentVisualsData ClothColor1(uint clothColor1)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor1(0);
```

### ClothColor2
`public AgentVisualsData ClothColor2(uint clothColor2)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor2(0);
```

### Banner
`public AgentVisualsData Banner(Banner banner)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Banner(banner);
```

### Race
`public AgentVisualsData Race(int race)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Race(0);
```

### GetCachedWeaponEntity
`public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)`

**Purpose:** Reads and returns the `cached weapon entity` value held by the current object.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.GetCachedWeaponEntity(slotIndex);
```

### CachedWeaponEntity
`public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CachedWeaponEntity(slotIndex, cachedWeaponEntity);
```

### Entity
`public AgentVisualsData Entity(GameEntity entity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Entity(entity);
```

### UseTranslucency
`public AgentVisualsData UseTranslucency(bool useTranslucency)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTranslucency(false);
```

### UseTesselation
`public AgentVisualsData UseTesselation(bool useTesselation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTesselation(false);
```

### ActionCode
`public AgentVisualsData ActionCode(in ActionIndexCache actionCode)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionCode(actionCode);
```

### RightWieldedItemIndex
`public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.RightWieldedItemIndex(0);
```

### LeftWieldedItemIndex
`public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.LeftWieldedItemIndex(0);
```

### Scale
`public AgentVisualsData Scale(float scale)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scale(0);
```

### CharacterObjectStringId
`public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CharacterObjectStringId("example");
```

### HasClippingPlane
`public AgentVisualsData HasClippingPlane(bool hasClippingPlane)`

**Purpose:** Determines whether the current object already holds `clipping plane`.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.HasClippingPlane(false);
```

### MountCreationKey
`public AgentVisualsData MountCreationKey(string mountCreationKey)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of AgentVisualsData from the subsystem API first
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.MountCreationKey("example");
```

### AddColorRandomness
`public AgentVisualsData AddColorRandomness(bool addColorRandomness)`

**Purpose:** Adds `color randomness` to the current collection or state.

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
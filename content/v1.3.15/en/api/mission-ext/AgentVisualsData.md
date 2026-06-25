---
title: "AgentVisualsData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisualsData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `equipment`.

### BodyProperties
`public AgentVisualsData BodyProperties(BodyProperties bodyProperties)`

**Purpose:** Handles logic related to `body properties`.

### Frame
`public AgentVisualsData Frame(MatrixFrame frame)`

**Purpose:** Handles logic related to `frame`.

### ActionSet
`public AgentVisualsData ActionSet(MBActionSet actionSet)`

**Purpose:** Handles logic related to `action set`.

### Scene
`public AgentVisualsData Scene(Scene scene)`

**Purpose:** Handles logic related to `scene`.

### Monster
`public AgentVisualsData Monster(Monster monster)`

**Purpose:** Handles logic related to `monster`.

### PrepareImmediately
`public AgentVisualsData PrepareImmediately(bool prepareImmediately)`

**Purpose:** Handles logic related to `prepare immediately`.

### UseScaledWeapons
`public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)`

**Purpose:** Handles logic related to `use scaled weapons`.

### SkeletonType
`public AgentVisualsData SkeletonType(SkeletonType skeletonType)`

**Purpose:** Handles logic related to `skeleton type`.

### UseMorphAnims
`public AgentVisualsData UseMorphAnims(bool useMorphAnims)`

**Purpose:** Handles logic related to `use morph anims`.

### ClothColor1
`public AgentVisualsData ClothColor1(uint clothColor1)`

**Purpose:** Handles logic related to `cloth color1`.

### ClothColor2
`public AgentVisualsData ClothColor2(uint clothColor2)`

**Purpose:** Handles logic related to `cloth color2`.

### Banner
`public AgentVisualsData Banner(Banner banner)`

**Purpose:** Handles logic related to `banner`.

### Race
`public AgentVisualsData Race(int race)`

**Purpose:** Handles logic related to `race`.

### GetCachedWeaponEntity
`public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)`

**Purpose:** Gets the current value of `cached weapon entity`.

### CachedWeaponEntity
`public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)`

**Purpose:** Handles logic related to `cached weapon entity`.

### Entity
`public AgentVisualsData Entity(GameEntity entity)`

**Purpose:** Handles logic related to `entity`.

### UseTranslucency
`public AgentVisualsData UseTranslucency(bool useTranslucency)`

**Purpose:** Handles logic related to `use translucency`.

### UseTesselation
`public AgentVisualsData UseTesselation(bool useTesselation)`

**Purpose:** Handles logic related to `use tesselation`.

### ActionCode
`public AgentVisualsData ActionCode(in ActionIndexCache actionCode)`

**Purpose:** Handles logic related to `action code`.

### RightWieldedItemIndex
`public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)`

**Purpose:** Handles logic related to `right wielded item index`.

### LeftWieldedItemIndex
`public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)`

**Purpose:** Handles logic related to `left wielded item index`.

### Scale
`public AgentVisualsData Scale(float scale)`

**Purpose:** Handles logic related to `scale`.

### CharacterObjectStringId
`public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)`

**Purpose:** Handles logic related to `character object string id`.

### HasClippingPlane
`public AgentVisualsData HasClippingPlane(bool hasClippingPlane)`

**Purpose:** Checks whether the current object has/contains `clipping plane`.

### MountCreationKey
`public AgentVisualsData MountCreationKey(string mountCreationKey)`

**Purpose:** Handles logic related to `mount creation key`.

### AddColorRandomness
`public AgentVisualsData AddColorRandomness(bool addColorRandomness)`

**Purpose:** Adds `color randomness` to the current collection or state.

## Usage Example

```csharp
var value = new AgentVisualsData();
```

## See Also

- [Complete Class Catalog](../catalog)
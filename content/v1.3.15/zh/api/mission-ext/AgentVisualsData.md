---
title: "AgentVisualsData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentVisualsData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVisualsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## 概述

`AgentVisualsData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `AgentVisualsData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

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

## 主要方法

### Equipment
`public AgentVisualsData Equipment(Equipment equipment)`

**用途 / Purpose:** 处理 `equipment` 相关逻辑。

### BodyProperties
`public AgentVisualsData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** 处理 `body properties` 相关逻辑。

### Frame
`public AgentVisualsData Frame(MatrixFrame frame)`

**用途 / Purpose:** 处理 `frame` 相关逻辑。

### ActionSet
`public AgentVisualsData ActionSet(MBActionSet actionSet)`

**用途 / Purpose:** 处理 `action set` 相关逻辑。

### Scene
`public AgentVisualsData Scene(Scene scene)`

**用途 / Purpose:** 处理 `scene` 相关逻辑。

### Monster
`public AgentVisualsData Monster(Monster monster)`

**用途 / Purpose:** 处理 `monster` 相关逻辑。

### PrepareImmediately
`public AgentVisualsData PrepareImmediately(bool prepareImmediately)`

**用途 / Purpose:** 处理 `prepare immediately` 相关逻辑。

### UseScaledWeapons
`public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)`

**用途 / Purpose:** 处理 `use scaled weapons` 相关逻辑。

### SkeletonType
`public AgentVisualsData SkeletonType(SkeletonType skeletonType)`

**用途 / Purpose:** 处理 `skeleton type` 相关逻辑。

### UseMorphAnims
`public AgentVisualsData UseMorphAnims(bool useMorphAnims)`

**用途 / Purpose:** 处理 `use morph anims` 相关逻辑。

### ClothColor1
`public AgentVisualsData ClothColor1(uint clothColor1)`

**用途 / Purpose:** 处理 `cloth color1` 相关逻辑。

### ClothColor2
`public AgentVisualsData ClothColor2(uint clothColor2)`

**用途 / Purpose:** 处理 `cloth color2` 相关逻辑。

### Banner
`public AgentVisualsData Banner(Banner banner)`

**用途 / Purpose:** 处理 `banner` 相关逻辑。

### Race
`public AgentVisualsData Race(int race)`

**用途 / Purpose:** 处理 `race` 相关逻辑。

### GetCachedWeaponEntity
`public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)`

**用途 / Purpose:** 获取 `cached weapon entity` 的当前值。

### CachedWeaponEntity
`public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)`

**用途 / Purpose:** 处理 `cached weapon entity` 相关逻辑。

### Entity
`public AgentVisualsData Entity(GameEntity entity)`

**用途 / Purpose:** 处理 `entity` 相关逻辑。

### UseTranslucency
`public AgentVisualsData UseTranslucency(bool useTranslucency)`

**用途 / Purpose:** 处理 `use translucency` 相关逻辑。

### UseTesselation
`public AgentVisualsData UseTesselation(bool useTesselation)`

**用途 / Purpose:** 处理 `use tesselation` 相关逻辑。

### ActionCode
`public AgentVisualsData ActionCode(in ActionIndexCache actionCode)`

**用途 / Purpose:** 处理 `action code` 相关逻辑。

### RightWieldedItemIndex
`public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)`

**用途 / Purpose:** 处理 `right wielded item index` 相关逻辑。

### LeftWieldedItemIndex
`public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)`

**用途 / Purpose:** 处理 `left wielded item index` 相关逻辑。

### Scale
`public AgentVisualsData Scale(float scale)`

**用途 / Purpose:** 处理 `scale` 相关逻辑。

### CharacterObjectStringId
`public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)`

**用途 / Purpose:** 处理 `character object string id` 相关逻辑。

### HasClippingPlane
`public AgentVisualsData HasClippingPlane(bool hasClippingPlane)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `clipping plane`。

### MountCreationKey
`public AgentVisualsData MountCreationKey(string mountCreationKey)`

**用途 / Purpose:** 处理 `mount creation key` 相关逻辑。

### AddColorRandomness
`public AgentVisualsData AddColorRandomness(bool addColorRandomness)`

**用途 / Purpose:** 向当前集合/状态中添加 `color randomness`。

## 使用示例

```csharp
var value = new AgentVisualsData();
```

## 参见

- [完整类目录](../catalog)
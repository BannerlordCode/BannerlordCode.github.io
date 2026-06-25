---
title: "AgentVisualsData"
description: "AgentVisualsData 的自动生成类参考。"
---
# AgentVisualsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs`

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

**用途 / Purpose:** **用途 / Purpose:** 调用 Equipment 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Equipment(equipment);
```

### BodyProperties
`public AgentVisualsData BodyProperties(BodyProperties bodyProperties)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BodyProperties 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.BodyProperties(bodyProperties);
```

### Frame
`public AgentVisualsData Frame(MatrixFrame frame)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Frame 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Frame(frame);
```

### ActionSet
`public AgentVisualsData ActionSet(MBActionSet actionSet)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ActionSet 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionSet(actionSet);
```

### Scene
`public AgentVisualsData Scene(Scene scene)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Scene 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scene(scene);
```

### Monster
`public AgentVisualsData Monster(Monster monster)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Monster 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Monster(monster);
```

### PrepareImmediately
`public AgentVisualsData PrepareImmediately(bool prepareImmediately)`

**用途 / Purpose:** **用途 / Purpose:** 为即将执行的immediately操作完成前置准备工作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.PrepareImmediately(false);
```

### UseScaledWeapons
`public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseScaledWeapons 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseScaledWeapons(false);
```

### SkeletonType
`public AgentVisualsData SkeletonType(SkeletonType skeletonType)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SkeletonType 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.SkeletonType(skeletonType);
```

### UseMorphAnims
`public AgentVisualsData UseMorphAnims(bool useMorphAnims)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseMorphAnims 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseMorphAnims(false);
```

### ClothColor1
`public AgentVisualsData ClothColor1(uint clothColor1)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClothColor1 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor1(0);
```

### ClothColor2
`public AgentVisualsData ClothColor2(uint clothColor2)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ClothColor2 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ClothColor2(0);
```

### Banner
`public AgentVisualsData Banner(Banner banner)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Banner 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Banner(banner);
```

### Race
`public AgentVisualsData Race(int race)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Race 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Race(0);
```

### GetCachedWeaponEntity
`public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached weapon entity 的结果。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.GetCachedWeaponEntity(slotIndex);
```

### CachedWeaponEntity
`public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CachedWeaponEntity 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CachedWeaponEntity(slotIndex, cachedWeaponEntity);
```

### Entity
`public AgentVisualsData Entity(GameEntity entity)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Entity 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Entity(entity);
```

### UseTranslucency
`public AgentVisualsData UseTranslucency(bool useTranslucency)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseTranslucency 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTranslucency(false);
```

### UseTesselation
`public AgentVisualsData UseTesselation(bool useTesselation)`

**用途 / Purpose:** **用途 / Purpose:** 调用 UseTesselation 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.UseTesselation(false);
```

### ActionCode
`public AgentVisualsData ActionCode(in ActionIndexCache actionCode)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ActionCode 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.ActionCode(actionCode);
```

### RightWieldedItemIndex
`public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RightWieldedItemIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.RightWieldedItemIndex(0);
```

### LeftWieldedItemIndex
`public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 LeftWieldedItemIndex 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.LeftWieldedItemIndex(0);
```

### Scale
`public AgentVisualsData Scale(float scale)`

**用途 / Purpose:** **用途 / Purpose:** 调用 Scale 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.Scale(0);
```

### CharacterObjectStringId
`public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CharacterObjectStringId 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.CharacterObjectStringId("example");
```

### HasClippingPlane
`public AgentVisualsData HasClippingPlane(bool hasClippingPlane)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 clipping plane。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.HasClippingPlane(false);
```

### MountCreationKey
`public AgentVisualsData MountCreationKey(string mountCreationKey)`

**用途 / Purpose:** **用途 / Purpose:** 调用 MountCreationKey 对应的操作。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.MountCreationKey("example");
```

### AddColorRandomness
`public AgentVisualsData AddColorRandomness(bool addColorRandomness)`

**用途 / Purpose:** **用途 / Purpose:** 将 color randomness 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 AgentVisualsData 实例
AgentVisualsData agentVisualsData = ...;
var result = agentVisualsData.AddColorRandomness(false);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
AgentVisualsData entry = ...;
```

## 参见

- [本区域目录](../)
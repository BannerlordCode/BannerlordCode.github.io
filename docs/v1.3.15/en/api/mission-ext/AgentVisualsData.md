<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentVisualsData`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentVisualsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentVisualsData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## Overview

`AgentVisualsData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

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
```csharp
public AgentVisualsData Equipment(Equipment equipment)
```

### BodyProperties
```csharp
public AgentVisualsData BodyProperties(BodyProperties bodyProperties)
```

### Frame
```csharp
public AgentVisualsData Frame(MatrixFrame frame)
```

### ActionSet
```csharp
public AgentVisualsData ActionSet(MBActionSet actionSet)
```

### Scene
```csharp
public AgentVisualsData Scene(Scene scene)
```

### Monster
```csharp
public AgentVisualsData Monster(Monster monster)
```

### PrepareImmediately
```csharp
public AgentVisualsData PrepareImmediately(bool prepareImmediately)
```

### UseScaledWeapons
```csharp
public AgentVisualsData UseScaledWeapons(bool useScaledWeapons)
```

### SkeletonType
```csharp
public AgentVisualsData SkeletonType(SkeletonType skeletonType)
```

### UseMorphAnims
```csharp
public AgentVisualsData UseMorphAnims(bool useMorphAnims)
```

### ClothColor1
```csharp
public AgentVisualsData ClothColor1(uint clothColor1)
```

### ClothColor2
```csharp
public AgentVisualsData ClothColor2(uint clothColor2)
```

### Banner
```csharp
public AgentVisualsData Banner(Banner banner)
```

### Race
```csharp
public AgentVisualsData Race(int race)
```

### GetCachedWeaponEntity
```csharp
public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)
```

### CachedWeaponEntity
```csharp
public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)
```

### Entity
```csharp
public AgentVisualsData Entity(GameEntity entity)
```

### UseTranslucency
```csharp
public AgentVisualsData UseTranslucency(bool useTranslucency)
```

### UseTesselation
```csharp
public AgentVisualsData UseTesselation(bool useTesselation)
```

### ActionCode
```csharp
public AgentVisualsData ActionCode(in ActionIndexCache actionCode)
```

### RightWieldedItemIndex
```csharp
public AgentVisualsData RightWieldedItemIndex(int rightWieldedItemIndex)
```

### LeftWieldedItemIndex
```csharp
public AgentVisualsData LeftWieldedItemIndex(int leftWieldedItemIndex)
```

### Scale
```csharp
public AgentVisualsData Scale(float scale)
```

### CharacterObjectStringId
```csharp
public AgentVisualsData CharacterObjectStringId(string characterObjectStringId)
```

### HasClippingPlane
```csharp
public AgentVisualsData HasClippingPlane(bool hasClippingPlane)
```

### MountCreationKey
```csharp
public AgentVisualsData MountCreationKey(string mountCreationKey)
```

### AddColorRandomness
```csharp
public AgentVisualsData AddColorRandomness(bool addColorRandomness)
```

## Usage Example

```csharp
// Typical usage of AgentVisualsData (Data)
new AgentVisualsData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)
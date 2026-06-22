<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuCharacter`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuCharacter

**命名空间:** TaleWorlds.CampaignSystem.CharacterCreationContent
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`NarrativeMenuCharacter` 是 `TaleWorlds.CampaignSystem.CharacterCreationContent` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BodyProperties` | `public BodyProperties BodyProperties { get; }` |
| `Race` | `public int Race { get; }` |
| `IsFemale` | `public bool IsFemale { get; }` |
| `Equipment` | `public MBEquipmentRoster Equipment { get; }` |
| `AnimationId` | `public string AnimationId { get; }` |
| `MountCreationKey` | `public MountCreationKey MountCreationKey { get; }` |
| `Item1Id` | `public string Item1Id { get; }` |
| `Item2Id` | `public string Item2Id { get; }` |
| `RightHandEquipmentIndex` | `public EquipmentIndex RightHandEquipmentIndex { get; }` |
| `LeftHandEquipmentIndex` | `public EquipmentIndex LeftHandEquipmentIndex { get; }` |


## 主要方法

### UpdateBodyProperties

```csharp
public void UpdateBodyProperties(BodyProperties bodyProperties, int race, bool isFemale)
```

### SetEquipment

```csharp
public void SetEquipment(MBEquipmentRoster equipment)
```

### SetAnimationId

```csharp
public void SetAnimationId(string animationId)
```

### SetRightHandItem

```csharp
public void SetRightHandItem(string itemId)
```

### SetLeftHandItem

```csharp
public void SetLeftHandItem(string itemId)
```

### EquipRightHandItemWithEquipmentIndex

```csharp
public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)
```

### EquipLeftHandItemWithEquipmentIndex

```csharp
public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)
```

### SetSpawnPointEntityId

```csharp
public void SetSpawnPointEntityId(string spawnPointEntityId)
```

### ChangeAge

```csharp
public void ChangeAge(float age)
```

### SetMountCreationKey

```csharp
public void SetMountCreationKey(MountCreationKey mountCreationKey)
```

### SetHorseItemId

```csharp
public void SetHorseItemId(string itemId)
```

### SetHarnessItemId

```csharp
public void SetHarnessItemId(string itemId)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
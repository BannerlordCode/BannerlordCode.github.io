<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NarrativeMenuCharacter`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NarrativeMenuCharacter

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `NarrativeMenuCharacter` is a class in the `TaleWorlds.CampaignSystem.CharacterCreationContent` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
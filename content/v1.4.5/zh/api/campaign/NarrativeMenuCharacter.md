---
title: "NarrativeMenuCharacter"
description: "NarrativeMenuCharacter 的自动生成类参考。"
---
# NarrativeMenuCharacter

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuCharacter`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/NarrativeMenuCharacter.cs`

## 概述

`NarrativeMenuCharacter` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void UpdateBodyProperties(BodyProperties bodyProperties, int race, bool isFemale)`

**用途 / Purpose:** 重新计算并更新 「body properties」 的最新表示。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.UpdateBodyProperties(bodyProperties, 0, false);
```

### SetEquipment
`public void SetEquipment(MBEquipmentRoster equipment)`

**用途 / Purpose:** 为 「equipment」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetEquipment(equipment);
```

### SetAnimationId
`public void SetAnimationId(string animationId)`

**用途 / Purpose:** 为 「animation id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetAnimationId("example");
```

### SetRightHandItem
`public void SetRightHandItem(string itemId)`

**用途 / Purpose:** 为 「right hand item」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetRightHandItem("example");
```

### SetLeftHandItem
`public void SetLeftHandItem(string itemId)`

**用途 / Purpose:** 为 「left hand item」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetLeftHandItem("example");
```

### EquipRightHandItemWithEquipmentIndex
`public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)`

**用途 / Purpose:** 处理与 「equip right hand item with equipment index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.EquipRightHandItemWithEquipmentIndex(item);
```

### EquipLeftHandItemWithEquipmentIndex
`public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)`

**用途 / Purpose:** 处理与 「equip left hand item with equipment index」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.EquipLeftHandItemWithEquipmentIndex(item);
```

### SetSpawnPointEntityId
`public void SetSpawnPointEntityId(string spawnPointEntityId)`

**用途 / Purpose:** 为 「spawn point entity id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetSpawnPointEntityId("example");
```

### ChangeAge
`public void ChangeAge(float age)`

**用途 / Purpose:** 处理与 「change age」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.ChangeAge(0);
```

### SetMountCreationKey
`public void SetMountCreationKey(MountCreationKey mountCreationKey)`

**用途 / Purpose:** 为 「mount creation key」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetMountCreationKey(mountCreationKey);
```

### SetHorseItemId
`public void SetHorseItemId(string itemId)`

**用途 / Purpose:** 为 「horse item id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetHorseItemId("example");
```

### SetHarnessItemId
`public void SetHarnessItemId(string itemId)`

**用途 / Purpose:** 为 「harness item id」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 NarrativeMenuCharacter 实例
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.SetHarnessItemId("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
NarrativeMenuCharacter narrativeMenuCharacter = ...;
narrativeMenuCharacter.UpdateBodyProperties(bodyProperties, 0, false);
```

## 参见

- [本区域目录](../)
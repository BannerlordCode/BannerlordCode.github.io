<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NarrativeMenuCharacter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# NarrativeMenuCharacter

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class NarrativeMenuCharacter`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs`

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

**用途 / Purpose:** 更新 `body properties` 的状态或数据。

### SetEquipment
`public void SetEquipment(MBEquipmentRoster equipment)`

**用途 / Purpose:** 设置 `equipment` 的值或状态。

### SetAnimationId
`public void SetAnimationId(string animationId)`

**用途 / Purpose:** 设置 `animation id` 的值或状态。

### SetRightHandItem
`public void SetRightHandItem(string itemId)`

**用途 / Purpose:** 设置 `right hand item` 的值或状态。

### SetLeftHandItem
`public void SetLeftHandItem(string itemId)`

**用途 / Purpose:** 设置 `left hand item` 的值或状态。

### EquipRightHandItemWithEquipmentIndex
`public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)`

**用途 / Purpose:** 处理 `equip right hand item with equipment index` 相关逻辑。

### EquipLeftHandItemWithEquipmentIndex
`public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)`

**用途 / Purpose:** 处理 `equip left hand item with equipment index` 相关逻辑。

### SetSpawnPointEntityId
`public void SetSpawnPointEntityId(string spawnPointEntityId)`

**用途 / Purpose:** 设置 `spawn point entity id` 的值或状态。

### ChangeAge
`public void ChangeAge(float age)`

**用途 / Purpose:** 处理 `change age` 相关逻辑。

### SetMountCreationKey
`public void SetMountCreationKey(MountCreationKey mountCreationKey)`

**用途 / Purpose:** 设置 `mount creation key` 的值或状态。

### SetHorseItemId
`public void SetHorseItemId(string itemId)`

**用途 / Purpose:** 设置 `horse item id` 的值或状态。

### SetHarnessItemId
`public void SetHarnessItemId(string itemId)`

**用途 / Purpose:** 设置 `harness item id` 的值或状态。

## 使用示例

```csharp
var value = new NarrativeMenuCharacter();
value.UpdateBodyProperties(bodyProperties, 0, false);
```

## 参见

- [完整类目录](../catalog)
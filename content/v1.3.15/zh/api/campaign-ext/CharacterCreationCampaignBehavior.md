---
title: "CharacterCreationCampaignBehavior"
description: "CharacterCreationCampaignBehavior 的自动生成类参考。"
---
# CharacterCreationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## 概述

`CharacterCreationCampaignBehavior` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.SyncData(dataStore);
```

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 为 character creation stages 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeCharacterCreationStages(characterCreationManager);
```

### InitializeCharacterCreationCultures
`public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 为 character creation cultures 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeCharacterCreationCultures(characterCreationManager);
```

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 为 data 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.InitializeData(characterCreationManager);
```

### FaceGenUpdated
`public void FaceGenUpdated()`

**用途 / Purpose:** **用途 / Purpose:** 调用 FaceGenUpdated 对应的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.FaceGenUpdated();
```

### UpdateParentEquipment
`public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 parent equipment 的最新表示。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.UpdateParentEquipment(characterCreationManager, motherEquipment, fatherEquipment, "example", "example");
```

### AddEducationMenu
`public void AddEducationMenu(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 将 education menu 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.AddEducationMenu(characterCreationManager);
```

### SetHeroAge
`public void SetHeroAge(float age)`

**用途 / Purpose:** **用途 / Purpose:** 为 hero age 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationCampaignBehavior 实例
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.SetHeroAge(0);
```

### IsUrbanOccupation
`public static bool IsUrbanOccupation(string occupation)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 urban occupation 状态或条件。

```csharp
// 静态调用，不需要实例
CharacterCreationCampaignBehavior.IsUrbanOccupation("example");
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationCampaignBehavior characterCreationCampaignBehavior = ...;
characterCreationCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
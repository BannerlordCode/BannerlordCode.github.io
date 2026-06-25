---
title: "StoryModeCharacterCreationCampaignBehavior"
description: "StoryModeCharacterCreationCampaignBehavior 的自动生成类参考。"
---
# StoryModeCharacterCreationCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeCharacterCreationCampaignBehavior.cs`

## 概述

`StoryModeCharacterCreationCampaignBehavior` 位于 `StoryMode.GameComponents.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GameComponents.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** **用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 StoryModeCharacterCreationCampaignBehavior 实例
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** **用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 StoryModeCharacterCreationCampaignBehavior 实例
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.SyncData(dataStore);
```

### InitializeCharacterCreationStages
`public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 为 character creation stages 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 StoryModeCharacterCreationCampaignBehavior 实例
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.InitializeCharacterCreationStages(characterCreationManager);
```

### InitializeData
`public void InitializeData(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** **用途 / Purpose:** 为 data 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 StoryModeCharacterCreationCampaignBehavior 实例
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.InitializeData(characterCreationManager);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StoryModeCharacterCreationCampaignBehavior storyModeCharacterCreationCampaignBehavior = ...;
storyModeCharacterCreationCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)
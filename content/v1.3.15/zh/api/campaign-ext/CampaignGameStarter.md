---
title: "CampaignGameStarter"
description: "CampaignGameStarter 的自动生成类参考。"
---
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** `IGameStarter`
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## 概述

`CampaignGameStarter` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CampaignBehaviors` | `public ICollection<CampaignBehaviorBase> CampaignBehaviors { get; }` |
| `Models` | `public IEnumerable<GameModel> Models { get; }` |

## 主要方法

### UnregisterNonReadyObjects
`public void UnregisterNonReadyObjects()`

**用途 / Purpose:** 从当前系统中注销non ready objects。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.UnregisterNonReadyObjects();
```

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**用途 / Purpose:** 将 behavior 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddBehavior(campaignBehavior);
```

### AddModel
`public void AddModel(GameModel gameModel)`

**用途 / Purpose:** 将 model 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddModel(gameModel);
```

### AddGameMenu
`public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None, object relatedObject = null)`

**用途 / Purpose:** 将 game menu 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddGameMenu("example", "example", initDelegate, gameMenu.MenuOverlayType.None, gameMenu.MenuFlags.None, null);
```

### AddWaitGameMenu
`public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = GameMenu.MenuFlags.None, object relatedObject = null)`

**用途 / Purpose:** 将 wait game menu 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddWaitGameMenu("example", "example", initDelegate, condition, consequence, tick, type, gameMenu.MenuOverlayType.None, 0, gameMenu.MenuFlags.None, null);
```

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`

**用途 / Purpose:** 将 game menu option 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddGameMenuOption("example", "example", "example", condition, consequence, false, 0, false, null);
```

### GetPresumedGameMenu
`public GameMenu GetPresumedGameMenu(string stringId)`

**用途 / Purpose:** 读取并返回当前对象中 presumed game menu 的结果。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.GetPresumedGameMenu("example");
```

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**用途 / Purpose:** 将 dialog flow 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.AddDialogFlow(dialogFlow, null);
```

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null)`

**用途 / Purpose:** 将 player line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddPlayerLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null, null);
```

### AddRepeatablePlayerLine
`public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 将 repeatable player line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddRepeatablePlayerLine("example", "example", "example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null);
```

### AddDialogLineWithVariation
`public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 将 dialog line with variation 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLineWithVariation("example", "example", "example", conditionDelegate, consequenceDelegate, 0, "example", "example", "example", "example", null);
```

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 将 dialog line 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLine("example", "example", "example", "example", conditionDelegate, consequenceDelegate, 0, null);
```

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 将 dialog line multi agent 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CampaignGameStarter 实例
CampaignGameStarter campaignGameStarter = ...;
var result = campaignGameStarter.AddDialogLineMultiAgent("example", "example", "example", text, conditionDelegate, consequenceDelegate, 0, 0, 0, null);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CampaignGameStarter campaignGameStarter = ...;
campaignGameStarter.UnregisterNonReadyObjects();
```

## 参见

- [本区域目录](../)
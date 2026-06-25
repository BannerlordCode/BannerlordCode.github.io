---
title: "CampaignGameStarter"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignGameStarter`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `unregister non ready objects` 相关逻辑。

### AddBehavior
`public void AddBehavior(CampaignBehaviorBase campaignBehavior)`

**用途 / Purpose:** 向当前集合/状态中添加 `behavior`。

### AddModel
`public void AddModel(GameModel gameModel)`

**用途 / Purpose:** 向当前集合/状态中添加 `model`。

### AddGameMenu
`public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, GameMenu.MenuFlags menuFlags = GameMenu.MenuFlags.None, object relatedObject = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `game menu`。

### AddWaitGameMenu
`public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = GameMenu.MenuOverlayType.None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = GameMenu.MenuFlags.None, object relatedObject = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `wait game menu`。

### AddGameMenuOption
`public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `game menu option`。

### GetPresumedGameMenu
`public GameMenu GetPresumedGameMenu(string stringId)`

**用途 / Purpose:** 获取 `presumed game menu` 的当前值。

### AddDialogFlow
`public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog flow`。

### AddPlayerLine
`public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null, ConversationSentence.OnPersuasionOptionDelegate persuasionOptionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `player line`。

### AddRepeatablePlayerLine
`public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `repeatable player line`。

### AddDialogLineWithVariation
`public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog line with variation`。

### AddDialogLine
`public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog line`。

### AddDialogLineMultiAgent
`public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, ConversationSentence.OnClickableConditionDelegate clickableConditionDelegate = null)`

**用途 / Purpose:** 向当前集合/状态中添加 `dialog line multi agent`。

## 使用示例

```csharp
var value = new CampaignGameStarter();
value.UnregisterNonReadyObjects();
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TutorialPhase`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TutorialPhase

**Namespace:** StoryMode.StoryModePhases
**Module:** StoryMode.StoryModePhases
**Type:** `public class TutorialPhase`
**Base:** 无
**File:** `StoryMode/StoryModePhases/TutorialPhase.cs`

## 概述

`TutorialPhase` 位于 `StoryMode.StoryModePhases`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.StoryModePhases` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static TutorialPhase Instance { get; }` |
| `TutorialFocusSettlement` | `public Settlement TutorialFocusSettlement { get; }` |
| `TutorialFocusMobileParty` | `public MobileParty TutorialFocusMobileParty { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `TalkedWithBrotherForTheFirstTime` | `public bool TalkedWithBrotherForTheFirstTime { get; }` |
| `LockTutorialVillageEnter` | `public bool LockTutorialVillageEnter { get; }` |
| `TutorialQuestPhase` | `public TutorialQuestPhase TutorialQuestPhase { get; }` |
| `IsSkipped` | `public bool IsSkipped { get; }` |
| `TutorialVillageHeadman` | `public Hero TutorialVillageHeadman { get; set; }` |

## 主要方法

### PlayerTalkedWithBrotherForTheFirstTime
`public void PlayerTalkedWithBrotherForTheFirstTime()`

**用途 / Purpose:** 处理 `player talked with brother for the first time` 相关逻辑。

### SetLockTutorialVillageEnter
`public void SetLockTutorialVillageEnter(bool value)`

**用途 / Purpose:** 设置 `lock tutorial village enter` 的值或状态。

### CompleteTutorial
`public void CompleteTutorial(bool isSkipped)`

**用途 / Purpose:** 处理 `complete tutorial` 相关逻辑。

### SetTutorialFocusSettlement
`public void SetTutorialFocusSettlement(Settlement settlement)`

**用途 / Purpose:** 设置 `tutorial focus settlement` 的值或状态。

### RemoveTutorialFocusSettlement
`public void RemoveTutorialFocusSettlement()`

**用途 / Purpose:** 从当前集合/状态中移除 `tutorial focus settlement`。

### RemoveTutorialFocusMobileParty
`public void RemoveTutorialFocusMobileParty()`

**用途 / Purpose:** 从当前集合/状态中移除 `tutorial focus mobile party`。

### PrepareRecruitOptionForTutorial
`public void PrepareRecruitOptionForTutorial()`

**用途 / Purpose:** 处理 `prepare recruit option for tutorial` 相关逻辑。

### GetAndPrepareBuyProductsOptionForTutorial
`public ItemRoster GetAndPrepareBuyProductsOptionForTutorial(Village village)`

**用途 / Purpose:** 获取 `and prepare buy products option for tutorial` 的当前值。

### SetTutorialQuestPhase
`public void SetTutorialQuestPhase(TutorialQuestPhase tutorialQuestPhase)`

**用途 / Purpose:** 设置 `tutorial quest phase` 的值或状态。

### InitializeTutorialVillageItemRoster
`public void InitializeTutorialVillageItemRoster()`

**用途 / Purpose:** 初始化 `tutorial village item roster` 的状态、资源或绑定。

## 使用示例

```csharp
var value = new TutorialPhase();
value.PlayerTalkedWithBrotherForTheFirstTime();
```

## 参见

- [完整类目录](../catalog)
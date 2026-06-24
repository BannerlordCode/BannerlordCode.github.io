<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SeeMarkersInMissionTutorial`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SeeMarkersInMissionTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class SeeMarkersInMissionTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `StoryMode.GauntletUI/Tutorial/SeeMarkersInMissionTutorial.cs`

## 概述

`SeeMarkersInMissionTutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 处理 `is conditions met for completion` 相关逻辑。

### OnMissionNameMarkerToggled
`public override void OnMissionNameMarkerToggled(MissionNameMarkerToggleEvent obj)`

**用途 / Purpose:** 当 `mission name marker toggled` 事件触发时调用此方法。

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 获取 `tutorials relevant context` 的当前值。

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** 处理 `is conditions met for activation` 相关逻辑。

## 使用示例

```csharp
var value = new SeeMarkersInMissionTutorial();
value.IsConditionsMetForCompletion();
```

## 参见

- [完整类目录](../catalog)
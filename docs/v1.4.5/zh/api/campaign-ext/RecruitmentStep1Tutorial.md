<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitmentStep1Tutorial`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitmentStep1Tutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class RecruitmentStep1Tutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/RecruitmentStep1Tutorial.cs`

## 概述

`RecruitmentStep1Tutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 处理 `is conditions met for completion` 相关逻辑。

### OnTutorialContextChanged
`public override void OnTutorialContextChanged(TutorialContextChangedEvent obj)`

**用途 / Purpose:** 当 `tutorial context changed` 事件触发时调用此方法。

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 获取 `tutorials relevant context` 的当前值。

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** 处理 `is conditions met for activation` 相关逻辑。

## 使用示例

```csharp
var value = new RecruitmentStep1Tutorial();
value.IsConditionsMetForCompletion();
```

## 参见

- [完整类目录](../catalog)
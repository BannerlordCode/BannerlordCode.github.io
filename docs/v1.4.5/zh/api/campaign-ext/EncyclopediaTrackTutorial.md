<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaTrackTutorial`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaTrackTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class EncyclopediaTrackTutorial : TutorialItemBase`
**Base:** `TutorialItemBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.GauntletUI/StoryMode.GauntletUI.Tutorial/EncyclopediaTrackTutorial.cs`

## 概述

`EncyclopediaTrackTutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTutorialsRelevantContext
`public override TutorialContexts GetTutorialsRelevantContext()`

**用途 / Purpose:** 获取 `tutorials relevant context` 的当前值。

### IsConditionsMetForActivation
`public override bool IsConditionsMetForActivation()`

**用途 / Purpose:** 处理 `is conditions met for activation` 相关逻辑。

### IsConditionsMetForCompletion
`public override bool IsConditionsMetForCompletion()`

**用途 / Purpose:** 处理 `is conditions met for completion` 相关逻辑。

## 使用示例

```csharp
var value = new EncyclopediaTrackTutorial();
value.GetTutorialsRelevantContext();
```

## 参见

- [完整类目录](../catalog)
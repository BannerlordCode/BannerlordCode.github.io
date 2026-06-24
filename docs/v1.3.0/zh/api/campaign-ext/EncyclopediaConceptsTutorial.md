<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaConceptsTutorial`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaConceptsTutorial

**Namespace:** StoryMode.GauntletUI.Tutorial
**Module:** StoryMode.GauntletUI
**Type:** `public class EncyclopediaConceptsTutorial : EncyclopediaPageTutorialBase`
**Base:** `EncyclopediaPageTutorialBase`
**File:** `StoryMode.GauntletUI/Tutorial/EncyclopediaConceptsTutorial.cs`

## 概述

`EncyclopediaConceptsTutorial` 位于 `StoryMode.GauntletUI.Tutorial`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GauntletUI.Tutorial` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 使用示例

```csharp
var value = new EncyclopediaConceptsTutorial();
```

## 参见

- [完整类目录](../catalog)
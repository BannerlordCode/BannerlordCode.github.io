<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthTutorialMarkerProvider`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthTutorialMarkerProvider

**Namespace:** StoryMode.View.MarkerProviders
**Module:** StoryMode.View
**Type:** `public class StealthTutorialMarkerProvider : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.View/StoryMode.View.MarkerProviders/StealthTutorialMarkerProvider.cs`

## 概述

`StealthTutorialMarkerProvider` 位于 `StoryMode.View.MarkerProviders`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.View.MarkerProviders` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**用途 / Purpose:** 创建一个 `markers` 实例或对象。

## 使用示例

```csharp
var value = new StealthTutorialMarkerProvider();
value.CreateMarkers(markers);
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeMissionViews`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeMissionViews

**Namespace:** StoryMode.View.Missions
**Module:** StoryMode.View
**Type:** `public class StoryModeMissionViews`
**Base:** 无
**File:** `StoryMode.View/Missions/StoryModeMissionViews.cs`

## 概述

`StoryModeMissionViews` 位于 `StoryMode.View.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.View.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenVillageMission
`public static MissionView OpenVillageMission(Mission mission)`

**用途 / Purpose:** 处理 `open village mission` 相关逻辑。

### OpenSneakIntoTheVillaMission
`public static MissionView OpenSneakIntoTheVillaMission(Mission mission)`

**用途 / Purpose:** 处理 `open sneak into the villa mission` 相关逻辑。

## 使用示例

```csharp
StoryModeMissionViews.OpenVillageMission(mission);
```

## 参见

- [完整类目录](../catalog)
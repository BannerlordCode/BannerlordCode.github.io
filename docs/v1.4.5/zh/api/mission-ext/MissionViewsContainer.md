<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionViewsContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionViewsContainer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionViewsContainer`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionViewsContainer.cs`

## 概述

`MissionViewsContainer` 位于 `TaleWorlds.MountAndBlade.View.MissionViews`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Add
`public void Add(MissionView missionView)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Remove
`public void Remove(MissionView missionView)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

### Contains
`public bool Contains(MissionView missionView)`

**用途 / Purpose:** 处理 `contains` 相关逻辑。

### ForEach
`public void ForEach(Action<MissionView> action)`

**用途 / Purpose:** 处理 `for each` 相关逻辑。

## 使用示例

```csharp
var value = new MissionViewsContainer();
value.Add(missionView);
```

## 参见

- [完整类目录](../catalog)
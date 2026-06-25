---
title: "MissionAgentMarkerTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionAgentMarkerTargetVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionAgentMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**Base:** `MissionNameMarkerTargetVM<Agent>`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets/MissionAgentMarkerTargetVM.cs`

## 概述

`MissionAgentMarkerTargetVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker.Targets`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker.Targets` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Compare
`public int Compare(QuestMarkerVM x, QuestMarkerVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**用途 / Purpose:** 更新 `position` 的状态或数据。

### UpdateQuestStatus
`public void UpdateQuestStatus()`

**用途 / Purpose:** 更新 `quest status` 的状态或数据。

## 使用示例

```csharp
var value = new MissionAgentMarkerTargetVM();
value.Compare(x, y);
```

## 参见

- [完整类目录](../catalog)
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCampaignView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCampaignView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCampaignView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionCampaignView.cs`

## 概述

`MissionCampaignView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCampaignView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenPreLoad
`public override void OnMissionScreenPreLoad()`

**用途 / Purpose:** 当 `mission screen pre load` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### GetFaceAndHelmetInfoOfFollowedAgent
`public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string> strings)`

**用途 / Purpose:** 获取 `face and helmet info of followed agent` 的当前值。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

## 使用示例

```csharp
var view = new MissionCampaignView();
```

## 参见

- [完整类目录](../catalog)
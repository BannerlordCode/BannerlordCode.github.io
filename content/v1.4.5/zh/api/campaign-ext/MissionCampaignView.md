---
title: "MissionCampaignView"
description: "MissionCampaignView 的自动生成类参考。"
---
# MissionCampaignView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionCampaignView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionCampaignView.cs`

## 概述

`MissionCampaignView` 表示一个视图层对象，通常负责把游戏状态投影到屏幕、场景或可交互界面。

## 心智模型

把 `MissionCampaignView` 当作一个 View 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenPreLoad
`public override void OnMissionScreenPreLoad()`

**用途 / Purpose:** 在 「mission screen pre load」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCampaignView 实例
MissionCampaignView missionCampaignView = ...;
missionCampaignView.OnMissionScreenPreLoad();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 在 「mission screen finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionCampaignView 实例
MissionCampaignView missionCampaignView = ...;
missionCampaignView.OnMissionScreenFinalize();
```

### GetFaceAndHelmetInfoOfFollowedAgent
`public static string GetFaceAndHelmetInfoOfFollowedAgent(List<string> strings)`

**用途 / Purpose:** 读取并返回当前对象中 「face and helmet info of followed agent」 的结果。

```csharp
// 静态调用，不需要实例
MissionCampaignView.GetFaceAndHelmetInfoOfFollowedAgent(strings);
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理与 「early start」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionCampaignView 实例
MissionCampaignView missionCampaignView = ...;
missionCampaignView.EarlyStart();
```

## 使用示例

```csharp
// 从子系统 API 或场景中获取该视图
MissionCampaignView view = ...;
```

## 参见

- [本区域目录](../)
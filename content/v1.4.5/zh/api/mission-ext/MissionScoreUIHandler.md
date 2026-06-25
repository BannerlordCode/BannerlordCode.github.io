---
title: "MissionScoreUIHandler"
description: "MissionScoreUIHandler 的自动生成类参考。"
---
# MissionScoreUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionScoreUIHandler.cs`

## 概述

`MissionScoreUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionScoreUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetName
`public void SetName(string name, int index)`

**用途 / Purpose:** 为 name 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionScoreUIHandler 实例
MissionScoreUIHandler missionScoreUIHandler = ...;
missionScoreUIHandler.SetName("example", 0);
```

### SaveScore
`public void SaveScore(int score, int index)`

**用途 / Purpose:** 将 score 写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 MissionScoreUIHandler 实例
MissionScoreUIHandler missionScoreUIHandler = ...;
missionScoreUIHandler.SaveScore(0, 0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionScoreUIHandler>();
```

## 参见

- [本区域目录](../)
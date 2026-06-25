---
title: "MissionNameMarkerUIHandler"
description: "MissionNameMarkerUIHandler 的自动生成类参考。"
---
# MissionNameMarkerUIHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class MissionNameMarkerUIHandler : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/MissionNameMarkerUIHandler.cs`

## 概述

`MissionNameMarkerUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionNameMarkerUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetMarkersDirty
`public virtual void SetMarkersDirty()`

**用途 / Purpose:** 为 markers dirty 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionNameMarkerUIHandler 实例
MissionNameMarkerUIHandler missionNameMarkerUIHandler = ...;
missionNameMarkerUIHandler.SetMarkersDirty();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionNameMarkerUIHandler>();
```

## 参见

- [本区域目录](../)
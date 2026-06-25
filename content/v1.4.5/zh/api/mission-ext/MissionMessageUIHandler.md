---
title: "MissionMessageUIHandler"
description: "MissionMessageUIHandler 的自动生成类参考。"
---
# MissionMessageUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMessageUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionMessageUIHandler.cs`

## 概述

`MissionMessageUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionMessageUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**用途 / Purpose:** 显示「message」对应的界面或元素。

```csharp
// 先通过子系统 API 拿到 MissionMessageUIHandler 实例
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.ShowMessage("example", 0, false);
```

### DeleteMessage
`public void DeleteMessage(string str)`

**用途 / Purpose:** 处理与 「delete message」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionMessageUIHandler 实例
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.DeleteMessage("example");
```

### DeleteCurrentMessage
`public void DeleteCurrentMessage()`

**用途 / Purpose:** 处理与 「delete current message」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionMessageUIHandler 实例
MissionMessageUIHandler missionMessageUIHandler = ...;
missionMessageUIHandler.DeleteCurrentMessage();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionMessageUIHandler>();
```

## 参见

- [本区域目录](../)
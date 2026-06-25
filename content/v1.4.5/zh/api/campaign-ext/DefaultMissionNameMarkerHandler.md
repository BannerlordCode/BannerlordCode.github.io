---
title: "DefaultMissionNameMarkerHandler"
description: "DefaultMissionNameMarkerHandler 的自动生成类参考。"
---
# DefaultMissionNameMarkerHandler

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class DefaultMissionNameMarkerHandler : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/DefaultMissionNameMarkerHandler.cs`

## 概述

`DefaultMissionNameMarkerHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `DefaultMissionNameMarkerHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 markers 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 DefaultMissionNameMarkerHandler 实例
DefaultMissionNameMarkerHandler defaultMissionNameMarkerHandler = ...;
defaultMissionNameMarkerHandler.CreateMarkers(markers);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<DefaultMissionNameMarkerHandler>();
```

## 参见

- [本区域目录](../)
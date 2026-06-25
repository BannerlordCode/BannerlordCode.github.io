---
title: "CustomMissionSpawnHandler"
description: "CustomMissionSpawnHandler 的自动生成类参考。"
---
# CustomMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.MissionSpawnHandlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## 概述

`CustomMissionSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CustomMissionSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomMissionSpawnHandler 实例
CustomMissionSpawnHandler customMissionSpawnHandler = ...;
customMissionSpawnHandler.OnBehaviorInitialize();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomMissionSpawnHandler>();
```

## 参见

- [本区域目录](../)
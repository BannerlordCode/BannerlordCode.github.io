---
title: "SiegeMissionPreparationHandler"
description: "SiegeMissionPreparationHandler 的自动生成类参考。"
---
# SiegeMissionPreparationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeMissionPreparationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeMissionPreparationHandler.cs`

## 概述

`SiegeMissionPreparationHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SiegeMissionPreparationHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SiegeMissionPreparationHandler 实例
SiegeMissionPreparationHandler siegeMissionPreparationHandler = ...;
siegeMissionPreparationHandler.OnBehaviorInitialize();
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<SiegeMissionPreparationHandler>();
```

## 参见

- [本区域目录](../)
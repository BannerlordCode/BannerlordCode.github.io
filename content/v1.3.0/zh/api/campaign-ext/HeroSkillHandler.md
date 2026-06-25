---
title: "HeroSkillHandler"
description: "HeroSkillHandler 的自动生成类参考。"
---
# HeroSkillHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class HeroSkillHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/HeroSkillHandler.cs`

## 概述

`HeroSkillHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `HeroSkillHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 HeroSkillHandler 实例
HeroSkillHandler heroSkillHandler = ...;
heroSkillHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroSkillHandler 实例
HeroSkillHandler heroSkillHandler = ...;
heroSkillHandler.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<HeroSkillHandler>();
```

## 参见

- [本区域目录](../)
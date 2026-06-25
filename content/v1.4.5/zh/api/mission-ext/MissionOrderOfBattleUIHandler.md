---
title: "MissionOrderOfBattleUIHandler"
description: "MissionOrderOfBattleUIHandler 的自动生成类参考。"
---
# MissionOrderOfBattleUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionOrderOfBattleUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionOrderOfBattleUIHandler.cs`

## 概述

`MissionOrderOfBattleUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionOrderOfBattleUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionOrderOfBattleUIHandler>();
```

## 参见

- [本区域目录](../)
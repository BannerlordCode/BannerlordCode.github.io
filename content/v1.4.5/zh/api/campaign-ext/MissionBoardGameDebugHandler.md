---
title: "MissionBoardGameDebugHandler"
description: "MissionBoardGameDebugHandler 的自动生成类参考。"
---
# MissionBoardGameDebugHandler

**Namespace:** SandBox.BoardGames.MissionLogics
**Module:** SandBox.BoardGames
**Type:** `public class MissionBoardGameDebugHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.BoardGames.MissionLogics/MissionBoardGameDebugHandler.cs`

## 概述

`MissionBoardGameDebugHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionBoardGameDebugHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionBoardGameDebugHandler>();
```

## 参见

- [本区域目录](../)
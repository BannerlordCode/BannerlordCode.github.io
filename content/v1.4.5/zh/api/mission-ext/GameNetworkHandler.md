---
title: "GameNetworkHandler"
description: "GameNetworkHandler 的自动生成类参考。"
---
# GameNetworkHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameNetworkHandler : IGameNetworkHandler`
**Base:** `IGameNetworkHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/GameNetworkHandler.cs`

## 概述

`GameNetworkHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `GameNetworkHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<GameNetworkHandler>();
```

## 参见

- [本区域目录](../)
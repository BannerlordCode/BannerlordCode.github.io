---
title: "LobbyGameClientHandler"
description: "LobbyGameClientHandler 的自动生成类参考。"
---
# LobbyGameClientHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyGameClientHandler : ILobbyClientSessionHandler`
**Base:** `ILobbyClientSessionHandler`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/LobbyGameClientHandler.cs`

## 概述

`LobbyGameClientHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `LobbyGameClientHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LobbyState` | `public LobbyState LobbyState { get; set; }` |

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<LobbyGameClientHandler>();
```

## 参见

- [本区域目录](../)
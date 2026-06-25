---
title: "LobbyTauntHelper"
description: "LobbyTauntHelper 的自动生成类参考。"
---
# LobbyTauntHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal static class LobbyTauntHelper`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/LobbyTauntHelper.cs`

## 概述

`LobbyTauntHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `LobbyTauntHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PrepareForTaunt
`public static Equipment PrepareForTaunt(Equipment originalEquipment, TauntCosmeticElement taunt, bool doNotAddComplimentaryWeapons = false)`

**用途 / Purpose:** 为即将执行的for taunt操作完成前置准备工作。

```csharp
// 静态调用，不需要实例
LobbyTauntHelper.PrepareForTaunt(originalEquipment, taunt, false);
```

## 使用示例

```csharp
LobbyTauntHelper.Initialize();
```

## 参见

- [本区域目录](../)
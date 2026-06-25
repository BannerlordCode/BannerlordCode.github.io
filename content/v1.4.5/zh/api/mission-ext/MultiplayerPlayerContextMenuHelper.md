---
title: "MultiplayerPlayerContextMenuHelper"
description: "MultiplayerPlayerContextMenuHelper 的自动生成类参考。"
---
# MultiplayerPlayerContextMenuHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerContextMenuHelper`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerContextMenuHelper.cs`

## 概述

`MultiplayerPlayerContextMenuHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MultiplayerPlayerContextMenuHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddLobbyViewProfileOptions
`public static void AddLobbyViewProfileOptions(MPLobbyPlayerBaseVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**用途 / Purpose:** 将 lobby view profile options 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MultiplayerPlayerContextMenuHelper.AddLobbyViewProfileOptions(player, contextMenuOptions);
```

### AddMissionViewProfileOptions
`public static void AddMissionViewProfileOptions(MPPlayerVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**用途 / Purpose:** 将 mission view profile options 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MultiplayerPlayerContextMenuHelper.AddMissionViewProfileOptions(player, contextMenuOptions);
```

## 使用示例

```csharp
MultiplayerPlayerContextMenuHelper.Initialize();
```

## 参见

- [本区域目录](../)
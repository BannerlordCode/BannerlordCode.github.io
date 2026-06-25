---
title: "MultiplayerPlayerContextMenuHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerPlayerContextMenuHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPlayerContextMenuHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerContextMenuHelper`
**Base:** 无
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerContextMenuHelper.cs`

## 概述

`MultiplayerPlayerContextMenuHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MultiplayerPlayerContextMenuHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddLobbyViewProfileOptions
`public static void AddLobbyViewProfileOptions(MPLobbyPlayerBaseVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**用途 / Purpose:** 向当前集合/状态中添加 `lobby view profile options`。

### AddMissionViewProfileOptions
`public static void AddMissionViewProfileOptions(MPPlayerVM player, MBBindingList<StringPairItemWithActionVM> contextMenuOptions)`

**用途 / Purpose:** 向当前集合/状态中添加 `mission view profile options`。

## 使用示例

```csharp
MultiplayerPlayerContextMenuHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)
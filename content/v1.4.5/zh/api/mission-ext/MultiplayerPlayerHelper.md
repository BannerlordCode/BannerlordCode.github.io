---
title: "MultiplayerPlayerHelper"
description: "MultiplayerPlayerHelper 的自动生成类参考。"
---
# MultiplayerPlayerHelper

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerPlayerHelper`
**Base:** 无
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MultiplayerPlayerHelper.cs`

## 概述

`MultiplayerPlayerHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MultiplayerPlayerHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsBlocked
`public static bool IsBlocked(PlayerId playerID)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 blocked 状态或条件。

```csharp
// 静态调用，不需要实例
MultiplayerPlayerHelper.IsBlocked(playerID);
```

## 使用示例

```csharp
MultiplayerPlayerHelper.Initialize();
```

## 参见

- [本区域目录](../)
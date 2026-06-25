---
title: "MultiplayerData"
description: "MultiplayerData 的自动生成类参考。"
---
# MultiplayerData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerData : MBMultiplayerData`
**Base:** `MBMultiplayerData`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerData.cs`

## 概述

`MultiplayerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MultiplayerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsMultiplayerTeamAvailable
`public bool IsMultiplayerTeamAvailable(int peerNo, int teamNo)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 multiplayer team available 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerData 实例
MultiplayerData multiplayerData = ...;
var result = multiplayerData.IsMultiplayerTeamAvailable(0, 0);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
MultiplayerData entry = ...;
```

## 参见

- [本区域目录](../)
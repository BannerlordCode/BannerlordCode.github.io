---
title: "PlayerJoinGameData"
description: "PlayerJoinGameData 的自动生成类参考。"
---
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## 概述

`PlayerJoinGameData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `PlayerJoinGameData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## 主要方法

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 PlayerJoinGameData 实例
PlayerJoinGameData playerJoinGameData = ...;
var result = playerJoinGameData.ToString();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
PlayerJoinGameData entry = ...;
```

## 参见

- [本区域目录](../)
---
title: "MultiplayerLocalData"
description: "MultiplayerLocalData 的自动生成类参考。"
---
# MultiplayerLocalData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MultiplayerLocalData`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalData.cs`

## 概述

`MultiplayerLocalData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `MultiplayerLocalData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HasSameContentWith
`public abstract bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 same content with。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalData 实例
MultiplayerLocalData multiplayerLocalData = ...;
var result = multiplayerLocalData.HasSameContentWith(other);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MultiplayerLocalData instance = ...;
```

## 参见

- [本区域目录](../)
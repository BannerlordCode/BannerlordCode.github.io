---
title: "TickManager"
description: "TickManager 的自动生成类参考。"
---
# TickManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class TickManager`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/TickManager.cs`

## 概述

`TickManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `TickManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### TickDelegate
`public delegate void TickDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 在每一帧或每个更新周期内推进delegate的状态。

```csharp
// 先通过子系统 API 拿到 TickManager 实例
TickManager tickManager = ...;
tickManager.TickDelegate();
```

### Tick
`public void Tick()`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 TickManager 实例
TickManager tickManager = ...;
tickManager.Tick();
```

## 使用示例

```csharp
var manager = TickManager.Current;
```

## 参见

- [本区域目录](../)
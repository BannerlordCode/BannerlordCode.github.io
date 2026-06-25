---
title: "DiamondDebugManager"
description: "DiamondDebugManager 的自动生成类参考。"
---
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/DiamondDebugManager.cs`

## 概述

`DiamondDebugManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `DiamondDebugManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetLogLevel
`public int GetLogLevel()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 log level 的结果。

```csharp
// 先通过子系统 API 拿到 DiamondDebugManager 实例
DiamondDebugManager diamondDebugManager = ...;
var result = diamondDebugManager.GetLogLevel();
```

## 使用示例

```csharp
var manager = DiamondDebugManager.Current;
```

## 参见

- [本区域目录](../)
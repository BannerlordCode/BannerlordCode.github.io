---
title: "EngineScreenManager"
description: "EngineScreenManager 的自动生成类参考。"
---
# EngineScreenManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `internal class EngineScreenManager`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/EngineScreenManager.cs`

## 概述

`EngineScreenManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EngineScreenManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Tick
`public static void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 静态调用，不需要实例
EngineScreenManager.Tick(0);
```

## 使用示例

```csharp
var manager = EngineScreenManager.Current;
```

## 参见

- [本区域目录](../)
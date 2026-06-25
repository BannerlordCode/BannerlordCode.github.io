---
title: "DedicatedServerConsoleCommandManager"
description: "DedicatedServerConsoleCommandManager 的自动生成类参考。"
---
# DedicatedServerConsoleCommandManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class DedicatedServerConsoleCommandManager`
**Base:** 无
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DedicatedServerConsoleCommandManager.cs`

## 概述

`DedicatedServerConsoleCommandManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `DedicatedServerConsoleCommandManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AddType
`public static void AddType(Type type)`

**用途 / Purpose:** 将 type 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
DedicatedServerConsoleCommandManager.AddType(type);
```

## 使用示例

```csharp
var manager = DedicatedServerConsoleCommandManager.Current;
```

## 参见

- [本区域目录](../)
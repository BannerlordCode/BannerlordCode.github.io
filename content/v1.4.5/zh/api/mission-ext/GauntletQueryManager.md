---
title: "GauntletQueryManager"
description: "GauntletQueryManager 的自动生成类参考。"
---
# GauntletQueryManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletQueryManager : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletQueryManager.cs`

## 概述

`GauntletQueryManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GauntletQueryManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 GauntletQueryManager 实例
GauntletQueryManager gauntletQueryManager = ...;
gauntletQueryManager.Initialize();
```

## 使用示例

```csharp
var manager = GauntletQueryManager.Current;
```

## 参见

- [本区域目录](../)
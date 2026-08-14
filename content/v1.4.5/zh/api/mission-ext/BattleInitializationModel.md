---
title: "BattleInitializationModel"
description: "BattleInitializationModel 的自动生成类参考。"
---
# BattleInitializationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**Base:** `MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## 概述

`BattleInitializationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleInitializationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAllAvailableTroopTypes
`public abstract List<FormationClass> GetAllAvailableTroopTypes()`

**用途 / Purpose:** 读取并返回当前对象中 all available troop types 的结果。

```csharp
// 先通过子系统 API 拿到 BattleInitializationModel 实例
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.GetAllAvailableTroopTypes();
```

### CanPlayerSideDeployWithOrderOfBattle
`public bool CanPlayerSideDeployWithOrderOfBattle()`

**用途 / Purpose:** 检查当前对象是否满足 player side deploy with order of battle 的前置条件。

```csharp
// 先通过子系统 API 拿到 BattleInitializationModel 实例
BattleInitializationModel battleInitializationModel = ...;
var result = battleInitializationModel.CanPlayerSideDeployWithOrderOfBattle();
```

### InitializeModel
`public void InitializeModel()`

**用途 / Purpose:** 为 model 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BattleInitializationModel 实例
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.InitializeModel();
```

### FinalizeModel
`public void FinalizeModel()`

**用途 / Purpose:** 调用 FinalizeModel 对应的操作。

```csharp
// 先通过子系统 API 拿到 BattleInitializationModel 实例
BattleInitializationModel battleInitializationModel = ...;
battleInitializationModel.FinalizeModel();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleInitializationModel instance = ...;
```

## 参见

- [本区域目录](../)
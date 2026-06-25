---
title: "CustomBattleTroopSupplier"
description: "CustomBattleTroopSupplier 的自动生成类参考。"
---
# CustomBattleTroopSupplier

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs`

## 概述

`CustomBattleTroopSupplier` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.SupplyTroops(0);
```

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.SupplyOneTroop();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「all troops」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetAllTroops();
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**用途 / Purpose:** 读取并返回当前对象中 「general character」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetGeneralCharacter();
```

### OnTroopWounded
`public void OnTroopWounded()`

**用途 / Purpose:** 在 「troop wounded」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopWounded();
```

### OnTroopKilled
`public void OnTroopKilled()`

**用途 / Purpose:** 在 「troop killed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopKilled();
```

### OnTroopRouted
`public void OnTroopRouted()`

**用途 / Purpose:** 在 「troop routed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopRouted();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**用途 / Purpose:** 读取并返回当前对象中 「number of player controllable troops」 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleTroopSupplier 实例
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetNumberOfPlayerControllableTroops();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.SupplyTroops(0);
```

## 参见

- [本区域目录](../)
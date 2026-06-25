---
title: "SiegeWeaponAutoDeployer"
description: "SiegeWeaponAutoDeployer 的自动生成类参考。"
---
# SiegeWeaponAutoDeployer

**Namespace:** TaleWorlds.MountAndBlade.AI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeWeaponAutoDeployer`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs`

## 概述

`SiegeWeaponAutoDeployer` 位于 `TaleWorlds.MountAndBlade.AI`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.AI` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### DeployAll
`public void DeployAll(BattleSideEnum side)`

**用途 / Purpose:** 处理与 「deploy all」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 SiegeWeaponAutoDeployer 实例
SiegeWeaponAutoDeployer siegeWeaponAutoDeployer = ...;
siegeWeaponAutoDeployer.DeployAll(side);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeWeaponAutoDeployer siegeWeaponAutoDeployer = ...;
siegeWeaponAutoDeployer.DeployAll(side);
```

## 参见

- [本区域目录](../)
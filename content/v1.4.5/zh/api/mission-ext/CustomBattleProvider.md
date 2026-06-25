---
title: "CustomBattleProvider"
description: "CustomBattleProvider 的自动生成类参考。"
---
# CustomBattleProvider

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleProvider : ICustomBattleProvider`
**Base:** `ICustomBattleProvider`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleProvider.cs`

## 概述

`CustomBattleProvider` 位于 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### StartCustomBattle
`public void StartCustomBattle()`

**用途 / Purpose:** **用途 / Purpose:** 启动custom battle流程或状态机。

```csharp
// 先通过子系统 API 拿到 CustomBattleProvider 实例
CustomBattleProvider customBattleProvider = ...;
customBattleProvider.StartCustomBattle();
```

### GetName
`public TextObject GetName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 CustomBattleProvider 实例
CustomBattleProvider customBattleProvider = ...;
var result = customBattleProvider.GetName();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleProvider customBattleProvider = ...;
customBattleProvider.StartCustomBattle();
```

## 参见

- [本区域目录](../)
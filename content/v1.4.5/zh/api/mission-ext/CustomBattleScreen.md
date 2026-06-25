---
title: "CustomBattleScreen"
description: "CustomBattleScreen 的自动生成类参考。"
---
# CustomBattleScreen

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs`

## 概述

`CustomBattleScreen` 位于 `TaleWorlds.MountAndBlade.CustomBattle`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### UpdateLayout
`public override void UpdateLayout()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 layout 的最新表示。

```csharp
// 先通过子系统 API 拿到 CustomBattleScreen 实例
CustomBattleScreen customBattleScreen = ...;
customBattleScreen.UpdateLayout();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CustomBattleScreen customBattleScreen = ...;
customBattleScreen.UpdateLayout();
```

## 参见

- [本区域目录](../)
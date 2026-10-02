---
title: "CustomBattleProvider"
description: "CustomBattleProvider：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ICustomBattleProvider；公开成员 2 个（方法 2、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs。"
---
# CustomBattleProvider

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleProvider : ICustomBattleProvider`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs`

## 概述

CustomBattleProvider 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs。它是一个 public 类，实现/继承 ICustomBattleProvider，继承链为 CustomBattleProvider → ICustomBattleProvider。public/protected 成员共 2 个：2 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleProvider 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle），继承链 CustomBattleProvider → ICustomBattleProvider。成员构成以方法为主（方法 2/2，属性 0/2），对外主要以操作入口暴露。继承链上的 ICustomBattleProvider 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleProvider.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartCustomBattle` | `public void StartCustomBattle()` | 方法 |
| `GetName` | `public TextObject GetName()` | 方法 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CustomBattleCompositionData](../CustomBattleCompositionData)
- [同命名空间 CustomBattleData](../CustomBattleData)
- [同命名空间 CustomBattleHelper](../CustomBattleHelper)
- [同命名空间 CustomBattlePlayerSide](../CustomBattlePlayerSide)

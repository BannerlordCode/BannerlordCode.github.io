---
title: "SceneLevelItemVM"
description: "SceneLevelItemVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 SelectorItemVM；公开成员 2 个（方法 0、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SceneLevelItemVM.cs。"
---
# SceneLevelItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class SceneLevelItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SceneLevelItemVM.cs`

## 概述

SceneLevelItemVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SceneLevelItemVM.cs。它是一个 public 类，实现/继承 SelectorItemVM，继承链为 SceneLevelItemVM → SelectorItemVM。public/protected 成员共 2 个：1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SceneLevelItemVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem），继承链 SceneLevelItemVM → SelectorItemVM。成员构成以属性为主（属性 1/2，方法 0/2），对外主要以状态读取接口暴露。继承链上的 SelectorItemVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/SceneLevelItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Level` | `public int Level` | 属性 |
| `SceneLevelItemVM` | `public SceneLevelItemVM(int level) : base(level.ToString())` | 构造函数 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterItemVM](../CharacterItemVM)
- [同命名空间 CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [同命名空间 FactionItemVM](../FactionItemVM)
- [同命名空间 GameTypeItemVM](../GameTypeItemVM)

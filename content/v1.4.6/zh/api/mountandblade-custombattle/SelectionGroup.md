---
title: "SelectionGroup"
description: "SelectionGroup：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 ViewModel；公开成员 7 个（方法 2、属性 3、字段 1）。源文件 TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs。"
---
# SelectionGroup

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class SelectionGroup : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs`

## 概述

SelectionGroup 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 SelectionGroup → ViewModel。public/protected 成员共 7 个：2 方法、3 属性、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SelectionGroup 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录一致，继承链 SelectionGroup → ViewModel。成员构成以属性为主（属性 3/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/SelectionGroup.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectionGroup` | `public SelectionGroup(string name, List<string>textList = null)` | 构造函数 |
| `ClickSelectionLeft` | `protected virtual void ClickSelectionLeft()` | 方法 |
| `ClickSelectionRight` | `protected virtual void ClickSelectionRight()` | 方法 |
| `Text` | `public string Text` | 属性 |
| `List` | `public List<string>TextList` | 属性 |
| `Index` | `public int Index` | 属性 |
| `List` | `protected List<string>_textList` | 字段 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [同命名空间 ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [同命名空间 CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [同命名空间 CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)

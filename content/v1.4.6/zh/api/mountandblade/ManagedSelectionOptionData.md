---
title: "ManagedSelectionOptionData"
description: "ManagedSelectionOptionData：TaleWorlds.MountAndBlade 的 public 类，继承 ManagedOptionData、ISelectionOptionData；公开成员 4 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs。"
---
# ManagedSelectionOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ManagedSelectionOptionData : ManagedOptionData, ISelectionOptionData, IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs`

## 概述

ManagedSelectionOptionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs。它是一个 public 类，实现/继承 ManagedOptionData、ISelectionOptionData、IOptionData，继承链为 ManagedSelectionOptionData → ManagedOptionData → IOptionData。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedSelectionOptionData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Options.ManagedOptions），继承链 ManagedSelectionOptionData → ManagedOptionData → IOptionData。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。继承链上的 IOptionData 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedSelectionOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedSelectionOptionData` | `public ManagedSelectionOptionData(ManagedOptions.ManagedOptionsType type) : base(type)` | 构造函数 |
| `GetSelectableOptionsLimit` | `public int GetSelectableOptionsLimit()` | 方法 |
| `IEnumerable` | `public IEnumerable<SelectionData>GetSelectableOptionNames()` | 方法 |
| `GetOptionsLimit` | `public static int GetOptionsLimit(ManagedOptions.ManagedOptionsType optionType)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ManagedOptionData](../ManagedOptionData)
- [同命名空间 ManagedBooleanOptionData](../ManagedBooleanOptionData)
- [同命名空间 ManagedNumericOptionData](../ManagedNumericOptionData)
- [同命名空间 ManagedOptionData](../ManagedOptionData)

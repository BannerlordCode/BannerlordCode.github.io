---
title: "RundownTooltipVM"
description: "RundownTooltipVM：TaleWorlds.Core.ViewModelCollection 的 public 类，继承 TooltipBaseVM；公开成员 13 个（方法 4、属性 7、字段 0）。源文件 TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs。"
---
# RundownTooltipVM

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class RundownTooltipVM : TooltipBaseVM`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs`

## 概述

RundownTooltipVM 位于 TaleWorlds.Core.ViewModelCollection 模块，源文件 TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs。它是一个 public 类，实现/继承 TooltipBaseVM，继承链为 RundownTooltipVM → TooltipBaseVM。public/protected 成员共 13 个：4 方法、7 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：RundownTooltipVM 是 TaleWorlds.Core.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.Core.ViewModelCollection.Information.RundownTooltip），继承链 RundownTooltipVM → TooltipBaseVM。成员构成以属性为主（属性 7/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 TooltipBaseVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core.ViewModelCollection/Information/RundownTooltip/RundownTooltipVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsInitializedProperly` | `public bool IsInitializedProperly` | 属性 |
| `RundownTooltipVM` | `public RundownTooltipVM(Type invokedType, object[]invokedArgs) : base(invokedType, invokedArgs)` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `OnPeriodicRefresh` | `protected override void OnPeriodicRefresh()` | 方法 |
| `OnIsExtendedChanged` | `protected override void OnIsExtendedChanged()` | 方法 |
| `RefreshGenericRundownTooltip` | `public static void RefreshGenericRundownTooltip(RundownTooltipVM rundownTooltip, object[]args)` | 方法 |
| `MBBindingList` | `public MBBindingList<RundownLineVM>Lines` | 属性 |
| `TitleText` | `public string TitleText` | 属性 |
| `ExpectedChangeText` | `public string ExpectedChangeText` | 属性 |
| `ValueCategorizationAsInt` | `public int ValueCategorizationAsInt` | 属性 |
| `ExtendText` | `public string ExtendText` | 属性 |
| `ValueCategorization` | `public enum ValueCategorization` | 属性 |
| `ValueCategorization` | `public enum ValueCategorization` | 嵌套类型 |

## 参见

- [↑ core-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 RundownLineVM](../RundownLineVM)

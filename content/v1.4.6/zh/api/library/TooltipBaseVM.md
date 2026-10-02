---
title: "TooltipBaseVM"
description: "TooltipBaseVM：TaleWorlds.Library 的 public 类，继承 ViewModel；公开成员 9 个（方法 6、属性 2、字段 0）。源文件 TaleWorlds.Library/TooltipBaseVM.cs。"
---
# TooltipBaseVM

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public abstract class TooltipBaseVM : ViewModel`
**File:** `TaleWorlds.Library/TooltipBaseVM.cs`

## 概述

TooltipBaseVM 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TooltipBaseVM.cs。它是一个 public 类（abstract），实现/继承 ViewModel，继承链为 TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 9 个：6 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TooltipBaseVM 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 TooltipBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TooltipBaseVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TooltipBaseVM` | `public TooltipBaseVM(Type invokedType, object[]invokedArgs)` | 构造函数 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `OnFinalizeInternal` | `protected virtual void OnFinalizeInternal()` | 方法 |
| `Tick` | `public virtual void Tick(float dt)` | 方法 |
| `InvokeRefreshData` | `protected void InvokeRefreshData<T>(T tooltip) where T : TooltipBaseVM` | 方法 |
| `OnPeriodicRefresh` | `protected virtual void OnPeriodicRefresh()` | 方法 |
| `OnIsExtendedChanged` | `protected virtual void OnIsExtendedChanged()` | 方法 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsExtended` | `public bool IsExtended` | 属性 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ViewModel](../ViewModel)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)

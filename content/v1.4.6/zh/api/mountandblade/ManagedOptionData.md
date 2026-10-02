---
title: "ManagedOptionData"
description: "ManagedOptionData：TaleWorlds.MountAndBlade 的 public 类，继承 IOptionData；公开成员 9 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs。"
---
# ManagedOptionData

**Namespace:** `TaleWorlds.MountAndBlade.Options.ManagedOptions`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class ManagedOptionData : IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## 概述

ManagedOptionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs。它是一个 public 类（abstract），实现/继承 IOptionData，继承链为 ManagedOptionData → IOptionData。public/protected 成员共 9 个：8 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ManagedOptionData 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.Options.ManagedOptions），继承链 ManagedOptionData → IOptionData。成员构成以方法为主（方法 8/9，属性 0/9），对外主要以操作入口暴露。继承链上的 IOptionData 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ManagedOptionData` | `protected ManagedOptionData(ManagedOptions.ManagedOptionsType type)` | 构造函数 |
| `GetDefaultValue` | `public virtual float GetDefaultValue()` | 方法 |
| `Commit` | `public void Commit()` | 方法 |
| `GetValue` | `public float GetValue(bool forceRefresh)` | 方法 |
| `SetValue` | `public void SetValue(float value)` | 方法 |
| `GetOptionType` | `public object GetOptionType()` | 方法 |
| `IsNative` | `public bool IsNative()` | 方法 |
| `IsAction` | `public bool IsAction()` | 方法 |
| `bool>GetIsDisabledAndReasonID` | `public ValueTuple<string, bool>GetIsDisabledAndReasonID()` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ManagedBooleanOptionData](../ManagedBooleanOptionData)
- [同命名空间 ManagedNumericOptionData](../ManagedNumericOptionData)
- [同命名空间 ManagedSelectionOptionData](../ManagedSelectionOptionData)

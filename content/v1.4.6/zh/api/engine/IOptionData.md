---
title: "IOptionData"
description: "IOptionData：TaleWorlds.Engine 的 public 接口；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.Engine/Options/IOptionData.cs。"
---
# IOptionData

**Namespace:** `TaleWorlds.Engine.Options`
**Module:** `TaleWorlds.Engine`
**Type:** `public interface IOptionData`
**File:** `TaleWorlds.Engine/Options/IOptionData.cs`

## 概述

IOptionData 位于 TaleWorlds.Engine 模块，源文件 TaleWorlds.Engine/Options/IOptionData.cs。它是一个 public 接口，继承链为 IOptionData。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IOptionData 是 TaleWorlds.Engine 的顶层类型，命名空间与模块目录不同（TaleWorlds.Engine.Options），继承链 IOptionData。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Engine/Options/IOptionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDefaultValue` | `float GetDefaultValue();` | 方法 |
| `Commit` | `void Commit();` | 方法 |
| `GetValue` | `float GetValue(bool forceRefresh);` | 方法 |
| `SetValue` | `void SetValue(float value);` | 方法 |
| `GetOptionType` | `object GetOptionType();` | 方法 |
| `IsNative` | `bool IsNative();` | 方法 |
| `IsAction` | `bool IsAction();` | 方法 |
| `bool>GetIsDisabledAndReasonID` | `ValueTuple<string, bool>GetIsDisabledAndReasonID();` | 方法 |

## 参见

- [↑ engine 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IBooleanOptionData](../IBooleanOptionData)
- [同命名空间 INumericOptionData](../INumericOptionData)
- [同命名空间 ISelectionOptionData](../ISelectionOptionData)
- [同命名空间 NativeBooleanOptionData](../NativeBooleanOptionData)

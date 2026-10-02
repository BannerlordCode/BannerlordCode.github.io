---
title: "QueryData<T>"
description: "QueryData<T>：TaleWorlds.MountAndBlade 的 public 类，继承 IQueryData；公开成员 11 个（方法 8、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade/QueryData.cs。"
---
# QueryData<T>

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class QueryData<T>: IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

## 概述

QueryData<T> 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/QueryData.cs。它是一个 public 类，实现/继承 IQueryData，继承链为 QueryData → IQueryData。public/protected 成员共 11 个：8 方法、1 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QueryData<T> 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 QueryData → IQueryData。成员构成以方法为主（方法 8/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/QueryData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QueryData` | `public QueryData(Func<T>valueFunc, float lifetime)` | 构造函数 |
| `QueryData` | `public QueryData(Func<T>valueFunc, float lifetime, T defaultCachedValue)` | 构造函数 |
| `Evaluate` | `public void Evaluate(float currentTime)` | 方法 |
| `SetValue` | `public void SetValue(T value, float currentTime)` | 方法 |
| `GetCachedValue` | `public T GetCachedValue()` | 方法 |
| `GetCachedValueUnlessTooOld` | `public T GetCachedValueUnlessTooOld()` | 方法 |
| `GetCachedValueWithMaxAge` | `public T GetCachedValueWithMaxAge(float age)` | 方法 |
| `Value` | `public T Value` | 属性 |
| `Expire` | `public void Expire()` | 方法 |
| `SetupSyncGroup` | `public static void SetupSyncGroup(params IQueryData[]groupItems)` | 方法 |
| `SetSyncGroup` | `public void SetSyncGroup(IQueryData[]syncGroup)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IQueryData](../IQueryData)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)

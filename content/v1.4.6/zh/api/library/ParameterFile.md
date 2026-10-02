---
title: "ParameterFile"
description: "ParameterFile：TaleWorlds.Library 的 public 类；公开成员 6 个（方法 2、属性 3、字段 0）。源文件 TaleWorlds.Library/ParameterFile.cs。"
---
# ParameterFile

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class ParameterFile`
**File:** `TaleWorlds.Library/ParameterFile.cs`

## 概述

ParameterFile 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/ParameterFile.cs。它是一个 public 类，继承链为 ParameterFile。public/protected 成员共 6 个：2 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ParameterFile 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 ParameterFile。成员构成以属性为主（属性 3/6，方法 2/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/ParameterFile.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Path` | `public string Path` | 属性 |
| `LastCheckedTime` | `public DateTime LastCheckedTime` | 属性 |
| `ParameterContainer` | `public ParameterContainer ParameterContainer` | 属性 |
| `ParameterFile` | `public ParameterFile(string path)` | 构造函数 |
| `CheckIfNeedsToBeRefreshed` | `public bool CheckIfNeedsToBeRefreshed()` | 方法 |
| `Refresh` | `public void Refresh()` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)

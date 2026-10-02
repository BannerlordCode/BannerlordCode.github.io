---
title: "NavigationPath"
description: "NavigationPath：TaleWorlds.Library 的 public 类，继承 ISerializable；公开成员 7 个（方法 3、属性 2、字段 0）。源文件 TaleWorlds.Library/NavigationPath.cs。"
---
# NavigationPath

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class NavigationPath : ISerializable`
**File:** `TaleWorlds.Library/NavigationPath.cs`

## 概述

NavigationPath 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/NavigationPath.cs。它是一个 public 类，实现/继承 ISerializable，继承链为 NavigationPath → ISerializable。public/protected 成员共 7 个：3 方法、2 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NavigationPath 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 NavigationPath → ISerializable。成员构成以方法为主（方法 3/7，属性 2/7），对外主要以操作入口暴露。继承链上的 ISerializable 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/NavigationPath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Vec2[]PathPoints` | `public Vec2[]PathPoints` | 属性 |
| `Size` | `public int Size` | 属性 |
| `NavigationPath` | `public NavigationPath()` | 构造函数 |
| `NavigationPath` | `protected NavigationPath(SerializationInfo info, StreamingContext context)` | 构造函数 |
| `GetObjectData` | `public virtual void GetObjectData(SerializationInfo info, StreamingContext context)` | 方法 |
| `this[...]` | `public Vec2 this[int i]` | 索引器 |
| `OverridePathPointAtIndex` | `public void OverridePathPointAtIndex(int index, in Vec2 newValue)` | 方法 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)

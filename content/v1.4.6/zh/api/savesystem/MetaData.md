---
title: "MetaData"
description: "MetaData：TaleWorlds.SaveSystem 的 public 类；公开成员 7 个（方法 5、属性 2、字段 0）。源文件 TaleWorlds.SaveSystem/MetaData.cs。"
---
# MetaData

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public class MetaData`
**File:** `TaleWorlds.SaveSystem/MetaData.cs`

## 概述

MetaData 位于 TaleWorlds.SaveSystem 模块，源文件 TaleWorlds.SaveSystem/MetaData.cs。它是一个 public 类，继承链为 MetaData。public/protected 成员共 7 个：5 方法、2 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MetaData 是 TaleWorlds.SaveSystem 的顶层类型，命名空间与模块目录一致，继承链 MetaData。成员构成以方法为主（方法 5/7，属性 2/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.SaveSystem/MetaData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Add` | `public void Add(string key, string value)` | 方法 |
| `Count` | `public int Count` | 属性 |
| `TryGetValue` | `public bool TryGetValue(string key, out string value)` | 方法 |
| `this[...]` | `public string this[string key]` | 索引器 |
| `Keys` | `public Dictionary<string, string>.KeyCollection Keys` | 属性 |
| `Serialize` | `public void Serialize(Stream stream)` | 方法 |
| `Deserialize` | `public static MetaData Deserialize(Stream stream)` | 方法 |

## 参见

- [↑ savesystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AsyncFileSaveDriver](../AsyncFileSaveDriver)
- [同命名空间 ContainerType](../ContainerType)
- [同命名空间 EntryId](../EntryId)
- [同命名空间 FileDriver](../FileDriver)

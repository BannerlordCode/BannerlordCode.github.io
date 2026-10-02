---
title: "TextInquiryData"
description: "TextInquiryData：TaleWorlds.Library 的 public 类；公开成员 3 个（方法 1、属性 0、字段 1）。源文件 TaleWorlds.Library/TextInquiryData.cs。"
---
# TextInquiryData

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public class TextInquiryData`
**File:** `TaleWorlds.Library/TextInquiryData.cs`

## 概述

TextInquiryData 位于 TaleWorlds.Library 模块，源文件 TaleWorlds.Library/TextInquiryData.cs。它是一个 public 类，继承链为 TextInquiryData。public/protected 成员共 3 个：1 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TextInquiryData 是 TaleWorlds.Library 的顶层类型，命名空间与模块目录一致，继承链 TextInquiryData。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Library/TextInquiryData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TextInquiryData` | `public TextInquiryData(string titleText, string text, bool isAffirmativeOptionShown, bool isNegativeOptionShown, string affirmativeText, string negativeText, Action<string>affirmativeAction, Action negativeAction, bool shouldInputBeObfuscated = false, Func<string, Tuple<bool, string>>textCondition = null, string soundEventPath = "", string defaultInputText = "")` | 构造函数 |
| `HasSameContentWith` | `public bool HasSameContentWith(object other)` | 方法 |
| `Text` | `public string Text` | 字段 |

## 参见

- [↑ library 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AmbientInformation](../AmbientInformation)
- [同命名空间 ApplicationPlatform](../ApplicationPlatform)
- [同命名空间 ApplicationVersion](../ApplicationVersion)
- [同命名空间 ApplicationVersionJsonConverter](../ApplicationVersionJsonConverter)

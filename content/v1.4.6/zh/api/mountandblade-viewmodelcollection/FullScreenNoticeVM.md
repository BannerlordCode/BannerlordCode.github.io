---
title: "FullScreenNoticeVM"
description: "FullScreenNoticeVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 10 个（方法 4、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs。"
---
# FullScreenNoticeVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class FullScreenNoticeVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs`

## 概述

FullScreenNoticeVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 FullScreenNoticeVM → ViewModel。public/protected 成员共 10 个：4 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FullScreenNoticeVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录一致，继承链 FullScreenNoticeVM → ViewModel。成员构成以属性为主（属性 5/10，方法 4/10），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/FullScreenNoticeVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FullScreenNoticeVM` | `public FullScreenNoticeVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `ExecuteCloseNotice` | `public void ExecuteCloseNotice()` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `IsNoticeActive` | `public bool IsNoticeActive` | 属性 |
| `NoticeTitleText` | `public string NoticeTitleText` | 属性 |
| `NoticeContentText` | `public string NoticeContentText` | 属性 |
| `ConfirmText` | `public string ConfirmText` | 属性 |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | 方法 |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BoundaryCrossingVM](../BoundaryCrossingVM)
- [同命名空间 GameVersionVM](../GameVersionVM)
- [同命名空间 IMissionScreen](../IMissionScreen)
- [同命名空间 MissionAgentStatusVM](../MissionAgentStatusVM)

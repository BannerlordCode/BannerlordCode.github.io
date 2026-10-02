---
title: "MPPerkSelectionManager"
description: "MPPerkSelectionManager：TaleWorlds.MountAndBlade 的 public 类；公开成员 9 个（方法 6、属性 2、字段 0）。源文件 TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs。"
---
# MPPerkSelectionManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MPPerkSelectionManager`
**File:** `TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs`

## 概述

MPPerkSelectionManager 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs。它是一个 public 类，继承链为 MPPerkSelectionManager。public/protected 成员共 9 个：6 方法、2 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MPPerkSelectionManager 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MPPerkSelectionManager。成员构成以方法为主（方法 6/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MPPerkSelectionManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static MPPerkSelectionManager Instance` | 属性 |
| `FreeInstance` | `public static void FreeInstance()` | 方法 |
| `InitializeForUser` | `public void InitializeForUser(string username, PlayerId playerId)` | 方法 |
| `ResetPendingChanges` | `public void ResetPendingChanges()` | 方法 |
| `TryToApplyAndSavePendingChanges` | `public void TryToApplyAndSavePendingChanges()` | 方法 |
| `List` | `public List<MPPerkSelectionManager.MPPerkSelection>GetSelectionsForHeroClass(MultiplayerClassDivisions.MPHeroClass currentHeroClass)` | 方法 |
| `SetSelectionsForHeroClassTemporarily` | `public void SetSelectionsForHeroClassTemporarily(MultiplayerClassDivisions.MPHeroClass currentHeroClass, List<MPPerkSelectionManager.MPPerkSelection>perkChoices)` | 方法 |
| `MPPerkSelection` | `public struct MPPerkSelection` | 属性 |
| `MPPerkSelection` | `public struct MPPerkSelection` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)

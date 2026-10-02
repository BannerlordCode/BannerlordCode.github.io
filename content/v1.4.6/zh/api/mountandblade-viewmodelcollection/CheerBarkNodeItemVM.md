---
title: "CheerBarkNodeItemVM"
description: "CheerBarkNodeItemVM：TaleWorlds.MountAndBlade.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 16 个（方法 5、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs。"
---
# CheerBarkNodeItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CheerBarkNodeItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs`

## 概述

CheerBarkNodeItemVM 位于 TaleWorlds.MountAndBlade.ViewModelCollection 模块，源文件 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 CheerBarkNodeItemVM → ViewModel。public/protected 成员共 16 个：5 方法、9 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CheerBarkNodeItemVM 是 TaleWorlds.MountAndBlade.ViewModelCollection 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ViewModelCollection.HUD），继承链 CheerBarkNodeItemVM → ViewModel。成员构成以属性为主（属性 9/16，方法 5/16），对外主要以状态读取接口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheerBarkNodeItemVM` | `public CheerBarkNodeItemVM(string tauntVisualName, TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)` | 构造函数 |
| `CheerBarkNodeItemVM` | `public CheerBarkNodeItemVM(TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)` | 构造函数 |
| `ClearSelectionRecursive` | `public void ClearSelectionRecursive()` | 方法 |
| `ExecuteFocused` | `public void ExecuteFocused()` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `AddSubNode` | `public void AddSubNode(CheerBarkNodeItemVM subNode)` | 方法 |
| `OnFinalize` | `public override void OnFinalize()` | 方法 |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | 属性 |
| `MBBindingList` | `public MBBindingList<CheerBarkNodeItemVM>SubNodes` | 属性 |
| `CheerNameText` | `public string CheerNameText` | 属性 |
| `IsDisabled` | `public bool IsDisabled` | 属性 |
| `IsSelected` | `public bool IsSelected` | 属性 |
| `HasSubNodes` | `public bool HasSubNodes` | 属性 |
| `TypeAsString` | `public string TypeAsString` | 属性 |
| `TauntVisualName` | `public string TauntVisualName` | 属性 |
| `SelectedNodeText` | `public string SelectedNodeText` | 属性 |

## 参见

- [↑ mountandblade-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [同命名空间 CrosshairVM](../CrosshairVM)
- [同命名空间 EquipmentActionItemVM](../EquipmentActionItemVM)
- [同命名空间 MissionAgentLockItemVM](../MissionAgentLockItemVM)

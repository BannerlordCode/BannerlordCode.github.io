---
title: "MapItemVM"
description: "MapItemVM：TaleWorlds.MountAndBlade.CustomBattle 的 public 类，继承 SelectorItemVM；公开成员 6 个（方法 1、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs。"
---
# MapItemVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class MapItemVM : SelectorItemVM`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs`

## 概述

MapItemVM 位于 TaleWorlds.MountAndBlade.CustomBattle 模块，源文件 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs。它是一个 public 类，实现/继承 SelectorItemVM，继承链为 MapItemVM → SelectorItemVM。public/protected 成员共 6 个：1 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapItemVM 是 TaleWorlds.MountAndBlade.CustomBattle 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.CustomBattle.CustomBattle.SelectionItem），继承链 MapItemVM → SelectorItemVM。成员构成以属性为主（属性 4/6，方法 1/6），对外主要以状态读取接口暴露。继承链上的 SelectorItemVM 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/SelectionItem/MapItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapName` | `public string MapName` | 属性 |
| `MapId` | `public string MapId` | 属性 |
| `ForcedSceneLevel` | `public string ForcedSceneLevel` | 属性 |
| `MapItemVM` | `public MapItemVM(string mapName, string mapId, string forcedSceneLevel) : base(mapName)` | 构造函数 |
| `UpdateSearchedText` | `public void UpdateSearchedText(string searchedText)` | 方法 |
| `NameText` | `public string NameText` | 属性 |

## 参见

- [↑ mountandblade-custombattle 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterItemVM](../CharacterItemVM)
- [同命名空间 CustomBattleFactionSelectionVM](../CustomBattleFactionSelectionVM)
- [同命名空间 FactionItemVM](../FactionItemVM)
- [同命名空间 GameTypeItemVM](../GameTypeItemVM)

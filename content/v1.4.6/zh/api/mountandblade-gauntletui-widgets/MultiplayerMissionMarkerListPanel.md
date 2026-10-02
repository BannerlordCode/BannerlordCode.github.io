---
title: "MultiplayerMissionMarkerListPanel"
description: "MultiplayerMissionMarkerListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 17 个（方法 1、属性 14、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs。"
---
# MultiplayerMissionMarkerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerMissionMarkerListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs`

## 概述

MultiplayerMissionMarkerListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 MultiplayerMissionMarkerListPanel → ListPanel。public/protected 成员共 17 个：1 方法、14 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerMissionMarkerListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker），继承链 MultiplayerMissionMarkerListPanel → ListPanel。成员构成以属性为主（属性 14/17，方法 1/17），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/MultiplayerMissionMarkerListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FarAlphaTarget` | `public float FarAlphaTarget` | 属性 |
| `FarDistanceCutoff` | `public float FarDistanceCutoff` | 属性 |
| `CloseDistanceCutoff` | `public float CloseDistanceCutoff` | 属性 |
| `MultiplayerMissionMarkerListPanel` | `public MultiplayerMissionMarkerListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `FlagWidget` | `public Widget FlagWidget` | 属性 |
| `RemovalTimeVisiblityWidget` | `public Widget RemovalTimeVisiblityWidget` | 属性 |
| `SpawnFlagIconWidget` | `public Widget SpawnFlagIconWidget` | 属性 |
| `PeerWidget` | `public Widget PeerWidget` | 属性 |
| `SiegeEngineWidget` | `public Widget SiegeEngineWidget` | 属性 |
| `Position` | `public Vec2 Position` | 属性 |
| `Distance` | `public int Distance` | 属性 |
| `IsMarkerEnabled` | `public bool IsMarkerEnabled` | 属性 |
| `IsSpawnFlag` | `public bool IsSpawnFlag` | 属性 |
| `MarkerType` | `public int MarkerType` | 属性 |
| `MissionMarkerType` | `public enum MissionMarkerType` | 属性 |
| `MissionMarkerType` | `public enum MissionMarkerType` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 SiegeEngineVisualWidget](../SiegeEngineVisualWidget)

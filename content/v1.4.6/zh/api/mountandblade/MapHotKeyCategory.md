---
title: "MapHotKeyCategory"
description: "MapHotKeyCategory：TaleWorlds.MountAndBlade 的 public 类，继承 GameKeyContext；公开成员 30 个（方法 0、属性 0、字段 29）。源文件 TaleWorlds.MountAndBlade/MapHotKeyCategory.cs。"
---
# MapHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MapHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/MapHotKeyCategory.cs`

## 概述

MapHotKeyCategory 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MapHotKeyCategory.cs。它是一个 public 类（sealed），实现/继承 GameKeyContext，继承链为 MapHotKeyCategory → GameKeyContext。public/protected 成员共 30 个：29 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapHotKeyCategory 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MapHotKeyCategory → GameKeyContext。成员构成以方法为主（方法 0/30，属性 0/30），对外主要以操作入口暴露。继承链上的 GameKeyContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MapHotKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapHotKeyCategory` | `public MapHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `QuickSave` | `public const int QuickSave` | 字段 |
| `PartyMoveUp` | `public const int PartyMoveUp` | 字段 |
| `PartyMoveLeft` | `public const int PartyMoveLeft` | 字段 |
| `PartyMoveDown` | `public const int PartyMoveDown` | 字段 |
| `PartyMoveRight` | `public const int PartyMoveRight` | 字段 |
| `MapMoveUp` | `public const int MapMoveUp` | 字段 |
| `MapMoveDown` | `public const int MapMoveDown` | 字段 |
| `MapMoveLeft` | `public const int MapMoveLeft` | 字段 |
| `MapMoveRight` | `public const int MapMoveRight` | 字段 |
| `MovementAxisX` | `public const string MovementAxisX` | 字段 |
| `MovementAxisY` | `public const string MovementAxisY` | 字段 |
| `MapFastMove` | `public const int MapFastMove` | 字段 |
| `MapZoomIn` | `public const int MapZoomIn` | 字段 |
| `MapZoomOut` | `public const int MapZoomOut` | 字段 |
| `MapRotateLeft` | `public const int MapRotateLeft` | 字段 |
| `MapRotateRight` | `public const int MapRotateRight` | 字段 |
| `MapCameraFollowMode` | `public const int MapCameraFollowMode` | 字段 |
| `MapToggleFastForward` | `public const int MapToggleFastForward` | 字段 |
| `MapTrackSettlement` | `public const int MapTrackSettlement` | 字段 |
| `MapGoToEncylopedia` | `public const int MapGoToEncylopedia` | 字段 |
| `MapClick` | `public const string MapClick` | 字段 |
| `MapTouchpadClick` | `public const string MapTouchpadClick` | 字段 |
| `MapFollowModifier` | `public const string MapFollowModifier` | 字段 |
| `MapChangeCursorMode` | `public const string MapChangeCursorMode` | 字段 |
| `MapTimeStop` | `public const int MapTimeStop` | 字段 |
| `MapTimeNormal` | `public const int MapTimeNormal` | 字段 |
| `MapTimeFastForward` | `public const int MapTimeFastForward` | 字段 |
| `MapTimeTogglePause` | `public const int MapTimeTogglePause` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)

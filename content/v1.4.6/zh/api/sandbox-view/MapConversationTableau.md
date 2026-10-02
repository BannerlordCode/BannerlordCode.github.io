---
title: "MapConversationTableau"
description: "MapConversationTableau：SandBox.View 的 public 类；公开成员 10 个（方法 8、属性 1、字段 0）。源文件 SandBox.View/Map/MapConversationTableau.cs。"
---
# MapConversationTableau

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationTableau`
**File:** `SandBox.View/Map/MapConversationTableau.cs`

## 概述

MapConversationTableau 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapConversationTableau.cs。它是一个 public 类，继承链为 MapConversationTableau。public/protected 成员共 10 个：8 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapConversationTableau 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map），继承链 MapConversationTableau。成员构成以方法为主（方法 8/10，属性 1/10），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapConversationTableau.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public Texture Texture` | 属性 |
| `MapConversationTableau` | `public MapConversationTableau()` | 构造函数 |
| `SetEnabled` | `public void SetEnabled(bool enabled)` | 方法 |
| `SetData` | `public void SetData(object data)` | 方法 |
| `SetTargetSize` | `public void SetTargetSize(int width, int height)` | 方法 |
| `OnFinalize` | `public void OnFinalize(bool clearNextFrame)` | 方法 |
| `OnTick` | `public void OnTick(float dt)` | 方法 |
| `OnConversationPlay` | `public void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath)` | 方法 |
| `RemovePreviousAgentsSoundEvent` | `public void RemovePreviousAgentsSoundEvent()` | 方法 |
| `StopConversationSoundEvent` | `public void StopConversationSoundEvent()` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider)

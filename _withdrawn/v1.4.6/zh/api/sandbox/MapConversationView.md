---
title: "MapConversationView"
description: "MapConversationView：SandBox.View.Map 的 public 类，继承 MapView；公开成员 9 个（方法 5、属性 2、字段 0）。canonical 桶 sandbox。源文件 SandBox.View/Map/MapConversationView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationView

**Namespace:** `SandBox.View.Map`
**Module:** `SandBox.View`
**Type:** `public class MapConversationView : MapView`
**File:** `SandBox.View/Map/MapConversationView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MapConversationView 位于 SandBox.View 模块，源文件 SandBox.View/Map/MapConversationView.cs。它是一个 public 类，实现/继承 MapView，继承链为 MapConversationView → MapView → SandboxView。public/protected 成员共 9 个：5 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapConversationView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.View.Map`，继承链 MapConversationView → MapView → SandboxView。成员构成以方法为主（方法 5/9，属性 2/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/MapConversationView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsConversationActive` | `public bool IsConversationActive` | 属性 |
| `InitializeConversation` | `protected internal virtual void InitializeConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | 方法 |
| `OnFinalize` | `protected internal override void OnFinalize()` | 方法 |
| `FinalizeConversation` | `protected internal virtual void FinalizeConversation()` | 方法 |
| `CreateConversationMissionIfMissing` | `protected void CreateConversationMissionIfMissing()` | 方法 |
| `DestroyConversationMission` | `protected void DestroyConversationMission()` | 方法 |
| `ICampaignMission` | `public class MapConversationMission : ICampaignMission` | 属性 |
| `ICampaignMission` | `public class MapConversationMission : ICampaignMission` | 嵌套类型 |
| `ConversationPlayArgs` | `public struct ConversationPlayArgs` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapView](../MapView/)
- [同命名空间 BattleSimulationMapView](../BattleSimulationMapView/)
- [同命名空间 BlockadePositionScript](../BlockadePositionScript/)
- [同命名空间 CampaignEntityVisualComponent](../CampaignEntityVisualComponent/)
- [同命名空间 DefaultMapConversationDataProvider](../DefaultMapConversationDataProvider/)

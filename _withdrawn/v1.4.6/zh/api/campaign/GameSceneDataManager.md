---
title: "GameSceneDataManager"
description: "GameSceneDataManager：TaleWorlds.CampaignSystem 的 public 类；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameSceneDataManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameSceneDataManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class GameSceneDataManager`
**File:** `TaleWorlds.CampaignSystem/GameSceneDataManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

GameSceneDataManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameSceneDataManager.cs。它是一个 public 类，继承链为 GameSceneDataManager。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameSceneDataManager 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem`，继承链 GameSceneDataManager。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameSceneDataManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static GameSceneDataManager Instance` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<SingleplayerBattleSceneData>SingleplayerBattleScenes` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<ConversationSceneData>ConversationScenes` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<MeetingSceneData>MeetingScenes` | 属性 |
| `GameSceneDataManager` | `public GameSceneDataManager()` | 构造函数 |
| `LoadSPBattleScenes` | `public void LoadSPBattleScenes(string path)` | 方法 |
| `LoadConversationScenes` | `public void LoadConversationScenes(string path)` | 方法 |
| `LoadMeetingScenes` | `public void LoadMeetingScenes(string path)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionNotes](../ActionNotes/)
- [同命名空间 AIBehaviorData](../AIBehaviorData/)
- [同命名空间 Army](../Army/)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid/)

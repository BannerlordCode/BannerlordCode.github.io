---
title: "SandBoxManager"
description: "SandBoxManager：TaleWorlds.CampaignSystem 的 public 类，继承 GameHandler；公开成员 14 个（方法 9、属性 5、字段 0）。源文件 TaleWorlds.CampaignSystem/SandBoxManager.cs。"
---
# SandBoxManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class SandBoxManager : GameHandler`
**File:** `TaleWorlds.CampaignSystem/SandBoxManager.cs`

## 概述

SandBoxManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/SandBoxManager.cs。它是一个 public 类，实现/继承 GameHandler，继承链为 SandBoxManager → GameHandler。public/protected 成员共 14 个：9 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxManager 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录一致，继承链 SandBoxManager → GameHandler。成员构成以方法为主（方法 9/14，属性 5/14），对外主要以操作入口暴露。继承链上的 GameHandler 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/SandBoxManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SandBoxMissionManager` | `public ISandBoxMissionManager SandBoxMissionManager` | 属性 |
| `AgentBehaviorManager` | `public IAgentBehaviorManager AgentBehaviorManager` | 属性 |
| `SandBoxSaveManager` | `public ISaveManager SandBoxSaveManager` | 属性 |
| `Instance` | `public static SandBoxManager Instance` | 属性 |
| `GameStarter` | `public CampaignGameStarter GameStarter` | 属性 |
| `Initialize` | `public void Initialize(CampaignGameStarter gameStarter)` | 方法 |
| `OnCampaignStart` | `public void OnCampaignStart(CampaignGameStarter gameInitializer, GameManagerBase gameManager, bool isSavedCampaign)` | 方法 |
| `OnGameStart` | `protected override void OnGameStart()` | 方法 |
| `OnGameEnd` | `protected override void OnGameEnd()` | 方法 |
| `InitializeSandboxXMLs` | `public void InitializeSandboxXMLs(bool isSavedCampaign)` | 方法 |
| `InitializeCharactersAfterLoad` | `public void InitializeCharactersAfterLoad(bool isSavedCampaign)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnBeforeSave` | `public override void OnBeforeSave()` | 方法 |
| `OnAfterSave` | `public override void OnAfterSave()` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionNotes](../ActionNotes)
- [同命名空间 AIBehaviorData](../AIBehaviorData)
- [同命名空间 Army](../Army)
- [同命名空间 AtmosphereGrid](../AtmosphereGrid)

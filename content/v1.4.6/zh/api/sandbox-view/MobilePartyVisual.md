---
title: "MobilePartyVisual"
description: "MobilePartyVisual：SandBox.View 的 public 类，继承 MapEntityVisual<PartyBase>；公开成员 22 个（方法 12、属性 9、字段 0）。源文件 SandBox.View/Map/Visuals/MobilePartyVisual.cs。"
---
# MobilePartyVisual

**Namespace:** `SandBox.View.Map.Visuals`
**Module:** `SandBox.View`
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## 概述

MobilePartyVisual 位于 SandBox.View 模块，源文件 SandBox.View/Map/Visuals/MobilePartyVisual.cs。它是一个 public 类，实现/继承 MapEntityVisual<PartyBase>，继承链为 MobilePartyVisual → MapEntityVisual。public/protected 成员共 22 个：12 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MobilePartyVisual 是 SandBox.View 的顶层类型，命名空间与模块目录不同（SandBox.View.Map.Visuals），继承链 MobilePartyVisual → MapEntityVisual。成员构成以方法为主（方法 12/22，属性 9/22），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.View/Map/Visuals/MobilePartyVisual.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BearingRotation` | `public override float BearingRotation` | 属性 |
| `AttachedTo` | `public override MapEntityVisual AttachedTo` | 属性 |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer` | 属性 |
| `IsMobileEntity` | `public override bool IsMobileEntity` | 属性 |
| `IsMainEntity` | `public override bool IsMainEntity` | 属性 |
| `StrategicEntity` | `public GameEntity StrategicEntity` | 属性 |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals` | 属性 |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals` | 属性 |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals` | 属性 |
| `MobilePartyVisual` | `public MobilePartyVisual(PartyBase partyBase) : base(partyBase)` | 构造函数 |
| `IsEnemyOf` | `public override bool IsEnemyOf(IFaction faction)` | 方法 |
| `IsInSameFaction` | `public override bool IsInSameFaction(IFaction faction)` | 方法 |
| `IsAllyOf` | `public override bool IsAllyOf(IFaction faction)` | 方法 |
| `OnTrackAction` | `public override void OnTrackAction()` | 方法 |
| `OnMapClick` | `public override bool OnMapClick(bool followModifierUsed)` | 方法 |
| `OnHover` | `public override void OnHover()` | 方法 |
| `GetVisualPosition` | `public override Vec3 GetVisualPosition()` | 方法 |
| `ReleaseResources` | `public override void ReleaseResources()` | 方法 |
| `IsVisibleOrFadingOut` | `public override bool IsVisibleOrFadingOut()` | 方法 |
| `OnOpenEncyclopedia` | `public override void OnOpenEncyclopedia()` | 方法 |
| `GetBannerOfCharacter` | `public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)` | 方法 |
| `AddTentEntityForParty` | `public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)` | 方法 |

## 参见

- [↑ sandbox-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MapEntityVisual](../MapEntityVisual)
- [同命名空间 MapEntityVisual](../MapEntityVisual)
- [同命名空间 MapEntityVisual](../MapEntityVisual__1)
- [同命名空间 MapWeatherVisual](../MapWeatherVisual)
- [同命名空间 SettlementVisual](../SettlementVisual)

---
title: "QuestNotificationItemVM"
description: "QuestNotificationItemVM：TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes 的 public 类，继承 MapNotificationItemBaseVM；公开成员 3 个（方法 1、属性 0、字段 0）。canonical 桶 viewmodel。源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QuestNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class QuestNotificationItemVM : MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## 概述

QuestNotificationItemVM 位于 TaleWorlds.CampaignSystem.ViewModelCollection 模块，源文件 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs。它是一个 public 类，实现/继承 MapNotificationItemBaseVM，继承链为 QuestNotificationItemVM → MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 3 个：1 方法、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestNotificationItemVM 落在 canonical 桶 `viewmodel`（命中规则 `rule:TaleWorlds.CampaignSystem.ViewModelCollection`），命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`，继承链 QuestNotificationItemVM → MapNotificationItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以方法为主（方法 1/3，属性 0/3），对外主要以操作入口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/QuestNotificationItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `QuestNotificationItemVM` | `public QuestNotificationItemVM(QuestBase quest, InformationData data, Action<QuestBase>onQuestNotificationInspect, Action<MapNotificationItemBaseVM>onRemove) : base(data)` | 构造函数 |
| `QuestNotificationItemVM` | `public QuestNotificationItemVM(IssueBase issue, InformationData data, Action<IssueBase>onIssueNotificationInspect, Action<MapNotificationItemBaseVM>onRemove) : base(data)` | 构造函数 |
| `ManualRefreshRelevantStatus` | `public override void ManualRefreshRelevantStatus()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MapNotificationItemBaseVM](../MapNotificationItemBaseVM/)
- [同命名空间 AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM/)
- [同命名空间 AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM/)
- [同命名空间 AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM/)
- [同命名空间 AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM/)

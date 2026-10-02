---
title: "Campaign ext — 战役的扩展面：行为、组件与组件接口"
description: "TaleWorlds.CampaignSystem 的子命名空间所在目录：行为、组件、组件接口、对话、议题与 ObjectSystem。目前 2 页。"
---
# Campaign ext — 战役的扩展面：行为、组件与组件接口

`TaleWorlds.CampaignSystem` 本体在 [campaign](../campaign/)。这个桶装的是它的**子命名空间**，也就是"往战役里加东西"的那一面：行为的基类、可替换的组件模型、组件接口、对话、议题，以及 `TaleWorlds.ObjectSystem` 的 MBO 层。

对模组作者来说这是最常待的一个桶。战役的扩展点几乎全部做成"注册一个行为"或"替换一个组件模型"，而这两类东西的类型都在这里，不在 `campaign/`。

按前缀规则属于这个桶的子命名空间：

| 命名空间 | 1.4.7 的 `.cs` 数量 | 内容 |
| --- | ---: | --- |
| `TaleWorlds.CampaignSystem.CampaignBehaviors` | 135 | 官方战役行为：`BattleCampaignBehavior`、`BuildingsCampaignBehavior` 等 |
| `TaleWorlds.CampaignSystem.ComponentInterfaces` | 126 | 组件模型的**接口**：`AgeModel`、`AllianceModel`、`BattleRewardModel` 等 |
| `TaleWorlds.CampaignSystem.GameComponents` | 124 | 上面那些接口的**官方实现**：`DefaultAgeModel`、`DefaultAllianceModel` 等 |
| `TaleWorlds.CampaignSystem.Issues` | 43 | 战役问题（`IssueBase` 的子类）与其默认效果 |
| `TaleWorlds.CampaignSystem.Conversation` | 12 | 对话：句子、选项、`CampaignMapConversation` |
| `TaleWorlds.ObjectSystem` | 18 | MBO 定义与注册：`MBObjectManager`、`MBObjectBase` |

`ComponentInterfaces` 与 `GameComponents` 是一对：`GameComponents` 里的每个 `Default*` 都是 `ComponentInterfaces` 里对应接口的官方实现。替换组件 = 写一个自己的实现并在加载时替换，这是组件化战役规则的主要手段。

## 本区页面（2）

| 页面 | 讲的是什么 |
| --- | --- |
| [MBObjectBase](./MBObjectBase) | MBO 的基类：定义一个可序列化的战役对象 |
| [MBObjectManager](./MBObjectManager) | MBO 的注册与按类型取用 |

只有 2 页，但它们正好是这个桶里"自定义数据"那一半的全部入口 —— 你要往战役里塞自己的持久化对象，绕不开 `MBObjectBase`。

## 尚未收录

行为基类这一侧没有页面：`CampaignBehaviorBase` 在 [campaign](../campaign/)，而 135 个官方行为、126 个组件接口、124 个默认组件实现、43 个议题类、12 个对话类型，以及 `MBObjectManager` 之外的 MBO 基础设施，都没有各自的页面。目前这个桶能被读到的只有自定义数据的两个入口类。

## 相邻目录

[campaign](../campaign/) · [core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)
- ↘ [存档系统](../../architecture/save-system)
- ↘ [模块系统](../../architecture/module-system)
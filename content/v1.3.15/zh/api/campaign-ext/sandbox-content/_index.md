---
title: "SandBox 内容家族"
description: "用于模块启动和 GameState 加载的 SandBox 真实实现索引。"
---

# SandBox 内容家族

## Mental Model

SandBox 是单机内容模块，不是另一套公共 SDK。它的类展示战役 Behavior、菜单、任务、
对话和 GameState 如何组合。v1.4.5 的来源是 `Bannerlord.Source/Modules.SandBox`；
本页链接的 v1.3.15 页面只确认托管类型名称。Mod 应依赖 CampaignSystem 契约，
把 SandBox 当作实现范例。

## Dependencies

- [CampaignGameStarter](../CampaignGameStarter) 注册战役 Behavior 和 Model。
- [Campaign](../../campaign/Campaign) 拥有已加载的战役状态。
- [GameState](../../core-extra/GameState) 与 [GameStateManager](../../core-extra/GameStateManager) 拥有屏幕切换生命周期。
- [SandBox / StoryMode / Native 政策](../../../architecture/sandbox-native-policy) 定义边界。

## Source-backed entries

| Namespace | Type | Purpose | Timing |
| --- | --- | --- | --- |
| SandBox | [MultiplayerItemTestMissionController](../MultiplayerItemTestMissionController) | 将 SandBox 装备测试 Mission 与战役世界状态隔离。 | 显式测试 Mission 启动与收尾 |
| Sandbox.View.GameStates | [PreloadState](../PreloadState) | 协调 SandBox 预加载过渡，之后才暴露战役屏幕。 | 战役交互前的 GameState 启动 |

## Navigation

- [Parent: Campaign extensions](..)
- [Related: Campaign](../../campaign/) · [Game states](../../core-extra/GameState)
- [Policy: SandBox / StoryMode / Native](../../../architecture/sandbox-native-policy)

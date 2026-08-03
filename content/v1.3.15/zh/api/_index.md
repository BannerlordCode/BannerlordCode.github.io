---
title: "API 参考 — 按任务找入口"
description: "以模组任务和运行时层次组织 Bannerlord API：先选扩展点，再沿生命周期、事件、Action、Model、Mission 或 UI 依赖链阅读；A–Z 目录只作为补查入口。"
---
# API 参考：按任务找入口

> 这不是签名墙。先从你要完成的任务进入，再回到具体类型页核对成员、调用时机和风险。类名完整目录保留在各模块索引底部，适合已知类型名后的补查。

## 开始路径

| 我想做什么 | 第一入口 | 接下来读什么 |
| --- | --- | --- |
| 让模块在正确阶段加载 | [MBSubModuleBase](./core/MBSubModuleBase/) | [Game](./core-extra/Game/) → [CampaignGameStarter](./campaign-ext/CampaignGameStarter/) |
| 在战役中注册行为并监听事件 | [CampaignGameStarter](./campaign-ext/CampaignGameStarter/) | [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/) → [CampaignEvents](./campaign-ext/CampaignEvents/) |
| 改钱、关系、战争或英雄状态 | [CampaignEvents](./campaign-ext/CampaignEvents/) | [Hero](./campaign/Hero/) → [Actions 家族](./campaign-ext/actions/) → 对应 `*Action.Apply` |
| 给自定义行为加存档字段 | [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/) | [IDataStore](./campaign-ext/IDataStore/) → [SaveManager](./save-system/SaveManager/) |
| 写 Mission 行为并处理 Agent | [Mission](./mission/Mission/) | [MissionBehavior](./mission/MissionBehavior/) → [MissionLogic](./mission-ext/MissionLogic/) → [Agent](./mission/Agent/) |
| 查询或替换战役计算公式 | [GameModels](./campaign-ext/GameModels/) | [Models 家族](./campaign-ext/models/) → 对应 `*Model` 的注册与读取 |
| 做 Gauntlet 界面 | [ScreenManager](./gui/ScreenManager/) | [GauntletLayer](./engine/GauntletLayer/) → [ViewModel](./core-extra/ViewModel/) |
| 读取本地化文本 | [TextObject](./localization/TextObject/) | [本地化指南](../guide/localization/) |

## 运行时层次

### Foundation / Core：创建、注册和全局边界

- [Core 模块](./core/) — `MBSubModuleBase`、`Module`、物品身份入口。
- [Core Extra 模块](./core-extra/) — [Game](./core-extra/Game/)、[InformationManager](./core-extra/InformationManager/)、装备和技能等运行时对象。
- [System 模块](./system/) — 输入、对象系统和运行库桥接；先看 [架构总览](../architecture/sdk-overview/) 再进入长尾类型。
- [存档模块](./save-system/) — `SaveManager`、`IDataStore`、`Saveable*` 标注与加载顺序。

### Campaign：持久世界和规则协调

- [Campaign 模块](./campaign/) — `Campaign`、`Hero`、`Clan`、`Kingdom`、`Settlement`、`MobileParty` 等世界实体。
- [Campaign-Ext 模块](./campaign-ext/) — [CampaignGameStarter](./campaign-ext/CampaignGameStarter/)、[CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/)、[CampaignEvents](./campaign-ext/CampaignEvents/)、Actions、Models、名册和内容家族。
- [Actions 家族](./campaign-ext/actions/) — 通过 `Apply` 改变世界；不要直接写实体字段。
- [Models 家族](./campaign-ext/models/) — 读取或替换战役计算模型；返回 `null` 或替错模型会在 tick 中崩溃。

### Mission：战斗场景和 Agent 生命周期

- [Mission 模块](./mission/) — [Mission](./mission/Mission/)、[MissionBehavior](./mission/MissionBehavior/)、[Team](./mission/Team/)、[Formation](./mission/Formation/)。
- [Mission-Ext 模块](./mission-ext/) — [MissionLogic](./mission-ext/MissionLogic/)、AgentComponent 与场景扩展。

### UI / Localization：屏幕、绑定和文本

- [GUI 模块](./gui/) — [ScreenManager](./gui/ScreenManager/) 与底层屏幕/输入类型。
- [Engine 模块](./engine/) — [GauntletLayer](./engine/GauntletLayer/) 与引擎层边界。
- [ViewModel 模块](./viewmodel/) — ViewModel 生命周期、属性通知和命令绑定。
- [Localization 模块](./localization/) — [TextObject](./localization/TextObject/) 与文本变量。

## 依赖阅读顺序

1. 先读 [SDK 总览](../architecture/sdk-overview/) 确认你处于 Foundation、Campaign、Mission、UI 还是 Save 层。
2. 再读 [开发者任务路线图](../architecture/developer-roadmap/) 找到最短扩展链。
3. 进入入口类型页，先看“心智模型、何时用、何时不要用、风险”。
4. 需要改变世界时回看 [崩溃与存档边界](../architecture/crash-boundaries/)；它解释为什么事件、Action、Model、Save 不能互换。
5. 最后用模块索引中的完整目录补查非枢纽类型；目录页不是业务语义的替代品。

## 模块完整目录

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [GUI](./gui/) · [Localization](./localization/) · [Mission](./mission/) · [Mission-Ext](./mission-ext/)
- [Save System](./save-system/) · [System](./system/) · [ViewModel](./viewmodel/)

## 参见

- ↑ [版本首页](../../)
- ↔ [架构总览](../architecture/) · [开发者任务路线图](../architecture/developer-roadmap/) · [崩溃与存档边界](../architecture/crash-boundaries/)
- ↓ [跨版本类对比](../../../versions/)

---
title: "API 参考 — 按任务找入口（v1.4.5）"
description: "以 v1.4.5 的运行时层次、生命周期和崩溃边界组织 Bannerlord API；先选扩展点，再进入具体类型和家族手册。"
---
# API 参考：按任务找入口（v1.4.5）

> 先按任务选入口，再按依赖链阅读类型页。底部模块目录仍保留完整类名查找，但它不能替代心智模型、调用时机和风险说明。

## 开始路径

| 我想做什么 | 第一入口 | 接下来读什么 |
| --- | --- | --- |
| 让模组在正确阶段加载 | [MBSubModuleBase](./core/MBSubModuleBase) | [Game](./core/Game) → [CampaignGameStarter](./campaign/CampaignGameStarter) |
| 在战役中注册行为并监听事件 | [CampaignGameStarter](./campaign/CampaignGameStarter) | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) → [CampaignEvents](./campaign/CampaignEvents) |
| 给 Hero 钱、杀人、宣战或改王国 | [Hero](./campaign/Hero) / [GiveGoldAction](./campaign-ext/GiveGoldAction) | [KillCharacterAction](./campaign-ext/KillCharacterAction) / [ChangeKingdomAction](./campaign-ext/ChangeKingdomAction) / [DeclareWarAction](./campaign-ext/DeclareWarAction) |
| 查询或替换战役计算规则 | [GameModelsManager](./core-extra/GameModelsManager/) | 对应 `*Model` → 注册时机 → 每个消费者的返回契约 |
| 写 Mission 行为并处理 Agent | [Mission](./mission/Mission) | [MissionBehavior](./mission/MissionBehavior) → [Agent](./mission/Agent) |
| 保存自定义战役状态 | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) | [IDataStore](./campaign/IDataStore) → [SaveManager](./save-system/SaveManager) |
| 注册新的可存档对象类型 | [SaveableTypeDefiner](./save-system/SaveableTypeDefiner) | [SaveManager](./save-system/SaveManager) → Saveable field/property 元数据 |
| 做 Gauntlet UI | [ScreenManager](./gui/ScreenManager) | [GauntletLayer](./engine/GauntletLayer) → [ViewModel](./core-extra/ViewModel) |
| 读取本地化文本 | [TextObject](./localization/TextObject) | Localization 模块 → UI 或提示的生命周期 |

## 运行时层次

```
SubModule → Game → Campaign → (Action / Model / Behavior) → Entity
                     ↘ Mission → (MissionBehavior / Agent / Team)
                     ↘ SaveManager（稳定状态）
             UI / ViewModel 读取 Campaign 或 Mission 状态
```

- **Foundation / Core：** 创建、注册和全局对象身份；先处理 `MBSubModuleBase`、`Game`、`MBObjectManager` 的生命周期。
- **Campaign：** 持久世界由实体承载，规则由 Model 计算，世界变更由 Action 协调，Behavior 连接事件与自定义状态。
- **Mission：** 一次战斗场景拥有自己的 `Mission`、`Agent`、`Team` 和行为集合；场景结束后这些引用不再可靠。
- **UI：** `ScreenManager` 和 `GauntletLayer` 管屏幕，`ViewModel` 管绑定状态；UI 不是 Campaign 的世界变更入口。
- **Save：** `SyncData(IDataStore)` 适合 Behavior 自己的状态；新的可达对象类型才进入 `SaveableTypeDefiner` / Attribute 定义链。

## 依赖与防崩边界

1. 模块加载阶段只注册类型和 UI；在 `OnGameStart` 或相应 Campaign 生命周期建立后再访问 `Campaign.Current`。
2. 直接改变 Hero、Settlement、Kingdom 等世界状态前，先找对应 `*Action.Apply`，不要把字段写入当作 Action 的替代。
3. Model 替换必须注册正确的具体类型，不能返回 `null` 或不兼容的实例；否则 tick 和 UI 消费者都会失败。
4. Mission 内监听 Agent 离场并在 `OnMissionEnded` 清理；不要把 Agent 或 Mission 存进跨场景 Behavior 状态。
5. Save 的 local ID、Behavior `StringId`、`SyncData` key 和值类型都是持久协议；改动前先看[崩溃与存档边界](../architecture/crash-boundary)。

## 阅读顺序

1. 先看[架构总览](../architecture/)和[路线图](../architecture/roadmap)，确定层和任务。
2. 进入第一入口页，先读心智模型、何时用/不用、依赖和风险。
3. 需要世界变更时读 Actions 家族和[崩溃边界](../architecture/crash-boundary)；需要计算时读 Models 家族。
4. 最后用模块目录补查长尾类型，不把字母目录当作理解项目的起点。

## 完整模块目录

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [GUI](./gui/) · [Localization](./localization/) · [Mission](./mission/) · [Mission-Ext](./mission-ext/)
- [Save System](./save-system/) · [System](./system/) · [ViewModel](./viewmodel/)

## 导航

- ↑ [v1.4.5 版本首页](../)
- ↔ [架构总览](../architecture/) · [路线图](../architecture/roadmap) · [崩溃与存档边界](../architecture/crash-boundary)
- 跨版本： [类对比](../../../versions/)

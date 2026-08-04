---
title: "API 参考 — 按任务找入口（v1.3.0）"
description: "以 v1.3.0 的运行时层次和模组任务组织 API：先选扩展点，再沿生命周期、事件、Action、Model、Mission 或 UI 依赖链阅读。"
---
# API 参考：按任务找入口（v1.3.0）

> 这里是开发路线图，不是签名墙。先决定要接入哪个生命周期或系统边界，再进入模块索引补查具体类型。完整目录保留在本文底部，适合已经知道类型名时使用。

## 开始路径

| 我想做什么 | 第一入口 | 接下来读什么 |
| --- | --- | --- |
| 让模组在正确阶段加载 | [MBSubModuleBase](./core/MBSubModuleBase) | [Game](./core-extra/Game) → [CampaignGameStarter](./campaign/CampaignGameStarter) |
| 在战役中注册行为并监听事件 | [CampaignGameStarter](./campaign/CampaignGameStarter) | [CampaignBehaviorBase](./campaign/CampaignBehaviorBase) → [CampaignEvents](./campaign/CampaignEvents) |
| 安全地给钱、杀人或改变战争 | [GiveGoldAction](./campaign-ext/GiveGoldAction) | 对应 `*Action.Apply` → [Hero](./campaign/Hero) / [Kingdom](./campaign/Kingdom) |
| 查询或替换战役计算规则 | [GameModels](./campaign/GameModels) | 目标 `*Model` → Behavior、菜单或 UI 消费者 |
| 写 Mission 行为并处理 Agent | [Mission](./mission/Mission) | [MissionBehavior](./mission/MissionBehavior) → [Agent](./mission/Agent) |
| 保存自定义战役状态 | [IDataStore](./campaign/IDataStore) | [存档架构](../architecture/save-system) → Behavior 的 `SyncData` |
| 做 UI 数据绑定 | [ViewModel](./core-extra/ViewModel) | UI 指南 → 屏幕生命周期；不要跨 Mission 缓存运行时对象 |
| 处理原生接口 | [原生互操作](../architecture/native-interop) | 先确认是否已有托管入口，再接 `TaleWorlds.Native.dll` |

## 运行时层次

```
Foundation / Systems → Core → Campaign
                              ↘ Mission
                              ↘ ViewModel / UI
                              ↘ IDataStore / Save
```

- **Foundation / Systems：** 文本、对象注册、输入和屏幕基础；从 [Core](./core/) 与 [System](./system/) 目录进入。
- **Core：** `ItemObject`、角色模板、装备和通用数据；新增对象要尊重 `MBObjectManager` 的身份注册。
- **Campaign：** `Campaign` 持有持久世界；通过 Behavior 订阅事件，通过 Action 做世界变更，通过 Model 计算规则。
- **Mission：** `Mission`、`MissionBehavior`、`Agent` 和 `Formation` 只在当前战斗生命周期内有效。
- **UI / ViewModel：** UI 读取 Campaign 或 Mission 状态，但必须服从屏幕和绑定对象的寿命。
- **Save：** v1.3.0 的细节以[存档架构](../architecture/save-system)和 [IDataStore](./campaign/IDataStore) 为准；不要把后续版本的 SaveSystem 类型直接当作本版 API。

## 安全边界

1. 模块加载回调只负责建立入口和注册类型；Campaign 对象应在游戏状态建立后再取得。
2. 战役实体变更优先走 `*Action.Apply`，不要在 tick 或事件回调里直接写字段。
3. `Mission.Current` 和 `Agent` 只在 Mission 存在时使用；任务结束后清理引用。
4. `GameModels` 的替换必须是正确的 Model 子类，不能用 `null` 破坏所有消费者。
5. `SyncData` 只同步稳定状态，不能在保存/加载期间再次创建世界对象或触发 Action。

## 完整模块目录

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [Gameplay（早期模块）](./gameplay/) · [GUI](./gui/) · [Localization](./localization/)
- [Mission](./mission/) · [Mission-Ext](./mission-ext/) · [System](./system/) · [ViewModel](./viewmodel/)

## 版本与导航

- ↑ [v1.3.0 版本首页](../)
- ↔ [架构总览](../architecture/) · [SDK 总览](../architecture/sdk-overview) · [版本差异](../architecture/version-delta)
- 跨版本时先看 [v1.3.15 API 任务入口](../../../v1.3.15/zh/api/)，再回到本版本页核对类型是否存在。

---
title: "架构总览 — v1.3.0"
description: "v1.3.0 模组开发的分层地图、任务入口、生命周期边界与版本差异；先找扩展点，再进入 API 和指南。"
---
# 架构总览（v1.3.0）

v1.3.0 的 API 不是一片平面类表。模组代码通常从模块加载进入游戏生命周期，再选择 Campaign、Mission、UI 或存档边界。先确定任务所在的层，再沿依赖链进入具体类型页，能避开在错误阶段调用对象的常见崩溃。

## 心智模型：从加载到运行时状态

把运行时看成一条有方向的链：

```
SubModule → Game → Campaign / Mission → Behavior / Action / Model → Entity
                                      ↘ ViewModel / UI
                         Campaign behavior → IDataStore → save state
```

上游负责创建和安排生命周期，下游类型负责一块具体状态或计算。模组可以引用多个层，但不应让实体反过来控制 Campaign，也不应在 Mission 之外缓存 Agent。需要改变世界状态时优先找对应的 `*Action`；需要读取或替换计算规则时找 `*Model`；需要持有自定义状态和响应事件时找 `CampaignBehaviorBase`。

## 按任务找入口

| 目标 | 第一入口 | 依赖阅读顺序 |
| --- | --- | --- |
| 让模组在正确阶段加载 | [MBSubModuleBase](../api/core/MBSubModuleBase) | [Game](../api/core-extra/Game) → [CampaignGameStarter](../api/campaign/CampaignGameStarter) |
| 在战役中加功能并监听事件 | [CampaignBehaviorBase](../api/campaign/CampaignBehaviorBase) | [CampaignEvents](../api/campaign/CampaignEvents) → [Campaign](../api/campaign/Campaign) |
| 给钱、杀人、宣战或改领地 | [GiveGoldAction](../api/campaign-ext/GiveGoldAction) | 对应 `*Action.Apply` → [Hero](../api/campaign/Hero) / [Kingdom](../api/campaign/Kingdom) |
| 计算或替换战役规则 | [GameModels](../api/campaign/GameModels) | 目标 `*Model` → 行为或 UI 的消费者 |
| 写战斗逻辑并处理 Agent | [Mission](../api/mission/Mission) | [MissionBehavior](../api/mission/MissionBehavior) → [Agent](../api/mission/Agent) |
| 保存自定义战役状态 | [IDataStore](../api/campaign/IDataStore) | [存档系统](./save-system) → 行为的 `SyncData` |
| 做 UI 数据绑定 | [ViewModel](../api/core-extra/ViewModel) | UI 指南 → 屏幕生命周期；不要把 Mission 对象跨场景缓存 |
| 调用 Native 能力 | [原生互操作](./native-interop) | 先确认是否已有托管 API，再接 `TaleWorlds.Native.dll` |

## 分层与边界

| 层 | 解决什么问题 | 典型入口 | 不该做什么 |
| --- | --- | --- | --- |
| Foundation / Systems | 日志、文本、对象系统、输入和屏幕基础 | `TextObject`、`MBObjectManager`、输入类型 | 不在底层对象里直接驱动 Campaign 规则 |
| Core | 物品、角色模板、装备和通用游戏数据 | `Game`、`ItemObject`、`CharacterObject` | 不用 `new` 绕过对象注册和 StringId 身份 |
| Campaign | 持久世界、派系、部队和规则 | `Campaign`、`CampaignBehaviorBase`、`*Action`、`*Model` | 不在事件或 tick 中直接写实体字段 |
| Mission | 一次战斗场景和 Agent 生命周期 | `Mission`、`MissionBehavior`、`Agent` | 不在 Mission 结束后继续使用 Agent 引用 |
| UI | 屏幕栈、ViewModel 和绑定 | `ViewModel`、Gauntlet/UI 类型 | 不在已移除的 ViewModel 上继续更新 |
| Save | 在保存/加载边界恢复稳定状态 | `CampaignBehaviorBase.SyncData`、本版本存档架构 | 不在保存回调里重复执行世界变更 |

## 版本边界

v1.3.0 是 1.3 系列早期基线，源码和公开文档不应被假定与 v1.3.15 或 v1.4.5 相同。尤其是存档程序集、模块拆分和某些 Action/Model 的位置可能变化。需要跨版本判断时，先看[版本差异](./version-delta)；需要完整的 1.3.15 架构契约时再看[推荐版本文档](../../../v1.3.15/zh/architecture/)。不要把后续版本的类型名或生命周期钩子直接复制回 v1.3.0。

## 风险检查顺序

1. 当前回调属于模块加载、Campaign 还是 Mission 阶段？
2. 变更是否应由 `*Action.Apply` 或已注册 Behavior 发起？
3. 保存的是否是稳定数据，而不是 Agent、Mission、UI 控件或 delegate？
4. 对象是否已由 `MBObjectManager` 注册，Model 是否以正确类型替换？
5. 事件是否会在读档、Mission 结束或对象销毁后再次触发？

## 导航

- ↑ 父级：[v1.3.0 版本首页](../)
- ↔ 同级：[SDK 总览](./sdk-overview) · [模块系统](./module-system) · [存档系统](./save-system) · [版本差异](./version-delta) · [原生互操作](./native-interop)
- ↓ 子页：上面每个专题都从本页的层次地图继续向下；API 任务入口见 [API 参考](../api/)

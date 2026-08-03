---
title: "崩溃与存档边界 — 8 类必崩/坏档模式（v1.3.15）"
description: "模组离奇崩溃与坏档的 8 类根因：存档、世界变更、事件时机、Agent 生命周期、ObjectManager 注册、SubModule 阶段、Model 替换、UI 寿命。每类给错误写法与正确入口，链到已有手写页。"
---
# 崩溃与存档边界

> 大多数「离奇崩溃 / 坏档」来自对引擎生命周期与序列化契约的误用。本页列出 8 类高频失败模式 + 正确做法 + 相关手写页。读类页时务必看其「风险」段。

## 1. 存档：SyncData vs SaveableField 分工
- 错误：把运行时引用塞进 `[SaveableField]` 字段、忘记在 `SyncData` 里读写自定义数据、用错 `LocalSaveId`。
- 正确：可序列化状态用 `[SaveableField]`/`[SaveableProperty]` 标注；行为的瞬态数据在 `CampaignBehaviorBase.SyncData(IDataStore)` 里读写。
- 入口：[SaveManager](../../api/save-system/SaveManager/) · [SaveableFieldAttribute](../../api/save-system/SaveableFieldAttribute/) · [SaveablePropertyAttribute](../../api/save-system/SaveablePropertyAttribute/) · [IDataStore](../../api/campaign-ext/IDataStore/) · [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/)

## 2. 世界变更必须走 `*Action.Apply`
- 错误：直接改 `Hero.Gold`、`Settlement.Owner`、关系字段 —— 跳过事件级联，AI/UI/存档不同步，坏档。
- 正确：调用对应 `XxxAction.Apply(...)`（如 `GiveGoldAction.Apply`）。
- 入口：[CampaignEvents](../../api/campaign-ext/CampaignEvents/) · [CampaignEventReceiver](../../api/campaign-ext/CampaignEventReceiver/) · Actions 家族（编写中 → [campaign-ext](../../api/campaign-ext/)）

## 3. Campaign 事件时机 vs Mission 内外
- 错误：在 Mission 进行中订阅/假设 Campaign tick 已发生；在错误阶段触发逻辑。
- 正确：区分 `Campaign.Current` 与 `Mission.Current` 生命周期；事件订阅用 `CampaignEventReceiver`。
- 入口：[Campaign](../../api/campaign/Campaign/) · [Mission](../../api/mission/Mission/) · [CampaignEvents](../../api/campaign-ext/CampaignEvents/)

## 4. Agent / Mission 生命周期
- 错误：持有已死亡的 `Agent` 引用、在 Mission 结束后访问其字段、不清理 MissionBehavior。
- 正确：订阅 Agent 死亡事件再处理；Mission 结束前释放引用；Behavior 在结束时清理。
- 入口：[Agent](../../api/mission/Agent/) · [Mission](../../api/mission/Mission/) · [MissionBehavior](../../api/mission/MissionBehavior/) · [Team](../../api/mission/Team/) · [Formation](../../api/mission/Formation/)

## 5. MBObjectManager 注册
- 错误：new 一个 `MBObjectBase` 子类却不注册到 `MBObjectManager`，或保存后靠引用恢复。
- 正确：所有 `MBObjectBase` 经 `MBObjectManager.Instance.Register` 注册，靠 `MBGUID`/id 取回而非引用。
- 入口：[MBObjectManager](../../api/campaign-ext/MBObjectManager/) · [MBObjectBase](../../api/campaign-ext/MBObjectBase/)

## 6. SubModule 加载阶段
- 错误：在 `OnSubModuleLoad` 里访问尚未初始化的 `Campaign`/`Game`；过早注册 Behavior。
- 正确：区分 `OnSubModuleLoad`（静态注册）与 `OnGameStart`/`OnCampaignStart`（运行时）；Behavior 在 `CampaignGameStarter` 里加。
- 入口：[CampaignGameStarter](../../api/campaign-ext/CampaignGameStarter/) · [CampaignBehaviorBase](../../api/campaign-ext/CampaignBehaviorBase/) · MBSubModuleBase（编写中 → [core](../../api/core/)）

## 7. Model 替换
- 错误：`new` 一个 Model 直接赋值，被引擎覆盖；或返回 null 导致计算崩溃。
- 正确：经 `GameModels` 注册/替换；自定义 Model 实现同一接口。
- 入口：[GameModels](../../api/campaign-ext/GameModels/)

## 8. UI / ViewModel 寿命
- 错误：在 Screen 关闭后仍持有 ViewModel、跨 Screen 共享 GauntletLayer、DataContext 未释放。
- 正确：按 Screen 生命周期创建/释放 Layer；ViewModel 随 Screen 销毁。
- 入口：[ScreenManager](../../api/gui/ScreenManager/) · [ScreenBase](../../api/campaign-ext/ScreenBase/) · [GauntletLayer](../../api/engine/GauntletLayer/) · [viewmodel 模块](../../api/viewmodel/)

## 参见

- ↑ [架构总览](../)
- ↔ [文档契约](../doc-contract/) · [开发者任务路线图](../developer-roadmap/)
- ↓ [API 参考](../../api/)

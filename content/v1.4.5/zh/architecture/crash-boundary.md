---
title: "崩溃与存档边界 — v1.4.5"
description: "导致 Bannerlord 模组坏档或崩溃的八类失败模式：存档图、世界变更、事件时机、Agent 生命周期、ObjectManager、SubModule 阶段、Model 替换、UI 寿命。每条都给出正确做法。"
---
# 崩溃与存档边界（v1.4.5）

「我的模组坏档 / 随机崩溃」类问题，绝大多数源于下面八类。每一节都点出危险与正确做法。发布前务必读一遍。

## ↑ 父级导航

- [架构索引](./)
- [路线图](./roadmap)
- [文档契约](./doc-contract)

## 1. 存档图：SaveId、SyncData 与 SaveableField、加载顺序

- **危险：** 给一个 `SaveableTypeDefiner` 不认识的类型加 `[SaveableField]`，或跨版本改了字段类型 → 反序列化抛错或静默丢数据 → 坏档。
- **正确：** 每个自定义可存档类型都要有带稳定 `SaveId` 的 `SaveableTypeDefiner`；新字段用 `[SaveableField]`（在 `SyncData` 里自动同步），极少变动的引用用 `[SaveableReference]`。
- **见：** `SaveManager`、`SaveableTypeDefiner`、`CampaignBehaviorBase.SyncData`。

## 2. 世界变更必须走 Action.Apply

- **危险：** 在 tick / 事件处理器里直接 `hero.Gold += x` 或 `settlement.Owner = clan` → AI、任务、UI 等其他系统永远观察不到这次变更 → 状态不一致、外交卡死、坏档。
- **正确：** 调用 `GiveGoldAction.Apply(...)`、`ChangeOwnerOfSettlementAction.Apply(...)` 等。Action 会级联事件，保持模拟一致。
- **见：** `*Action` 家族、`ChangeKingdomAction`、`GiveGoldAction`。

## 3. 战役事件时机 vs 任务

- **危险：** 在 Mission tick 里改战役实体，或在战役结束后还读 `Campaign.Current` → 空引用 / 阶段错误。
- **正确：** 战斗中的世界变更走战后结果（`MissionResult`），在控制权交回 Campaign 时统一应用；生命周期钩子订阅 `CampaignEvents`。
- **见：** `CampaignEvents`、`MissionResult`、`Mission`。

## 4. Agent / Mission 生命周期

- **危险：** 在 Agent 死亡/离场后仍持有其引用，或在任务外调用 `Mission.Current` → NullReferenceException / 「任务已结束」错误。
- **正确：** 监听 `OnAgentRemoved` / `OnMissionEnded`；绝不跨任务缓存 `Agent`；用 `Mission.Current != null` 守卫。
- **见：** `Mission`、`Agent`、`MissionBehavior`。

## 5. MBObjectManager 注册

- **危险：** 不通过 `MBObjectManager` 就 `new ItemObject()` → StringId 冲突、查不到、存档/读档身份丢失。
- **正确：** 通过管理器创建（`MBObjectManager.Instance.AddObject`）或从既有数据加载；按 StringId 解析。
- **见：** `MBObjectBase`、`MBObjectManager`。

## 6. SubModule 加载阶段

- **危险：** 在 `OnSubModuleLoad`（游戏对象还不存在）里做重活或碰 `Campaign.Current` → 空引用。
- **正确：** `OnSubModuleLoad` 只注册类型/UI；`OnGameInitializationFinished` / `OnGameStart` 才碰游戏状态；用 `CampaignGameStarter` 加 Behavior。
- **见：** `MBSubModuleBase`、`CampaignGameStarter`。

## 7. Model 替换

- **危险：** 把 `GameModels` 里某项换成 `null` 或类型不符的实例 → 所有消费者空引用。
- **正确：** 通过 `CampaignGameStarter`/`AddModel` 注册该 Model 类型的子类；绝不为 null。
- **见：** `GameModels`、`CampaignGameStarter`。

## 8. UI / ViewModel 寿命

- **危险：** 在 `GauntletLayer` 被移除后还更新 `ViewModel`，或在 tick 期间从 UI 线程碰战役状态 → 跨线程 / 已释放对象崩溃。
- **正确：** 在 `OnMissionBehaviourInitialize`/`OnFinalize` 对称地绑/解绑；状态读取经由层的生命周期。
- **见：** `ViewModel`、`GauntletLayer`、`ScreenBase`。

## 参见

- [架构索引](./)
- [MBSubModuleBase](../api/core/MBSubModuleBase)
- [Campaign](../api/campaign/Campaign)
- [Mission](../api/mission/Mission)
- [SaveManager](../api/save-system/SaveManager)

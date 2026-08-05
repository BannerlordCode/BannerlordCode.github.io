---
title: "MapEventComponent"
description: "由 MapEvent 持有、负责事件专属模拟上下文、初始化、更新与结算生命周期的策略对象。"
---

# MapEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public abstract class MapEventComponent`  
**基类：** 无  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEventComponent.cs`

## 一句话职责

`MapEventComponent` 为 [`MapEvent`](../MapEvent) 提供事件专属规则和生命周期钩子，负责模拟上下文、派对加入、更新以及结算阶段的组件行为。

## 心智模型

`MapEventComponent` 是战役层由地图事件持有的策略对象，不是附着在 Agent 或 Mission 上的通用组件。像 [`FieldBattleEventComponent`](../FieldBattleEventComponent) 和 [`RaidEventComponent`](../RaidEventComponent) 这样的具体类型由遭遇模型或具体工厂创建；随后 `MapEvent.Initialize` 把它放入 `MapEvent.Component`，事件按内部协议依次触发加载修复、`OnInitialize`、派对通知、`Update`、`OnBeforeFinalize`、`FinishComponent` 和 `OnFinalize`。

组件负责事件类型专属规则，`MapEvent` 负责双方、状态、位置、结果和管理器注册。`SimulationContext` 是计算输入，不会自行开始战斗或打开 Mission。多数生命周期入口是 `internal`，所以 mod 应观察具体组件并走公开的创建/行动路径，不要手动重放协议。

## 何时使用，何时不要使用

**适合使用：**

- 只读行为需要读取事件专属的 `SimulationContext` 或组件具体类型。
- mod 需要接入一个受支持的具体事件组件，并能保持宿主规定的初始化与结算顺序。
- 诊断代码需要通过通用的 `MapEvent.Component` 区分劫掠、野战、藏身处或围城组件。

**不要这样使用：**

- 不要把它当 Agent、MissionBehavior 或战役行为；它的寿命只覆盖一个地图事件。
- 不要手动调用 `InitializeComponent`、`BeforeFinalizeComponent`、`FinalizeComponent` 或 `Update`；这些是引擎协议方法，其中多个入口是 internal。
- 不要创建组件后直接塞进活动事件而绕过 `MapEvent.Initialize`；双方、事件类型、存档图和组件会失去一致性。

## 依赖关系与生命周期

- **所有者：** [`MapEvent`](../MapEvent) 保存组件，并决定初始化、更新和结算的时机。
- **创建者：** `EncounterModel.CreateMapEventComponentForEncounter` 和 `FieldBattleEventComponent.CreateFieldBattle` 等具体工厂在 `MapEvent.Initialize` 注册事件前创建派生类型。
- **输入：** [`PartyBase`](../PartyBase)、[`MapEventSide`](../MapEventSide)、[`MapEventParty`](../MapEventParty) 以及选定的 `MapEvent.BattleTypes`。
- **消费者：** `MapEvent` 模拟、[`MapEventManager`](../MapEventManager)、`PlayerEncounter`、Settlement/围城代码和 `CampaignEvents` 在各自边界消费组件结果。
- **存档：** `MapEvent.Component` 属于存档图；`AfterLoad` 会把加载出的组件重新挂回 `MapEvent`，不能替代 mod 行为的 `SyncData`。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `MapEvent` | 所属事件。由受保护构造函数设置，加载时重新挂接；事件清理后不要继续缓存。 |
| `SimulationContext` | Models 和力量计算使用的地形/战斗上下文，由具体类型提供正确值。 |
| `OnInitialize()` | 派生类的受保护初始化钩子；组件挂到事件后由宿主调用。 |
| `OnPartyAdded(PartyBase)` | 派对加入事件时的 internal 通知，不是公开邀请派对的 API。 |
| `Update(ref bool finish)` | 事件更新期间的 internal 钩子；组件通过宿主的 `finish` 协议请求完成，不应自行 tick。 |
| `OnBeforeFinalize()` | 结算清理前的受保护钩子；结果和派对状态可能仍在转换。 |
| `FinishComponent()` / `OnFinish()` | 标记组件完成并执行一次派生清理；重放可能重复奖励或清理。 |
| `FinalizeComponent()` / `OnFinalize()` | 在完成保护之后执行最终清理，属于事件结算顺序的一部分。 |
| `OnAfterLoad()` | 存档加载器把组件重新挂回 `MapEvent` 后的修复钩子。 |

## 真实获取示例

对 mod 最安全的操作是从活动事件观察。下面从战役管理器取得玩家事件，读取具体组件，不调用组件生命周期：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static MapEvent.PowerCalculationContext? GetPlayerEventContext()
{
    MapEvent mapEvent = Campaign.Current.MapEventManager.MapEvents
        .FirstOrDefault(eventRecord => eventRecord.IsPlayerMapEvent);
    return mapEvent?.Component?.SimulationContext;
}
```

需要创建事件时，应调用对应的行动或遭遇模型路径。不要孤立实例化抽象组件后期待管理器自动发现它。

## 风险与崩溃边界

1. 组件非空不代表事件仍有效；读取派对或 Settlement 前要检查 `MapEvent.State`/`IsFinalized`。
2. 重复调用完成/结算钩子会重复劫掠伤害、战利品、通知或派对清理。内部完成保护只保护组件自身路径，不能抵消外部副作用。
3. 错误的 `SimulationContext` 会让 Model 按错误的地形或事件规则计算力量，导致模拟与 Mission 配置不一致。
4. 加载后应使用重新挂接的 `MapEvent`，让 `OnAfterLoad` 修复派生状态；不要在战役行为里另存一份组件引用。
5. 组件不是 Mission，也不拥有 Agent。`MapEventEnded` 触发或事件进入 `WaitingRemoval` 时，应释放 mod 保存的短生命周期引用。

## 版本说明

本页按 v1.4.5 `MapEventComponent.cs` 契约编写。internal 钩子顺序和具体工厂集合可能跨版本变化；移植自定义组件前应重新核对目标版本的 `EncounterModel`、`MapEvent.Initialize` 和存档类型定义器。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEvent`](../MapEvent) · [`MapEventParty`](../MapEventParty) · [`MapEventSide`](../MapEventSide)
- 具体组件：[`FieldBattleEventComponent`](../FieldBattleEventComponent) · [`RaidEventComponent`](../RaidEventComponent)
- 相关：[`MapEventManager`](../MapEventManager) · [`MapEventState`](../MapEventState) · [`BattleTypes`](../BattleTypes)
- English: [MapEventComponent](../../../../en/api/campaign/MapEventComponent)

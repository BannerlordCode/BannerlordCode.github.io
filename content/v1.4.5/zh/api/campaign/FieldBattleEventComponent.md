---
title: "FieldBattleEventComponent"
description: "野战 MapEvent 的具体组件，负责野战或海上劫掠模拟上下文以及旧档重新挂接。"
---

# FieldBattleEventComponent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class FieldBattleEventComponent : MapEventComponent`  
**基类：** [`MapEventComponent`](../MapEventComponent)  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/FieldBattleEventComponent.cs`

## 一句话职责

`FieldBattleEventComponent` 为野战 [`MapEvent`](../MapEvent) 提供按地形选择的模拟上下文，以及标准的创建和旧档加载组件边界。

## 心智模型

公开工厂会创建新的 `MapEvent`，用事件构造这个组件，以 `MapEvent.BattleTypes.FieldBattle` 初始化事件，再把完成的事件注册到 `Campaign.Current.MapEventManager`。因此组件只负责事件类型专属部分，派对、双方、状态、结果和移除仍由 `MapEvent` 持有。

虽然名称是野战组件，但当 `MapEventHelper.IsNavalRaid` 判断为海上劫掠时，`SimulationContext` 会返回 `NavalRaid`；其他情况则调用 `MilitaryPowerModel` 根据事件位置计算上下文。它没有公开上下文 setter，也没有公开的“结束战斗”命令；Mission 和模拟代码通过事件生命周期消费组件。

## 何时使用，何时不要使用

**适合使用：**

- 读取活动事件是否使用野战组件，以及它提供的模拟上下文。
- 已有有效的进攻/防守 `PartyBase` 时，通过 `CreateFieldBattleEvent` 开始受支持的野战事件。
- 处理引擎重新挂接组件后的加载事件。

**不要这样使用：**

- 不要用 `new MapEvent()` 或受保护的组件构造函数创建野战；工厂还会初始化双方并注册事件。
- 不要假设所有野战组件都是陆地野战；源码明确包含海上劫掠上下文例外。
- 不要在 `MapEvent.IsFinalized` 后继续持有组件，也不要把它当 Agent/Mission 生命周期对象。

## 依赖关系与生命周期

- **基类契约：** [`MapEventComponent`](../MapEventComponent) 提供所有者以及 internal 初始化/结算钩子。
- **创建者：** [`DefaultEncounterModel`](../DefaultEncounterModel) 和 [`PlayerEncounter`](../PlayerEncounter) 为 `FieldBattle` 遭遇选择 `CreateFieldBattleEvent`。
- **所有者：** [`MapEvent`](../MapEvent) 保存组件，并在战役事件流程中调用其生命周期。
- **输入：** 进攻/防守 [`PartyBase`](../PartyBase)、事件位置、`MapEventHelper` 和 `MilitaryPowerModel`。
- **下游：** [`MapEventSide`](../MapEventSide)、SandBox Mission 设置、战斗模拟、`CampaignEvents` 和 `MapEventManager` 消费初始化后的事件。
- **存档：** `CreateComponentForOldSaves(MapEvent)` 为已加载事件重新挂接组件，不会创建第二个事件；派对和状态仍以加载的事件为准。

## 关键成员与调用时机

| 成员 | 用途、副作用与时机 |
|---|---|
| `SimulationContext` | 海上劫掠返回 `NavalRaid`，否则把 `MapEvent.Position` 交给 `MilitaryPowerModel.GetContextForPosition`；组件挂接后读取。 |
| `CreateFieldBattleEvent(PartyBase, PartyBase)` | 创建 `MapEvent`，以 `FieldBattle` 初始化、注册并返回组件，是受支持的创建边界。 |
| `CreateComponentForOldSaves(MapEvent)` | 为加载事件创建组件，不创建或注册新的事件。 |
| `OnInitialize()` / `OnFinalize()` | v1.4.5 当前 override 为空，但调用时机仍由基类生命周期决定；不能因为为空就绕过协议。 |

## 真实获取示例

对现有战役事件，应通过管理器读取具体组件，不要自行构造：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;

public static MapEvent.PowerCalculationContext? GetFieldContext()
{
    FieldBattleEventComponent component = Campaign.Current.MapEventManager.MapEvents
        .Select(mapEvent => mapEvent.Component)
        .OfType<FieldBattleEventComponent>()
        .FirstOrDefault();
    return component?.SimulationContext;
}
```

需要开始野战事件时，应把当前遭遇取得的真实 `PartyBase` 传给 `CreateFieldBattleEvent`；不要传占位对象，也不要从 mod 手动调用 `MapEvent.Initialize`。

## 风险与崩溃边界

1. 旧档组件必须挂到加载出的 `MapEvent`；重新创建一个事件会复制遭遇并破坏活动事件图。
2. 组件上下文会被力量和战斗 Model 消费；在 `MapEvent.Position` 有效前读取或错误替换 Model，会产生错误的模拟规则。
3. 工厂在初始化完成后才注册事件；返回的组件在确认战役状态前可能尚未适合长期使用，结算后也会失效。
4. 野战组件不会自行打开或关闭 Mission。Agent 和 Mission 属于临时投影，不能保存到战役事件。

## 版本说明

v1.4.5 工厂使用 `MapEvent.BattleTypes.FieldBattle`，并包含上文海上劫掠例外。其他版本应重新核对工厂名称、旧档修复行为和 Model 上下文契约。

## 导航

- ↑ 父级：[Campaign API](../)
- ↔ 同区：[`MapEventComponent`](../MapEventComponent) · [`RaidEventComponent`](../RaidEventComponent) · [`MapEvent`](../MapEvent)
- 相关：[`MapEventManager`](../MapEventManager) · [`MapEventSide`](../MapEventSide) · [`BattleTypes`](../BattleTypes) · [`PlayerEncounter`](../PlayerEncounter)
- English: [FieldBattleEventComponent](../../../../en/api/campaign/FieldBattleEventComponent)

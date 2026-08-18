---
title: "CampaignEntityComponent"
description: "战役全局实体组件系统的抽象基类：由 Campaign 通过 EntitySystem<CampaignEntityComponent> 集中持有，组件在其上注册、被 RealTick 每帧驱动 OnTick，并经由 Campaign.Current.GetEntityComponent<T> 按类型取回，是战役层挂接可滴定状态与行为的扩展点。"
---

# CampaignEntityComponent

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** `public class CampaignEntityComponent : IEntityComponent`
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignEntityComponent.cs

## 概述

`CampaignEntityComponent` 是战役层“挂在 Campaign 上”的组件抽象基类，由 `Campaign` 通过 `EntitySystem<CampaignEntityComponent>` 统一持有与驱动。它本身不含任何业务字段，只定义 `OnInitialize` / `OnFinalize` / `OnTick` 三个生命周期钩子，供你派生出承载可滴定状态或行为的组件，再注册到战役（而非某个具体的 `PartyBase` / `Settlement` 实体）上。

## 心智模型

`CampaignEntityComponent` 是战役层“挂在 Campaign 上”的组件基类，与挂在具体实体（`PartyBase` / `Settlement`）上的 `PartyComponent` / `SettlementComponent` 体系并非同一套机制。真正的拥有者是 `Campaign`：它在构造战役时 `new` 出 `EntitySystem<CampaignEntityComponent>`，所有组件都注册进这个全局系统，取回一律走 `Campaign.Current.GetEntityComponent<TComponent>()`（底层转发到 `EntitySystem.GetComponent`）。组件的生命周期由系统掌控——`AddEntityComponent` 时触发 `OnInitialize`，`RemoveEntityComponent` 或战役卸载时触发 `OnFinalize`，而每帧推进由 `Campaign.RealTick` 遍历所有组件统一调用 `OnTick(realDt, dt)`。当你需要给战役对象叠加可滴定逻辑（倒计时、累积、周期调度、跨实体协调）时再派生本类；若只是想给某个 `PartyBase` / `Settlement` 附加数据，应优先用该实体自带的 `*Component` 体系，而不是塞进全局 `EntitySystem`。派生类若持有要随存档恢复的状态，必须用 `[SaveableField]` 标注字段，否则读档后悄然丢失。

## 何时使用 / 何时不要使用

- **使用**：需要在战役全局范围内挂载一个“每帧被驱动、可被按类型取回”的可滴定状态或行为（如全局计时器、周期调度器、跨实体协调器）时，继承本类，在 `OnInitialize` 初始化、`OnTick` 推进、`OnFinalize` 清理，并通过 `Campaign.Current.AddEntityComponent<T>()` 注册，需要时再 `GetEntityComponent<T>()` 取回。
- **不要使用**：不要在 `Mission` / 战斗层、`MainMenu` 或战役启动前访问（此时 `Campaign.Current` 为 `null`）；不要把本应挂在 `PartyBase` / `Settlement` 上的数据硬塞进全局 `EntitySystem`——那类扩展应走对应实体的 `*Component`；不要手动调用 `OnTick` / `OnInitialize` / `OnFinalize`，它们由系统驱动，手调会破坏生命周期；也不要让组件持有未在 `[SaveableField]` 标注、却期望随存档恢复的可变字段。

## 依赖图

上游（所有者与取回入口）：

- [Campaign](../Campaign) —— 持有 `EntitySystem<CampaignEntityComponent>`，是唯一的所有者；`GetEntityComponent` / `AddEntityComponent` / `RemoveEntityComponent` / `CampaignEntityComponents` 全部来自它（`Campaign.cs:1036` 起）。
- [CampaignBehaviorBase](../CampaignBehaviorBase) —— 具体行为通常在 `Initialize` 阶段 `AddEntityComponent`、在 `Tick` 或事件回调里 `GetEntityComponent`，是组件最常见的注册方与驱动方。

下游（驱动与协同）：

- [Campaign](../Campaign) 的 `RealTick` 遍历 `CampaignEntityComponents` 对每个组件调用 `OnTick(realDt, dt)`（`Campaign.cs:890`–`892`），无需、也不应在别处手动调用。
- [PartyBase](../PartyBase) / [Settlement](../Settlement) / [MobileParty](../MobileParty) 是战役实体；它们上附着的通常是 `PartyComponent` / `SettlementComponent` 一族（见下），与 `CampaignEntityComponent` 的全局注册机制分属两层，混用会导致取不到组件。

同类组件（兄弟参考页，注意属于不同体系）：

- [BanditPartyComponent](../BanditPartyComponent) —— 继承自 `WarPartyComponent`，挂在匪帮 `MobileParty` / `PartyBase` 上，是“实体级组件”而非本全局系统组件。
- [LordPartyComponent](../LordPartyComponent) —— 同样继承自 `WarPartyComponent`，挂在领主队伍上，与 `CampaignEntityComponent` 是两套扩展模型。
- [SettlementComponent](../SettlementComponent) —— 挂在 `Settlement` 上的组件体系，对照阅读可区分“挂在实体上的组件”与“挂在 Campaign 上的组件”。

## 风险

- **组件未注册就取回**：`GetEntityComponent` 在 `EntitySystem` 为 `null` 或该类型尚未 `Add` 时返回 `null`。任何取回结果都必须先判空，否则直接 `NullReferenceException`。
- **跨战役重载后引用失效**：`EntitySystem` 在每次新战役 / 读档时（`Campaign.cs:609`、`Campaign.cs:1597`）被重新 `new`，持久持有的组件引用会指向旧战役已销毁的对象。每次需要用时都应重新走 `Campaign.Current.GetEntityComponent<T>()` 取回，不要缓存进静态字段。
- **在 Mission / 战斗层或战役开始前访问**：`Campaign.Current` 或 `_campaignEntitySystem` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或 `Mission` 内调用会直接空引用。
- **误把组件当实体级组件**：`PartyBase` / `Settlement` 上的是 `PartyComponent` / `SettlementComponent`，需用实体自身的 `GetComponent` 取回；从 `Campaign.Current.GetEntityComponent` 取不到挂在实体上的组件，反之亦然。
- **缺少 `[SaveableField]`**：组件若持有需要随存档恢复的可变字段，必须用 `[SaveableField]` 标注并由序列化系统接管；否则读档后该状态彻底丢失，产生隐蔽的逻辑漂移。
- **`OnTick` 的 `dt` 语义用错**：`realDt` 是真实经过秒数，`dt` 是本 tick 的战役模拟时间步长（来自 `Campaign._dt`），二者并不相等。做定时累积或冷却务必用对，否则节奏会随游戏速度漂移。
- **在 `OnFinalize` 之外仍持有引用**：组件被 `RemoveEntityComponent` 后，若别处缓存并在之后访问，会读到半销毁状态甚至崩溃。订阅的事件也需在 `OnFinalize` 中对称退订。

## 成员说明

### 生命周期（注册与销毁）

- **`OnInitialize()`**（protected virtual）
  - 用途：组件被加入 `EntitySystem` 时由 `IEntityComponent.OnInitialize` 转发调用一次，用于建立内部状态、订阅战役事件、缓存依赖。基类为空实现，需要初始化逻辑的派生类应 `override` 它。
  - 副作用：基类无副作用；派生类在此做的写入（如订阅事件）必须与 `OnFinalize` 对称释放，否则会泄漏。
  - 调用时机：仅当通过 `Campaign.Current.AddEntityComponent<T>()` 注册组件、`EntitySystem` 将其初始化时触发，不会被手动重复调用。

- **`OnFinalize()`**（protected virtual）
  - 用途：组件从 `EntitySystem` 移除（移除途径见下）或战役卸载时由 `IEntityComponent.OnFinalize` 转发调用，派生类在此退订事件、释放需要清理的资源。
  - 副作用：基类无副作用；若 `OnInitialize` 订阅了事件而此处未退订，会造成悬空回调与内存泄漏。
  - 调用时机：`RemoveEntityComponent<T>()` / `RemoveEntityComponent(component)` 调用时，以及战役卸载清理阶段。

### 每帧驱动

- **`OnTick(float realDt, float dt)`**（public virtual）
  - 用途：每个战役 tick 被驱动一次，用于推进组件持有的可滴定状态（计时、累积、冷却、周期行为等）。`realDt` 为真实经过秒数，`dt` 为本 tick 的战役模拟时间步长。
  - 副作用：派生类在其中对字段做的修改会持续写入组件；若这些字段需随存档恢复，必须用 `[SaveableField]` 标注。
  - 调用时机：由 `Campaign.RealTick` 遍历 `_campaignEntitySystem.GetComponents()` 对每个组件统一调用（`Campaign.cs:890`–`892`），无需也不应在别处手动调用。

## 示例

注册并取回一个自定义组件（注意类型必须提供无参构造函数，且取回可能为 `null`）：

```csharp
// 在行为初始化时把一个自定义组件挂入战役全局组件系统
Campaign.Current.AddEntityComponent<PatrolRespawnComponent>();

// 任何需要它的系统都按类型取回并直接使用，无需自行持有引用
if (Campaign.Current.GetEntityComponent<PatrolRespawnComponent>() is PatrolRespawnComponent respawn)
{
    respawn.ForceRespawn();
}
```

派生组件如何接入三个生命周期钩子（签名与参数名均取自源文件）：

```csharp
public class PatrolRespawnComponent : CampaignEntityComponent
{
    protected override void OnInitialize()
    {
        // 组件被加入 EntitySystem 时调用一次：建立内部状态、订阅战役事件
    }

    public override void OnTick(float realDt, float dt)
    {
        // 每个战役 tick 由 Campaign.RealTick 自动调用：
        // realDt 为真实经过秒数，dt 为本 tick 的战役模拟时间步长
        Accumulate(realDt);
    }

    protected override void OnFinalize()
    {
        // 组件被移除时调用：释放资源、退订事件
    }
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [PartyBase](../PartyBase) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [BanditPartyComponent](../BanditPartyComponent) · [LordPartyComponent](../LordPartyComponent) · [SettlementComponent](../SettlementComponent)

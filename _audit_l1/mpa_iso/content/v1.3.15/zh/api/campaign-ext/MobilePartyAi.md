---
title: "MobilePartyAi"
description: "战役地图上每支 MobileParty 的 AI 决策器：为每个部队挑选目标与短程行为（交战/逃跑/巡逻/围城/护卫），决定主动性与回避倾向，并在每个 AI 间隔重新计算移动指令。"
---
# MobilePartyAi

**Namespace:** TaleWorlds.CampaignSystem.Party  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class MobilePartyAi`  
**Base:** 无（直接派生自 `System.Object`）  
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party/MobilePartyAi.cs`

## 概述

`MobilePartyAi` 是挂在每一支 `MobileParty` 上的 **AI 决策器**。它不负责实际移动，而是每隔一段“AI 间隔”重新算一次这支部队接下来要做什么：是去交战、逃跑、巡逻、围城、护卫还是待命，并据此把短程行为（`AiBehavior`）与目标点写回 `MobileParty`。真正的“怎么走”由 `MobileParty` 的导航系统根据 AI 设好的短程行为去执行。

它的决策高度依赖 `MobilePartyAIModel`（默认实现是 `DefaultMobilePartyAIModel`）：每次重算时都会去问模型“当前最佳主动行为是什么、打谁、分数多少”。所以 **想改 AI 行为，通常应该扩展或替换那个 Model，而不是重写 `MobilePartyAi` 本身**。

## 心智模型

把 `MobilePartyAi` 想象成 **部队的“大脑/调度员”**：

- 它由一个 `MobileParty` 在构造时同步创建，并**只**通过 `mobileParty.Ai` 访问。不要自己 `new MobilePartyAi(...)`——构造函数是 internal 的，而且脱离了 `MobileParty` 它什么也做不了。
- 它持有的几乎全是“状态 + 计时器”：是否禁用、是否正在逃跑（`IsAlerted`）、多久内不攻击玩家主力、当前主动/回避倾向、以及它正在导航朝向的 `AiBehaviorInteractable`。
- 实际移动指令不是 AI 直接发出的，而是它调用 `MobileParty.SetShortTermBehavior(...)` / `SetNavigationMode*`，把“短程行为 + 目标”交给部队本体的导航层。下一次 AI 间隔一来，它又会根据部队的 `DefaultBehavior` 和模型重新算，所以你**直接写 `AiBehaviorInteractable` 期望部队永久朝那走是无效的**——那个值会被下一个 tick 覆盖。
- 它位于 **Campaign（战役）层**，跟着战役存档一起被序列化（`[SaveableField]` 字段很多）。它不在 Mission（战斗场景）里运行。
- 部队加入某支 Army 且作为附属部队时，AI 会暂停自主决策，跟随 Army 领袖的指令（`TickInternal` 里 `Army.LeaderParty.AttachedParties.Contains` 分支）。

## 何时用 / 何时不要用

**适合用它：**
- 读取 AI 状态做判断：某部队是否正在逃跑（`IsAlerted`）、是否被临时禁用了决策、距离“不再攻击玩家主力”的时限还剩多久（`DoNotAttackMainPartyUntil`）。
- 临时微调一支部队的攻击/回避倾向（`SetInitiative`），或在脚本演出期间冻结它的新决策（`SetDoNotMakeNewDecisions`）。
- 改完 `DefaultBehavior` 后，立刻强制它重新决策一次（`CheckPartyNeedsUpdate`），而不必等到下一个 AI 间隔。
- 计算一个逃跑落点（`CalculateFleePosition`）或评估守城时附近友军是否该参战（`GetNearbyPartyDataWhileDefendingSettlement`）。

**不要用它：**
- **不要** `new MobilePartyAi(...)`：internal 构造，且必须绑定 `MobileParty`。
- **不要**把 `MobilePartyAi` 当成“移动指令入口”去重实现决策逻辑——需要定制行为时，去扩展 [MobilePartyAIModel](../MobilePartyAIModel/) / [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/)，或在 [CampaignBehaviorBase](../CampaignBehaviorBase/) 里改 `DefaultBehavior`。
- **不要**直接写 `AiBehaviorInteractable` / `AiBehaviorPartyBase` 并期望部队长期朝那走：它们每个 AI 间隔都会被 `GetBehaviors` 重算覆盖。要让部队真正移动，用 `MobileParty` 上的 `SetMove*` / `SetShortTermBehavior` 系列。
- **不要**在部队尚未初始化时访问 `mobileParty.Ai`——此时它是 `null`，会直接空引用崩溃。

## 依赖图

- 上游：[MobileParty](../../campaign/MobileParty/) 在自身构造时创建并持有本对象，通过 `MobileParty.Ai` 暴露；[PartyComponent](../PartyComponent/) 决定这支部队是什么类型（领主/商队/驻军/强盗），从而影响 AI 的巡逻与逃跑策略。
- 决策核心：每个 AI 间隔都会查询 [MobilePartyAIModel](../MobilePartyAIModel/)（默认 [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/)）的最佳主动行为与分数；枚举见 [AiBehavior](../AiBehavior/)。
- 下游系统：AI 算出的结果写回 [MobileParty](../../campaign/MobileParty/) 的短程行为与导航模式，进而驱动据点、家族与阵营的动态；涉及的目标多为 [Settlement](../../campaign/Settlement/)、[Clan](../../campaign/Clan/) 所属部队与 [Campaign](../../campaign/Campaign/) 中的全局模型。
- 存档：本对象多数字段都带 `[SaveableField]` / `[SaveableProperty]`，随战役存档读写；旧版本存档的兼容迁移在 `OnLateLoad` / `PreAfterLoad` 中完成。

## 风险

- **访问时机**：`mobileParty.Ai` 在 `MobileParty` 完全构造之前是 `null`。在一些非常早的战役初始化阶段或自定义构造路径里直接读它会崩溃。在 [CampaignBehaviorBase](../CampaignBehaviorBase/) 的 tick 或事件回调里访问是安全的，因为那时所有部队都已建好。
- **直接改目标不持久**：任何对 `AiBehaviorInteractable` / `AiBehaviorPartyBase` 的直接赋值只活到下一个 AI 间隔；要真正指挥部队移动，请使用 `MobileParty` 的 `SetMove*` / `SetShortTermBehavior`。
- **`SetInitiative` 对玩家主力无效**：源码里 `SetInitiative` 在 `_mobileParty == MobileParty.MainParty` 时直接 return，记不住这点会导致“为什么我的倾向没生效”的困惑。
- **冻结决策要记得恢复**：`SetDoNotMakeNewDecisions(true)` 会一直阻止它抢新目标（适合护送、剧情演出），但如果没有对应的 `false`，这支部队可能长时间“发呆”。`DisableAi()` 同理——没有配对的 `EnableAi()` 会**永久**让部队停止思考、原地待命。
- **存档交互**：如果你想在 AI 上缓存自定义状态，必须自己接入 [Campaign](../../campaign/Campaign/) 的存档（注册 `SaveableField` 或用 `CampaignBehaviorBase.SyncData`），否则重载后丢失。
- **每日 tick 路径**：重算发生在 internal 的 `Tick(dt)` → `TickInternal()` → `GetBehaviors(out ...)` → `SetAiBehavior(...)`。不要在外部手动调用这套内部链；用公开的 `CheckPartyNeedsUpdate()` 触发一次即时重算即可。

## 成员说明

下面按主题分组列出 mod 可见的关键公开成员。每个成员说明它的**用途、副作用、以及何时会被调用**。

### 状态与开关

#### `public bool IsDisabled { get; }`
AI 思考是否被挂起。为 `true` 时，`TickInternal` 不会重新选行为（除非禁用计时已到，会自动 `EnableAi`）。由 `DisableAi` / `DisableForHours` 设为 `true`，由 `EnableAi` 复位。

#### `public bool RethinkAtNextHourlyTick { get; set; }`
为 `true` 时，下一个每小时 tick 会强制 AI 重算一次行为（在 `GetDefendSettlementBehavior` 等路径里被置位，例如从陆地切到港口导航时）。 mod 一般只读它，必要时也可置 `true` 来请求尽快重算。

#### `public bool DoNotMakeNewDecisions { get; private set; }`
为 `true` 时，AI 不会去抢新的“主动行为”（initiative），但会继续执行既有目标。由 `SetDoNotMakeNewDecisions` 设置，适合护送、剧情演出期间让部队别自作主张。

#### `public bool IsAlerted { get; private set; }`
当前是否处于“正在逃跑”状态（`FleeTo*` 行为）。`GetBehaviors` 在选中逃跑分支时置 `true`。读它就能判断一支部队是不是在被追着跑。

#### `public CampaignTime DoNotAttackMainPartyUntil { get; internal set; }`
在此 `CampaignTime` 之前，这支部队不会主动攻击玩家主力（`MobileParty.MainParty`）。由 `SetDoNotAttackMainParty` 写入，内部在决策时参与判断。可读它来获知“还有多久解除不攻击约束”。

#### `public int HourCounter`
公开字段，累计经过的小时数（构造时随机一个 0–99 的初值）。主要是调试/遥测用途，mod 一般不必改。

### 当前行为目标

#### `public IInteractablePoint AiBehaviorInteractable { get; set; }`
AI 当前导航朝向的可交互点（通常是某个 `PartyBase`，或据点的 `Settlement.Party`）。赋值时内部会顺带把 `AiBehaviorPartyBase` 重新缓存：若新值是 `PartyBase` 就同步过去，否则清空。注意它每个 AI 间隔都会被重算覆盖，**不要**指望直接赋值能让部队长期朝那走。

#### `public PartyBase AiBehaviorPartyBase { get; private set; }`
`AiBehaviorInteractable` 落在实际 `PartyBase` 上时缓存的部队/据点方。供 `UpdateBehavior` 在 `EngageParty` 等行为下取 `MobileParty` 用。可通过 `CacheAiBehaviorPartyBase()` 手动从 `AiBehaviorInteractable` 重算。

#### `public float AvoidInitiative { get; }`
当前的“回避倾向”权重。若还在 `_initiativeRestoreTime` 之前返回设定的 `_avoidInitiative`，否则回落到 `1f`。影响 AI 在交战/逃跑之间的取舍。

#### `public float AttackInitiative { get; }`
当前的“攻击倾向”权重，规则同 `AvoidInitiative`（计时结束后回到 `1f`）。由 `SetInitiative` 设定。

#### `public static readonly List<(float, Vec2)> DangerousPartiesAndTheirVecs`
全局共享的“危险部队及其位置”列表（`(权重, 坐标)`），AI 在选路时用来避开强敌。1.4.5 写作值元组 `List<(float, Vec2)>`，1.3.x 写作 `List<ValueTuple<float, Vec2>>`（语义相同）。mod 一般只读或交给模型维护，不推荐随意增删。

#### 嵌套类型 `public class FleeingData`
保存逃跑过程状态（`AlreadyReachedTheDestinationWhileFleeing`、`ShouldFleeClockWise`、`CwFleeDirectionIsBlocked`、`CcwFleeDirectionIsBlocked`）。公开方法 `Clear()` 会把四个标志全部复位，逃跑重算前经常调用。

### 决策偏向与冻结

#### `public void SetInitiative(float attackInitiative, float avoidInitiative, float hoursUntilReset)`
临时把这支部队的攻击/回避倾向改成给定值，并在 `hoursUntilReset` 小时后自动复原为 `1f`。**对 `MobileParty.MainParty` 无效**（源码直接 return）。适合临时让某支部队更凶或更怂。

```csharp
MobilePartyAi ai = lordParty.Ai;
// 12 小时内更爱进攻、更不爱回避；之后自动复位
ai.SetInitiative(attackInitiative: 1.6f, avoidInitiative: 0.7f, hoursUntilReset: 12f);
```

#### `public void SetDoNotMakeNewDecisions(bool doNotMakeNewDecisions)`
冻结/解冻“抢新主动行为”。演出或护送期间设为 `true`，结束记得设回 `false`，否则部队可能长期不主动行动。

#### `public void SetDoNotAttackMainParty(int hours)`
让这支部队在接下来 `hours` 小时内不主动攻击玩家主力。若已有一个更晚的解除时间，则以更晚者为准（不会缩短已有约束）。

```csharp
MobilePartyAi ai = someLordParty.Ai;
// 接下来 6 小时不要主动打玩家主力
ai.SetDoNotAttackMainParty(6);
```

### 行为查询与计算

#### `public bool GetNearbyPartyDataWhileDefendingSettlement(Settlement targetSettlement, out bool shouldConsiderJoiningNearbyAllyParties, out bool shouldJoinLandSide, out bool shouldEngage, out MobileParty mostPowerfulLandAlly, out MobileParty mostPowerfulNavalAlly)`
当一支部队在守城（其 `DefaultBehavior == DefendSettlement`）且目标据点正被攻击时调用，扫描据点附近友军，判断是否该去参战、是否从陆地侧加入、以及最强的陆/海友军是谁。返回 `false` 表示部队本身离据点太远、无需考虑。多在内部 `GetDefendSettlementBehavior` 里被调用，mod 也可直接拿来做“附近有没有能帮忙的友军”的判断。

#### `public void CalculateFleePosition(out CampaignVec2 fleeTargetPoint, MobileParty partyToFleeFrom, Vec2 averageEnemyVec)`
计算一个远离 `partyToFleeFrom` 的逃跑落点，写入 `fleeTargetPoint`（用 `out` 返回）。内部会参考双方速度、导航可达性与已有逃跑方向是否被堵，来挑一个能甩开敌人的点。多在 `GetFleeBehavior` 里被调用。

#### `public void CacheAiBehaviorPartyBase()`
若 `AiBehaviorInteractable` 实际是一个 `PartyBase`，就把它缓存进 `AiBehaviorPartyBase`。主要在存档加载后（`PreAfterLoad`）调用，把旧数据重新接上。mod 一般无需手动调用。

#### `public void CheckPartyNeedsUpdate()`
如果 `DefaultBehavior` 被标记需要更新，立即跑一次 `Tick(0f)` 并触发 `EncounterManager.HandleEncounterForMobileParty`，让部队**马上**按照新的默认行为重新决策，而不是等下一个 AI 间隔。改完 `DefaultBehavior` 后调用它最合适。

```csharp
// 改了 party 的 DefaultBehavior / TargetSettlement 之后：
lordParty.Ai.CheckPartyNeedsUpdate();
```

### 启用 / 禁用与计时

#### `public void DisableAi()`
永久挂起这支部队的 AI 思考（`IsDisabled = true`，解除时间设为 `CampaignTime.Never`）。**必须有配对的 `EnableAi()`**，否则部队会一直停在原地。

#### `public void DisableForHours(int hours)`
临时挂起 AI 思考 `hours` 小时，到期后在下一个 `TickInternal` 自动 `EnableAi`。适合让一支部队短暂“待机”。

#### `public void EnableAi()`
恢复 AI 思考（`IsDisabled = false`，解除时间设为 `Now`）。与 `DisableAi` / `DisableForHours` 配对使用。

#### `public bool EnableAgainAtHourIsPast()`
返回禁用计时是否已过（`_enableAgainAtHour.IsPast`）。`DisableForHours` 之后可用来轮询“是不是该恢复了”；`DisableAi` 因解除时间设为 `Never`，此值恒为 `false`。

```csharp
if (party.Ai.IsDisabled && party.Ai.EnableAgainAtHourIsPast())
{
    // 临时禁用已到期，但还没被 tick 自动恢复时的兜底处理
    party.Ai.EnableAi();
}
```

## 示例

### 示例 1：在每小时 tick 中读取 AI 状态并临时冻结逃跑中的商队

下面演示**真实获取路径**：在 `CampaignBehaviorBase` 里订阅每小时 tick，通过 `mobileParty.Ai` 拿到控制器，再读状态、做微调。已存在于世界中的部队其 `Ai` 不会为 `null`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public class EscortSafetyBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HourlyTickEvent.AddNonSerializedEventListener(this, OnHourlyTick);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnHourlyTick()
    {
        foreach (MobileParty party in MobileParty.All)
        {
            // 通过 mobileParty.Ai 拿到 AI 控制器；已初始化的部队 Ai 不为 null
            MobilePartyAi ai = party.Ai;
            if (ai == null) continue;

            if (ai.IsAlerted && party.IsCaravan)
            {
                // 商队正在逃跑：让它几小时内不要再做新的主动决策，专心脱离接触
                ai.SetDoNotMakeNewDecisions(true);
            }
        }
    }
}
```

### 示例 2：临时偏向某支领主部队并立即重算

```csharp
// lordParty 是某支已初始化的领主部队
MobilePartyAi ai = lordParty.Ai;

// 临时提高攻击倾向、降低回避倾向，12 小时后自动复原（对 MainParty 无效）
ai.SetInitiative(attackInitiative: 1.6f, avoidInitiative: 0.7f, hoursUntilReset: 12f);

// 让它在接下来 6 小时内不要攻击玩家主力
ai.SetDoNotAttackMainParty(6);

// 如果此前改过 DefaultBehavior，立刻触发一次决策，而不是等下一个 AI 间隔
ai.CheckPartyNeedsUpdate();
```

## 跨版本提示

- 公共 API（`IsDisabled`、`RethinkAtNextHourlyTick`、`DoNotMakeNewDecisions`、`IsAlerted`、`DoNotAttackMainPartyUntil`、`AvoidInitiative`、`AttackInitiative`、`AiBehaviorPartyBase`、`AiBehaviorInteractable` 及全部公开方法）在 **v1.3.0 / v1.3.15 / v1.4.5** 三版中完全一致。
- 唯一内部差异：`DangerousPartiesAndTheirVecs` 在 1.4.5 声明为 `List<(float, Vec2)>`（C# 值元组），在 1.3.x 为 `List<ValueTuple<float, Vec2>>`——对 mod 而言语义相同，无需区分。
- v1.3.0 之前的旧存档会在 `OnLateLoad` / `PreAfterLoad` 中做一次性迁移（把旧的 `FleeToGate` 短程行为、旧的目标字段等转换为新结构）。写跨版本 mod 时无需处理这段兼容逻辑，引擎会在加载时自动跑。

## 导航

- ↑ 父级（桶索引）：[campaign-ext 索引](../)
- ↔ 同级（同桶相关类型）：[MobilePartyAIModel](../MobilePartyAIModel/) · [DefaultMobilePartyAIModel](../DefaultMobilePartyAIModel/) · [PartyComponent](../PartyComponent/) · [AiBehavior](../AiBehavior/) · [CampaignBehaviorBase](../CampaignBehaviorBase/)
- 相关类型（跨桶）：[MobileParty](../../campaign/MobileParty/) · [Settlement](../../campaign/Settlement/) · [Clan](../../campaign/Clan/) · [Campaign](../../campaign/Campaign/)

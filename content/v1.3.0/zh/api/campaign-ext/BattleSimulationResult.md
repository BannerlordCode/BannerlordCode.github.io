---
title: "BattleSimulationResult"
description: "战斗模拟的一条回合结果三元组（troopDescriptor / side / troopProperty），32 行纯 DTO。1.3.0 托管树里 new BattleSimulationResult(...) 零出现，唯一容器是 BattleSimulationResultArgs.RoundResults，而这个容器在 1.4.6 起被整个删除。"
---

# BattleSimulationResult

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BattleSimulationResult`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/BattleSimulationResult.cs`

## 概述

一个 32 行的三元组，描述「战斗模拟里，某支特定部队在某一轮的表现」：

```csharp
public class BattleSimulationResult
{
    public UniqueTroopDescriptor TroopDescriptor { get; private set; }
    public BattleSideEnum Side { get; private set; }
    public TroopProperty TroopProperty { get; private set; }

    public BattleSimulationResult(UniqueTroopDescriptor troopDescriptor, BattleSideEnum side, TroopProperty troopProperty)
    {
        this.TroopDescriptor = troopDescriptor;
        this.Side = side;
        this.TroopProperty = troopProperty;
    }
}
```

三个属性全是 `{ get; private set; }`，**只由构造函数写、对外只读、没有第二个无参构造函数**。三个成员构成一个不可变值对象：谁是这支部队（`TroopDescriptor`）、属于哪一方（`Side`）、打完什么状态（`TroopProperty`）。

## 心智模型

**这个 DTO 的处境是「协议已备、托管层未接」。**

三条搜索结果定了性：

1. **`grep -rn "new BattleSimulationResult(" --include=*.cs .` 在 `bannerlord-1.3.0/` 下零命中。** 没有任何托管代码构造它。
2. **唯一持有者是一个同目录的兄弟类** `TaleWorlds.CampaignSystem/BattleSimulationResultArgs.cs`（全文 14 行）：

```csharp
public class BattleSimulationResultArgs
{
    public BattleSimulationResultArgs()
    {
        this.RoundResults = new List<BattleSimulationResult>();
    }

    public List<BattleSimulationResult> RoundResults;   // public 字段，不是属性
}
```

3. **`grep -rn "RoundResults" --include=*.cs .` 只命中这个文件自身**——构造函数里的初始化和字段声明。没有 `Add`、没有 `Clear`、没有任何外部读写。

也就是说：**`RoundResults` 是一个被构造出来、装好后没人读、也没人填的列表。** 它显然是为 native 侧回调准备的容器——托管层预留了形状，反序列化/填充由引擎之外的代码完成（很可能是 native 通过反射或 marshalling 直接塞进这个 `List<>`）。

**所以这个类型在 1.3.0 的角色是「战斗模拟结果的数据契约」，而不是「战斗模拟的 API 入口」。** 战斗模拟真正的入口是同目录的 `TaleWorlds.CampaignSystem/BattleSimulation.cs` 那个 `public class BattleSimulation : IBattleObserver`（`:15`，构造函数吃两个 `FlattenedTroopRoster`，内部有 `_simulationState` 状态机与 `SimulationState.Play` / `FastForward` 两态）。

UI 侧则是 [BattleSimulationMapView](../BattleSimulationMapView) 那条链：`MapScreen.OnBattleSimulationStarted(BattleSimulation)` → `CreateSimulationScoreboardDatasource` → [SPScoreboardVM](../SPScoreboardVM)。**这条路全程传的是 `BattleSimulation`，从来没有出现过 `BattleSimulationResult`。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `TroopDescriptor` | `public UniqueTroopDescriptor TroopDescriptor { get; private set; }` | 「这支部队」的键。用的是 **descriptor 而不是 `Troop` 对象本身**，说明这个 DTO 刻意避开了对 `MBObjectManager` 的引用——它可以在战役对象都还没建立的时候（或者在纯模拟的上下文里）被构造。同一支部队的多个变体（不同兵种树节点）由 descriptor 区分。 |
| `Side` | `public BattleSideEnum Side { get; private set; }` | 该部队归属的阵营。与 `BattleSideEnum` 同名的枚举在战斗模拟里被广泛使用（`AchievementsCampaignBehavior.OnHideoutBattleCompleted(BattleSideEnum winnerSide, ...)` 那个委托就是它）。 |
| `TroopProperty` | `public TroopProperty TroopProperty { get; private set; }` | 该部队在本轮结束时的状态/属性快照。`TroopProperty` 在 `campaign-ext` 桶有自己的页面，它是战斗模拟输出「谁还站着、谁死了、谁重伤」这一层的载体。 |
| `BattleSimulationResult(UniqueTroopDescriptor, BattleSideEnum, TroopProperty)` | 唯一构造函数 | 三参数按序赋值，无校验、无 null 检查、无范围检查。**没有无参构造函数**，所以它不能被 Json.NET / 二进制序列化器在无参构造模式下还原——只能靠构造函数。 |

## 真实示例

**用法一：造一条结果（做自己的战斗模拟预测器时的形状）。**

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

// 与 TaleWorlds.CampaignSystem/BattleSimulationResult.cs:25-30 逐字同构
var result = new BattleSimulationResult(
    new UniqueTroopDescriptor( troopObject /* Troop */, 0 /* variation */, 1 /* count */, true /* noSpawn */),
    BattleSideEnum.Defender,
    TroopProperty.Number);

BattleSideEnum side = result.Side;                        // 只读
UniqueTroopDescriptor who = result.TroopDescriptor;
TroopProperty state = result.TroopProperty;
// result.Side = BattleSideEnum.Attacker;                 // 编译不过：private set
```

**用法二：包进 args 容器（这是它在 1.3.0 里唯一的合法容器）。**

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;

// BattleSimulationResultArgs 的构造函数已经把 RoundResults 建好了，直接 Add
BattleSimulationResultArgs args = new BattleSimulationResultArgs();
args.RoundResults.Add(result);

// RoundResults 是 public 字段不是属性 —— 用法上没差别，但反射/序列化时的行为不同：
// 字段会被 Json.NET 当作成员处理，属性则要看有没有 [JsonProperty]。
int rounds = args.RoundResults.Count;
```

**用法三：确认这条 API 在目标版本上还在（升级前必做的一步）。**

```csharp
#if FALSE
// 这个类型的可用性在 1.3.0 → 1.4.6 之间被删除过。下面这段在 1.5.3 上编译不过。
// 用它做版本探测是不可行的（编译期就挂了），只能靠条件编译或反射。
BattleSimulationResult probe = new BattleSimulationResult(null, BattleSideEnum.Attacker, null);
#endif
```

**这个类型不适合反射探测**——因为它在 1.4.6 起根本不存在（见跨版本段），`Type.GetType("TaleWorlds.CampaignSystem.BattleSimulationResult")` 在 1.5.3 上返回 `null`，但**在 1.3.0 上返回一个你没有任何办法填充的契约类型**。**两种情况都意味着「不要在 mod 里依赖它」。**

## 风险与边界

- **1.3.0 托管树里没有任何代码 `new` 它，也没有任何代码读它的三个属性。** `grep` 双向零命中。这不是「少见用法」，是「这条数据链在托管层根本没接通」。**指望在 mod 里从引擎拿到 `BattleSimulationResult` 实例，在 1.3.0 上没有落点。**
- **唯一容器 `BattleSimulationResultArgs` 同样零消费。** `RoundResults` 只在构造函数里 `new` 出来、字段声明一次，**没有 `Add`、没有 `Clear`、没有任何读取点**。它是为 native 回调预留的形状，托管层没有对接代码。
- **没有无参构造函数。** 只有 `BattleSimulationResult(UniqueTroopDescriptor, BattleSideEnum, TroopProperty)` 一个 ctor。这意味着**它不能被默认的 Json.NET 反序列化**（除非配 `JsonConstructor` 特性，而 1.3.0 的这个类上没有任何特性）。如果你想把它存进 mod 自己的存档，要么自己写序列化，要么改成 `Dictionary<int, ...>` 之类。
- **构造函数不做任何校验。** 传 `null` 的 `TroopDescriptor`、越界的 `BattleSideEnum`、不一致的 `TroopProperty` 都会被照单全收，**不抛异常**。三个属性在错误的数据下依然读得出来，错误只在下游用的时候才暴露。
- **构造函数是 public 的，但三个属性是 `private set`。** 所以**你能造它但不能改它**。要「基于一条结果调整一下」只能造新的。
- **`TroopProperty` 与 `Side` 的语义层级不同，别混判。** `Side` 是「属于哪一方」（战斗开始就定的），`TroopProperty` 是「这一轮打完什么状态」（战斗中变的）。**判断「谁赢了」要读 `Side`，判断「谁活着」要读 `TroopProperty`**，两者不能互相替代。
- **`TaleWorlds.CampaignSystem` 名字带 `CampaignSystem` 但它不是 campaign 层 API。** 它在 `TaleWorlds.CampaignSystem` 程序集里，但语义上属于战斗模拟（`BattleSimulation` / `SPScoreboardVM` 那条链），不涉及 `Campaign.Current`、不涉及存档、不涉及事件。**别按命名空间归属去猜它的用途。**
- **这个类型在 1.4.6 起已被删除**（见下）。**这是本批 14 个类型里唯一一个跨版本消失的**，也是最需要警惕的一个。

## 跨版本提示

**`BattleSimulationResult` 在 `bannerlord-1.4.6` / `1.4.7` / `1.5.3` 三棵树里完全不存在。** 逐项核查结果：

| 树 | `BattleSimulationResult.cs` | `BattleSimulationResultArgs` | `SPScoreboardVM` | `BattleSimulation` | `BattleSimulationMapView` |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 存在（32 行，3 属性 + 1 ctor） | 存在（14 行，1 字段） | 存在 | 存在 | 存在（空壳） |
| 1.3.15 | 不适用（树内无 `TaleWorlds.CampaignSystem` 可比对的构建产物） | 同左 | 同左 | 同左 | 同左 |
| 1.4.5 | 不适用（树内只有裁剪过的 `Bannerlord.Source`） | 同左 | 同左 | 同左 | 同左 |
| 1.4.6 | **不存在** | **不存在** | 存在（`GauntletMapBattleSimulationView.cs:18` 仍在用） | 存在（`BattleSimulation.cs:15`） | 存在（`BattleSimulationMapView.cs:6`，仍是空壳） |
| 1.4.7 | **不存在** | **不存在** | 存在 | 存在 | 存在 |
| 1.5.3 | **不存在** | **不存在** | 存在（`GauntletMapBattleSimulationView.cs:18`） | 存在（`BattleSimulation.cs:15`） | 存在（`BattleSimulationMapView.cs:6`） |

**所以删掉的不是「战斗模拟」，而是「战斗模拟的逐部队结果 DTO」这条中间层。** `BattleSimulation` 本体、`SPScoreboardVM` 计分板、`BattleSimulationMapView` 空壳、`IMapStateHandler.OnBattleSimulationStarted` 全部保留，只有 `BattleSimulationResult` 与它的容器 `BattleSimulationResultArgs` 一起没了——**两个文件成对消失，说明是一次有意的接口收缩**（结果统计改成在 `BattleSimulation` / `SPScoreboardVM` 内部直接完成，不再往外抛逐部队三元组）。

**对 mod 的结论，按版本分两条路：**

- **目标 1.3.0 / 1.3.x**：这个类型存在但**托管层零消费**，你能造它、能把它塞进 `BattleSimulationResultArgs.RoundResults`，但**没有任何引擎代码会读那个列表**。要真的拿到逐部队模拟结果，托管层没有入口。
- **目标 1.4.6+**：这个类型**不存在**，任何引用它的代码**编译不过**（不是运行时报错）。1.5.3 上还能用的战斗模拟入口是 `BattleSimulation`（构造函数吃两个 `FlattenedTroopRoster`，实现 `IBattleObserver`）与 `SPScoreboardVM`。

**跨版本安全的做法：不引用 `BattleSimulationResult`。** 它在 1.3.x 上没用、在 1.4.6+ 上不存在，两头都没有收益。1.3.15 与 1.4.5 两棵树是裁剪过的部分源码（前者只有引擎侧程序集，后者只有 `Bannerlord.Source`），无法作为中间版本对照。

## 依赖关系

- 唯一容器：[BattleSimulationResultArgs](../BattleSimulationResultArgs)（同目录，14 行，`public List<BattleSimulationResult> RoundResults` 字段），1.3.0 里零消费、1.4.6 起被删除
- 三个数据类型：[UniqueTroopDescriptor](../../core-extra/UniqueTroopDescriptor)（部队 descriptor，刻意不引用 `Troop` 以脱离 `MBObjectManager`）、[BattleSideEnum](../../core-extra/BattleSideEnum)（阵营）、[TroopProperty](../TroopProperty)（本轮结束时的部队状态）
- 上层领域对象：`TaleWorlds.CampaignSystem/BattleSimulation.cs:15` 的 `BattleSimulation : IBattleObserver`——战斗模拟本体，1.4.6 起仍在，是替代入口
- UI 侧：[SPScoreboardVM](../SPScoreboardVM)（`SandBox.ViewModelCollection`，构造函数吃一个 `BattleSimulation`）+ [BattleSimulationMapView](../BattleSimulationMapView)（空壳视图）构成的那条链，**全程不经过本类型**
- 触发方：`SandBox.View/Map/MapScreen.cs:1857` 的 `IMapStateHandler.OnBattleSimulationStarted(BattleSimulation)` 与 `:1867` 的 `protected virtual SPScoreboardVM CreateSimulationScoreboardDatasource(BattleSimulation)`
- 桶首页：[campaign-ext API 分区](../)
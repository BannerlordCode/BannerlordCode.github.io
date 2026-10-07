---
title: "TacticOption"
description: "TeamAI 战术选项的包装类（id + 惰性 TacticComponent + 权重）：它在 1.4.5 里【一次都没有被 new 过】—— 名字与 Team.AddTacticOption 撞车，让 grep 极难分辨。"
---

# TacticOption

**Namespace:** `TaleWorlds.MountAndBlade`（嵌套在 `public abstract class TeamAIComponent` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `protected class TacticOption`（嵌套于 `public abstract class TeamAIComponent`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs`

## 概述

`TacticOption` 是 15 行、4 个成员的**战术选项包装类**，声明在 `TeamAIComponent.cs:14-28`。它把三样东西捆在一起：一个字符串 `Id`（`:16`）、一个 `Lazy<TacticComponent>`（`:18`）、一个可写的 `Weight`（`:20`），由构造器（`:22-27`）一次性装好。

**但它在 v1.4.5 源码树里一次都没有被实例化。** 我实测：`grep -rn "new TacticOption(" --include=*.cs bannerlord-1.4.5` → **0 命中**。

## 心智模型

把它当成**「一个当前无人使用的数据包装」**。三条推论：

第一,**名字与 `Team.AddTacticOption` 撞车，这是它最反直觉的地方。** `Team.cs:415` 有 `public void AddTacticOption(TacticComponent tacticOption)` —— **它收的是 `TacticComponent`，不是本类。** 而 `MissionCombatantsLogic.cs` 里 20 多处 `team.AddTacticOption(new TacticCharge(team))` 全都是这个方法。**所以「grep `TacticOption`」会命中几十行，实际上没有一行在用这个类。** 排查时必须用 `new TacticOption(` 才能定位到真正的用法——而结果是零。

第二,**它没有 `sealed`，也没有继承任何东西。** `:14` 的 `protected class TacticOption` 是裸类声明。**而宿主 `TeamAIComponent` 是 `public abstract`，所以 mod 可以派生它并在自己的派生类里 `new TacticOption(...)`** —— 但 `Id` 与 `Tactic` 是 `{ get; private set; }`（`:16`/`:18`），只有 `Weight` 是公开可写（`:20`）。

第三,`Weight` 是三个字段里**唯一可写**的。**所以「权重可调、id 与 tactic 不可换」** —— 一个 `TacticOption` 实例的 tactic 一旦构造就固定，只能改它在 AI 打分里的权重。

边界：**`protected` 嵌套类**，编译期只有 `TeamAIComponent` 的派生类可见。而 `Team`（`Team.cs:415`）对外暴露的是 `AddTacticOption(TacticComponent)`，**走的是另一条路，不经过本类**。

## 如何使用

**怎么拿到它**：**当前没有任何生产路径。** 它的构造器 `TacticOption(string, Lazy<TacticComponent>, float)`（`:22`）需要三个参数，而全树没有调用点。所以唯一的路是**自己 new**：

```csharp
using TaleWorlds.MountAndBlade;

// 派生 TeamAIComponent（它是 public abstract）才能碰到 protected 的 TacticOption
public class MyTeamAI : TeamAIComponent
{
    public void RegisterMyTactics()
    {
        // 三参数：id / 惰性 tactic / 权重（TeamAIComponent.cs:22-27）
        var option = new TacticOption("my_option_id", new Lazy<TacticComponent>(() => new TacticCharge(Team)), 1.0f);
        option.Weight = 2.5f;          // :20 是三个属性里唯一可写的
        Debug.Print("id=" + option.Id + " weight=" + option.Weight, 0);
        // 注意：这只是造了个对象，Team 并不认识它 ——
        // Team.AddTacticOption 收的是 TacticComponent（Team.cs:415），不是 TacticOption
    }
}
```

**用它最容易踩的一条**：**你 `grep TacticOption` 会看到 `AddTacticOption` / `RemoveTacticOption` / `ClearTacticOptions` 三堆方法，从而误以为「战术选项系统是围绕这个类建的」。** 实测这三堆的真实签名都在 `Team` 上、且**都不接受 `TacticOption`**：`Team.cs:415` `AddTacticOption(TacticComponent)`、`:423` `RemoveTacticOption(Type)`、`:431` `ClearTacticOptions()`。**而 [Target](../Target/) 那类枚举的四个消费点全都绕枚举名比整数——那是另一种「外观与实际用法不一致」，本类则是「连用法都没有」。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public string Id { get; private set; }` | 战术选项的标识（`:16`），由 `:24` 的构造器赋值。**`private set` ⇒ 构造后不可改。** **本类无消费点**，所以我不断言它在 AI 里被用来做什么查找键。 |
| `Tactic` | `public Lazy<TacticComponent> Tactic { get; private set; }` | **惰性的战术组件（`:18`）**，`Lazy<>` 意味着 `TacticComponent` **在被首次访问前不会构造**（`:25` 直接存引用，不 `.Value`）。这是 AI 战术系统的典型做法：**注册几十个战术但只构造被选中那个。** `private set`。 |
| `Weight` | `public float Weight { get; set; }` | **唯一可写的属性（`:20`）**，由 `:26` 初始化。语义上应是「该战术在 AI 选择时被抽中的权重」，**但本类内没有任何计算用到它** —— 真正的加权逻辑若存在也不在本文件里。 |
| `TacticOption(string, Lazy<TacticComponent>, float)` | `public TacticOption(string id, Lazy<TacticComponent> tactic, float weight)` | 唯一构造器（`:22-27`）：`:24`/`:25`/`:26` 三行依次赋值。**`id` 与 `tactic` 无 null 检查；`weight` 无范围校验。** **全树零调用点**（`grep "new TacticOption("` = 0 命中）。 |

## 真实示例

「名字撞车」的具体形态（这是本类最值得记的一条）：

```csharp
// grep -rn "TacticOption" 在 1.4.5 源码树 → 31 处命中，但：
//   Team.cs:415  public void AddTacticOption(TacticComponent tacticOption)   ← 收 TacticComponent
//   Team.cs:423  public void RemoveTacticOption(Type tacticType)              ← 收 Type
//   Team.cs:431  public void ClearTacticOptions()                            ← 无参
//   MissionCombatantsLogic.cs:141/153/156/159/160/164/169/172/173/177/189/193…
//                   team.AddTacticOption(new TacticCharge(team)) 等 20+ 处       ← 全是 TacticComponent 子类
// 而 new TacticOption( 的命中数 = 0
Debug.Print("31 处 grep 命中里，0 处是这个类", 0);
```

`Lazy<TacticComponent>` 的意义（对比三种写法）：

```csharp
using System;

// TeamAIComponent.cs:18  public Lazy<TacticComponent> Tactic { get; private set; }
// 三种写法的构造代价：
//   new TacticComponent(team)              -> 构造器就执行（即使这个战术永远不会被选中）
//   new Lazy<TacticComponent>(() => new TacticComponent(team))  -> 存一个闭包，首次访问 .Value 才执行
//   new Lazy<TacticComponent>(() => …)     <- 本类 :25 用的就是这种，只存引用不解引用
Debug.Print("Lazy 让「注册」与「构造」分离", 0);
```

## 风险与边界

- **`protected` 嵌套类，编译期只有派生类可见。** `:14`。宿主 `TeamAIComponent` 是 `public abstract`，所以派生可行。
- **全树零实例化。** `grep "new TacticOption("` = **0 命中**。**这是一个「声明了但从未被构造」的类型** —— 我确认了 1.4.5 源码树里没有任何实例化点，**但不断言它是否会在别的版本启用、或是重构后的残留**。
- **名字与三个 `Team` 方法撞车。** `Team.cs:415`/`:423`/`:431` 都不接受本类。见「如何使用」。
- **`Id` 与 `Tactic` 不可写，只有 `Weight` 可写。** `:16`/`:18` vs `:20`。
- **构造器无 null 检查、无 weight 范围校验。** `:24`/`:25`/`:26`。
- **`Lazy` 永不失效。** `:25` 存的是 `Lazy<>` 引用，**没有 `.Value` 也没有缓存清除** —— 一旦某个 `TacticComponent` 被构造，它就随 `TacticOption` 一起被引用，无法回收（除非 `TacticOption` 本身被丢弃）。
- **AI 的真实选择逻辑不在这个文件里。** 我确认了 `TeamAIComponent.cs` 里 `_currentTactic`（`:48`）与两个 `Timer`（`:44`/`:46`）存在，**但我没有读到任何从 `TacticOption.Weight` 读值的地方**，所以不断言它是否真的参与打分。

## 依赖关系

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TeamAIComponent.cs:12`（`public abstract class TeamAIComponent`）、`:14-28`（本类）、`:30`（`TacticalDecisionDelegate`）、`:32`（`OnNotifyTacticalDecision`）、`:34`（`BattleTokenForceSize = 10`）、`:48`（`_currentTactic`）
- 载荷：`TacticComponent`（`Lazy<>` 的目标类型）、[Mission](../Mission/)、[Team](../Team/)（`Mission`、`Team` 是宿主的 `protected readonly` 字段，`:40`/`:42`）
- 撞名的三个方法：[Team](../Team/) 的 `AddTacticOption(TacticComponent)`（`Team.cs:415`）、`RemoveTacticOption(Type)`（`:423`）、`ClearTacticOptions()`（`:431`），以及 `TeamAIComponent.cs:139` 的同名 `ClearTacticOptions()`
- 注册侧的真实用法：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionCombatantsLogic.cs:141` 起共 20 余处 `team.AddTacticOption(new TacticCharge(team))` 等
- 同桶：[AgentHelper](../AgentHelper/)、[Target](../Target/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[PlayerTypes](../PlayerTypes/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)、[MBNetworkPeer](../MBNetworkPeer/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)、[DropExtraWeaponOnStopUsageComponent](../DropExtraWeaponOnStopUsageComponent/)、[DefineGameNetworkMessageType](../DefineGameNetworkMessageType/)、[DefineSynchedMissionObjectType](../DefineSynchedMissionObjectType/)
- 桶首页：[mission API 分区](../)
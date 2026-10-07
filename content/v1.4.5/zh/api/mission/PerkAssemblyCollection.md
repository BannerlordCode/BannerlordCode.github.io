---
title: "PerkAssemblyCollection"
description: "扫描已加载程序集、找出所有「引用了 TaleWorlds.MountAndBlade 的 perk 程序集」并收集其全部类型的静态工具：两处 catch{} 静默吞异常，所以「没扫到」与「扫的时候崩了」不可区分。"
---

# PerkAssemblyCollection

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal static class PerkAssemblyCollection`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Gameplay.Perks/PerkAssemblyCollection.cs`

## 概述

`PerkAssemblyCollection` 是 60 行、2 个方法的**程序集扫描器**。`GetPerkAssemblyTypes()`（`:10-41`）遍历 `AppDomain.CurrentDomain.GetAssemblies()`（`:13`），挑出「与 `MPPerkObject` 所在程序集有依赖关系」的那些（经由 `CheckAssemblyForPerks`），再把它们的所有类型收进一个 `List<Type>` 返回。

它的调用方是 perk 类型的反序列化器——`MPPerkEffect.cs:18`、`MPPerkCondition.cs:41`、`MPOnSpawnPerkEffect.cs:18`、`MPRandomOnSpawnPerkEffect.cs:18` 四处都用 `from t in PerkAssemblyCollection.GetPerkAssemblyTypes()` 做 LINQ 查询，**用来按名字找 perk 类型**。

## 心智模型

把它当成**「靠反射拼出来的类型字典」**。三条推论：

第一,**「有没有引用核心程序集」是唯一的筛选条件。** `CheckAssemblyForPerks`（`:43-59`）的判定只有两条：程序集对象本身 `==` `Assembly.GetAssembly(typeof(MPPerkObject))`（`:46`），或它的 `GetReferencedAssemblies()` 里有一项的 `FullName` 与核心程序集相同（`:50-57`）。**换句话说：只要引用了 `TaleWorlds.MountAndBlade`，它的【全部类型】都会被收进来** —— 不筛「是不是 perk 类」。

第二,**它收的是全部类型，不是全部 perk。** `:33-34` 是 `item.GetTypesSafe()` 后 `list.AddRange(typesSafe)`，**没有任何谓词过滤**。所以返回值里混着常量、枚举、内部类等一切。**筛选必须在调用方做** —— 而那四个调用点确实各自带了 LINQ 条件。

第三,**两处 `catch {}` 是空的。** `:25-27` 与 `:36-38`。所以「程序集加载失败」与「类型枚举抛异常」都被静默吞掉。**结果就是：一个有问题的 mod 程序集会让它的 perk「不存在」，而不是报错。**

## 如何使用

**怎么拿到它**：只调 `GetPerkAssemblyTypes()`。它无参、无状态、每次调用都重新扫一遍 `AppDomain`（`:13`）—— **所以它不是缓存的。**

调用侧的形状（照抄 `MPPerkEffect.cs:18`）：

```csharp
using System;
using System.Linq;
using TaleWorlds.MountAndBlade.Network.Gameplay.Perks;

// PerkAssemblyCollection 是 internal —— 下面用反射复现它的公开行为形状
Type[] all = AppDomain.CurrentDomain.GetAssemblies().SelectMany(a => { try { return a.GetTypes(); } catch { return new Type[0]; } }).ToArray();
Type core = Assembly.GetAssembly(typeof(Mission));   // 真实实现里是 typeof(MPPerkObject)
var candidates = all.Where(t => t.Namespace != null && t.Namespace.StartsWith("TaleWorlds.MountAndBlade.Network.Gameplay.Perks"));
Debug.Print("扫描到类型总数 = " + all.Length + "  perk 命名空间下 = " + candidates.Count(), 0);
```

**用它最容易踩的一条**：**任何一个 mod 程序集的 `GetTypes()` 抛异常（典型原因：缺少它依赖的某个 dll），它的全部 perk 就静默消失，而日志里什么都没有。** `:36-38` 的空 `catch` 把这个信号吞掉了。**排查「我的 perk 不生效」时，第一步应该是确认 `GetPerkAssemblyTypes()` 的返回值里有没有你的类型** —— 而不能假设失败时会有异常或日志。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetPerkAssemblyTypes` | `public static List<Type> GetPerkAssemblyTypes()` | **唯一的公开入口（`:10-41`），且 `public`。** 四步：`:12` 建结果列表 → `:13` 取当前域所有程序集 → `:16-28` 逐个过 `CheckAssemblyForPerks` 并把通过的收进中间列表（`list2`）→ `:29-39` 再对每个通过的程序集调 `GetTypesSafe()` 并 `AddRange`。**两处 `catch {}`（`:25-27`、`:36-38`）都是空的。返回的是新列表，每次调用都重新扫。** |
| `CheckAssemblyForPerks` | `private static bool CheckAssemblyForPerks(Assembly assembly)` | **筛选逻辑（`:43-59`）。** `:45` 取 `Assembly.GetAssembly(typeof(MPPerkObject))`，`:46-49` 本体相同直接 true，`:50-57` 否则遍历 `GetReferencedAssemblies()` 比 `FullName`，命中即 true，`:58` 兜底 false。**唯一判据是「引用了核心程序集」—— 不看里面有没有 perk 类型。** |

## 真实示例

四步流水线与每步的失败形态：

```csharp
// :13  AppDomain.CurrentDomain.GetAssemblies()                    —— 无 try，理论上可抛
// :20  CheckAssemblyForPerks(assembly)
//      :45-49  本体 == typeof(MPPerkObject) 的程序集
//      :50-57  否则比 GetReferencedAssemblies() 的 FullName
//      :58     都不匹配 -> false
//      ★ 外层 :25-27 catch {} —— GetReferencedAssemblies() 抛异常时整个程序集被跳过，无日志
// :33  item.GetTypesSafe()                                         —— TaleWorlds.Library 的扩展方法
//      ★ 外层 :36-38 catch {} —— 类型枚举失败时该程序集的所有类型都没了，无日志
Debug.Print("两处空 catch：失败的表现是「类型消失」而不是报错", 0);
```

调用方的四种 LINQ 形状（筛选不在本类里）：

```csharp
// MPPerkEffect.cs:18            foreach (Type item in from t in PerkAssemblyCollection.GetPerkAssemblyTypes() …)
// MPPerkCondition.cs:41         同上
// MPOnSpawnPerkEffect.cs:18     同上
// MPRandomOnSpawnPerkEffect.cs:18 同上
// 四处都自带 where 条件 —— 因为 GetPerkAssemblyTypes 返回的是【全部类型】
// 对照本类的 :34 是 list.AddRange(typesSafe)，没有任何过滤
Debug.Print("本类不过滤，四个调用点各自过滤", 0);
```

## 风险与边界

- **`internal` 静态类，编译期不可引用。** 但 `GetPerkAssemblyTypes` 是 `public` 方法 —— **只是没有可达的入口。**
- **两处空 `catch {}`。** `:25-27` 与 `:36-38`。**失败表现为「perk 静默消失」，无异常、无日志。** 这是本类最危险的一条。
- **不筛 perk 类型。** `:34` 的 `AddRange` 是全量。**一个引用了核心程序集但与 perk 无关的 mod，它的全部类型都会进入结果列表。**
- **每次调用都重新扫 `AppDomain`。** `:13`。**没有缓存，而四个反序列化器各自会调它。**
- **筛选只看「引用了核心程序集」。** `:46`/`:53`。**用 `type forwarding` 或运行时动态生成程序集的情况我无法确认**，故不断言筛选是否完备。
- **`MPPerkObject` 是筛选基准。** `:45`。**mod 若要引入自己的 perk 类型，它所在的程序集必须引用 `TaleWorlds.MountAndBlade` 才会被扫到。**
- **依赖 `TaleWorlds.Library` 的 `GetTypesSafe` 扩展方法**（`bin/TaleWorlds.Library/TaleWorlds.Library/Extensions.cs:9`）。**我确认了它自身也带 try**（`:13-15`）—— 所以 `:36-38` 的外层 catch 是**第二层**保护。
- **`GetPerkAssemblyTypes` 返回 `List<Type>` 而非只读视图**，调用方可以改它 —— 但每次调用返回的都是新实例，**所以改动不会被别人看到**。

## 参见

- 四个调用点：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` 下的 `MPPerkEffect.cs:18`、`MPPerkCondition.cs:41`、`MPOnSpawnPerkEffect.cs:18`、`MPRandomOnSpawnPerkEffect.cs:18`
- 筛选基准：`MPPerkObject`；依赖的扩展方法 `Assembly.GetTypesSafe`（`bin/TaleWorlds.Library/TaleWorlds.Library/Extensions.cs:9`，其内部 `:13-15` 也带 try）
- 同族的 perk 效果类型：[HitType](../HitType/)（`MPCombatPerkEffect` 的 `hit_type` 枚举，反序列化用 `Enum.TryParse`）、[Target](../Target/)（`MPOnSpawnPerkEffectBase` 的 `target` 枚举，**本类的调用点之一 `MPOnSpawnPerkEffect.cs:18` 正是反序列化 `Target` 的那个文件**）
- 同桶：[AgentHelper](../AgentHelper/)、[ItemType](../ItemType/)、[PlayerTypes](../PlayerTypes/)、[MBNetworkPeer](../MBNetworkPeer/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[ProximityMapSearchStructInternal](../ProximityMapSearchStructInternal/)、[TacticOption](../TacticOption/)
- 桶首页：[mission API 分区](../)
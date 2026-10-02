---
title: "achievementsystem 桶 — 统计与成就 TaleWorlds.AchievementSystem（尚未手写）"
description: "achievementsystem 桶只对应 TaleWorlds.AchievementSystem，5 个 .cs 文件、4 个顶层类型，是全站最小的桶。本文核实了 AchievementManager 的真实签名，并纠正模块地图里把 SetStat 说成异步的错误。"
---
# achievementsystem：统计与成就（`TaleWorlds.AchievementSystem`）

> **本桶当前没有任何已撰写页面。** 本桶是全站最小的桶：**4 个顶层类型**。它和 [activitysystem](../activitysystem) 是同一个设计模式的两半——门面 + 服务接口 + 测试替身。

## 这个桶对应源码里的什么

`bannerlord-1.4.6/TaleWorlds.AchievementSystem/`：**5 个 `.cs` 文件、4 个顶层类型**（实测，含 `Properties/AssemblyInfo.cs`）。权威映射只有一条直落规则 `TaleWorlds.AchievementSystem` → `achievementsystem`，没有子命名空间。

命名空间名叫 AchievementSystem，但它管的**不只是成就**——它实际是一套**按名字存取的整数统计值注册表**。成就系统是它最著名的用途，但接口本身跟「成就是否解锁」没有任何关系。这个区别在写页面时必须讲清楚，否则读者会以为 `SetStat` 是「解锁成就」，然后发现它只是 `bool`。

## mod 什么时候会碰到它

诚实的结论：**用得比想象中多的窄接口，但只有一种用法值得文档化：写一个 stat。**

1. **自定义统计项** —— 「本模组累计击败多少敌人」「玩家建造了多少座城」。你 `SetStat` 一个名字，别的系统（成就、UI、条件判定）可以 `GetStat` 读它。这是本桶的主要用途
2. **读官方统计项** —— 官方把击杀数、战役天数之类也放在这里，你可以拿来当条件判定
3. **接成就系统** —— 如果你的 mod 自带成就 UI，那么成就的解锁判定通常要读这里的统计值。**注意**：`IAchievementService` 本身很小，1.4.6 里并没有「成就列表」「解锁进度」这一类模型，那些在官方玩法层的实现里

**用不到它的典型 mod**：物品定义、界面、战斗逻辑、战役行为。统计不是它们的前置条件。

**心智模型**：一个**全局的、按字符串 key 存 int 的表**，外加一层服务接口便于替换实现。判断「这个值能不能用」的正确顺序：先确认 key 存在（`GetStats` 一次读多个，别一个一个 `GetStat`），再决定是 `SetStat` 写还是读。

## 真实签名：只有读是异步的

这一点必须核准，因为**旧文档说错了**。[模块地图](../../architecture/module-map) 写的是「`AchievementManager.SetStat` / `GetStat` 是异步的（返回 `Task<int>`）」。核实 `bannerlord-1.4.6/TaleWorlds.AchievementSystem/AchievementManager.cs` 的实际声明：

```
public static IAchievementService AchievementService { get; set; } = new TestAchievementService();
public static bool SetStat(string name, int value)
public static async Task<int> GetStat(string name)
public static async Task<int[]> GetStats(string[] names)
```

所以准确的说法是：**`SetStat` 返回 `bool`，是同步的；只有 `GetStat` / `GetStats` 返回 `Task<...>`，是异步的。** 原因是写入走当前进程内的服务，读取可能要从持久化存储里读。写页面时按这个来，不要照抄「都是异步」。

## 和 activitysystem 同一个模式

`AchievementService` 的属性初始值是 `new TestAchievementService()`——**默认实现是测试替身**，和 [activitysystem](../activitysystem) 里 `ActivityService` 的默认值一模一样。含义相同：

- 你的 mod 应该**通过 `AchievementManager` 调用**，不要自己 `new` 一个 `IAchievementService`
- 在真实实现被注入之前，写进去的 stat 不会持久化。「我 SetStat 成功但重进游戏就没了」通常是这个原因，不是你的键名写错

**两个桶值得一起读**，因为它们共享同一个设计模式，也共享同一类陷阱。

## 待写清单（4 个，本桶可以全列）

每个名字都在 `bannerlord-1.4.6/TaleWorlds.AchievementSystem/` 核实过。这是全站最小的桶，清单即全部，没有节选。

- `AchievementManager` — 静态门面，**本桶唯一该先写的类型**。已核实的四个成员见上面「真实签名」一节
- `IAchievementService` — 真正干活的接口，被 `AchievementManager.AchievementService` 持有。**写页时要讲清它是给谁实现的**（游戏本体的启动流程注入真实实现），而不是给 mod 实现的扩展点
- `Achievement` — 一个统计项 / 成就项的数据对象。注意：它是**值对象**，1.4.6 里这个命名空间并没有「成就列表」「解锁进度树」那样的模型
- `TestAchievementService` — `IAchievementService` 的测试替身，就是 `AchievementService` 的默认值。**这一条要写进文档**，否则读者会以为自己代码写错了

**没有页面**。4 个类型全部列出是刻意的：本桶小到「节选」没有意义。真正要写的是上面那两条——真实签名（同步写、异步读）和默认实现是测试替身。

## 为什么现在还没有页面

1.4.6 的手写覆盖按 **mod 实际使用频率** 排序。本桶排在最后，理由很直接：**4 个类型，且只有 `SetStat` / `GetStat` 两个调用需要被理解**，剩下的都是内部支撑。

但它排在最后不代表不值得写——恰恰相反，本桶是**整桶写完成本最低、收益最直接**的一个。写它需要的不是遍历，而是把上面这两条核实过的事实讲清楚。如果要排优先级，它应该是 10 个空桶里最先被写完的之一。

**这一页不是占位符**——归属、4 个类型全清单、已核实的真实签名、对旧文档的纠错，都是从源码来的。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) · [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)

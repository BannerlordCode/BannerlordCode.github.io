---
title: "achievementsystem 桶 — 统计与成就 TaleWorlds.AchievementSystem（0 张类页）"
description: "achievementsystem 桶只对应 TaleWorlds.AchievementSystem 一个命名空间。实测 5 个 .cs 文件、4 个命名空间级类型声明——这是全站最小的桶，4 个类型可以全列。本页给出职责、可复跑的查法、以及 SetStat 同步 / GetStat 异步这条必须核准的签名事实。"
---
# achievementsystem：统计与成就（`TaleWorlds.AchievementSystem`）

> **覆盖状态：本桶 0 张类页。**
> 本页不是「待补的索引」，是一份诚实的导览：告诉你这个桶在源码里是什么、什么时候用得上、以及怎么自己去查。页面上出现的类型名全部是纯文本，**没有任何一个指向尚未撰写的类页**。

## 这个桶在源码里对应什么

归属规则只有一条直落前缀 `TaleWorlds.AchievementSystem` → `achievementsystem`，没有更长的规则来抢它，也没有子命名空间。源码目录 `bannerlord-1.4.6/TaleWorlds.AchievementSystem/`。

命名空间叫 AchievementSystem，但它管的**不只是成就**——它实际是一套**按字符串 key 存取的整数统计值注册表**。成就是它最著名的用途，可接口本身跟「成就是否解锁」没有关系。这条区别必须先讲清楚，否则读者会以为 `SetStat` 是「解锁成就」，然后发现它只是 `bool`。

**实测规模**（两条命令的原始口径见下一节）：

| 口径 | 数值 |
| --- | --- |
| `.cs` 文件数（含 `Properties/AssemblyInfo.cs`） | 5 |
| 命名空间级类型声明数 | 4 |
| 声明该命名空间的 `.cs` 文件数 | 4 |
| 子命名空间数 | 0 |

4 个类型就是全部，**不是节选**。这个桶小到「全列」和「节选」是同一件事。

## 读源码：可复跑的查法

在工作区根目录（`bannerlord-1.4.6/` 的上一层）执行：

```bash
# 目录里有多少 .cs 文件
find bannerlord-1.4.6/TaleWorlds.AchievementSystem -name '*.cs' | wc -l

# 有哪些文件声明了这个命名空间（4 个，AssemblyInfo 不在其中）
grep -rl '^namespace TaleWorlds.AchievementSystem' bannerlord-1.4.6/TaleWorlds.AchievementSystem --include='*.cs'

# 列出这 4 个类型的声明行（缩进恰好一个制表符 = 命名空间层级，不含嵌套类型）
awk '/^\t(public |internal |abstract |sealed |static |partial |unsafe |readonly |new )*(class|struct|interface|enum|record|delegate)[ \t]+[A-Za-z_]/' \
  $(find bannerlord-1.4.6/TaleWorlds.AchievementSystem -name '*.cs')

# 确认某个成员的真实签名（不要照抄旧文档）
grep -n 'SetStat\|GetStat' bannerlord-1.4.6/TaleWorlds.AchievementSystem/AchievementManager.cs
```

**口径定义**（页面上所有数字都按这个来）：`.cs 文件数` = `find <目录> -name '*.cs' | wc -l`；`命名空间级类型声明数` = 该目录内缩进恰好一个制表符的 `class` / `struct` / `interface` / `enum` / `record` / `delegate` 声明行数，**不含嵌套类型**。

## 什么时候会碰到它

**用得比想象中多的窄接口，但只有一种用法值得文档化：写一个 stat。**

1. **自定义统计项** —— 「本模组累计击败多少敌人」「玩家建造了多少座城」。你 `SetStat` 一个名字，别的系统（成就、UI、条件判定）可以 `GetStat` 读它。这是本桶的主要用途。
2. **读官方统计项** —— 官方把击杀数、战役天数之类也放在这里，你可以拿来当条件判定。
3. **接成就系统** —— 如果你的 mod 自带成就 UI，解锁判定通常要读这里的统计值。注意 `IAchievementService` 本身很小，1.4.6 里并没有「成就列表」「解锁进度」这一类模型，那些在官方玩法层的实现里（`Achievement` 这个类型也只是值对象：`Id` / 锁定与解锁的显示名与描述 / `TargetProgress` / `CurrentProgress` / `IsUnlocked` 几个属性）。

**用不到它的典型 mod**：物品定义、界面、战斗逻辑、战役行为。

**心智模型**：一个**全局的、按字符串 key 存 int 的表**，外加一层服务接口便于替换实现。判断「这个值能不能用」的正确顺序：先 `GetStats` 一次读多个确认 key 存在，再决定写还是读。

## 必须核准的签名：只有读是异步的

`bannerlord-1.4.6/TaleWorlds.AchievementSystem/AchievementManager.cs` 的实际声明（逐行核对过）：

```csharp
public static IAchievementService AchievementService { get; set; } = new TestAchievementService();
public static bool SetStat(string name, int value)
public static async Task<int> GetStat(string name)
public static async Task<int[]> GetStats(string[] names)
```

准确的说法是：**`SetStat` 返回 `bool`，是同步的；只有 `GetStat` / `GetStats` 返回 `Task<...>`，是异步的。** 原因是写入走当前进程内的服务，读取可能要从持久化存储里读。接口侧 `IAchievementService` 另有 `IsInitializationCompleted()`。

模块地图里把这两个一起说成异步是错的，按上面的签名来。

## 和 activitysystem 是同一个模式

`AchievementService` 的属性初始值是 `new TestAchievementService()`——**默认实现是测试替身**。这和 [activitysystem](../activitysystem) 里 `ActivityService` 的默认值一模一样，含义也相同：

- 你的 mod 应该**通过 `AchievementManager` 调用**，不要自己 `new` 一个 `IAchievementService`。
- 在真实实现被注入之前，写进去的 stat 不会持久化。「我 SetStat 成功但重进游戏就没了」通常是这个原因，不是你的键名写错。

**两个桶值得一起读**，它们共享同一个设计模式，也共享同一类陷阱。

## 本桶的 4 个类型（全部核实，未撰写类页）

下面每个名字都用 `grep -rw` 在 `bannerlord-1.4.6/TaleWorlds.AchievementSystem/` 核实过。**它们全部没有类页**：

- `AchievementManager` — 静态门面，本桶唯一该先写的类型。四个成员见上面「必须核准的签名」一节。
- `IAchievementService` — 真正干活的接口，被 `AchievementManager.AchievementService` 持有。它的实现方是游戏本体的启动流程，**不是**给 mod 用的扩展点。
- `Achievement` — 单个统计项 / 成就项的值对象。注意它不含解锁进度树之类的模型。
- `TestAchievementService` — `IAchievementService` 的测试替身，也就是 `AchievementService` 的默认值。这条得写进文档，否则读者会以为自己代码写错了。

## 桶间分工

| 你想做的事 | 该去哪个桶 |
| --- | --- |
| 读写按名字存的整数统计值 | **本桶** |
| 定义「玩家此刻在做什么」的全局状态 | [activitysystem](../activitysystem) |
| 声明 mod 入口、挂战役行为 | [core](../core) · [campaign](../campaign) |
| 推屏 / 弹屏 / 输入限制 | [gui](../gui) |
| 官方沙盒玩法实现 | [sandbox](../sandbox) |

[activitysystem](../activitysystem) 是与本桶同构的另一半，两页互链。

## 导航

- ↑ [API 参考首页](../) — 已手写覆盖到哪里
- ↑↑ [1.4.6 中文首页](../../) · [版本首页](../../../)
- ↔ [模块地图](../../architecture/module-map) — 桶名 ↔ 命名空间的权威对照
- ↔ [SDK 分层概览](../../architecture/sdk-overview)
- ↔ English: [API](../../../en/api/)
- ↔ 跨版本：[1.4.5 API](../../../../v1.4.5/zh/api/) · [逐类对比](../../../../versions/)